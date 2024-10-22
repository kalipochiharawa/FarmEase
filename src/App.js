import React from "react";
import Login from './Features/UserRegistration/Login.jsx'
import Register from './Features/UserRegistration/Register.jsx'
import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
    
      <Routes>
      <Route index element={<Login />} />  {/* Default to login page */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
       
      </Routes>
    
    </div>
  );
}

export default App;
