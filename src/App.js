import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProductForm from './Features/ProductListing/addingProducts';

function App() {
  return (
    <div className="App">
      {/* Only one Router at the root level */}
      <Routes>
        <Route path="/" element={<AddProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
