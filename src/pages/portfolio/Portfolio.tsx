import React from "react";
import "./portfolio.scss";

import { projects, caseStudies, agencyWork } from "./portfolio.data.ts";
import DiagramFilters from "./diagrams/DiagramFilters";
import DiagramApprovals from "./diagrams/DiagramApprovals";
import DiagramUploader from "./diagrams/DiagramUploader";
import DiagramChatbot from "./diagrams/DiagramChatbot";
import { useReveal, fadeInClass } from "../../hooks/useReveal";

const DIAGRAMS: Record<string, React.ComponentType> = {
  filters: DiagramFilters,
  approvals: DiagramApprovals,
  uploader: DiagramUploader,
  chatbot: DiagramChatbot,
};

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

interface ProjectCardProps {
  name: string;
  url: string;
  desc: string;
  meta?: string;
  imgSrc: string;
  stack: string[];
}

const StackList = ({ items }: { items: string[] }) => (
  <div className="stack_list">
    {items.map((item) => (
      <span key={item} className="tag_chip">
        {item}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ name, url, desc, meta, imgSrc, stack }: ProjectCardProps) => {
  const { ref, state } = useReveal<HTMLElement>("portfolio");
  return (
    <article ref={ref} className={`port_item ${fadeInClass(state)}`}>
      <div className="port_item_frame">
        <img src={imgSrc} alt={`${name} screenshot`} />
      </div>
      <div className="port_item_body">
        <div className="port_item_head">
          <h3>{name}</h3>
          {meta && <p className="port_item_meta">{meta}</p>}
          <a
            className="port_item_link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {displayUrl(url)} &#8599;
          </a>
        </div>
        <p>{desc}</p>
        <StackList items={stack} />
      </div>
    </article>
  );
};

const CaseStudy = ({
  title,
  context,
  role,
  problem,
  solution,
  decision,
  result,
  stack,
  diagram,
  figureLabel,
}: {
  title: string;
  context: string;
  role: string;
  problem: string;
  solution: string;
  decision: string;
  result: string;
  stack: string[];
  diagram: string;
  figureLabel: string;
}) => {
  const { ref, state } = useReveal<HTMLElement>("portfolio");
  const rows = [
    ["Problem", problem],
    ["Approach", solution],
    ["Key decision", decision],
    ["Result", result],
  ].filter(([, text]) => text);

  const Diagram = DIAGRAMS[diagram];

  return (
    <article ref={ref} className={`case_study ${fadeInClass(state)}`}>
      <header className="case_study_header">
        <h3>{title}</h3>
        <span className="case_study_context">{context}</span>
        {role && <span className="case_study_role">{role}</span>}
      </header>

      {Diagram && (
        <figure className="case_study_figure">
          <div className="case_study_figure_frame">
            <Diagram />
          </div>
          <figcaption>{figureLabel}</figcaption>
        </figure>
      )}

      <dl className="case_study_rows">
        {rows.map(([label, text]) => (
          <div className="case_study_row" key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
        <div className="case_study_row case_study_tags">
          <div />
          <StackList items={stack} />
        </div>
      </dl>
    </article>
  );
};

export default function Portfolio() {
  const header = useReveal<HTMLElement>("portfolio");
  const projectsTitle = useReveal<HTMLHeadingElement>("portfolio");
  const caseStudiesTitle = useReveal<HTMLHeadingElement>("portfolio");
  const caseStudiesIntro = useReveal<HTMLParagraphElement>("portfolio");
  const agencyTitle = useReveal<HTMLHeadingElement>("portfolio");
  const agencyIntro = useReveal<HTMLParagraphElement>("portfolio");

  return (
    <div className="page portfolio_page">
      <header ref={header.ref} className={`page_header ${fadeInClass(header.state)}`}>
        <p className="eyebrow">Selected work</p>
        <h1>Portfolio</h1>
      </header>

      <section className="port_section">
        <h2
          ref={projectsTitle.ref}
          className={`section_title ${fadeInClass(projectsTitle.state)}`}
        >
          Projects
        </h2>
        <div className="port_items">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="port_section">
        <h2
          ref={caseStudiesTitle.ref}
          className={`section_title ${fadeInClass(caseStudiesTitle.state)}`}
        >
          Case Studies
        </h2>
        <p
          ref={caseStudiesIntro.ref}
          className={`section_intro ${fadeInClass(caseStudiesIntro.state)}`}
        >
          Production work at PlanRadar, a B2B construction SaaS used across
          Europe. The codebase is private, so these are written summaries
          rather than links.
        </p>
        <div className="case_studies">
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} {...study} />
          ))}
        </div>
      </section>

      <section className="port_section">
        <h2
          ref={agencyTitle.ref}
          className={`section_title ${fadeInClass(agencyTitle.state)}`}
        >
          Early Career / Agency Work
        </h2>
        <p
          ref={agencyIntro.ref}
          className={`section_intro ${fadeInClass(agencyIntro.state)}`}
        >
          Client work from before I moved to React. Included for track
          record, not current stack.
        </p>
        <div className="port_items">
          {agencyWork.map((work) => (
            <ProjectCard key={work.id} {...work} />
          ))}
        </div>
      </section>
    </div>
  );
}
