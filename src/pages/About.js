import React from 'react';
import './About.css';

function About() {
  const timelineData = [
    { year: "Present", title: "Technology & Systems Specialist", company: "Waste Solution Services", desc: "Leading the Salesforce architecture implementation and managing system transitions from legacy tracking platforms." },
    { year: "2025", title: "Dreamforce Speaker & Podcast Guest", company: "Salesforce Ecosystem", desc: "Presented live breakout sessions on career-building via custom sandboxes; featured on The Salesforce Admins Podcast." },
    { year: "2024", title: "Salesforce Consultant & Community Lead", company: "CloudFirst Labs & Serviceblazers", desc: "Executed contract implementations while step-building community initiatives as a Serviceblazer Group Co-Leader." },
    { year: "2022 - 2024", title: "CRM Specialist", company: "Norwegian Cruise Line Holdings", desc: "Administered Service Cloud platform parameters for high-volume corporate teams; managed interface upgrades and major security mitigations." }
  ];

  return (
    <div className="container">
      <h2>ABOUT ME</h2>
      <div className="about-layout">
        <div className="about-bio glow-card">
          <h3>Professional Narrative</h3>
          <p>I am a certified Salesforce Administrator, Service Cloud Consultant, AI Specialist, and Platform App Builder who enjoys transforming complex business challenges into practical, scalable solutions. My experience includes Salesforce administration, data management, process automation, reporting and dashboards, system integrations, user support, and the development of custom solutions using Flow, Apex, and Lightning Web Components.</p>
          <p>My Salesforce journey began while I was working as a customer service representative for CITY Furniture’s eCommerce team. After experiencing firsthand how Salesforce affected the daily work of service agents, I became curious about how the platform could be configured to make those processes easier. I began completing Trailhead modules, creating reports and dashboards, and studying to become a Salesforce Administrator. That curiosity ultimately led to my first official Salesforce Administrator role with Norwegian Cruise Line Holdings and launched a career that has continued to grow ever since.</p>
          <p>Throughout my career, I have partnered with sales, service, operations, and technology teams to improve data quality, reduce manual work, strengthen user adoption, and establish Salesforce as a trusted source of business information. I approach every project with a combination of technical curiosity, attention to detail, and a strong focus on the people who will ultimately use the solution.</p>
          <p>I am also an active member of the Salesforce community and a co-leader of the award-winning Serviceblazer Community Group. I have shared my experience through Salesforce’s Automate This YouTube series, the Salesforce Admins Podcast, and the Dreamforce Admin Theatre, where I presented practical strategies for building Salesforce projects that demonstrate real-world skills.</p>
          <p>What I enjoy most about Salesforce is that there is always another problem to solve, process to improve, or person to empower. Whether I am designing an automation, building a dashboard, supporting users, or helping another professional grow, my goal is always the same: create thoughtful solutions that make work easier and deliver meaningful business value.</p>
          <div style={{ marginTop: '30px' }}>
            <a href="/resume.pdf" download className="btn-primary">
              <span>&#128190;</span> DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="about-timeline">
          <h3>Career Milestones</h3>
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-badge">{item.year}</div>
                <div className="timeline-content glow-card">
                  <h4>{item.title}</h4>
                  <h5>{item.company}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;