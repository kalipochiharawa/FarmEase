import React from "react";
import Login from './Features/UserRegistration/Login.jsx'
import Register from './Features/UserRegistration/Register.jsx'
import Head from "./Features/LandingPage/Subcomponents/Head.js";
import Navbar from "./Features/LandingPage/MainHead.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <Login />
      <Register />
   
    </div>
  );
}

export default App;