import React from "react";

const AboutPage = () => {
  return (
    <div className="page">
      <div className="resume-section">
        <h2 className="resume-header">Hi, I'm Danny.</h2>
        <div className="resume-section-body">
          <p>
            I am currently working as a software engineer at USAA. My team is
            responsible for the technical implementation of managing open source
            software for the entire organization. We build in house applications
            to handle requests for open source libraries, retiring software,
            approving software, etc. We also implement vendor tools like Jfrog
            Artifactory and Xray to create our own internal repositories for
            NPM, Maven, PyPi, Docker, etc. Vendor tools alone are not enough to
            fit the requirements of the organization. We also build custom
            software that integrates with these tools to ensure we stay
            compliant while also ensuring our customers have the best user
            experience possible. I do all sorts of work from front end
            development with React/Redux, back end development with Kotlin,
            Java, and Spring Boot, and DevOps with Gitlab CI, Docker, and
            Puppet. In addition to the technologies I work with on a daily
            basis, I also hold a leadership position on my team where I help
            drive technical decision for my team, communicate with vendors, and
            mentor junior developers.
          </p>
          <p>
            After graduating from UT Dallas, I worked in 3D animation and visual
            effects at ReelFX. Shortly after starting, I gravitated towards the
            technical aspects of 3D. I quickly became my team's developer,
            creating automation tools in Python to enhance and speed up artist's
            workflow. I worked on Scooby Doo (expected release late 2020) and
            Wish Police (unknown release date). If you get bored, feel free to
            check out my{" "}
            <a
              href="https://www.youtube.com/watch?v=ZvL4wKIZtL8"
              target="_blank"
            >
              old demo reel
            </a>
            .
          </p>
          <p>
            My passion for software development grew with each new tool I built
            at ReelFX. It didn't take me long to realize that I wanted software
            development to be my entire job. Now that I have had more experience
            in the software development industry, I am so glad I made the
            switch. I love learning new technologies, mentoring other
            developers, and in general just building awesome stuff.
          </p>
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
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1Q6j2Fg6ay6mL-A87SeHxa826EfA4BzzuBwYrtVjL3Uk/edit?usp=sharing"
          >
            <i className="icon ion-document-text"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
