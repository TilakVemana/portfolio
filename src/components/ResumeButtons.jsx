// src/components/ResumeButton.jsx
import React from 'react';

const ResumeButtons = () => {
  const resumeUrl = '/MyResume.pdf';
  const downloadFilename = 'FirstName-LastName-Developer-Resume.pdf';

  return (
    <div className="resume-buttons-container">
      <a
        href={resumeUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn" 
      >
        View Resume
      </a>

      <a
        href={resumeUrl}
        download={downloadFilename} 
        className="btn btn-primary" 
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButtons;