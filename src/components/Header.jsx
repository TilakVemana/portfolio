import React from 'react';
// Make sure you have a CSS file imported for styling, e.g., './Header.css'

const Header = ({ name, location, phone, email, linkedIn, photoUrl, resumeFileUrl }) => {
  // This is a great way to create a clean filename for the download!
  const resumeFilename = `${name.replace(/\s+/g, '_')}_Resume.pdf`;

  return (
    <header className="header">
      {photoUrl && <img src={photoUrl} alt={name} className="profile-photo" />}
      <div className="header-content">
        <h1>{name}</h1>
        <div className="contact-info">
          <p>{location}</p>
          <p>
            <a href={`tel:${phone}`}>{phone}</a> |{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>

        
        {/* We only show the buttons if a resume URL is provided */}
        {resumeFileUrl && (
          <div className="resume-actions">
            {/* "View Resume" button - opens in a new tab */}
            <a
              href={resumeFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-btn" // A new class for distinct styling
            >
              View Resume
            </a>

            {/* "Download Resume" button - was already here */}
            <a
              href={resumeFileUrl}
              download={resumeFilename}
              className="resume-download-btn"
            >
              Download Resume
            </a>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;