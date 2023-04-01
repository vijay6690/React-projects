import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import CartPage from './Components/Cart';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup.jsx';
import LogIn from './Components/LogIn.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <div className='col-4' style={{width:"100px"}}><ToastContainer></ToastContainer></div>
      
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
// npx json-server --watch db.json
// s + enter at any time to create a snapshot of the database
