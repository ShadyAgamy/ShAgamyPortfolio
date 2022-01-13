/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "animate.css";
import "./resume.scss";
import TrackVisibility from "react-on-screen";
import Particles from "react-particles-js";

import ProgressBar from "react-animated-progress-bar";

// import  htmlImg  from "";

const practicles_config = {
  style: {
    height: "100%",
    // background: "#000",
  },
  params: {
    particles: {
      number: {
        value: 6,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        speed: 0.8,
        out_mode: "out",
      },
      shape: {
        type: ["image"],
        image: [
          {
            src: "./imgs/langImgs/react.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/html.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/css.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/js.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/gulp.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/git.png",
            height: 10,
          },
          {
            src: "./imgs/langImgs/sass.png",
            height: 10,
          },
        ],
      },
      color: {
        value: "#CCC",
      },
      size: {
        value: 30,
        random: false,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false,
        },
      },
    },
    retina_detect: false,
  },
};

class Resume extends Component {
  state = {
    skills: [
      { id: "html5", name: "html5", percentage: "95" },
      { id: "CSS3", name: "CSS3", percentage: "90" },
      { id: "Javascript", name: "Javascript", percentage: "70" },
      { id: "jQuery", name: "jQuery", percentage: "85" },
      { id: "ReactJS", name: "ReactJS", percentage: "80" },
      { id: "Redux", name: "Redux", percentage: "70" },
    ],
    workExperience: [
      {
        id: 1,
        role: "Front end developer ",
        company: "expand cart",
        period: "07/2020 - Present",
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
            height="7px"
            rect
            fontColor="gray"
            percentage={percentage}
            rectPadding="1px"
            rectBorderRadius="5px"
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
        <Particles params={practicles_config.params} />

        <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
          MY SKILLS <span></span>
          <p className="shadow animate__animated animate__slow animate__fadeInLeft">
            MY SKILLS
          </p>
        </h2>
        <div
          style={{ marginTop: "0rem" }}
          className="animate__animated animate__slow animate__fadeInUp"
        >
          <div className="skills_section">{mappedSkills}</div>
        </div>

        <div className="resume_section ">
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && (
                <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft animate__delay-1s">
                  RESUME <span></span>
                </h2>
              )
            }
          </TrackVisibility>
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && (
                <div className="resume_section_main animate__animated animate__slow animate__fadeInLeft animate__delay-2s">
                  <h4 className="sec_heading">
                    <i className="fas fa-briefcase"></i>Working Experience
                  </h4>
                  <div className="work_ex_sec">{mappedWorkExperience}</div>
                </div>
              )
            }
          </TrackVisibility>
        </div>
      </div>
    );
  }
}

export default Resume;
