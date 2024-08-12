import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t , i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changelanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div id='outer-nav'>
            <div id="nav">
                <div id="nav-left">
                My Muncipal Mate
                </div>
                <div id="nav-center">
                    <ul id="nav-center-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li><Link to="/feed">Feeds</Link></li>
                        <button id="button"><Link to="/complain" id='button-link'>Complain</Link></button>
                        <button id="button2" onClick={() => changelanguage('en')}>En</button>
                        <button id="button3" onClick={() => changelanguage('hi')}>हि</button>
                    </ul>
                </div>
                <div id="nav-right">
                <i className="fas fa-bars" onClick={toggleMenu}></i>
                   
                </div>
            </div>

            </div>

            {/* Sidebar Menu */}
            <div id="side-menu" className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>x</button>
                <ul>
                    <li><Link to="/dashadmin">Dashboard</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/adminLogin">Admin Login</Link></li>
                    <li><Link to="/password-settings">Password Settings</Link></li>
                    <li><Link to="/signout">Sign Out</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navigationbar;
