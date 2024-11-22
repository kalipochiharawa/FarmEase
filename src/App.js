import React from "react";
import Login from './Features/UserRegistration/Login.jsx'
import Buyer from './Features/UserRegistration/Buyer.jsx'
import {Route, Routes } from "react-router-dom";
import Seller from "./Features/UserRegistration/Seller.jsx";
function App() {
  return (
    <div>
    
      <Routes>
      <Route index element={<Login />} />  {/* Default to login page */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Seller" element={<Seller />} />
      </Routes>
    
    </div>
  );
}

export default App;
