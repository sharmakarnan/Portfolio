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
<<<<<<< HEAD
            <li><strong>Frameworks:</strong> React.js, Angular (Basic), Bootstrap, Spring Boot</li>
=======
            <li><strong>Frameworks:</strong> React.js, Angular (Basic), Bootstrap, Spring Boot, Hibernate, RESTful API</li>
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
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
<<<<<<< HEAD
              <strong>Trainee Software Engineer</strong> – Aadasteck, Chennai
              (Apr 2025 – Present)  
              <br />
Working at Aadasteck as a Trainee Software Engineer ,responsible for developing RESTful APIs using Spring Boot,
 integrating frontend components built in React.js, and optimizing application performance. Collaborating with
 cross-functional teams to deliver maintainable, high-quality code.     <br></br>
 
 • Currently working asaJavaFullStackDeveloperonthe"Jessica Brooks–HRVLightStructures"project,
 contributing to the design and development of scalable modules using Spring Boot andReact.js. <br></br>
 • ImplementedandoptimizedRESTfulAPIsfordatamanagementandensuredseamlessfrontend-backend
 integration for better user experience.
 
        </li>
=======
              <strong>Java Full Stack Developer</strong> – Aadasteck, Chennai
              (Apr 2025 – Present)  
              <br />
              • Backend Development with Java & Spring Boot, handling APIs and database connections.
            </li>
>>>>>>> fe4c3370c8895d5cd7384901b1e0e3ee687a7690
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
