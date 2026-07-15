import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Certification Preparation App",
      tech: "Salesforce Flow / Email Gateway Integration",
      desc: "Engineered an automated study utility that systematically delivers customized multi-choice practice curriculum questions directly to mobile hardware via email-to-text platform gateways, streamlining knowledge retention schedules."
    },
    {
      title: "Dreamin' Roomie Connect",
      tech: "Lightning Web Components / Junction Object Schema",
      desc: "Designed and prototyped a structured workspace application leveraging custom address field mappings and conditional screen logic interfaces to sync spatial accommodation profiles with high platform user adoption rules."
    }
  ];

  return (
    <div className="container">
      <h2>PROJECTS</h2>
      <p className="hint-text">A collection of custom applications and system solutions engineered to solve technical operational challenges.</p>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="glow-card project-card">
            <div className="project-badge">Solution</div>
            <h3>{proj.title}</h3>
            <span className="project-tech">{proj.tech}</span>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;