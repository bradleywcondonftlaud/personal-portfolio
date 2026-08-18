import React, { useState } from 'react';
import './About.css';

const milestones = [
  {
    id: 'nclh',
    logo: '/images/timeline/nclh.png',
    title: 'Norwegian Cruise Line Holdings',
    label: 'Salesforce Administrator',
    date: 'August 2021 – February 2024',
<<<<<<< HEAD
    details:
      'Joined Norwegian Cruise Line Holdings after completing three rounds of interviews during the COVID-19 pandemic and became part of the team supporting Salesforce across key areas of the business. My primary focus included the Guest Services and Casino Sales organizations, where I worked with users and business stakeholders to improve processes, troubleshoot issues, and translate operational needs into scalable Salesforce solutions. I redesigned portions of the Salesforce experience to better reflect NCLH branding and create a more intuitive experience for users. I worked extensively with Service Cloud, Omni-Channel, Knowledge, Live Chat, Flow, and related technologies while supporting hundreds of Salesforce users. One of my most impactful automation projects transformed a process for creating more than 700 users, reducing what had previously required roughly an hour of manual work to approximately 15 minutes. I also helped drive adoption of a key Salesforce solution from approximately 20% to more than 90% by focusing on usability, process alignment, and the needs of the employees actually using the system. My work included developing solutions such as case-transfer automation, Omni-Supervisor capabilities, and other enhancements designed to make customer-service operations more efficient. I also identified and helped address a serious Salesforce security vulnerability before it could become a larger incident. My time at NCLH gave me a strong foundation in enterprise Salesforce administration and shaped my approach of understanding the business process first, then using technology and automation to improve it.',
=======
    details: 'Supported a large Salesforce Service Cloud environment used by high-volume corporate service teams across the organization. Administered users, profiles, permission sets, case-management processes, Omni-Channel routing, Salesforce Knowledge, Live Chat, and other platform capabilities while partnering with business stakeholders to identify operational needs and deliver practical system enhancements. Developed automation that reduced manual administrative work, improved the consistency of user-facing processes, and made it easier for service representatives to complete common tasks. Also supported interface upgrades, troubleshooting, testing, documentation, release activities, and security-related platform improvements that strengthened adoption, reliability, and the overall Salesforce user experience.',
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
  },

  {
    id: 'cci',
    logo: '/images/timeline/cci-training-center.png',
    title: 'CCI Training Center',
    label: 'Zoho Administrator',
<<<<<<< HEAD
    date: '2024',
    details:
      'Joined CCI Training Center for a short-term project focused on implementing and configuring Zoho to support the organization’s business processes. I helped translate operational requirements into a structured CRM solution rather than simply recreating existing manual processes inside a new platform. The implementation included configuring approximately 12 modules, 16 layouts, and more than 140 fields to support the organization’s data and workflow requirements. I also worked with Zoho Journey Builder and automation capabilities to create more connected experiences across the system. Where native configuration was not sufficient, I worked with Deluge functions to support more advanced requirements. The project expanded my experience beyond the Salesforce ecosystem and reinforced how transferable strong CRM architecture, data modeling, and automation skills can be across platforms.',
=======
    date: 'June 2024 - July 2024',
    details: 'Designed and configured a customized Zoho CRM solution that supported the organization’s operational and customer-management requirements. Built and refined multiple modules, page layouts, fields, workflows, journey-based processes, and Deluge functions while translating business needs into a structured and maintainable CRM architecture. Worked through detailed configuration requirements to improve how information was collected, organized, updated, and accessed across the system. The implementation established more consistent processes, improved visibility into organizational activity, reduced reliance on disconnected tracking methods, and provided the organization with a more scalable foundation for managing data, workflows, and customer interactions.',
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
  },

  {
    id: 'automate-this',
    logo: '/images/timeline/automate-this.png',
    title: 'Automate This!',
    label: 'Featured Guest',
    date: 'December 2024',
<<<<<<< HEAD
    details:
      'Joined Salesforce Distinguished Architect and automation expert Jennifer Lee for a live episode of Automate This! focused on creative declarative automation. I demonstrated a personal project that transformed Salesforce certification study questions into daily practice messages delivered directly to a mobile phone. The solution used Salesforce automation together with email-to-text gateways to create a lightweight study system without requiring a custom mobile application. The project reflected my interest in using Flow and declarative tools for problems that extend beyond traditional business use cases. It also demonstrated how personal projects can provide a practical environment for experimenting with Salesforce capabilities and developing new technical skills. Appearing on Automate This! gave me the opportunity to share that approach with the broader Salesforce community.',
=======
    details: 'Appeared on Salesforce’s Automate This! series to demonstrate a practical automation solution and explain how Salesforce administrators can use Flow to address real operational challenges. Walked viewers through the purpose of the solution, the business problem it addressed, the design decisions behind the automation, and the way the completed process improved the experience for users. The appearance provided an opportunity to share technical knowledge with the broader Salesforce community while demonstrating an ability to explain complex automation concepts in an approachable and practical manner. This milestone also marked the beginning of increased visibility within the Salesforce ecosystem as a solution builder, educator, presenter, and community contributor.',
  },
  {
    id: 'serviceblazer',
    logo: '/images/timeline/serviceblazer-community.png',
    title: 'Serviceblazer Community Group',
    label: 'Community Co-Leader',
    date: 'December 2024 – Present',
    details: 'Selected to co-lead the Serviceblazer Community Group, helping create educational programming, facilitate professional conversations, support Salesforce practitioners, and promote knowledge sharing throughout the ecosystem. Collaborates with fellow community leaders to plan events, identify relevant topics, coordinate speakers, host discussions, and create opportunities for members to learn from one another. Helps make technical and career-focused information more accessible to administrators, consultants, service professionals, and other members of the Salesforce community. Contributed to the continued growth and recognition of an award-winning community while building a reputation as an approachable, dependable, and actively engaged leader committed to helping others strengthen their skills and advance their careers.',
  },
  {
    id: 'cloudfirst',
    logo: '/images/timeline/cloudfirst-labs.png',
    title: 'CloudFirst Labs',
    label: 'Salesforce Builder',
    date: 'March 2025 - June 2025',
    details:
      'Continue building thoughtful Salesforce solutions, exploring automation, and turning hands-on learning into useful experiences for the wider community.',
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
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
<<<<<<< HEAD
    details:
      'Joined Waste Solution Services as Technology & Systems Specialist with responsibility for helping design, implement, and operate the company’s Salesforce environment as a core business platform. I worked closely with leadership and business stakeholders to translate an evolving sales and operations process into a scalable Salesforce architecture rather than simply adapting an existing implementation. My work included Sales Cloud and Service Cloud configuration, data modeling, Flow automation, integrations, user experience design, release management, and custom Lightning Web Components. I designed solutions supporting the company’s workflow from customer discovery and previous-invoice analysis through service confirmation, estimating, proposal development, management review, and eventual customer approval. A significant portion of the implementation involved building structured work-management processes using custom objects such as Proposal Work Items and Confirmation Work Items, together with queue-based assignment and Omni-Channel capacity management. I also helped build interfaces that allowed employees to review uploaded invoices, validate parsed data, confirm service information, monitor proposal progress, and move work through defined operational stages without relying on disconnected spreadsheets or manual handoffs. The environment incorporated technologies and tools including Salesforce Flow, Lightning Web Components, RingCentral, ZoomInfo, Einstein Activity Capture, Slack, Jira, and Salesforce DevOps Center. I established and worked within a structured deployment lifecycle spanning development, UAT and training, and production environments so that Salesforce changes could be tested and released more predictably. The experience gave me the opportunity to operate not only as a Salesforce administrator but as a systems owner and solution architect responsible for connecting business process, automation, data, user experience, and change management into a cohesive platform.',
=======
    details: 'Began working as an independent Salesforce consultant, supporting clients with platform configuration, automation, solution design, troubleshooting, and administrative improvements. Collaborated directly with stakeholders to understand business challenges, clarify requirements, recommend appropriate Salesforce capabilities, and translate operational needs into scalable technical solutions. The consulting work expanded professional experience beyond supporting a single internal Salesforce organization by introducing a wider variety of business processes, environments, users, and implementation needs. Continued strengthening skills in solution architecture, stakeholder communication, automation design, documentation, testing, and the delivery of Salesforce improvements that balance immediate business needs with long-term platform maintainability.',
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
  },

  {
    id: 'dreamforce',
    logo: '/images/timeline/dreamforce-2025.png',
    title: 'Dreamforce 2025',
    label: 'Admin Theatre Speaker',
    date: 'October 2025',
<<<<<<< HEAD
    details:
      'Selected to speak in the Salesforce Admin Theatre at Dreamforce 2025, presenting a session titled “Building Personal Projects to Land Your Next Salesforce Role.” The session focused on using personal Salesforce projects as a practical way to develop skills that may be difficult to gain through a current job alone. I shared how administrators can move beyond Trailhead exercises by identifying real problems, designing solutions, and building projects that demonstrate both technical ability and business thinking. The presentation also explored how those projects can become meaningful portfolio pieces during a job search. My goal was to show that professional development does not have to stop when an employer cannot provide opportunities to work with a particular Salesforce feature. Speaking at Dreamforce represented an important milestone in my transition from primarily consuming Salesforce community knowledge to actively contributing my own experiences and ideas to the ecosystem.',
  },

=======
    details: 'Led the design and implementation of a customized Salesforce platform supporting complex waste-management proposal, invoice-review, service-confirmation, and quoting operations. Designed a scalable data model connecting customers, properties, opportunities, proposal work items, previous accounts, invoices, line items, confirmation work, and related operational records. Developed automation that transformed uploaded customer invoices into structured Salesforce data, reducing manual entry and improving the consistency of downstream processes. Created custom Lightning Web Components, screen flows, routing processes, review interfaces, and queue-based experiences that helped employees complete complex work more efficiently. Also supported integrations, requirements gathering, testing, Jira-based delivery, user acceptance testing, DevOps Center deployments, release management, documentation, and organizational change as the company transitioned from legacy tracking systems to a centralized Salesforce environment.',
  },
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
  {
    id: 'admins-podcast',
    logo: '/images/timeline/salesforce-admins-podcast.png',
    title: 'Salesforce Admins Podcast',
    label: 'Podcast Guest',
<<<<<<< HEAD
    date: 'October 2025',
    details:
      'Joined the Salesforce Admins Podcast to discuss my Salesforce journey and some of the lessons I learned while developing my career as an administrator. The conversation included the role personal projects can play in building skills, gaining confidence, and demonstrating capabilities that may not appear in someone’s formal job description. I shared practical examples of using hands-on experimentation to explore Salesforce features and solve problems outside of a traditional work environment. We also discussed career development and the importance of finding ways to create your own opportunities when the next professional step is not immediately available. Appearing on an official Salesforce podcast gave me the opportunity to share experiences that I hoped other administrators navigating similar career challenges could learn from. It also represented another step in becoming an active contributor to the Salesforce community rather than simply a participant in it.',
  },

