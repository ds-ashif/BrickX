import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buy from './pages/Buy';
import AboutUs from './pages/AboutUs';
import BrickDetails from './pages/BrickDetails';
import Checkout from './pages/Checkout';
import LoginSignup from './pages/LoginSignUp'; 
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/brick-details/:id" element={<BrickDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginSignup />} /> 
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
