import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <h1>Danny Straus</h1>
            <ul className="nav">
                <li className="nav-button"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li className="nav-button"><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                <li className="nav-button"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li className="nav-button"><NavLink to="/about" activeClassName="active">About</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;