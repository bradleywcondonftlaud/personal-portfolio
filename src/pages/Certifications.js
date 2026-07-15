import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const certs = [
    { id: 1, title: "Salesforce Certified Administrator", date: "Verified", topics: "User setup and security configurations, standard and custom object management, Sales/Service Cloud configurations, Flow building, reports, and interactive dashboards." },
    { id: 2, title: "Salesforce Certified Platform App Builder", date: "Verified", topics: "Data models, UI customization, complex validation rules, advanced declarative process automation, App Deployment, and Sandboxes." }
  ];

  const skillCategories = [
    { title: "Declarative Automation", skills: ["Salesforce Flow", "Approval Processes", "Validation Rules", "Formula Fields"] },
    { title: "CRM Architecture & Layouts", skills: ["Service Cloud Workspace Design", "Lightning Web Components (LWC)", "Omni-Channel Routing", "Junction Objects"] },
    { title: "Platforms & Tools", skills: ["Salesforce CRM", "Zoho CRM & Admin", "Jira / Atlassian", "Slack Enterprise Rollouts"] }
  ];

  return (
    <div className="container">
      <h2>CERTIFICATIONS & SKILLS</h2>
      
      <div className="certs-section">
        <h3>Credentials</h3>
        <p className="hint-text">Click a certification card to view blueprint skill coverage details:</p>
        <div className="certs-list">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              className={`glow-card cert-card ${activeCert === cert.id ? 'expanded' : ''}`}
              onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
            >
              <div className="cert-header">
                <h4>{cert.title}</h4>
                <span className="cert-date">{cert.date}</span>
              </div>
              {activeCert === cert.id && (
                <div className="cert-details">
                  <hr />
                  <p><strong>Core Focus Areas:</strong> {cert.topics}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Skill Matrix</h3>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glow-card skill-cat-card">
              <h4>{cat.title}</h4>
              <ul>
                {cat.skills.map((skill, sIdx) => <li key={sIdx}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;