import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './Features/ProductListing/ShoppingCatalog';
import PaymentGateway from './Features/PayementGateway/PayementPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      
      <Route path="/payment" element={<PaymentGateway />} />
    </Routes>
  );
};

export default App;
