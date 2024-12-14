import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './pages/comm/Footer';
import { Header } from './pages/comm/Header';
import { Category } from './pages/Category'; // Corrected the path
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} /> 
          <Route path="/:category:product" element={<ProductDetails/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
