import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-row'>
        
        <div className='location'>
          <FaHome size={20} style={{ marginRight: "0.5rem" }}/>
          <span>SRI Mens Hostel, T-Nagar, Chennai</span>
        </div>

        <div className='phone'>
          <FaPhone size={20} style={{ marginRight: "0.5rem" }}/>
          <span>95787-18792</span>
        </div>

        <div className='email'>
          <FaMailBulk size={20} style={{ marginRight: "0.5rem" }}/>
          <span>sharmakarnan16@gmail.com</span>
        </div>

        <div className='social'>
          <a href="https://github.com/sharmakarnan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sharma-k-40a70b260/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://leetcode.com/u/sharma_k/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={28} />
          </a>
          <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer">
            <SiHackerrank size={28} />
          </a>
        </div>
      </div>



      <div className="copyright">
        <p>© {new Date().getFullYear()} K. Sharma. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
