// src/components/Section.jsx
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;