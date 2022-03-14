import React, { useState } from "react";
import "animate.css";
import "./portfolio.scss";


import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import portfolioData from "./portfolio.data";

export default function Portfolio() {
  //   const [currentPage, setCurrentPage] = useState(0);
  const [data] = useState(portfolioData);

  //   const PER_PAGE = 6;
  //   const offset = currentPage * PER_PAGE;
  const reactProjects = data.filter(({ type }) => {
    return type === "react";
  });

  const jqueryProjects = data.filter(({ type }) => {
    return type === "jquery";
  });

  const htmlProjects = data.filter(({ type }) => {
    return type === "html";
  });



  //   const currentPageData = data
  // .slice(offset, offset + PER_PAGE)
  const renderProjects = (projects) => {
    return projects.map(({ id, name, url, desc, imgSrc }) => {
      console.log(imgSrc)
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

  const react =  renderProjects(reactProjects);
  const jquery =   renderProjects(jqueryProjects);
  const html =   renderProjects(htmlProjects);

  return (
    <div className="about_page portfolio_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        PORTFOLIO <span></span>
        <p className="shadow">PORTFOLIO</p>
      </h2>
      <div className=" animate__animated animate__slow animate__fadeInLeft">
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
            <Tab>
              UI demo Projects
              <i className="fab fa-html5"></i>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="port_items">
              {react}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="port_items">
              {jquery}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="port_items">
              {html}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* <ReactPaginate
        previousLabel={chevLeft}
        nextLabel={chevRight}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      /> */}
    </div>
  );
}
