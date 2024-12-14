import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { New_password } from './Pages/New_password';
import { Mysingup } from './Pages/Mysingup';
import { AddNews } from './Pages/AddNews';
import { EditNews } from './Pages/EditNews';
import { MyDashbord } from './Pages/MyDashbord';
import { MyMunageNews } from './Pages/MyMunageNews';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Mysingup' element={<Mysingup/>}/>
      <Route path='/New_password' element={<New_password/>}/>
      <Route path='/AddNews' element={<AddNews/>}/>
      <Route path='/EditNews' element={<EditNews/>}/>
      <Route path='/MyDashbord' element={<MyDashbord/>}/>
      <Route path='/MyMunageNews' element={<MyMunageNews/>}/>
      <Route path='/Sidebar' element={<Sidebar/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
