import React from 'react';

import Navbar from '../Helper/Navbar';
import Footer from '../Helper/Footer';
import Hero1 from '../Helper/Hero1';
import AboutContent from '../Helper/AboutContent';
import ProfileDetails from '../Helper/ProfileDetails';

const About = () => {
  return (
    <div> 
      <Navbar/>
      <Hero1 heading="ABOUT." text="Im a friendly Full Stack Developer "/>
      <AboutContent/>
      <ProfileDetails/>
    <Footer/>
    </div>
  )
}

export default About