import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import MainDashboard from './pages/MainDashboard';
import StyleSandBox from './pages/StyleSandBox';

function App() {

  return (
    <Router>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/sandbox" element={<StyleSandBox />} />

          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>

    </Router>

  );


}

export default App;