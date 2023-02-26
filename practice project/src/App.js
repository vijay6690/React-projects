import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import CartPage from './Components/Cart';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup.jsx';
import LogIn from './Components/LogIn.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
function App() {
  // const [user,setLoginuser] =useState({})
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
        <Routes>
          {/* <Route  path='/'>
          {user ? <Home/> : <LogIn setLoginuser={setLoginuser}/>}
          </Route> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LogIn />}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
