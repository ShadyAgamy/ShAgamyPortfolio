import React from 'react';
import "animate.css";
import { Link } from 'react-router-dom';

import "./about.scss";
import  mainLogo  from "../../assets/info.svg";

export default function About() {
    return (
        <div className="about_page">
            <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft ">about me <span></span> <p className="shadow">about me</p></h2>
            <div className="about_page-container">
                <img src={mainLogo} alt="Info shape" className="about_page-img animate__animated animate__slow animate__pulse" />
                <div className="about_page-about animate__animated animate__slow animate__fadeInRight">
                    <h3>I am <span className="co_main">Shady Agamy</span></h3>
                    <p>I'm a self-taught developer. Four years ago I started front-end web development as a self-study course and learned some new technology skills. I can provide clean code and pixel-perfect design. I also make websites more &#38; more interactive with web animations. I also value lifelong learning and continue to learn from eBooks and video courses from top teaching resources.</p>
                    <ul className="info">
                        <li><span>Full Name</span>: Shady Agamy</li>
                        <li><span>Nationality</span>: egyption</li>
                        <li><span>Languages</span>: arabic, english</li>
                        <li><span>Address</span>: 6 Horeya square, maadi, egypt</li>
                        <li><span>Freelance</span>: Available</li>
                    </ul>
                    <Link className="custom_btn" to="/my_resume.pdf" target="_blank" download>Download cv</Link>
                </div>
                
            </div>
            
        </div>
    )
}
