import React from "react";
import "animate.css";

import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage_section">
        <h1 className="animate__animated animate__slow animate__fadeInUp">
          Hi, I am <span className="co_main">Shady Agamy</span>
        </h1>
        <p className="animate__animated animate__slow animate__fadeInUp animate__delay-2s">
          I'm a frontend developer with around six years of experience building React &#38;
          TypeScript web applications. I focus on shipping clean, reliable features for real
          products &#8212; from UI to state management.
        </p>
        <div className="links animate__animated animate__slow animate__fadeInUp animate__delay-4s">
          <a
            href="https://www.linkedin.com/in/shady-agamy-746a59147/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ShadyAgamy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://codepen.io/shady-agmy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
