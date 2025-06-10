// src/components/Header.jsx
import React from 'react';

const Header = ({ name, location, phone, email, linkedIn, photoUrl, resumeFileUrl }) => {
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

        
        {resumeFileUrl && (
          <div className="resume-actions">
            <a
              href={resumeFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-btn" 
            >
              View Resume
            </a>

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