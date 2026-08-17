const img = (name) => `${import.meta.env.BASE_URL}imgs/projects/${name}`;

export const projects = [
  {
    id: "cover-letter-ai",
    name: "Cover Letter AI",
    url: "https://cover-letter-ai-nu.vercel.app",
    desc:
      "Generates a tailored cover letter from a job description and your background. " +
      "Supports PDF CV upload and voice input, with the model call handled server-side.",
    imgSrc: img("cover-letter-ai.png"),
    stack: ["React", "TypeScript", "Vercel serverless", "Groq LLM"],
  },
];

export const caseStudies = [
  {
    id: "shared-filters",
    title: "Shared Filter System",
    context: "PlanRadar - platform-wide",
    role: "One of the main authors. Created the state provider and the URL persistence.",
    problem:
      "Tables across the product - tickets, documents, approvals, field reports - can hold thousands " +
      "of items, so users need a fast way to narrow them down. Building filtering separately per table " +
      "meant duplicated work and behaviour that drifted between views.",
    solution:
      "One shared filter system any table can adopt. I created the provider that shares the filter " +
      "panel's state without prop drilling, and the hook that syncs active filter values to the URL, " +
      "so a filtered view can be shared or reloaded and keep its state. Panel visibility is persisted " +
      "per view in localStorage, keyed so each table remembers its own setting.",
    decision:
      "React Context rather than Redux or Zustand. Zustand was not in the codebase when I built this, " +
      "and Redux would have been overkill for what is essentially a show-hide toggle. The state is " +
      "small and scoped to one table view - you do not reach for a global store to remember whether " +
      "a filter bar is open.",
    result:
      "In active development for over a year and used across tickets, documents, approvals, field " +
      "reports and ticket types. A new table now adopts filtering in a few lines.",
    stack: ["React", "TypeScript", "React Context", "URL state", "localStorage"],
  },
  {
    id: "approvals-sync",
    title: "Approvals Cross-View Sync",
    context: "PlanRadar - approvals module",
    role:
      "Main author. Built the shared approvals context, plus the request details view, the reviewers " +
      "panel, the approve/reject and bulk actions, and the file and ticket viewers.",
    problem:
      "Approvals let a requester send a ticket or document for review and add reviewers who approve " +
      "or reject it. The same approval appears in two places at once - the approvals table and the " +
      "item's own approval panel - so acting in one view left the other showing stale data.",
    solution:
      "A context holds the shared state as the single source of truth, kept current by a browser " +
      "CustomEvent bus: when an approval changes anywhere, an event fires, the context refetches the " +
      "latest state from the server, and every view reading that context updates together.",
    decision:
      "An event bus rather than context state alone, because the views do not all sit under one " +
      "provider tree - the bus decouples whoever changes an approval from whoever needs to know. " +
      "Paired with a race guard: a monotonic counter token, so if a user opens a second file before " +
      "the first request resolves, the stale response is dropped instead of overwriting newer data.",
    result:
      "The table and the panel stay consistent regardless of where the action originates or how " +
      "requests interleave.",
    stack: ["React", "TypeScript", "CustomEvent pub/sub", "Race-condition guard"],
  },
];

export const agencyWork = [
  {
    id: "ekuity",
    name: "Ekuity Holding",
    url: "https://ekuity.com/en/",
    desc:
      "Corporate site. Built the front-end from scratch against the UX designs: responsive layouts, " +
      "cross-browser support, and a full bilingual EN/AR build including RTL.",
    meta: "Built at Road9 Media. Live since 2020.",
    imgSrc: img("Ekuity.png"),
    stack: ["HTML", "Sass", "JavaScript"],
  },
];
