import React from 'react';
import Navbar from '../Helper/Navbar';
import Hero from '../Helper/Hero';
import Footer from '../Helper/Footer';
import AboutMe from '../Helper/AboutMe';
import ProjectImg from "../Helper/ProjectImg";
import Form from "../Helper/Form";

const home = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
       <ProjectImg/>
      <AboutMe/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default home