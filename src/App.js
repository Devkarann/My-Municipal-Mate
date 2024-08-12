import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import FeedComponent from "./components/FeedCard";
import Footer from "./components/Footer";
import Complain from "./components/Complain";
import About from "./components/About";
import Contactus from "./components/Contactus";
import SignInPage from "./components/SignInPage"; // Corrected import
import RegisterComponent from "./components/RegisterComponent";
import ForgetPassword from "./components/ForgetPassword";
import Feedback from "./components/Feedback";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import { getToken } from "./service/AuthService";
import SignIn from "./components/SignInPage";
import "./i18n";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // const handleAdminLogin = () => {
  //   setIsAdminAuthenticated(true);
  // };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // setIsAdminAuthenticated(false);
  };

  return (
    <div className="App">
      <Navigationbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/ContactUs" element={<Contactus />} />
        <Route path="/Feed" element={<FeedComponent />} />
        <Route
          path="/complain"
          element={
            isAuthenticated ? (
              <Complain />
            ) : (
              <SignInPage onLogin={handleLogin} />
            )
          }
        />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/dashadmin" element={<Dashboard />} />
        <Route path="/adminLogin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
