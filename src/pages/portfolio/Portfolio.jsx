import React from "react";
import "animate.css";
import "./portfolio.scss";

import { projects, caseStudies, agencyWork } from "./portfolio.data";

const StackList = ({ items }) => (
  <ul className="stack_list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ProjectCard = ({ name, url, desc, meta, imgSrc, stack }) => (
  <div className="port_item">
    <div className="back_img" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="link_div"></div>
      <a className="app_link" href={url} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-link"></i>
      </a>
    </div>
    <h3>{name}</h3>
    {meta && <span className="port_item_meta">{meta}</span>}
    <p>{desc}</p>
    <StackList items={stack} />
  </div>
);

const CaseStudy = ({ title, context, role, problem, solution, decision, result, stack }) => {
  const rows = [
    ["Problem", problem],
    ["Approach", solution],
    ["Key decision", decision],
    ["Result", result],
  ].filter(([, text]) => text);

  return (
    <article className="case_study">
      <h3>{title}</h3>
      <span className="case_study_context">{context}</span>
      {role && <span className="case_study_role">{role}</span>}
      <dl>
        {rows.map(([label, text]) => (
          <React.Fragment key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </React.Fragment>
        ))}
      </dl>
      <StackList items={stack} />
    </article>
  );
};

export default function Portfolio() {
  return (
    <div className="about_page portfolio_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        PORTFOLIO <span></span>
        <p className="shadow">PORTFOLIO</p>
      </h2>

      <section className="port_section animate__animated animate__slow animate__fadeInUp animate__delay-1s">
        <h4 className="port_section_title">Projects</h4>
        <div className="port_items">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="port_section animate__animated animate__slow animate__fadeInUp animate__delay-2s">
        <h4 className="port_section_title">Case Studies</h4>
        <p className="port_section_note">
          Production work at PlanRadar. The codebase is private, so these are written summaries
          rather than links.
        </p>
        <div className="case_studies">
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} {...study} />
          ))}
        </div>
      </section>

      <section className="port_section animate__animated animate__slow animate__fadeInUp animate__delay-3s">
        <h4 className="port_section_title">Early Career / Agency Work</h4>
        <p className="port_section_note">
          Client work from before I moved to React. Included for track record, not current stack.
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
