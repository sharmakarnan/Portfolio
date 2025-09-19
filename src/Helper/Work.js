import React from 'react';
import WorkCardData from './Workcarddata';
import "../styles/Workcard.css";

const Work = () => {
  return (
    <div className='work-container'>
      {WorkCardData.map((val, ind) => (
        <div className="project-row" data-aos="fade-right" key={ind}>
          <div className="project-left">
            <img src={val.imgsrc} alt={val.title} className="project-image" />
          </div>

          <div className="project-right"data-aos="fade-left">
            <h2 className="project-title">{val.title}</h2>
            <p className="project-text">{val.text}</p>
            <a href={val.view} target="_blank" rel="noopener noreferrer" className="btn">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
