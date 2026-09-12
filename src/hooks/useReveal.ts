import { useEffect, useRef, useState } from "react";

export type RevealState = "hidden" | "animating" | "settled";

const SESSION_PREFIX = "agamy.portfolio.revealed:";

function hasPlayed(pageKey?: string): boolean {
  if (!pageKey) return false;
  try {
    return sessionStorage.getItem(SESSION_PREFIX + pageKey) === "1";
  } catch {
    return false;
  }
}

function markPlayed(pageKey?: string) {
  if (!pageKey) return;
  try {
    sessionStorage.setItem(SESSION_PREFIX + pageKey, "1");
  } catch {
    // Ignore - worst case the animation just replays next visit.
  }
}

/**
 * Tracks whether an element has scrolled into view, so entrance animations
 * fire as content is actually seen instead of all at once on mount.
 *
 * Animating opacity/transform promotes an element to its own compositor
 * layer for as long as the animation is "in effect" - with
 * animation-fill-mode:both (see .animate__animated) that's indefinitely,
 * unless the animation classes come back off once it finishes. So `state`
 * has a third value, "settled", reached via the animationend event: at
 * that point the caller should render with no reveal/animation classes at
 * all, dropping the element back to a normal, unpromoted layer. Every
 * animation here ends at its resting value (opacity:1, identity transform),
 * so stripping the classes at that point causes no visual jump.
 *
 * `pageKey`, if given, also skips the whole animation on a revisit within
 * the same tab session (sessionStorage-backed): once a page's reveal has
 * played, coming back to it just shows the content settled, no replay, no
 * observer, no layer ever created.
 */
export function useReveal<T extends HTMLElement>(pageKey?: string) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<RevealState>(() =>
    hasPlayed(pageKey) ? "settled" : "hidden",
  );

  useEffect(() => {
    if (state !== "hidden") return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setState("settled");
      markPlayed(pageKey);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("animating");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state !== "animating") return;
    const el = ref.current;
    if (!el) return;

    const settle = () => {
      setState("settled");
      markPlayed(pageKey);
    };
    el.addEventListener("animationend", settle);
    return () => el.removeEventListener("animationend", settle);
  }, [state, pageKey]);

  return { ref, state };
}

/** Builds the className for a useReveal()'d element. "hidden" waits
 *  (opacity:0); "animating" plays the given animate__* animation
 *  (optionally with a delay class, e.g. "animate__delay-1s"); "settled"
 *  drops every reveal/animation class so the element goes back to being a
 *  plain, unpromoted node - see useReveal's doc comment for why. */
export function revealClass(state: RevealState, animation: string, delay?: string) {
  if (state === "settled") return "";
  if (state === "hidden") return "reveal";
  return ["reveal", "animate__animated", animation, delay]
    .filter(Boolean)
    .join(" ");
}

/** The site-wide entrance animation: a plain fade-in, nothing else. Used
 *  for every useReveal()'d element across all pages. */
export function fadeInClass(state: RevealState, delay?: string) {
  return revealClass(state, "animate__fadeIn", delay);
}
