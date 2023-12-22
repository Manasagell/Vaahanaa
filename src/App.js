import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/Aboutpage';
import Services from './Pages/ServicesPage/ServicesPage';
import Contact from './Pages/ContactPage/ContactPage';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Header className="top"></Header>
       <Routes className="bottom">
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}>

        </Route>
       </Routes>
       </BrowserRouter>
      
    </div>
  );
}
export default App;
