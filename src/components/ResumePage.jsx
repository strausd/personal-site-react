import React from 'react';
import ScrollArea from 'react-scrollarea';

const ResumePage = () => {
    const el = document.querySelector('div.resume-section');
    if (el) {
        setTimeout(() => {
            parent = el.parentElement;
            const origParentStyle = parent.getAttribute('style');
            const disp = parent.style.display;
            parent.style.display = 'none';
            const trick = parent.offsetHeight;
            parent.style.display = disp;
        }, 250);
    }

    

    return (
      <div className="page">
        <div className="resume-section">
          <h2 className="resume-header">Summary</h2>
          <div className="resume-section-body">
            <p>
              I am an experienced software engineer looking for an opportunity
              where I can utilize my skills in front end development
              (React/Redux), back end development (Kotlin, Java, Python), and
              DevOps (Docker, Puppet, CI/CD) to build large scale web
              applications. I have a passion for solid user experience and
              design. I am hard-working, detail-oriented, a self-starter, a fast
              learner, and enjoy taking on difficult technical challenges. I
              have an excitement for learning new technologies and advocating
              for them in the workplace. I take positions of leadership
              seriously and enjoy helping those around me grow and succeed. I
              thrive in agile, collaborative, and team-driven environments that
              breed quick and high-quality results. I am eager to apply my
              skills and create software that positively impacts people’s lives.
            </p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="resume-header">Skills</h2>
          <div className="resume-section-body">
            <ul>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>Kotlin</li>
              <li>Java</li>
              <li>Python</li>
              <li>Puppet</li>
              <li>HTML5</li>
              <li>CSS3/SCSS</li>
              <li>React/Redux</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Docker</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Spring Boot</li>
              <li>JUnit</li>
              <li>Jest/Enzyme</li>
              <li>Mocha/Jasmine</li>
              <li>Webpack</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>CI/CD</li>
              <li>Git/GitHub</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="resume-header">Experience</h2>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>USAA - Software Engineer</h3>
              <p className="date">May 2018 - Present</p>
            </div>
            <p>
              Build, maintain, and design robust front end web applications
              using React and Redux
            </p>
            <p>
              Build and maintain robust applications in Kotlin, Java, and Spring
              Boot
            </p>
            <p>
              Utilize JUnit, Jest, Enzyme, and many other testing frameworks to
              properly unit test code to ensure quality
            </p>
            <p>
              Configure and maintain application servers manually and through
              configuration-as-code tools such as Puppet
            </p>
            <p>
              Lead and mentor junior developers on the team to help improve
              their skill set and aid in career growth
            </p>
            <p>Help drive team technical decisions</p>
            <p>
              Implement large scale vendor tools and communicate with vendors as
              well as build automation around vendor tools for
              organization-specific functionality
            </p>
            <p>
              Create and manage internal repositories (NPM, PyPi, Maven, Docker,
              etc.) for the organization
            </p>
            <p>
              Build application-specific CI/CD pipelines to automate various
              aspects of deployments using Gitlab CI
            </p>
            <p>
              Utilize Docker to containerize our applications for Openshift as
              well as increase development velocity among the engineering team
            </p>
            <p>
              Lead the SRE effort on my team to improve the insight into our
              applications as well as improve performance and reliability by
              utilizing tools such as Elastic Search and Kibana
            </p>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>Insite - Software Engineer</h3>
              <p className="date">July 2017 - May 2018</p>
            </div>
            <p>
              Work in a fast-paced environment, context switching between
              multiple projects
            </p>
            <p>
              Build responsive front end sites using CSS, Bootstrap, and
              JavaScript
            </p>
            <p>Lead React/Redux Lunch & Learn program for all IT</p>
            <p>
              Push for the adoption of new technologies, including React and
              Docker
            </p>
            <p>Build prototypes and products based on wireframes and mockups</p>
            <p>
              Test and optimize websites for maximum efficiency and performance
            </p>
            <p>
              Build backends for large scale web applications using Python,
              Django, and PostgreSQL
            </p>
            <p>
              Utilize my design skills for projects when designer resources were
              strained
            </p>
            <p>
              Utilize Git and BitBucket for all source code version control and
              issue tracking
            </p>
            <p>
              Work with clients to gather requirements and facilitate
              negotiations regarding features, timeline, and technical
              architecture
            </p>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>ReelFX - Environment Artist</h3>
              <p className="date">February 2016 to March 2017</p>
            </div>
            <p>
              Automate set assembling and wind simulation tasks using Python
              scripts
            </p>
            <p>
              Reduce vegetation caching process from 3 hours per asset to 5
              minutes and a few button clicks using Python scripts
            </p>
            <p>
              Procedurally generate and style grass for environments using
              XGen’s expression language
            </p>
            <p>Simulate wind for all vegetation</p>
            <p>3D model trees and bushes for animated feature films</p>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>UT Dallas - Senior Lecturer</h3>
              <p className="date">January 2016 to May 2016</p>
            </div>
            <p>Aid in setup and testing of department-wide render farm</p>
            <p>
              Teach nearly 100 students 3D Modeling and Texturing for the school
              of Arts and Technology
            </p>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>UT Dallas - TA</h3>
              <p className="date">August 2014 to December 2015</p>
            </div>
            <p>
              Teach two semesters of 3D Rigging including MEL scripting for the
              school of Arts and Technology
            </p>
            <p>Assist for one semester of Animation Processes</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="resume-header">Relevant Classes</h2>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>University Classes</h3>
            </div>
            <p>Computer Science I & II</p>
            <p>Computer Science Lab</p>
            <p>Programming Fundamentals</p>
            <p>Independent Research in Arts and Technology</p>
            <p>Project Management</p>
            <p>Design Principles</p>
            <p>Computer Imaging</p>
            <p>Virtual Environments</p>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>Online Classes through Udemy</h3>
            </div>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/react-2nd-edition/"
              >
                The Complete React Web App Developer Course (with Redux) —
                Andrew Mead
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/"
              >
                Angular 5 The Complete Guide — Maximilian Schwarzmüller
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/the-complete-javascript-course/learn/v4/"
              >
                The Complete JavaScript Course — Jonas Schmedtmann
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/"
              >
                The Complete Node.js Developer Course — Andrew Mead
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/"
              >
                Build Responsive Websites with HTML5 and CSS3 — Jonas
                Schmedtmann
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/the-web-developer-bootcamp/learn/v4/"
              >
                The Web Developer Bootcamp — Colt Steele
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/java-the-complete-java-developer-course/learn/v4/"
              >
                Complete Java Masterclass — Tim Buchalka
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.udemy.com/complete-python-bootcamp/learn/v4/"
              >
                Complete Python Bootcamp — Jose Portilla
              </a>
            </p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="resume-header">Education</h2>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>MFA in Arts and Technology</h3>
              <p className="date">UT Dallas - December 2015</p>
            </div>
          </div>
          <div className="resume-section-body">
            <div className="resume-experience-subhead">
              <h3>BA in Arts and Technology</h3>
              <p className="date">UT Dallas - August 2013</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResumePage;