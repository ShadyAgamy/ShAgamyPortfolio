/* eslint-disable react/jsx-no-target-blank */
import "./resume.scss";

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

export default function Resume() {
  const mappedSkills = skills.map(({ id, category, items }, index) => {
    return (
      <div
        key={id}
        className="skill_group animate__animated animate__fadeInUp"
        style={{ marginBottom: "1.6rem", animationDelay: `${index * 0.12}s` }}
      >
        <h4 className="co_main" style={{ marginBottom: "0.7rem" }}>
          {category}
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {items.map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid #C3083F",
                borderRadius: "20px",
                padding: "0.4rem 1rem",
                fontSize: "1rem",
                color: "#fff",
                backgroundColor: "rgba(195, 8, 63, 0.15)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  });

  const mappedWorkExperience = workExperience.map(
    ({ id, period, role, company, companyLink, desc }) => {
      return (
        <div key={id} className="work_ex">
          <div className="work_ex--period">{period}</div>
          <div className="work_ex--details">
            <h4 className="role co_main">{role}</h4>
            <a href={`${companyLink}`} className="company " target="_blank">
              {company}
            </a>
            {desc && (
              <ul
                className="work_ex--desc"
                style={{
                  marginTop: "0.6rem",
                  paddingLeft: "1.1rem",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                }}
              >
                {desc.map((line, i) => (
                  <li key={i} style={{ marginBottom: "0.35rem" }}>
                    {line}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    },
  );

  return (
    <div className="about_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        MY SKILLS <span></span>
        <p className="shadow animate__animated animate__slow animate__fadeInLeft">
          MY SKILLS
        </p>
      </h2>
      <div style={{ marginTop: "0rem" }} className="">
        <div className="skills_section">{mappedSkills}</div>
      </div>

      <div className="resume_section ">
        <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft animate__delay-1s">
          RESUME <span></span>
        </h2>
        <div className="resume_section_main animate__animated animate__slow animate__fadeInUp animate__delay-2s">
          <h4 className="sec_heading">
            <i className="fas fa-briefcase"></i>Working Experience
          </h4>
          <div className="work_ex_sec">{mappedWorkExperience}</div>
        </div>
      </div>
    </div>
  );
}