=======
    date: 'November 2025',
    details: 'Appeared as a featured guest on the Salesforce Admins Podcast to discuss professional growth, community involvement, Salesforce automation, and lessons learned throughout a nontraditional career journey. Shared experiences related to developing Salesforce expertise, creating practical solutions, participating in the Trailblazer Community, and pursuing opportunities that increased professional visibility. Discussed the importance of continuous learning, hands-on experimentation, relationship building, and communicating the business value behind technical work. The conversation was intended to encourage Salesforce administrators to continue building, sharing their knowledge, and contributing to the ecosystem even when their career path does not follow a traditional route. The appearance expanded professional reach and reinforced a reputation as an authentic and engaged Salesforce community voice.',
  },
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
  {
    id: 'dreamin-roomie',
    logo: '/images/timeline/dreamin-roomie-connect.png',
    title: 'The Dreamin’ Roomie Connect',
<<<<<<< HEAD
    label: 'Co-Creator',
    date: 'July 2026 – Present',
    details:
      'Co-created The Dreamin’ Roomie Connect after recognizing a recurring problem within the Salesforce community: conference attendees often want to split hotel costs but have no structured way to find a compatible roommate before an event. What began as a community-focused idea has evolved into a full product concept designed around compatibility, trust, safety, and the unique experience of traveling to professional conferences. I have led much of the product definition, including account creation, identity verification, attendee profiles, roommate preferences, event access, listings, match requests, messaging, blocking and reporting, notifications, and safety requirements. The matching experience considers practical roommate factors such as sleep schedules, snoring, CPAP use, noise sensitivity, preferred room temperature, smoking and alcohol preferences, accessibility needs, budget, and lodging dates rather than treating roommate selection as a simple classified listing. I have also worked extensively on the product’s data model, security model, application architecture, acceptance criteria, compatibility rules, and production-MVP documentation. The current implementation is being developed as a modern web application with a strong emphasis on creating clearly documented business rules that can be implemented consistently by both human developers and AI coding agents. I have used tools including GitHub, Claude Code, ChatGPT, Figma, Supabase, React, TypeScript, and Vercel throughout the design and development process while coordinating implementation, testing, documentation, and release workflows. The project has become one of my most comprehensive examples of applying the skills I developed as a Salesforce administrator to broader product management, systems architecture, UX design, data modeling, security, and software-development problems. Ultimately, The Dreamin’ Roomie Connect represents my transition from building solutions inside an existing business system to defining and building an entire product from the ground up.',
  },
=======
    label: 'Founder & Product Lead',
    date: 'June 2026 – Present',
    details: 'Founded The Dreamin’ Roomie Connect, a platform designed to help conference attendees find compatible roommates, reduce lodging expenses, and make professional events more accessible. Developed the initial product vision, defined the target audience, identified the core user experience, and began designing the technical foundation needed to support member profiles, event participation, roommate preferences, matching, messaging, notifications, authentication, and account management. Leads the platform’s product strategy, branding, user-experience design, data modeling, Salesforce architecture, security planning, and application-development approach. The project combines entrepreneurial leadership with hands-on solution design and provides an opportunity to build an original product that addresses a recognizable challenge faced by members of professional and community-driven event ecosystems.'  },
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <main className="about-page">
      <section className="about-grid" aria-labelledby="about-heading">
        <article className="about-panel about-story">
          <h1 id="about-heading">Never Miss a Chance to Sparkle</h1>

          <p>
<<<<<<< HEAD
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
=======
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
>>>>>>> cc3b6068c053ec7f2f2f73c22ae4c31104c0f11f
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
