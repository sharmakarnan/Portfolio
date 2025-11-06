import React from 'react';
import "../styles/Hero.css";
<<<<<<< HEAD
import IntroImg from "../assets/into.jpg";
=======
import IntroImg from "../assets/into1.jpg";
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg'/>
      </div>
      <div className='content'>
        <h1>SOFTWARE ENGINEER</h1>
        <p>Empower Your Career with k.Sharma</p>
        <div>
<<<<<<< HEAD
          <Link to="/project" className='btn-outline'>Project</Link>
=======
          <Link to="/Contact" className='btn-outline'>Contact</Link>
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
        </div>
      </div>
    </div>
  )
}

export default Hero;
