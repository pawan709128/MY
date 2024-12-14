import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './pages/comm/Footer';
import { Header } from './pages/comm/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          /* Add more routes here if needed */
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
