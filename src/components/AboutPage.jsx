import React from 'react';


const AboutPage = () => {
    return (
        <div className="page">
            <div className="resume-section">
                <h2 className="resume-header">Hi, I'm Danny.</h2>
                <div className="resume-section-body">
                    <p>I am currently a software engineer at an awesome company called Insite Interactive. We build custom software, websites, and mobile applications for anybody and everybody. My job as a developer is to build responsive front end sites using HTML, CSS, and JavaScript along with robust backends for large scale projects using Python, Django, and PostgreSQL. Working at a small company like Insite allows me to own a project, which involves working directly with the client to gather requirements, negotiate timelines, and make decisions regarding the technical architecture of the project.</p>
                    <p>Prior to Insite, I worked in 3D animation and visual effects. I quickly gravitated towards the technical aspects of 3D. Eventually I became my team's developer, creating automation tools in Python to enhance and speed up artist's workflow.</p>
                    <p>My passion for software development grew with each new tool I built. Before long, I realized I didn't just want software development to be part of my job, but my entire job.</p>
                </div>
            </div>
            <div className="resume-section">
                <div className="resume-section-body links">
                    <a target="_blank" href="https://github.com/strausd">
                        <i className="icon ion-social-github"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/strausd/">
                        <i className="icon ion-social-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://docs.google.com/document/d/1Q6j2Fg6ay6mL-A87SeHxa826EfA4BzzuBwYrtVjL3Uk/edit?usp=sharing">
                        <i className="icon ion-document-text"></i>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutPage;