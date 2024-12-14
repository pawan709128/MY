import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Products } from './Pages/Products';
import { Contact } from './Pages/Contact';
import { Singleproduct } from './Pages/Singleproduct';
import { Cart } from './Pages/Cart';
import { Error } from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Singleproduct/:id' element={<Singleproduct/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
