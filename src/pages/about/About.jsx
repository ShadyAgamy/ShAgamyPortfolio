import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import "./about.scss";
import mainLogo from "../../assets/info.svg";

export default function About() {
  return (
    <div className="about_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft ">
        about me <span></span> <p className="shadow">about me</p>
      </h2>
      <div className="about_page-container">
        <img
          src={mainLogo}
          alt="Info shape"
          className="about_page-img animate__animated animate__slow animate__fadeIn animate__delay-2s"
        />
        <div className="about_page-about">
          <h3 className=" animate__animated animate__slow animate__fadeInUp animate__delay-2s">
            I am <span className="co_main">Shady Agamy</span>
          </h3>
          <p className=" animate__animated animate__slow animate__fadeInUp animate__delay-3s">
            I'm a self-taught developer. Four years ago I started front-end web development as a
            self-study course and learned some new technology skills. I can provide clean code and
            pixel-perfect design. I also make websites more &#38; more interactive with web
            animations. I also value lifelong learning and continue to learn from eBooks and video
            courses from top teaching resources.
          </p>
          <ul className="info animate__animated animate__slow animate__fadeInUp animate__delay-4s">
            <li>
              <span>Full Name</span>: Shady Agamy
            </li>
            <li>
              <span>Nationality</span>: egyption
            </li>
            <li>
              <span>Languages</span>: arabic, english
            </li>
            <li>
              <span>Address</span>: 6 Horeya square, maadi, egypt
            </li>
            <li>
              <span>Freelance</span>: Available
            </li>
          </ul>
          {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={2500}  offset={50}> */}
            <a
              className="custom_btn  animate__animated animate__slow animate__fadeInUp animate__delay-5s"
              href="Shadi_Agamy_-_Front_end_Developer.pdf"
              target="_blank"
              download
            >
              Download cv
            </a>
          {/* </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
}
