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
    id: 1,
    role: "Frontend Developer",
    company: "PlanRadar",
    period: "Jul 2022 - Aug 2026",
    companyLink: "https://www.planradar.com/",
    desc: [
      "Built the approvals feature from scratch with one colleague: approval cycles for tickets and documents. Created its shared state context and around 15 of its core files, running inside Tickets and Document Management, the two most used pages in the product, with its own section in the main navigation containing five views.",
      "Designed the cross-view sync that keeps approval state consistent across parts of the app that do not share a provider tree, using a browser event bus and a counter token to drop stale results.",
      "Created the core of a shared filter system that brought filtering to 7 list views that had none before, including tickets and documents - the React Context provider, the URL sync and the routing params - so a new view adopts filtering by wrapping in the provider with no new state code.",
      "Built features in the Document Management System, a Google Drive-style file store: the file and folder uploader with upload progress indicators, and the version modal that lets users upload multiple versions of a file and compare them.",
      "Built the in-app support chatbot as a standalone Preact app for small bundle size and isolation from the main codebase, bundled as a self-contained widget with real-time chat over WebSocket.",
    ],
  },
  {
    id: 2,
    role: "Web User Interface Developer",
    company: "ExpandCart",
    period: "Sep 2020 - Jan 2022",
    companyLink: "https://expandcart.com/en/",
    desc: [
      "Converted existing HTML templates into server-side templates using the Twig templating engine.",
      "Maintained and fixed UI issues across the e-commerce platform's storefront templates.",
    ],
  },
  {
    id: 3,
    role: "UI Developer",
    company: "Road9 Media",
    period: "Jul 2019 - Aug 2020",
    companyLink: "https://road9media.com/",
    desc: ["Turned UX/UI designs into responsive, cross-browser websites."],
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
