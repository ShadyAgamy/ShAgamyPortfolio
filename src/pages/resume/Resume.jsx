/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./resume.scss";
import TrackVisibility from "react-on-screen";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import ProgressBar from "react-animated-progress-bar";

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
      { id: "html5", name: "html5", percentage: "90" },
      { id: "CSS3", name: "CSS3", percentage: "90" },
      { id: "Javascript", name: "Javascript", percentage: "80" },
      { id: "jQuery", name: "jQuery", percentage: "90" },
      { id: "ReactJS", name: "ReactJS", percentage: "80" },
      { id: "Redux", name: "Redux", percentage: "80" },
    ],
    workExperience: [
      {
        id: 1,
        role: "Front end developer ",
        company: "expand cart",
        period: "07/2020 - 01/2022",
        companyLink: "https://expandcart.com/en/",
      },
      {
        id: 2,
        role: "UI developer",
        company: "Road9 media",
        period: "06/2019 - 07/2020",
        companyLink: "https://road9media.com/",
      },
      {
        id: 3,
        role: "UI developer",
        company: "freelance projects",
        period: "02/2019 - 06/2019",
      },
    ],
  };

  render() {
    const mappedSkills = this.state.skills.map(({ id, name, percentage }) => {
      return (
        <div key={id} className="skill">
          <div className="skill_name">{name}</div>
          <ProgressBar
            width="100%"
            height="8px"
            rect
            fontColor="gray"
            percentage={percentage}
            rectPadding="2px"
            rectBorderRadius="15px"
            trackPathColor="rgba(111, 34, 50, .5)"
            bgColor="#C3083F"
          />
        </div>
      );
    });

    const mappedWorkExperience = this.state.workExperience.map(
      ({ id, period, role, company, companyLink }) => {
        return (
          <div key={id} className="work_ex">
            <div className="work_ex--period">{period}</div>
            <div className="work_ex--details">
              <h4 className="role co_main">{role}</h4>
              <a href={`${companyLink}`} className="company " target="_blank">
                {company}
              </a>
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
