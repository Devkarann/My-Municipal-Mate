
import React, {useState } from 'react';
import Navigationbar from './components/Navigationbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import FeedComponent from './components/FeedComponent';
import Footer from './components/Footer';
import Complain  from './components/Complain';
import About from './components/About';
import Contactus from './components/Contactus';
import LoginComponent from './components/SignInPage';
import RegisterComponent from './components/RegisterComponent';
import ForgetPassword from './components/ForgetPassword';
import Feedback from './components/Feedback';
import Dashboard from './components/Dashboard';
import './i18n';


function App() {

  const[isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin=()=>{
    setIsAuthenticated(true);
  }

  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Routes>
      <Route path="/" element={<About></About>}></Route>
      <Route path="/ContactUs" element={<Contactus></Contactus>}></Route>
      <Route path="/Feed" element={<FeedComponent></FeedComponent>}></Route>
      <Route path="/complain" element={isAuthenticated ? (<Complain></Complain>) : <LoginComponent onLogin={handleLogin}></LoginComponent>}></Route>
      <Route path="/register" element={<RegisterComponent></RegisterComponent>} ></Route>
      <Route path="/forgot-password" element={<ForgetPassword></ForgetPassword>} ></Route>
      <Route path="/feedback" element={<Feedback></Feedback>} ></Route>
      <Route path='/dashadmin' element={<Dashboard/>}/>

      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
