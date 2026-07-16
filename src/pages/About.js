import React from 'react';
import './About.css';

function About() {
  const timelineData = [
    {
      year: "July 2026 - Present",
      title: "Founder & Product Architect",
      company: "The Dreamin’ Roomie Connect",
      desc: "Founded and began developing The Dreamin’ Roomie Connect, a platform designed to help conference attendees find compatible roommates and reduce the cost of event travel. Leading the product strategy, user experience design, Salesforce architecture, data modeling, authentication approach, and development of the platform’s matching, messaging, event, and member profile functionality."
    },
    {
      year: "2025",
      title: "Dreamforce Speaker & Podcast Guest",
      company: "Salesforce Ecosystem",
      desc: "Presented live breakout sessions on career-building via custom sandboxes; featured on The Salesforce Admins Podcast."
    },
    {
      year: "2024",
      title: "Salesforce Consultant & Community Lead",
      company: "CloudFirst Labs & Serviceblazers",
      desc: "Executed contract implementations while step-building community initiatives as a Serviceblazer Group Co-Leader."
    },
    {
      year: "2022 - 2024",
      title: "CRM Specialist",
      company: "Norwegian Cruise Line Holdings",
      desc: "Administered Service Cloud platform parameters for high-volume corporate teams; managed interface upgrades and major security mitigations."
    }
  ];

  return (
    <div className="container">
      <h2>Never Miss a Chance to Sparkle</h2>
      <div className="about-layout">
        <div className="about-bio glow-card">
          <p>For someone living with social anxiety, the idea of "sparkling" can feel entirely counterintuitive, if not downright terrifying. Why would you ever choose to make yourself stand out when crowds and large groups feel overwhelming? For a long time, my instinct was to stay under the radar. But throughout my career, I discovered a powerful truth: sparkling doesn’t have to mean being the loudest voice in the room. It means channeling your focus, building things that matter, and letting the quality of your work speak for you. Salesforce became the space where I found my stride—a platform where my natural attention to detail and quiet observation could be transformed into meaningful, visible impact. I live by this quote because it reminds me that despite the anxiety, every complex problem is an opportunity to step up, deliver excellence, and let your capability shine.</p>
          <p>Today, I am a certified Salesforce Administrator, Service Cloud Consultant, AI Specialist, and Platform App Builder who thrives on transforming complex business challenges into practical, scalable solutions. My technical toolkit includes end-to-end Salesforce administration, data management, declarative process automation, reporting and interactive dashboards, system integrations, and user support, alongside developing custom solutions using Flow, Apex, and Lightning Web Components.</p>
          <p>My Salesforce journey began as a customer service representative for CITY Furniture’s eCommerce team. Working as an end-user on the front lines, I saw firsthand how a CRM directly impacts the daily friction felt by service agents. Driven by curiosity about how the platform could be configured to make their lives easier, I dove into Trailhead modules late into the evening, building practice reports and studying configurations. That self-driven curiosity launched my official career when I transitioned into my first Salesforce Administrator role with Norwegian Cruise Line Holdings, and my path in the ecosystem has expanded ever since.</p>
          <p>Throughout my professional milestones, I have partnered cross-functionally with sales, service, operations, and technology teams to eradicate manual overhead, raise data quality standards, and strengthen platform adoption. I approach every architecture project with a combination of technical curiosity, meticulous execution, and a grounded focus on the end-users who rely on the solution.</p>
          <p>Pushing past my comfort zone has also allowed me to give back to the ecosystem that built me. I serve as an active co-leader of our award-winning Serviceblazer Community Group, and I have had the privilege of sharing my declarative automation strategies live on Salesforce’s Automate This! YouTube series, The Salesforce Admins Podcast, and on stage at the Dreamforce Admin Theatre.</p>
          <p>What I enjoy most about this platform is that there is always another puzzle to solve, a bottleneck to streamline, or a person to empower. Whether I am engineering a robust automation, mapping out a custom schema, or supporting a global user tier, my guiding principle remains unchanged: design thoughtful solutions that make work easier and deliver undeniable business value.</p>
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