import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentGateway from './Features/PaymentGateway/PaymentPage';

const App = () => {
  return (
    <Routes>
      <Route path="/payment" element={<PaymentGateway />} />
    </Routes>
  );
};

export default App;
