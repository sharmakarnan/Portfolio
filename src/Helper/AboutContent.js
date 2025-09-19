import React from 'react';
import "../styles/AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/IntoImg.png";


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p>Im a Java Full Stack developer. I create responsive secure websites for my clients.</p>
            <div className='row d-flex'>
                 <Link to="/contact" className='col-6'> 
                <button className='btn '> Contact </button>
            </Link>

            <a href="/sharma_k_Resume.pdf" className='col-6' download="Sharma_K_Resume.pdf">
          <button className='btn'>Resume</button>
        </a>
            </div>
           
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stact top'>
                    <img src={React1} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent