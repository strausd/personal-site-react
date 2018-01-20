import React from 'react';


const ProjectsPage = () => {
    return (
        <div className="page">
            <div className="resume-section">
                <h2 className="resume-header">Personal Projects</h2>
                <div className="resume-section-body">
                    <div className="project">
                        <div className="menubar">
                            <div className="circle red"></div>
                            <div className="circle yellow"></div>
                            <div className="circle green"></div>
                            <p>Omnifood Project</p>
                        </div>
                        <img alt="Omnifood Web Project" src="dist/img/projects/omnifood.png" />
                        <div className="project-overlay">
                            <div className="project-overlay-text">
                                <h2>Omnifood</h2>
                            </div>
                            <a className="project-link" href="http://omnifoodproject.000webhostapp.com/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="menubar">
                            <div className="circle red"></div>
                            <div className="circle yellow"></div>
                            <div className="circle green"></div>
                            <p>Chat App</p>
                        </div>
                        <img alt="Chat Web Project" src="dist/img/projects/chatapp.png" />
                        <div className="project-overlay">
                            <div className="project-overlay-text">
                                <h2>Chat App</h2>
                            </div>
                            <a className="project-link" href="https://immense-spire-99071.herokuapp.com/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="menubar">
                            <div className="circle red"></div>
                            <div className="circle yellow"></div>
                            <div className="circle green"></div>
                            <p>Todo App</p>
                        </div>
                        <img alt="Chat Web Project" src="dist/img/projects/todoapp.png" />
                        <div className="project-overlay">
                            <div className="project-overlay-text">
                                <h2>Todo App</h2>
                            </div>
                            <a className="project-link" href="http://react-todo-app-strausd.herokuapp.com/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;