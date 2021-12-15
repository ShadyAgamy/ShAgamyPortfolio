import React, { Component } from 'react';

import "./resume.scss";

import ProgressBar from 'react-animated-progress-bar';


  



class Resume extends Component {
    state = {
        skills : [
            {id:"html5", name: "html5", percentage: "95"},
            {id:"CSS3", name: "CSS3", percentage: "90"},
            {id:"Javascript", name: "Javascript", percentage: "70"},
            {id:"jQuery", name: "jQuery", percentage: "85"},
            {id:"ReactJS", name: "ReactJS", percentage: "80"},
            {id:"Redux", name: "Redux", percentage: "70"},
        ],
        workExperience : [
            {id: 1, role : "Front end developer ", company: "expand cart", period: "07/2020 - Present", companyLink: "https://expandcart.com/en/"},
            {id: 2, role : "UI developer", company: "Road9 media", period: "06/2019 - 07/2020", companyLink: "https://road9media.com/"},
            {id: 3, role : "UI developer", company: "freelance projects", period: "02/2019 - 06/2019"}
            
        ]
    }

    


    render() {
        const mappedSkills = this.state.skills.map(({id, name, percentage}) => {
            return (
                <div key={id} className="skill">
                    <div className="skill_name">{name}</div>
                    <ProgressBar
                        width="100%"
                        height="9px"
                        rect
                        fontColor="gray"
                        percentage={percentage}
                        rectPadding="1px"
                        rectBorderRadius="5px"
                        trackPathColor="rgba(111, 34, 50, .5)"
                        bgColor="#C3083F"
                    />
                </div>
            )
        });

        const mappedWorkExperience = this.state.workExperience.map(({id, period, role , company, companyLink}) => {
            return (
                <div key={id} className="work_ex">
                    <div className="work_ex--period">{period}</div>
                    <div className="work_ex--details">
                        <h4 className="role co_main">{role}</h4>
                        <a href={`${companyLink}`} className="company " target="_blank">{company}</a>
                    </div>
                </div>
            )
        });
      
        return (
            <div className="about_page">
                <h2 className="main_heading">MY SKILLS <span></span><p className="shadow">MY SKILLS</p></h2>

                <div className="skills_section">
                    {mappedSkills}
                </div>
                
                <div className="resume_section">
                    <h2 className="main_heading">RESUME <span></span></h2>
                    <div className="resume_section_main">
                        <h4 className="sec_heading"><i className="fas fa-briefcase"></i>Working Experience</h4>
                        <div className="work_ex_sec">
                    {mappedWorkExperience}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Resume;


