import React from 'react';
import "../styles/Hero.css";
import IntroImg from "../assets/into1.jpg";
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
          <Link to="/Contact" className='btn-outline'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
