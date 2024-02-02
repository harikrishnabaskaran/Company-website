import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route exact path='/'  element={<Home />} />
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
