import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageLayout from './LandingPageLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
