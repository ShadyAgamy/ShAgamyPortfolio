import React from "react";
import "animate.css";
import "./portfolio.scss";

import portfolioData from "./portfolio.data";

export default function Portfolio() {
  return (
    <div className="about_page portfolio_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        PORTFOLIO <span></span>
        <p className="shadow">PORTFOLIO</p>
      </h2>
      <div className="animate__animated animate__slow animate__fadeInUp animate__delay-1s">
        <div className="port_items">
          {portfolioData.map(({ id, name, url, desc, imgSrc }) => (
            <div key={id} className="port_item">
              <div className="back_img" style={{ backgroundImage: `url(${imgSrc})` }}>
                <div className="link_div"></div>
                <a className="app_link" href={url} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link"></i>
                </a>
              </div>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
