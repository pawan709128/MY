import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Hosting } from './Pages/Hosting';
import { Domain } from './Pages/Domain';
import { Pricing } from './Pages/Pricing';
import { Support } from './Pages/Support';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/domain' element={<Domain />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
        
          
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default App;
