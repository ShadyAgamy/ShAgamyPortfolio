import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "animate.css";

import "./homepage.scss";

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
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 120,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#aaaaaa",
      },

      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  },
};

export default function HomePage() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="homepage" style={practicles_config.style}>
      <Particles id="tsparticles" init={particlesInit} options={practicles_config.params} />
      <div className="homepage_section">
        <h1 className="animate__animated animate__slow animate__fadeInUp">
          Hi, I am <span className="co_main">Shady Agamy</span>
        </h1>
        <p className="animate__animated animate__slow animate__fadeInUp animate__delay-2s">
          I am a Front-End web developer. I can provide clean code and pixel perfect design. I also
          make website more &#38; more interactive with web animations.
        </p>
        <div className="links animate__animated animate__slow animate__fadeInUp animate__delay-4s	 ">
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
