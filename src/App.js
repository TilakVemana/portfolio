import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

const resumeData = {
  name: 'SAI RATNA TILAK VEMANA',
  location: 'Rajahmundry, Andhra Pradesh',
  phone: '+918367270941',
  email: 'tilak2042000@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/sai-ratna-tilak-vemana-596939202', 
  photoUrl:process.env.PUBLIC_URL + '/profile.jpg' ,
  resumeFileUrl: process.env.PUBLIC_URL + '/resume.pdf',
  professionalSummary:
    'Recent B.Tech graduate with expertise in web development (HTML, CSS, JavaScript, Bootstrap) and cloud computing (AWS Certified Cloud Practitioner). Proficient in Python and data analysis. Seeking to leverage technical skills to drive innovation and growth. Eager to apply knowledge and skills in a dynamic environment and contribute to cutting-edge projects. Strong foundation in problem-solving and teamwork.',
  education: [
    {
      institution: 'Pragati Engineering College | Surampalem, Kakinada',
      degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
      date: 'July 2022',
    },
  ],
  technicalSkills: {
    programming: ['Python (Pandas, NumPy, Matplotlib, Seaborn, TensorFlow)'],
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    dataVisualization: ['PowerBI', 'Tableau', 'Excel (Pivottables, Charts)', 'Amazon Quicksight', 'Google Looker'],
    versionControl: ['Git', 'GitHub'],
  },
  softSkills: ['Teamwork', 'Collaboration', 'Time Management', 'Adaptability', 'Reliability'],
  projects: [
    {
      title: 'Smart Data Analyzer',
      technologies: 'Python (pandas, Matplotlib, Seaborn)',
      descriptionPoints: [
        'Built a Python-based program to analyze CSV and Excel files, categorizing columns and suggesting statistical analysis methods.',
        'Integrated data visualizations and generated PDF reports.',
      ],
    },
    {
      title: 'AppLab Landing Page',
      technologies: 'HTML, CSS',
      descriptionPoints: [
        "AppLab is a simple and attractive website landing page for a mobile app. Built with HTML, CSS, and Font Awesome, it's designed to look good on all devices.",
        'The page highlights app features, pricing, testimonials, FAQs, and download links.',
      ],
    },
    {
      title: 'Car Inventory System (CRUD)',
      technologies: 'HTML, CSS, JavaScript',
      descriptionPoints: [
        'Built a full CRUD (Create, Read, Update, Delete) web application for managing a list of cars.',
        'Developed the front-end user interface allowing users to add, view, edit, delete, and search inventory records.',
        'Implemented client-side logic and form validation using JavaScript.',
      ],
    },
  ],
  certifications: [
    'AWS Certified Cloud Practitioner',
    'Elite + Silver NPTEL Certificate from IITKanpur on Developing Soft Skills and Personality (75% score)',
    'Data Visualization with Python.',
  ],
};

function App() {
  return (
    <div className="App">
      <Header
        name={resumeData.name}
        location={resumeData.location}
        phone={resumeData.phone}
        email={resumeData.email}
        linkedIn={resumeData.linkedIn}
        photoUrl={resumeData.photoUrl}
        resumeFileUrl={resumeData.resumeFileUrl}
      />

      <Section title="Professional Summary">
        <p>{resumeData.professionalSummary}</p>
      </Section>

      <Section title="Education">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="date">{edu.date}</p>
          </div>
        ))}
      </Section>

      <Section title="Technical Skills">
        <div className="skill-category">
          <h4>Programming Languages:</h4>
          <ul className="skills-list">
            {resumeData.technicalSkills.programming.map((skill, index) => (
              <li key={index}><SkillBadge skill={skill} /></li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h4>Front End Development:</h4>
          <ul className="skills-list">
            {resumeData.technicalSkills.frontend.map((skill, index) => (
              <li key={index}><SkillBadge skill={skill} /></li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h4>Data & Visualization Tools:</h4>
          <ul className="skills-list">
            {resumeData.technicalSkills.dataVisualization.map((skill, index) => (
              <li key={index}><SkillBadge skill={skill} /></li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h4>Version Control:</h4>
          <ul className="skills-list">
            {resumeData.technicalSkills.versionControl.map((skill, index) => (
              <li key={index}><SkillBadge skill={skill} /></li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Soft Skills">
        <div className="soft-skills-container">
          {resumeData.softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-item">{skill}</div>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        {resumeData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            descriptionPoints={project.descriptionPoints}
          />
        ))}
      </Section>

      <Section title="Certifications">
        <ul>
          {resumeData.certifications.map((cert, index) => (
            <li key={index} className="certification-item">{cert}</li>
          ))}
        </ul>
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;