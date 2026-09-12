import "./homepage.scss";
import { useReveal, fadeInClass } from "../../hooks/useReveal";

export default function HomePage() {
  const { ref, state } = useReveal<HTMLDivElement>("home");

  return (
    <div ref={ref} className={`homepage ${fadeInClass(state)}`}>
      <h1>
        Hi, I am <span className="co_main">Shady Agamy</span>
      </h1>
      <p>
        Frontend developer with 6+ years of experience in web development,
        four of them focused on React &#38; TypeScript. At PlanRadar, a B2B
        construction SaaS used across Europe, I built the approvals feature
        and the core of the shared filter system in a large-scale codebase.
        I'm comfortable owning a feature end to end, from API integration to
        edge cases and testing.
      </p>
      <p className="homepage_location">
        Cairo, Egypt &#8212; full overlap with CET / CEST business hours.
      </p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/shady-agamy-746a59147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ShadyAgamy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://codepen.io/shady-agmy"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
      </div>
    </div>
  );
}
