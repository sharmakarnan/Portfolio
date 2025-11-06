import React from "react";
import "../styles/AboutMe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <h2 className="about-title text-center mb-4" data-aos="fade-down">
          ABOUT K. SHARMA
        </h2>

        <div className="row mb-4">
          <div className="col-6">
            <p className="about-text text-start" data-aos="fade-right">
              K. Sharma is an entry-level Software Engineer with practical experience in 
            Java , MySQ , Spring Boot , React.js and Angular. 
  With a strong focus on full-stack development, 
  he has contributed to real-world projects that demonstrate 
  proficiency in both frontend and backend technologies, 
  along with a keen interest in delivering scalable and maintainable solutions.
            </p>
          </div>
         
        </div>

        <hr className="about-divider" data-aos="fade-up" />

        <div className="row mt-4">
          <div className="col-6"></div> 
          <div className="col-6 d-flex flex-column justify-content-end">
            <p className="about-text text-start" data-aos="fade-left">
              I have engineered projects including an Employee Management Form 
               leveraging Angular for the frontend and Spring Boot for the backend, 
              developed a React.js-based Frontend Application for client Jessica Brooks, 
                and implemented a robust Library Management System using 
               Java and Spring Boot with MySQL integration. 
             I am consistently driven to expand my expertise and adopt modern best practices in 
               full-stack software development.
            </p>
            <div className="text-end mt-3" data-aos="fade-up">
              <Link to="/about" className="btn btn-outline-dark about-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
