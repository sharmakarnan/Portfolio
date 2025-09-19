
import React from "react";
import "../styles/ProjectImg.css";
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link} from 'react-router-dom';

const ProjectImg = () => {
  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="projects-title text-center mb-5">My Projects</h2>

        <div
          id="projectsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block project-img" alt="Project 1" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block  project-img" alt="Project 2" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block project-img" alt="Project 3" />
            </div>
           
          <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
         </div>
          <div className="text-center mt-3" data-aos="fade-up">
                       <Link to="/Project" className="btn btn-outline-dark about-btn">
                         Learn More
                       </Link>
             </div>
      </div>
    </section>
  );
};

export default ProjectImg;
