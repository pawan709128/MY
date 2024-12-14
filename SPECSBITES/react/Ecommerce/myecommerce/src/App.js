import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Dining } from './Pages/Dining';
import { Seating } from './Pages/Seating';
import { Storage } from './Pages/Storage';
import { Bedroom } from './Pages/Bedroom';
import { Living } from './Pages/Living';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<About/>}/>
          <Route path='/' element={<Dining/>}/>
          <Route path='/' element={<Seating/>}/>
          <Route path='/' element={<Storage/>}/>
          <Route path='/' element={<Bedroom/>}/>
          <Route path='/' element={<Living/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
