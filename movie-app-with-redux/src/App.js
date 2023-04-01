import React from 'react'
import '.././src/App.css'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
