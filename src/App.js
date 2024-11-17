import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPageLayout from './Features/LandingPage/LandingpageLayout';
import Registering from './Features/UserRegistration/Register';
import SignUp from './Features/UserRegistration/Login';
import ProductListing from './Features/ProductListing/ShoppingCatalog';
import AddProductForm from './Features/AddProducts/Addproduct';
import ProfileManagement from './Features/MyProfile/MyProfile';
import PaymentGateway from './Features/PayementGateway/PayementPage';

function App() {
  return (
    <div className="App">
      {/* Only one Router at the root level */}
      <Routes>
        <Route path="/Login" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
