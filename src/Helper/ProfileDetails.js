import React from "react";
import "../styles/ProfileDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileDetails = () => {
  return (
    <section className="profile-section py-5">
      <div className="container">
        

        <div className="mb-5" data-aos="fade-right">
          <h3 className="section-heading">Education</h3>
          <ul className="profile-list">
            <li>
              <strong>B.Tech in Information Technology</strong> – Anand Institute
              of Higher Technology, Chennai (2020 – 2024) – CGPA: 7.91
            </li>
            <li>
              <strong>Higher Secondary (XII)</strong> – MMHSS, Peravurani (2019 – 2020) – 64%
            </li>
            <li>
              <strong>Secondary (X)</strong> – Dr. J.C. Kumarappa, Peravurani (2017 – 2018) – 75%
            </li>
          </ul>
        </div>

                <hr className="about-divider" data-aos="fade-up" />


        <div className="mb-5" data-aos="fade-left">
          <h3 className="section-heading">Technical Skills</h3>
          <ul className="profile-list">
            <li><strong>Languages:</strong> HTML, CSS, JavaScript, SQL, Java</li>
            <li><strong>Frameworks:</strong> React.js, Angular (Basic), Bootstrap, Spring Boot, Hibernate, RESTful API</li>
            <li><strong>Libraries:</strong> React Router, Material UI, JWT</li>
            <li><strong>Databases:</strong> MySQL, Oracle</li>
            <li><strong>Dev Tools:</strong> VS Code, STS, Eclipse, GitHub, Postman, RestMan</li>
          </ul>
        </div>

                <hr className="about-divider" data-aos="fade-up" />


        <div className="mb-5" data-aos="fade-up">
          <h3 className="section-heading">Internship & Experience</h3>
          <ul className="profile-list">
            <li>
              <strong>Java Full Stack Developer</strong> – Aadasteck, Chennai
              (Apr 2025 – Present)  
              <br />
              • Backend Development with Java & Spring Boot, handling APIs and database connections.
            </li>
            <li>
              <strong>Junior Software Trainee Intern</strong> – Eagle-HiTech
              Softclou Pvt Ltd, Chennai (Sep 2024 – Jan 2025)  
              <br />
              • Developed <strong>Jessica Brooks Home Interior Design Web Application</strong> using React.js, JavaScript, and Bootstrap. <br /> 
              • Built a <strong>Library Management System</strong> with Spring Boot, Hibernate, MySQL, and tested with Postman.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
