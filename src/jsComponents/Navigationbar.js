import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../components/Navigation.css";
import { getToken, getUsername, removeToken } from "../service/AuthService";
import logo from '../assets/images/logo.png'

const Navigationbar = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const username = getUsername(token);
      setUsername(username);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    removeToken(); // Clear token
    setUsername(null);
    onLogout(); 
    navigate("/"); 
  };

  const changelanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div id="outer-nav">
        <div id="nav">
          <div id="nav-left"><img src={logo} alt="Error" style={{height:'110px', width:'210px', marginTop:'10px'} }/></div>
          <div id="nav-center">
            <ul id="nav-center-ul">
              <li>
                {/* {<Link to="/">Home</Link>} */}
                <Link to="/">{t('home')}</Link>
              </li>
              <li>
                {/* {<Link to="/ContactUs">Contact Us</Link>} */}
                <Link to="/ContactUs">{t('contactUs')}</Link>
              </li>
              <li>
                {/* <Link to="/feed">Feeds</Link> */}
                <Link to="/feed">{t('feeds')}</Link>
              </li>
              <button id="button">
                {/* <Link to="/complain" id="button-link">
                  Complain
                </Link> */}
                <Link to="/complain" id="button-link">
                {t('complain')}
                </Link>
              </button>
              <button id="button2" onClick={() => changelanguage("en")}>
                En
              </button>
              <button id="button3" onClick={() => changelanguage("hi")}>
                हि
              </button>
              <button id="button3" onClick={() => changelanguage("mr")}>
                मर
              </button>
              
            </ul>
          </div>
          <div id="nav-right">
            <i className="fas fa-bars" onClick={toggleMenu}></i>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div id="side-menu" className={`side-menu ${isMenuOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          x
        </button>
        <ul>
          {/* {username && <li>Welcome, {username}</li>} */}
          {username && <li>{t('welcome')}, {username}</li>}
          {/* <li><Link to="/dashadmin">Dashboard</Link></li> */}
          <li>
            {/* <Link to="/feedback">Feedback</Link> */}
            {/* <Link to="/feedback">Feedback</Link> */}
            <Link to="/feedback">{t('feedback')}</Link>
          </li>
          <li>
            {/* <Link to="/adminLogin">Admin Login</Link> */}
            <Link to="/adminLogin">{t('adminLogin')}</Link>
          </li>
          <li>
            {/* <Link to="/password-settings">Password Settings</Link> */}
            {/* <Link to="/password-settings">Password Settings</Link> */}
            <Link to="/password-settings">{t('passwordSettings')}</Link>
          </li>
          {/* <li>
            <Link to="/signout">Sign Out</Link>
          </li> */}

          <li>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
            <button onClick={handleSignOut}>{t('signOut')}</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigationbar;
