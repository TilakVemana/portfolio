// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, technologies, descriptionPoints }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      {technologies && <p className="technologies">Technologies: {technologies}</p>}
      <ul>
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;