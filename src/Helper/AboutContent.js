import React from 'react';
import "../styles/AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/IntoImg.jpg";


const AboutContent = () => {

   const handleRedeploy = async () => {
    await fetch("https://api.vercel.com/v1/integrations/deploy/prj_F7wTKjCPuBsm0veja9dX7Sqn00yM/A8UAZY5bMo", {
      method: "POST"
    });
    alert("✅ Redeploy triggered successfully!");
  };
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p>Im a Trainee Software Engineer. I create responsive secure websites for my clients.</p>
            <div className='row d-flex'>
                 

            <a href="/Sharma-Resume.pdf" className='col-12' download="Sharma_K_Resume.pdf">
          <button className='btn'>Resume</button>
        </a>
            </div>
           
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent