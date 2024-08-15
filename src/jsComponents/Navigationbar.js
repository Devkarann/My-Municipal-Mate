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
    onLogout(); // Notify parent component about logout
    navigate("/"); // Redirect to home or login page
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/feed">Feeds</Link>
              </li>
              <button id="button">
                <Link to="/complain" id="button-link">
                  Complain
                </Link>
              </button>
              <button id="button2" onClick={() => changelanguage("en")}>
                En
              </button>
              <button id="button3" onClick={() => changelanguage("hi")}>
                हि
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
          {username && <li>Welcome, {username}</li>}
          {/* <li><Link to="/dashadmin">Dashboard</Link></li> */}
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/adminLogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/password-settings">Password Settings</Link>
          </li>
          {/* <li>
            <Link to="/signout">Sign Out</Link>
          </li> */}

          <li>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigationbar;
