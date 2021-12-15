import React, { useState } from 'react';

import "./portfolio.scss";

import ReactPaginate from 'react-paginate';

import portfolioData from "./portfolio.data";

export default function Portfolio() {

    const [currentPage, setCurrentPage] = useState(0);
    const [data] = useState(portfolioData);


    const PER_PAGE = 6;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
            .map(({id, name, url, desc, imgSrc }) => {
                return (
                    <div key={id} className="port_item">
                        <div className="back_img" style={{backgroundImage: `url(${imgSrc})`}}>
                            <div className="link_div"></div>
                            <a className="app_link" href={url} target="_blank"  rel="noopener noreferrer"><i className="fas fa-link"></i></a>
                        </div>
                        <h3>{name}</h3>
                        <p> {desc} </p>
                    </div>
                )
            }
        );
    const pageCount = Math.ceil(data.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const chevLeft = <i className="fas fa-chevron-left"></i>;
    const chevRight = <i className="fas fa-chevron-right"></i>;
    return (
        <div className="about_page portfolio_page">
            <h2 className="main_heading">PORTFOLIO <span></span><p className="shadow">PORTFOLIO</p></h2>
            <div className="port_items">
                {currentPageData}
            </div>
            
            <ReactPaginate
                previousLabel={chevLeft}
                nextLabel={chevRight}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            
        </div>
    )
}

