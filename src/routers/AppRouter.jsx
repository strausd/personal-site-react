import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ResumePage from '../components/ResumePage';
import ProjectsPage from '../components/ProjectsPage';
import AboutPage from '../components/AboutPage';


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />

                <div className="content">
                    <SwipeableRoutes>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/resume" component={ResumePage} />
                        <Route exact path="/projects" component={ProjectsPage} />
                        <Route exact path="/about" component={AboutPage} />
                    </SwipeableRoutes>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;