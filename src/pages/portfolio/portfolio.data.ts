const img = (name: string) =>
  `${import.meta.env.BASE_URL}imgs/projects/${name}`;

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
    context: "PlanRadar - list views across the product",
    role: "Created the core: the React Context provider, the URL sync, and the routing params.",
    problem:
      "Tables across the product - tickets, documents, approvals, field reports - can hold thousands " +
      "of items, and those list views had no filtering at all. This was new capability, not a " +
      "refactor, and building it separately per table would have meant duplicated work and " +
      "behaviour that drifted between views.",
    solution:
      "One shared filter system any list view can adopt. I created the provider that shares the " +
      "filter panel's state without prop drilling, the URL sync that keeps active filter values in " +
      "the query string, and the routing params behind it - so a filtered view can be shared or " +
      "reloaded and keep its state. Panel visibility is persisted per view in localStorage, keyed " +
      "so each table remembers its own setting. It runs in two modes: on-the-fly filtering, and a " +
      "state-managed mode for heavier views.",
    decision:
      "React Context rather than Redux. The shared state was one panel toggle, so a global store " +
      "would have been overkill, and Zustand was not yet in the codebase when this was built.",
    result:
      "Now used across 7 list views. A new view adopts filtering by wrapping in the provider and " +
      "passing config props, with no new state code. Built with a colleague; the tech lead did " +
      "later refactors, especially around the localStorage sync.",
    stack: [
      "React",
      "TypeScript",
      "React Context",
      "URL state",
      "localStorage",
    ],
  },
  {
    id: "approvals-sync",
    title: "Approvals Cross-View Sync",
    context: "PlanRadar - approvals module",
    role:
      "Built from scratch with one colleague, the two of us assigned to it by the tech lead. " +
      "I created approvals-context.tsx and around 15 core files.",
    problem:
      "Approvals let a requester send a ticket or document for review and add reviewers who approve " +
      "or reject it. It was new to the product and replaced nothing. The same approval shows up in " +
      "views that do not share a provider tree - the approvals list and the item's own approval " +
      "panel - so acting in one view left the other showing stale data.",
    solution:
      "A context holds the shared state as the single source of truth, kept current by a browser " +
      "CustomEvent bus: when an approval changes anywhere, an event fires, the context refetches the " +
      "source of truth from the server, and every view reading that context updates together.",
    decision:
      "An event bus rather than context state alone, because the views do not all sit under one " +
      "provider tree - the bus decouples whoever changes an approval from whoever needs to know. " +
      "Paired with a race guard: a monotonic counter token, so if a user opens a second file before " +
      "the first request resolves, the stale response is dropped instead of overwriting newer data.",
    result:
      "A working foundation in four to five months, still expanding when I left. It runs inside " +
      "Tickets and Document Management, the two most used pages in the product, and has its own " +
      "section in the main navigation with five views: all approvals, DMS approvals, tickets " +
      "approvals, pending my approvals, and settings and workflows.",
    stack: [
      "React",
      "TypeScript",
      "React Context",
      "CustomEvent pub/sub",
      "Race-condition guard",
    ],
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
