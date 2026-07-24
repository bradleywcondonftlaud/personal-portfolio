import React, { useState } from 'react';
import './About.css';

const milestones = [
  {
    id: 'nclh',
    logo: '/images/timeline/nclh.png',
    title: 'Norwegian Cruise Line Holdings',
    label: 'Salesforce Administrator',
    date: 'August 2021 – February 2024',
    details: 'Supported a large Salesforce Service Cloud environment used by high-volume corporate service teams across the organization. Administered users, profiles, permission sets, case-management processes, Omni-Channel routing, Salesforce Knowledge, Live Chat, and other platform capabilities while partnering with business stakeholders to identify operational needs and deliver practical system enhancements. Developed automation that reduced manual administrative work, improved the consistency of user-facing processes, and made it easier for service representatives to complete common tasks. Also supported interface upgrades, troubleshooting, testing, documentation, release activities, and security-related platform improvements that strengthened adoption, reliability, and the overall Salesforce user experience.',
  },
  {
    id: 'cci',
    logo: '/images/timeline/cci-training-center.png',
    title: 'CCI Training Center',
    label: 'Zoho Administrator',
    date: '2024',
    details: 'Designed and configured a customized Zoho CRM solution that supported the organization’s operational and customer-management requirements. Built and refined multiple modules, page layouts, fields, workflows, journey-based processes, and Deluge functions while translating business needs into a structured and maintainable CRM architecture. Worked through detailed configuration requirements to improve how information was collected, organized, updated, and accessed across the system. The implementation established more consistent processes, improved visibility into organizational activity, reduced reliance on disconnected tracking methods, and provided the organization with a more scalable foundation for managing data, workflows, and customer interactions.',
  },
  {
    id: 'automate-this',
    logo: '/images/timeline/automate-this.png',
    title: 'Automate This!',
    label: 'Featured Guest',
    date: '2024',
    details: 'Appeared on Salesforce’s Automate This! series to demonstrate a practical automation solution and explain how Salesforce administrators can use Flow to address real operational challenges. Walked viewers through the purpose of the solution, the business problem it addressed, the design decisions behind the automation, and the way the completed process improved the experience for users. The appearance provided an opportunity to share technical knowledge with the broader Salesforce community while demonstrating an ability to explain complex automation concepts in an approachable and practical manner. This milestone also marked the beginning of increased visibility within the Salesforce ecosystem as a solution builder, educator, presenter, and community contributor.',
  },
  {
    id: 'serviceblazer',
    logo: '/images/timeline/serviceblazer-community.png',
    title: 'Serviceblazer Community Group',
    label: 'Community Co-Leader',
    date: '2024 – Present',
    details: 'Selected to co-lead the Serviceblazer Community Group, helping create educational programming, facilitate professional conversations, support Salesforce practitioners, and promote knowledge sharing throughout the ecosystem. Collaborates with fellow community leaders to plan events, identify relevant topics, coordinate speakers, host discussions, and create opportunities for members to learn from one another. Helps make technical and career-focused information more accessible to administrators, consultants, service professionals, and other members of the Salesforce community. Contributed to the continued growth and recognition of an award-winning community while building a reputation as an approachable, dependable, and actively engaged leader committed to helping others strengthen their skills and advance their careers.',
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
    details: 'Began working as an independent Salesforce consultant, supporting clients with platform configuration, automation, solution design, troubleshooting, and administrative improvements. Collaborated directly with stakeholders to understand business challenges, clarify requirements, recommend appropriate Salesforce capabilities, and translate operational needs into scalable technical solutions. The consulting work expanded professional experience beyond supporting a single internal Salesforce organization by introducing a wider variety of business processes, environments, users, and implementation needs. Continued strengthening skills in solution architecture, stakeholder communication, automation design, documentation, testing, and the delivery of Salesforce improvements that balance immediate business needs with long-term platform maintainability.',
  },
  {
    id: 'dreamforce',
    logo: '/images/timeline/dreamforce-2025.png',
    title: 'Dreamforce 2025',
    label: 'Admin Theatre Speaker',
    date: 'October 2025',
    details: 'Led the design and implementation of a customized Salesforce platform supporting complex waste-management proposal, invoice-review, service-confirmation, and quoting operations. Designed a scalable data model connecting customers, properties, opportunities, proposal work items, previous accounts, invoices, line items, confirmation work, and related operational records. Developed automation that transformed uploaded customer invoices into structured Salesforce data, reducing manual entry and improving the consistency of downstream processes. Created custom Lightning Web Components, screen flows, routing processes, review interfaces, and queue-based experiences that helped employees complete complex work more efficiently. Also supported integrations, requirements gathering, testing, Jira-based delivery, user acceptance testing, DevOps Center deployments, release management, documentation, and organizational change as the company transitioned from legacy tracking systems to a centralized Salesforce environment.',
  },
  {
    id: 'admins-podcast',
    logo: '/images/timeline/salesforce-admins-podcast.png',
    title: 'Salesforce Admins Podcast',
    label: 'Podcast Guest',
    date: '2025',
    details: 'Appeared as a featured guest on the Salesforce Admins Podcast to discuss professional growth, community involvement, Salesforce automation, and lessons learned throughout a nontraditional career journey. Shared experiences related to developing Salesforce expertise, creating practical solutions, participating in the Trailblazer Community, and pursuing opportunities that increased professional visibility. Discussed the importance of continuous learning, hands-on experimentation, relationship building, and communicating the business value behind technical work. The conversation was intended to encourage Salesforce administrators to continue building, sharing their knowledge, and contributing to the ecosystem even when their career path does not follow a traditional route. The appearance expanded professional reach and reinforced a reputation as an authentic and engaged Salesforce community voice.',
  },
  {
    id: 'dreamin-roomie',
    logo: '/images/timeline/dreamin-roomie-connect.png',
    title: 'The Dreamin’ Roomie Connect',
    label: 'Co-Creator',
    date: '2025 – Present',
    details: 'Founded The Dreamin’ Roomie Connect, a platform designed to help conference attendees find compatible roommates, reduce lodging expenses, and make professional events more accessible. Developed the initial product vision, defined the target audience, identified the core user experience, and began designing the technical foundation needed to support member profiles, event participation, roommate preferences, matching, messaging, notifications, authentication, and account management. Leads the platform’s product strategy, branding, user-experience design, data modeling, Salesforce architecture, security planning, and application-development approach. The project combines entrepreneurial leadership with hands-on solution design and provides an opportunity to build an original product that addresses a recognizable challenge faced by members of professional and community-driven event ecosystems.'  },
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <main className="about-page">
      <section className="about-grid" aria-labelledby="about-heading">
        <article className="about-panel about-story">
          <h1 id="about-heading">Never Miss a Chance to Sparkle</h1>

          <p>
            For someone living with social anxiety, the idea of
            "sparkling" can feel entirely counterintuitive, if not
            downright terrifying. Why would you ever choose to make
            yourself stand out when crowds and large groups feel
            overwhelming? For a long time, my instinct was to stay under
            the radar. But throughout my career, I discovered a powerful
            truth: sparkling doesn’t have to mean being the loudest voice
            in the room. It means channeling your focus, building things
            that matter, and letting the quality of your work speak for
            you. Salesforce became the space where I found my stride—a
            platform where my natural attention to detail and quiet
            observation could be transformed into meaningful, visible
            impact. I live by this quote because it reminds me that
            despite the anxiety, every complex problem is an opportunity
            to step up, deliver excellence, and let your capability
            shine.
          </p>

          <p>
            Today, I am a certified Salesforce Administrator, Service
            Cloud Consultant, AI Specialist, and Platform App Builder who
            thrives on transforming complex business challenges into
            practical, scalable solutions. My technical toolkit includes
            end-to-end Salesforce administration, data management,
            declarative process automation, reporting and interactive
            dashboards, system integrations, and user support, alongside
            developing custom solutions using Flow, Apex, and Lightning
            Web Components.
          </p>

          <p>
            My Salesforce journey began as a customer service
            representative for CITY Furniture’s eCommerce team. Working
            as an end-user on the front lines, I saw firsthand how a CRM
            directly impacts the daily friction felt by service agents.
            Driven by curiosity about how the platform could be
            configured to make their lives easier, I dove into Trailhead
            modules late into the evening, building practice reports and
            studying configurations. That self-driven curiosity launched
            my official career when I transitioned into my first
            Salesforce Administrator role with Norwegian Cruise Line
            Holdings, and my path in the ecosystem has expanded ever
            since.
          </p>

          <p>
            Throughout my professional milestones, I have partnered
            cross-functionally with sales, service, operations, and
            technology teams to eradicate manual overhead, raise data
            quality standards, and strengthen platform adoption. I
            approach every architecture project with a combination of
            technical curiosity, meticulous execution, and a grounded
            focus on the end-users who rely on the solution.
          </p>

          <p>
            Pushing past my comfort zone has also allowed me to give back
            to the ecosystem that built me. I serve as an active
            co-leader of our award-winning Serviceblazer Community Group,
            and I have had the privilege of sharing my declarative
            automation strategies live on Salesforce’s Automate This!
            YouTube series, The Salesforce Admins Podcast, and on stage
            at the Dreamforce Admin Theatre.
          </p>

          <p>
            What I enjoy most about this platform is that there is always
            another puzzle to solve, a bottleneck to streamline, or a
            person to empower. Whether I am engineering a robust
            automation, mapping out a custom schema, or supporting a
            global user tier, my guiding principle remains unchanged:
            design thoughtful solutions that make work easier and deliver
            undeniable business value.
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
