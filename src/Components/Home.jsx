// Home.jsx
import React from "react";
import web from '../images/home5.jpg'; // Add this import line
import "../styles/Home.css";
import Common from "./Common";

const Home = () => {
  return (
    <div>
      <Common 
        name='Grow your business with ' 
        imgsrc={web} 
        visit="/services" 
        btname="Get Started"
      />
    </div>
  );
};

export default Home;

