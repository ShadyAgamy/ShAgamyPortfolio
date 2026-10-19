/* eslint-disable react/jsx-no-target-blank */
import "./resume.scss";
import { useReveal, fadeInClass } from "../../hooks/useReveal";

const skills = [
  {
    id: "languages",
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    id: "frameworks",
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Redux-Saga",
      "Zustand",
      "React Context",
      "Tailwind CSS",
    ],
  },
  {
    id: "testing",
    category: "Testing & Delivery",
    items: [
      "Vitest",
      "Playwright",
      "Git",
      "Vite",
      "GitLab CI",
      "ESLint",
      "Prettier",
      "Husky",
    ],
  },
  {
    id: "integration",
    category: "Integration & AI",
    items: [
      "REST APIs",
      "JSON:API",
      "WebSockets",
      "i18n / localization",
      "LLM API integration",
      "Claude",
    ],
  },
];

const workExperience = [
  {
    id: 0,
    role: "Arabic SME, AI Evaluation (Freelance)",
    company: "Lilt",
    period: "Sep 2026 - Oct 2026",
    companyLink: "https://lilt.com/",
    desc: [
      "Wrote Arabic rubric criteria for the WebGen Benchmark, used by an automated Claude judge to score AI-generated web apps.",
      "Tools: Python, Docker, GitHub PR workflow.",
    ],
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "PlanRadar",
    period: "Jul 2022 - Aug 2026",
    companyLink: "https://www.planradar.com/",
    desc: [
      "Built the approvals feature from scratch with one colleague. Tickets and documents used to go in with no review. Now they pass through an approval cycle, with the status shown in lists and item details. It runs inside Tickets and Document Management, the two most-used pages, and has its own navigation section with five views.",
      "Designed the cross-view sync that keeps approval state consistent across parts of the app that do not share a provider tree. A browser event bus triggers a refetch of the source of truth.",
      "Created the core of a shared filter system that brought filtering to 7 list views that had none, including Tickets and Documents. Many of these views had thousands of items, so users had to scroll or use basic search. Now they can filter by multiple criteria.",
      "Built the React Context provider, URL sync, and routing params, so a new view can adopt filtering by wrapping it in the provider, with no new state code required.",
      "Worked across a 21-bundle React and TypeScript codebase running three generations of state management during an active migration. Reviewed merge requests daily for the whole frontend team, including the tech lead’s.",
      "Built features in the Document Management System, a Google Drive-style file store. Created the file and folder uploader with upload progress indicators, and the version modal that lets users upload multiple versions of a file and compare them.",
      "Built the in-app support chatbot as a standalone Preact app, chosen for small bundle size and isolation from the main codebase. Shipped as a self-contained widget with an init API the main app calls to mount it. Real-time chat over WebSocket.",
    ],
  },
  {
    id: 2,
    role: "Web User Interface Developer",
    company: "ExpandCart",
    period: "Sep 2020 - Jan 2022",
    companyLink: "https://expandcart.com/en/",
    desc: [
      "Converted static HTML storefront themes into server-side Twig templates for Arabic and English stores.",
      "Maintained multiple storefront themes, fixing responsive, cross-browser and RTL layout issues.",
    ],
  },
  {
    id: 3,
    role: "UI Developer",
    company: "Road9 Media",
    period: "Jul 2019 - Aug 2020",
    companyLink: "https://road9media.com/",
    desc: [
      "Turned UX/UI designs into responsive, cross-browser websites for client projects.",
    ],
  },
];

const SkillGroup = ({
  category,
  items,
}: {
  category: string;
  items: string[];
}) => {
  const { ref, state } = useReveal<HTMLDivElement>("resume");
  return (
    <div
      ref={ref}
      className={`skill_group ${fadeInClass(state)}`}
    >
      <div className="skill_group_label">{category}</div>
      <div className="skill_group_items">
        {items.map((item) => (
          <span key={item} className="tag_chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const WorkExperienceItem = ({
  period,
  role,
  company,
  companyLink,
  desc,
}: {
  period: string;
  role: string;
  company: string;
  companyLink: string;
  desc: string[];
}) => {
  const { ref, state } = useReveal<HTMLDivElement>("resume");
  return (
    <div
      ref={ref}
      className={`work_ex ${fadeInClass(state)}`}
    >
      <div className="work_ex_period">{period}</div>
      <div className="work_ex_details">
        <h3>{role}</h3>
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
        <ul>
          {desc.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Resume() {
  const header = useReveal<HTMLElement>("resume");
  const skillsTitle = useReveal<HTMLHeadingElement>("resume");
  const workTitle = useReveal<HTMLHeadingElement>("resume");

  return (
    <div className="page resume_page">
      <header
        ref={header.ref}
        className={`page_header ${fadeInClass(header.state)}`}
      >
        <p className="eyebrow">Skills and experience</p>
        <h1>Resume</h1>
      </header>

      <section className="resume_section">
        <h2
          ref={skillsTitle.ref}
          className={`section_title ${fadeInClass(skillsTitle.state)}`}
        >
          Skills
        </h2>
        <div className="skills_grid">
          {skills.map(({ id, category, items }) => (
            <SkillGroup key={id} category={category} items={items} />
          ))}
        </div>
      </section>

      <section className="resume_section">
        <h2
          ref={workTitle.ref}
          className={`section_title ${fadeInClass(workTitle.state)}`}
        >
          Working Experience
        </h2>
        <div className="work_ex_list">
          {workExperience.map((job) => (
            <WorkExperienceItem key={job.id} {...job} />
          ))}
        </div>
      </section>
    </div>
  );
}
