import React from 'react';

import Navbar from '../Helper/Navbar';
import Footer from '../Helper/Footer';
import Hero1 from '../Helper/Hero1';
import Form from '../Helper/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Hero1 heading="CONTACT." text="Lets have a chat"/>
       <Form/>
        <Footer/>
    </div>
  )
}

export default Contact