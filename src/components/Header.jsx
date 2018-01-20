import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <h1 className="header__title"><Link to="/">Danny Straus</Link></h1>
                <ul className="header__nav-list">
                    <li className="header__nav-button"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li className="header__nav-button"><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                    <li className="header__nav-button"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                    <li className="header__nav-button"><NavLink to="/about" activeClassName="active">About</NavLink></li>
                </ul>
            </div>
            <div className="header__transition"></div>
        </div>
    );
};

export default Header;