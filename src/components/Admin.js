import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import AuthService from '../service/MyMunicipalService'
import './SignPage.css';


const Admin = ({ onLogin }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (usernameOrEmail && password) {
      try {
        const response = await AuthService.signIn(usernameOrEmail, password);
        if (response.data && response.data.success) {
            navigate('/dashadmin');
            onLogin();
        } else {
            // Handle login failure (e.g., incorrect credentials)
            setErrorMessage(response.data.message || "Login failed");
        }
        console.log(response);
        onLogin();
      } catch (error) {
        setErrorMessage(error.message || "Login failed");
      }
    }
  };

  return (
    <div className="sign-in-page-wrapper">
    <div className="sign-in-page-container">
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Admin Login</h2>
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
      </div>
    </div>
    </div>
  </div>
  );
};

export default Admin;