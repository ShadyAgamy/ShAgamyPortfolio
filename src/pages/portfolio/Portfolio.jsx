import React, { useState } from "react";
import "animate.css";
import "./portfolio.scss";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import portfolioData from "./portfolio.data";

export default function Portfolio() {
  const [data] = useState(portfolioData);

  const reactProjects = data.filter(({ type }) => {
    return type === "react";
  });

  const jqueryProjects = data.filter(({ type }) => {
    return type === "jquery";
  });

  const renderProjects = (projects) => {
    return projects.map(({ id, name, url, desc, imgSrc }) => {
      return (
        <div key={id} className="port_item">
          <div
            className="back_img"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="link_div"></div>
            <a
              className="app_link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link"></i>
            </a>
          </div>
          <h3>{name}</h3>
          <p> {desc} </p>
        </div>
      );
    });
  };

  const react = renderProjects(reactProjects);
  const jquery = renderProjects(jqueryProjects);

  return (
    <div className="about_page portfolio_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        PORTFOLIO <span></span>
        <p className="shadow">PORTFOLIO</p>
      </h2>
      <div className=" animate__animated animate__slow animate__fadeInUp animate__delay-1s">
        <Tabs>
          <TabList>
            <Tab>
              React Projects
              <i className="fab fa-react"></i>
            </Tab>
            <Tab>
              Jquery Projects
              <i className="fab fa-js"></i>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="port_items">{react}</div>
          </TabPanel>
          <TabPanel>
            <div className="port_items">{jquery}</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
