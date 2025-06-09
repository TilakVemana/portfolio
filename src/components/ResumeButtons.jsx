import React from 'react';
import './ResumeButtons.css';

import React from 'react';
import './ResumeButtons.css'; // We'll create this file for styling

/**
 * A reusable component that renders "View" and "Download" buttons for a resume.
 * It assumes the resume PDF is in the `public` folder.
 */
const ResumeButtons = () => {
  // Path to your resume file located in the public folder
  const resumeUrl = '/MyResume.pdf';

  // The desired filename for the downloaded resume
  // This gives you control over the name the user sees when they save the file.
  const downloadFilename = 'FirstName-LastName-Developer-Resume.pdf';

  return (
    <div className="resume-buttons-container">
      {/* The "View Resume" button */}
      <a
        href={resumeUrl}
        target="_blank" // This is crucial - it opens the link in a new tab
        rel="noopener noreferrer" // Recommended for security with target="_blank"
        className="btn" // Use your existing .btn class for styling
      >
        View Resume
      </a>

      {/* The "Download Resume" button */}
      <a
        href={resumeUrl}
        download={downloadFilename} // This attribute triggers the download
        className="btn btn-primary" // Use your primary button style
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButtons;