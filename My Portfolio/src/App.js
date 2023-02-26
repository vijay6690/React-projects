import "./App.css";
import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/myportfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/portfolio" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
