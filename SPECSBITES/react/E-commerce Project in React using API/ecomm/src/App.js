import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './pages/common/Header';
import { Footer } from './pages/common/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
