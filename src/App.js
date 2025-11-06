import React from "react";
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Contact from "./Component/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
   <div>
      
       <>
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
<<<<<<< HEAD
=======
              <Route path="/contact" element={<Contact />} />
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
          </Routes>
       
       </>
          
       
   </div>
   
    
  );
}

export default App;