import React, { useState } from 'react';
import './About.css';

const milestones = [
  {
    id: 'nclh',
    logo: '/images/timeline/nclh.png',
    title: 'Norwegian Cruise Line Holdings',
    label: 'Salesforce Administrator',
    date: 'August 2021 – February 2024',
    details:
      'Joined after three rounds of interviews during the COVID-19 pandemic. Supported the Guest Services and Casino Sales teams, refreshed the Salesforce experience to match company branding, and helped prevent a major security breach.',
  },
  {
    id: 'cci',
    logo: '/images/timeline/cci-training-center.png',
    title: 'CCI Training Center',
    label: 'Zoho Administrator',
    date: '2024',
    details:
      'Worked on a short-term contract project as a Zoho Administrator, helping the organization implement and configure Zoho for its teams.',
  },
  {
    id: 'automate-this',
    logo: '/images/timeline/automate-this.png',
    title: 'Automate This!',
    label: 'Featured Guest',
    date: '2024',
    details:
      'Joined Jennifer Lee live to demonstrate a declarative automation that turned certification study questions into daily text-message practice using email-to-text gateways.',
  },
  {
    id: 'serviceblazer',
    logo: '/images/timeline/serviceblazer-community.png',
    title: 'Serviceblazer Community Group',
    label: 'Community Co-Leader',
    date: '2024 – Present',
    details:
      'Became deeply involved in the Salesforce community and now serve as one of four co-leaders of the Serviceblazer Virtual Community Group for the Americas.',
  },
  {
    id: 'cloudfirst',
    logo: '/images/timeline/cloudfirst-labs.png',
    title: 'CloudFirst Labs',
    label: 'Salesforce Builder',
    date: '2025',
    details:
      'Continue building thoughtful Salesforce solutions, exploring automation, and turning hands-on learning into useful experiences for the wider community.',
  },
  {
    id: 'wss',
    logo: '/images/timeline/waste-solution-services.png',
    title: 'Waste Solution Services',
    label: 'Technology & Systems Specialist',
    date: 'June 2025 – July 2026',
    details:
      'Lead technology and systems work while supporting the full implementation and configuration of the company’s Salesforce organization.',
  },
  {
    id: 'dreamforce',
    logo: '/images/timeline/dreamforce-2025.png',
    title: 'Dreamforce 2025',
    label: 'Admin Theatre Speaker',
    date: 'October 2025',
    details:
      'Presented “Building Personal Projects to Land Your Next Salesforce Role” in the Dreamforce Admin Theatre.',
  },
  {
    id: 'admins-podcast',
    logo: '/images/timeline/salesforce-admins-podcast.png',
    title: 'Salesforce Admins Podcast',
    label: 'Podcast Guest',
    date: '2025',
    details:
      'Shared practical lessons from my Salesforce journey with the Salesforce Admins community and discussed how personal projects can create career momentum.',
  },
  {
    id: 'dreamin-roomie',
    logo: '/images/timeline/dreamin-roomie-connect.png',
    title: 'The Dreamin’ Roomie Connect',
    label: 'Co-Creator',
    date: '2025 – Present',
    details:
      'Co-created a community project that helps Salesforce event attendees find compatible roommates and make meaningful connections before arriving.',
  },
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <main className="about-page">
      <section className="about-grid" aria-labelledby="about-heading">
        <article className="about-panel about-story">
          <h1 id="about-heading">Never Miss a Chance to Sparkle</h1>

          <p>
            For someone living with social anxiety, the idea of “sparkling” can
            feel entirely counterintuitive. But throughout my career, I
            discovered a powerful truth: sparkling doesn’t have to mean being
            the loudest voice in the room.
          </p>

          <p>
            It can mean showing up with curiosity, listening closely, solving
            the problem no one else has noticed, and sharing what you learn so
            the next person has an easier path forward.
          </p>

          <p>
            Today, I am a certified Salesforce Administrator, Service Cloud
            Consultant, and Platform App Builder who thrives on transforming
            complex business challenges into practical, scalable solutions. My
            journey has taken me from implementing business systems and
            strengthening security to building personal projects, speaking at
            Dreamforce, and helping lead the Serviceblazer community.
          </p>

          <p>
            Every stop along the way has reinforced the same lesson: growth
            happens when we take the chance to contribute—even when stepping
            into the spotlight feels uncomfortable.
          </p>

          <a className="about-resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">
            View my résumé
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        <div className="career-timeline" aria-label="Career highlights">
          <div className="timeline-spine" aria-hidden="true" />
          {milestones.map((milestone, index) => (
            <button
              className={`milestone milestone-${index % 2 === 0 ? 'above' : 'below'}${
                activeMilestone?.id === milestone.id ? ' is-active' : ''
              }`}
              key={milestone.id}
              type="button"
              aria-pressed={activeMilestone?.id === milestone.id}
              aria-label={`Show details for ${milestone.title}`}
              onClick={() => setActiveMilestone(milestone)}
            >
              <span className="milestone-connector" aria-hidden="true" />
              <span className="milestone-image-frame">
                <img src={milestone.logo} alt="" />
              </span>
            </button>
          ))}
        </div>

        <aside className={`about-panel about-detail${activeMilestone ? ' has-selection' : ''}`} aria-live="polite">
          {activeMilestone ? (
            <div className="detail-content" key={activeMilestone.id}>
              <div className="detail-heading-row">
                <div>
                  <h2>{activeMilestone.label}</h2>
                  <p className="detail-eyebrow">{activeMilestone.title}</p>
                </div>
                <p className="detail-date">{activeMilestone.date}</p>
              </div>
              <div className="detail-description">
                <p>{activeMilestone.details}</p>
                <p>
                  Each experience has strengthened my ability to listen closely,
                  simplify complex needs, and build technology that supports the
                  people using it.
                </p>
              </div>
            </div>
          ) : (
            <p className="detail-placeholder">
              Select a milestone below to see additional details.
            </p>
          )}
        </aside>
      </section>
    </main>
  );
}

export default About;
