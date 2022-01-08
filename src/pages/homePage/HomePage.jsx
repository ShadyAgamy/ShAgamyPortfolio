import React from "react";
import Particles from "react-particles-js";
import "animate.css";


import "./homepage.scss";

const practicles_config = {
  style: {
    height: "100%",
    background: "#000",
  },
  params: {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.7,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
      opacity: {
        value: 0.1,
        random: false, // Set to false in our case
      },
    },
  },
};

export default function HomePage() {
  return (
    <div className="homepage" style={practicles_config.style}>
      <Particles params={practicles_config.params} />
      <div className="homepage_section">
        <h1 className="animate__animated animate__slow animate__fadeInUp">
          Hi, I am <span className="co_main">Shady Agamy</span>
        </h1>

        <p className="animate__animated animate__slow animate__fadeInUp animate__slow">
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more &#38; more interactive with
          web animations.
        </p>
        <div className="links animate__animated animate__slow animate__zoomIn animate__delay-1s	 ">
          <a
            href="https://www.linkedin.com/in/shady-agamy-746a59147/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/shadyagmy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://codepen.io/shady-agmy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
