/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./resume.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const practicles_config = {
  params: {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
      },
    },
    particles: {
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 3000,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: ["image"],
        image: [
          {
            src: "./imgs/langImgs/react.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/html.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/css.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/js.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/gulp.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/git.png",
            height: 50,
          },
          {
            src: "./imgs/langImgs/sass.png",
            height: 50,
          },
        ],
      },
      size: {
        value: { min: 5, max: 10 },
      },
    },
    detectRetina: true,
  },
};

const particlesInit = async (main) => {
  await loadFull(main);
};

class Resume extends Component {
  state = {
    skills: [
      {
        id: "languages",
        category: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS"],
      },
      {
        id: "frameworks",
        category: "Frameworks & Libraries",
        items: ["React", "Redux / Redux-Saga", "Zustand", "React Router"],
      },
      {
        id: "styling",
        category: "Styling",
        items: ["Tailwind CSS", "SCSS", "Responsive Design"],
      },
      {
        id: "testing",
        category: "Testing",
        items: ["Vitest", "Playwright (E2E)"],
      },
      {
        id: "tools",
        category: "Tools & Practices",
        items: ["Git", "Vite", "REST APIs", "WebSockets", "Code Review", "Agile"],
      },
    ],
    workExperience: [
      {
        id: 1,
        role: "Frontend Developer",
        company: "PlanRadar",
        period: "Jul 2022 - Present",
        companyLink: "https://www.planradar.com/",
        desc: [
          "Build and maintain features in a large-scale React + TypeScript SPA for a B2B construction platform used across Europe.",
          "Delivered a reusable filtering system adopted across many list views, including URL-persisted filter state.",
          "Shipped work across major product areas: ticket management, document management (file preview & versioning), and approval workflows with real-time updates over WebSockets.",
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
        desc: [
          "Turned UX/UI designs into responsive, cross-browser websites.",
        ],
      },
    ],
  };

  render() {
    const mappedSkills = this.state.skills.map(({ id, category, items }) => {
      return (
        <div key={id} className="skill_group" style={{ marginBottom: "1.6rem" }}>
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
                  padding: "0.35rem 0.9rem",
                  fontSize: "0.9rem",
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

    const mappedWorkExperience = this.state.workExperience.map(
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
                    lineHeight: 1.5,
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
      }
    );

    return (
      <div className="about_page" style={practicles_config.style}>
        <Particles id="tsparticles" init={particlesInit} options={practicles_config.params} />

        <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
          MY SKILLS <span></span>
          <p className="shadow animate__animated animate__slow animate__fadeInLeft">MY SKILLS</p>
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
}

export default Resume;
