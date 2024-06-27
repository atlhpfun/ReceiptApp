import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Receipts from './components/Receipts';
import Navbar from './components/Navbar';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div>
      <Navbar />
      <AuthButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </div>
  );
};

export default App;
