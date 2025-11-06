import React from 'react';
import "../styles/AboutContent.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import React1 from "../assets/IntoImg.jpg";
=======
import React1 from "../assets/IntoImg.png";
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
<<<<<<< HEAD
            <p>Im a Trainee Software Engineer. I create responsive secure websites for my clients.</p>
            <div className='row d-flex'>
                 

            <a href="/Sharma-Resume.pdf" className='col-12' download="Sharma_K_Resume.pdf">
=======
            <p>Im a Java Full Stack developer. I create responsive secure websites for my clients.</p>
            <div className='row d-flex'>
                 <Link to="/contact" className='col-6'> 
                <button className='btn '> Contact </button>
            </Link>

            <a href="/sharma_k_Resume.pdf" className='col-6' download="Sharma_K_Resume.pdf">
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
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