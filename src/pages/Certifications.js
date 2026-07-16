import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

const certs = [
  {
    id: 1,
    title: "Salesforce Certified Platform App Builder",
    date: "Verified",
    topics: "Salesforce data modeling, custom objects and relationships, user interface customization, business logic, validation rules, declarative automation, reports, dashboards, application security, mobile configuration, and application deployment."
  },
  {
    id: 2,
    title: "Salesforce Certified Service Cloud Consultant",
    date: "Verified",
    topics: "Service Cloud architecture, case management, entitlement and milestone configuration, Salesforce Knowledge, Omni-Channel routing, contact center design, digital engagement, service analytics, data migration, integrations, and scalable customer service solutions."
  },
  {
    id: 3,
    title: "Salesforce Certified AI Specialist",
    date: "Verified",
    topics: "Agentforce and generative AI capabilities, prompt design, grounding strategies, model configuration, trusted AI principles, Salesforce data integration, AI-powered automation, testing, deployment, monitoring, and responsible implementation of artificial intelligence solutions."
  },
  {
    id: 4,
    title: "Salesforce Certified Administrator",
    date: "Verified",
    topics: "User administration, security and access management, standard and custom object configuration, Sales Cloud and Service Cloud functionality, Flow automation, data management, reports, dashboards, AppExchange solutions, and ongoing Salesforce platform maintenance."
  },
  {
    id: 5,
    title: "Salesforce Certified AI Associate",
    date: "Verified",
    topics: "Artificial intelligence fundamentals, machine learning concepts, generative AI capabilities, Salesforce AI features, data quality, ethical AI practices, bias mitigation, privacy considerations, and the responsible application of AI to business processes."
  },
  {
    id: 6,
    title: "Salesforce DevOps Fundamentals Certificate",
    date: "Verified",
    topics: "Salesforce development lifecycles, source control, version management, continuous integration, continuous delivery, automated testing, release management, deployment strategies, environment management, governance, and collaborative DevOps practices."
  },
  {
    id: 7,
    title: "Salesforce Certified Associate",
    date: "Verified",
    topics: "Salesforce ecosystem fundamentals, customer relationship management concepts, platform navigation, data management, reporting, Salesforce Customer 360 capabilities, user productivity, security concepts, and common business use cases supported by Salesforce."
  },
  {
    id: 8,
    title: "Salesforce DevOps Leadership Certificate",
    date: "Verified",
    topics: "DevOps strategy, release governance, team collaboration, organizational change management, delivery performance, risk reduction, stakeholder alignment, process maturity, continuous improvement, and leadership practices for scalable Salesforce development and deployment."
  }
];

const skillCategories = [
  {
    title: "Salesforce Administration",
    skills: [
      "Salesforce Administration",
      "Salesforce Configuration",
      "User and Access Management",
      "Permission Sets",
      "Custom Objects and Fields",
      "Lightning App Builder",
      "Flow Builder",
      "Record-Triggered Flows",
      "Screen Flows",
      "Approval Processes",
      "Validation Rules",
      "Service Cloud",
      "Case Management",
      "Reports and Dashboards",
      "Report Folder Management",
      "Data Loader",
      "Import Wizard",
      "Salesforce Inspector",
      "SOQL",
      "Troubleshooting"
    ]
  },
  {
    title: "Data Management and Reporting",
    skills: [
      "Data Management",
      "Data Analytics",
      "Reports and Dashboards",
      "Report Folder Management",
      "Data Loader",
      "Import Wizard",
      "Salesforce Inspector",
      "Workbench",
      "SOQL",
      "Functionality Testing",
      "Email Management",
      "Managing Tickets",
      "SaaS Solutions",
      "NetSuite",
      "ServiceNow"
    ]
  },
  {
    title: "Business and Project Management",
    skills: [
      "Requirements Gathering",
      "Gathering Requirements",
      "Business Process Analysis",
      "User Stories",
      "Stakeholder Management",
      "Cross-Functional Collaboration",
      "Systems Integration",
      "User Acceptance Testing",
      "Release Management",
      "Change Management",
      "User Training",
      "Process Documentation",
      "Technical Architecture and Strategic Planning",
      "Agile Methodologies",
      "Software Development Lifecycle",
      "SDLC",
      "DevOps",
      "Jira",
      "Confluence"
    ]
  },
  {
    title: "Technical Tools",
    skills: [
      "Salesforce DevOps Center",
      "Lightning Web Components",
      "HTML",
      "CSS",
      "JSON",
      "Workbench",
      "Pipedrive",
      "Google Drive",
      "Airtable",
      "Slack",
      "ZoomInfo",
      "RingCentral",
      "ServiceNow",
      "NetSuite",
      "Jira",
      "Confluence",
      "Canva",
      "Microsoft"
    ]
  }
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