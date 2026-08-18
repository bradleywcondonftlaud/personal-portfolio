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
      'Joined Norwegian Cruise Line Holdings after completing three rounds of interviews during the COVID-19 pandemic and became part of the team supporting Salesforce across key areas of the business. My primary focus included the Guest Services and Casino Sales organizations, where I worked with users and business stakeholders to improve processes, troubleshoot issues, and translate operational needs into scalable Salesforce solutions. I redesigned portions of the Salesforce experience to better reflect NCLH branding and create a more intuitive experience for users. I worked extensively with Service Cloud, Omni-Channel, Knowledge, Live Chat, Flow, and related technologies while supporting hundreds of Salesforce users. One of my most impactful automation projects transformed a process for creating more than 700 users, reducing what had previously required roughly an hour of manual work to approximately 15 minutes. I also helped drive adoption of a key Salesforce solution from approximately 20% to more than 90% by focusing on usability, process alignment, and the needs of the employees actually using the system. My work included developing solutions such as case-transfer automation, Omni-Supervisor capabilities, and other enhancements designed to make customer-service operations more efficient. I also identified and helped address a serious Salesforce security vulnerability before it could become a larger incident. My time at NCLH gave me a strong foundation in enterprise Salesforce administration and shaped my approach of understanding the business process first, then using technology and automation to improve it.',
  },

  {
    id: 'cci',
    logo: '/images/timeline/cci-training-center.png',
    title: 'CCI Training Center',
    label: 'Zoho Administrator',
    date: '2024',
    details:
      'Joined CCI Training Center for a short-term project focused on implementing and configuring Zoho to support the organization’s business processes. I helped translate operational requirements into a structured CRM solution rather than simply recreating existing manual processes inside a new platform. The implementation included configuring approximately 12 modules, 16 layouts, and more than 140 fields to support the organization’s data and workflow requirements. I also worked with Zoho Journey Builder and automation capabilities to create more connected experiences across the system. Where native configuration was not sufficient, I worked with Deluge functions to support more advanced requirements. The project expanded my experience beyond the Salesforce ecosystem and reinforced how transferable strong CRM architecture, data modeling, and automation skills can be across platforms.',
  },

  {
    id: 'automate-this',
    logo: '/images/timeline/automate-this.png',
    title: 'Automate This!',
    label: 'Featured Guest',
    date: 'December 2024',
    details:
      'Joined Salesforce Distinguished Architect and automation expert Jennifer Lee for a live episode of Automate This! focused on creative declarative automation. I demonstrated a personal project that transformed Salesforce certification study questions into daily practice messages delivered directly to a mobile phone. The solution used Salesforce automation together with email-to-text gateways to create a lightweight study system without requiring a custom mobile application. The project reflected my interest in using Flow and declarative tools for problems that extend beyond traditional business use cases. It also demonstrated how personal projects can provide a practical environment for experimenting with Salesforce capabilities and developing new technical skills. Appearing on Automate This! gave me the opportunity to share that approach with the broader Salesforce community.',
  },

  {
    id: 'serviceblazer',
    logo: '/images/timeline/serviceblazer-community.png',
    title: 'Serviceblazer Community Group',
    label: 'Community Co-Leader',
    date: 'January 2025 – Present',
    details:
      'Became increasingly involved in the Salesforce Serviceblazer community through conversations about customer service, Service Cloud, and the evolving role of AI in service operations. That involvement eventually led to an opportunity to help lead the Serviceblazer Virtual Community Group for the Americas. As one of four co-leaders, I help create opportunities for Salesforce professionals to learn from one another, exchange ideas, and connect around common challenges in customer service technology. My involvement allows me to combine my interest in Salesforce with my background supporting real-world service operations. It has also given me opportunities to facilitate conversations with professionals who bring very different perspectives and levels of experience to the ecosystem. Community leadership has become an important extension of my professional development because teaching, discussing, and sharing solutions often deepens my own understanding as much as it helps others.',
  },

  {
    id: 'cloudfirst',
    logo: '/images/timeline/cloudfirst-labs.png',
    title: 'CloudFirst Labs',
    label: 'Salesforce Builder',
    date: '2025',
    details:
      'Joined CloudFirst Labs as a Salesforce consultant and builder, continuing to expand my hands-on experience designing solutions for real business requirements. The work gave me another environment in which to apply Salesforce administration, automation, configuration, and solution-design skills outside of a traditional internal administrator role. I continued developing a process-first approach in which the business problem is understood before choosing the technology used to solve it. Projects provided opportunities to experiment with new capabilities while also reinforcing the importance of maintainability and usability in Salesforce design. The experience complemented my community work by allowing lessons learned through building to become material I could share with other Salesforce professionals. It also helped strengthen my ability to move between business requirements and technical implementation.',
  },

  {
    id: 'wss',
    logo: '/images/timeline/waste-solution-services.png',
    title: 'Waste Solution Services',
    label: 'Technology & Systems Specialist',
    date: 'June 2025 – July 2026',
    details:
      'Joined Waste Solution Services as Technology & Systems Specialist with responsibility for helping design, implement, and operate the company’s Salesforce environment as a core business platform. I worked closely with leadership and business stakeholders to translate an evolving sales and operations process into a scalable Salesforce architecture rather than simply adapting an existing implementation. My work included Sales Cloud and Service Cloud configuration, data modeling, Flow automation, integrations, user experience design, release management, and custom Lightning Web Components. I designed solutions supporting the company’s workflow from customer discovery and previous-invoice analysis through service confirmation, estimating, proposal development, management review, and eventual customer approval. A significant portion of the implementation involved building structured work-management processes using custom objects such as Proposal Work Items and Confirmation Work Items, together with queue-based assignment and Omni-Channel capacity management. I also helped build interfaces that allowed employees to review uploaded invoices, validate parsed data, confirm service information, monitor proposal progress, and move work through defined operational stages without relying on disconnected spreadsheets or manual handoffs. The environment incorporated technologies and tools including Salesforce Flow, Lightning Web Components, RingCentral, ZoomInfo, Einstein Activity Capture, Slack, Jira, and Salesforce DevOps Center. I established and worked within a structured deployment lifecycle spanning development, UAT and training, and production environments so that Salesforce changes could be tested and released more predictably. The experience gave me the opportunity to operate not only as a Salesforce administrator but as a systems owner and solution architect responsible for connecting business process, automation, data, user experience, and change management into a cohesive platform.',
  },

  {
    id: 'dreamforce',
    logo: '/images/timeline/dreamforce-2025.png',
    title: 'Dreamforce 2025',
    label: 'Admin Theatre Speaker',
    date: 'October 2025',
    details:
      'Selected to speak in the Salesforce Admin Theatre at Dreamforce 2025, presenting a session titled “Building Personal Projects to Land Your Next Salesforce Role.” The session focused on using personal Salesforce projects as a practical way to develop skills that may be difficult to gain through a current job alone. I shared how administrators can move beyond Trailhead exercises by identifying real problems, designing solutions, and building projects that demonstrate both technical ability and business thinking. The presentation also explored how those projects can become meaningful portfolio pieces during a job search. My goal was to show that professional development does not have to stop when an employer cannot provide opportunities to work with a particular Salesforce feature. Speaking at Dreamforce represented an important milestone in my transition from primarily consuming Salesforce community knowledge to actively contributing my own experiences and ideas to the ecosystem.',
  },

  {
    id: 'admins-podcast',
    logo: '/images/timeline/salesforce-admins-podcast.png',
    title: 'Salesforce Admins Podcast',
    label: 'Podcast Guest',
    date: 'October 2025',
    details:
      'Joined the Salesforce Admins Podcast to discuss my Salesforce journey and some of the lessons I learned while developing my career as an administrator. The conversation included the role personal projects can play in building skills, gaining confidence, and demonstrating capabilities that may not appear in someone’s formal job description. I shared practical examples of using hands-on experimentation to explore Salesforce features and solve problems outside of a traditional work environment. We also discussed career development and the importance of finding ways to create your own opportunities when the next professional step is not immediately available. Appearing on an official Salesforce podcast gave me the opportunity to share experiences that I hoped other administrators navigating similar career challenges could learn from. It also represented another step in becoming an active contributor to the Salesforce community rather than simply a participant in it.',
  },

  {
    id: 'dreamin-roomie',
    logo: '/images/timeline/dreamin-roomie-connect.png',
    title: 'The Dreamin’ Roomie Connect',
    label: 'Co-Creator',
    date: 'July 2026 – Present',
    details:
      'Co-created The Dreamin’ Roomie Connect after recognizing a recurring problem within the Salesforce community: conference attendees often want to split hotel costs but have no structured way to find a compatible roommate before an event. What began as a community-focused idea has evolved into a full product concept designed around compatibility, trust, safety, and the unique experience of traveling to professional conferences. I have led much of the product definition, including account creation, identity verification, attendee profiles, roommate preferences, event access, listings, match requests, messaging, blocking and reporting, notifications, and safety requirements. The matching experience considers practical roommate factors such as sleep schedules, snoring, CPAP use, noise sensitivity, preferred room temperature, smoking and alcohol preferences, accessibility needs, budget, and lodging dates rather than treating roommate selection as a simple classified listing. I have also worked extensively on the product’s data model, security model, application architecture, acceptance criteria, compatibility rules, and production-MVP documentation. The current implementation is being developed as a modern web application with a strong emphasis on creating clearly documented business rules that can be implemented consistently by both human developers and AI coding agents. I have used tools including GitHub, Claude Code, ChatGPT, Figma, Supabase, React, TypeScript, and Vercel throughout the design and development process while coordinating implementation, testing, documentation, and release workflows. The project has become one of my most comprehensive examples of applying the skills I developed as a Salesforce administrator to broader product management, systems architecture, UX design, data modeling, security, and software-development problems. Ultimately, The Dreamin’ Roomie Connect represents my transition from building solutions inside an existing business system to defining and building an entire product from the ground up.',
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
