import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPageLayout from './LandingpageLayout';
import Registering from './Features/UserRegistration/Register';
import SignUp from './Features/UserRegistration/Login';
import ProductListing from './Features/ProductListing/ShoppingCatalog';
import AddProductForm from './Features/AddProducts/Addproduct';
import ProfileManagement from './Features/MyProfile/MyProfile';
import PaymentGateway from './Features/PayementGateway/PayementPage';
import AboutUs from './Features/StaticPages/About';
import MarketplaceSection from './Features/LandingPage/Subcomponents/MarketPlace';
import FirstPage from './Features/LandingPage/FirstPageCOM';
import UserProfileContainer from './Features/MyProfile/UserProfileContainer';

function App() {
  return (
    <div className="App">
      {/* Only one Router at the root level */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Register" element={<Registering />} />
        <Route path="/dashboard" element={<LandingPageLayout />} />
        <Route path="/Login" element={<SignUp />} />
        <Route path="/ShoppingCatalog" element={<ProductListing />} />
        <Route path="/AddProduct" element={<AddProductForm />} />
        <Route path= "/MyProfile" element={<UserProfileContainer/>} />
        <Route path= "/PayementPage" element={<PaymentGateway/>} />
        <Route path= "/About" element={<AboutUs/>} />
        <Route path= "/about" element={<MarketplaceSection/>} />
        <Route path= "/signup" element={<Registering/>} />
      </Routes>
    </div>
  );
}

export default App;