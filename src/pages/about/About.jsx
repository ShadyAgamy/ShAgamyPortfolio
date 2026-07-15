import React from "react";

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
            I'm a frontend developer with around six years of professional experience building web
            applications. For the past few years at PlanRadar &#8212; a B2B construction SaaS used
            across Europe &#8212; I've worked in a large-scale React and TypeScript codebase, owning
            features end to end across ticket management, document management, approval workflows,
            and advanced filtering. I care about clean, maintainable code, solid UI, and shipping
            features that hold up in production &#8212; and I keep learning as the stack evolves.
          </p>
          <ul className="info animate__animated animate__slow animate__fadeInUp animate__delay-4s">
            <li>
              <span>Full Name</span>: Shady Agamy
            </li>
            <li>
              <span>Nationality</span>: Egyptian
            </li>
            <li>
              <span>Languages</span>: Arabic, English
            </li>
            <li>
              <span>Location</span>: Cairo, Egypt
            </li>
            <li>
              <span>Availability</span>: Open to remote opportunities
            </li>
          </ul>
          {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={2500}  offset={50}> */}
            <a
              className="custom_btn  animate__animated animate__slow animate__fadeInUp animate__delay-5s"
              href="Shady_Agamy_CV.pdf"
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
