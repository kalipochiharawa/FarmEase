import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPageLayout from './LandingpageLayout';
import Registering from './Features/UserRegistration/Register';
import SignUp from './Features/UserRegistration/Login';
import ProductListing from './Features/ProductListing/ShoppingCatalog';
import AddProductForm from './Features/AddProducts/Addproduct';
import ProfileManagement from './Features/MyProfile/MyProfile';
import ContactPage from './Features/StaticPages/Contact';

function App() {
  return (
    <div className="App">
      {/* Only one Router at the root level */}
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/Register" element={<Registering />} />
        <Route path="/Login" element={<SignUp />} />
        <Route path="/ShoppingCatalog" element={<ProductListing />} />
        <Route path="/AddProduct" element={<AddProductForm />} />
        <Route path= "/MyProfile" element={<ProfileManagement/>}/>
        <Route path= "/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
