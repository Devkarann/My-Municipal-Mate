import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { setToken } from "../service/AuthService";
import AuthService from "../service/MyMunicipalService";
import "./SignPage.css";

const SignInPage = ({ onLogin }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (usernameOrEmail && password) {
      try {
        const response = await AuthService.signIn(usernameOrEmail, password);
        const token = response.data.accessToken;
        setToken(token);
        onLogin(); 
        navigate("/complain"); 
      } catch (error) {
        setErrorMessage(error.message || "Login failed");
      }
    } else {
      setErrorMessage("Please enter your username/email and password.");
    }
  };

  return (
    <div className="sign-in-page-wrapper">
      <div className="sign-in-page-container">
        <div className="login-wrapper">
          <div className="login-container">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              type="text"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <div className="login-links">
              <Link to="/register">Register</Link>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="oauth-buttons">
              <button
                className="oauth-button google"
                disabled
                style={{ cursor: "default" }}
              >
                <FaGoogle className="icon" /> Google
              </button>
              <button
                className="oauth-button facebook"
                disabled
                style={{ cursor: "default" }}
              >
                <FaFacebook className="icon" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
