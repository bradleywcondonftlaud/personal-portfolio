import React, { useState } from 'react';
import './About.css';

const timelineData = [
  {
    year: 'May 2022 – March 2024',
    title: 'Salesforce CRM Specialist',
    company: 'Norwegian Cruise Line Holdings',
    image: '/images/timeline/nclh.png',
    desc: 'Supported a large Salesforce Service Cloud environment used by high-volume corporate service teams across the organization. Administered users, profiles, permission sets, case-management processes, Omni-Channel routing, Salesforce Knowledge, Live Chat, and other platform capabilities while partnering with business stakeholders to identify operational needs and deliver practical system enhancements. Developed automation that reduced manual administrative work, improved the consistency of user-facing processes, and made it easier for service representatives to complete common tasks. Also supported interface upgrades, troubleshooting, testing, documentation, release activities, and security-related platform improvements that strengthened adoption, reliability, and the overall Salesforce user experience.'
  },
  {
    year: 'June 2024 – July 2024',
    title: 'CRM Implementation Consultant',
    company: 'CCI Training Center',
    image: '/images/timeline/cci-training-center.png',
    desc: 'Designed and configured a customized Zoho CRM solution that supported the organization’s operational and customer-management requirements. Built and refined multiple modules, page layouts, fields, workflows, journey-based processes, and Deluge functions while translating business needs into a structured and maintainable CRM architecture. Worked through detailed configuration requirements to improve how information was collected, organized, updated, and accessed across the system. The implementation established more consistent processes, improved visibility into organizational activity, reduced reliance on disconnected tracking methods, and provided the organization with a more scalable foundation for managing data, workflows, and customer interactions.'
  },
  {
    year: 'December 2024',
    title: 'Featured Guest',
    company: 'Salesforce Automate This!',
    image: '/images/timeline/automate-this.png',
    desc: 'Appeared on Salesforce’s Automate This! series to demonstrate a practical automation solution and explain how Salesforce administrators can use Flow to address real operational challenges. Walked viewers through the purpose of the solution, the business problem it addressed, the design decisions behind the automation, and the way the completed process improved the experience for users. The appearance provided an opportunity to share technical knowledge with the broader Salesforce community while demonstrating an ability to explain complex automation concepts in an approachable and practical manner. This milestone also marked the beginning of increased visibility within the Salesforce ecosystem as a solution builder, educator, presenter, and community contributor.'
  },
  {
    year: 'December 2024 – Present',
    title: 'Community Group Co-Leader',
    company: 'Serviceblazer Community Group',
    image: '/images/timeline/serviceblazer-community.png',
    desc: 'Selected to co-lead the Serviceblazer Community Group, helping create educational programming, facilitate professional conversations, support Salesforce practitioners, and promote knowledge sharing throughout the ecosystem. Collaborates with fellow community leaders to plan events, identify relevant topics, coordinate speakers, host discussions, and create opportunities for members to learn from one another. Helps make technical and career-focused information more accessible to administrators, consultants, service professionals, and other members of the Salesforce community. Contributed to the continued growth and recognition of an award-winning community while building a reputation as an approachable, dependable, and actively engaged leader committed to helping others strengthen their skills and advance their careers.'
  },
  {
    year: 'March 2025 – June 2025',
    title: 'Salesforce Consultant',
    company: 'CloudFirst Labs',
    image: '/images/timeline/cloudfirst-labs.png',
    desc: 'Began working as an independent Salesforce consultant, supporting clients with platform configuration, automation, solution design, troubleshooting, and administrative improvements. Collaborated directly with stakeholders to understand business challenges, clarify requirements, recommend appropriate Salesforce capabilities, and translate operational needs into scalable technical solutions. The consulting work expanded professional experience beyond supporting a single internal Salesforce organization by introducing a wider variety of business processes, environments, users, and implementation needs. Continued strengthening skills in solution architecture, stakeholder communication, automation design, documentation, testing, and the delivery of Salesforce improvements that balance immediate business needs with long-term platform maintainability.'
  },
  {
    year: 'June 2025 – July 2026',
    title:
      'Technology & Systems Specialist and Salesforce Administrator',
    company: 'Waste Solution Services',
    image: '/images/timeline/waste-solution-services.png',
    desc: 'Led the design and implementation of a customized Salesforce platform supporting complex waste-management proposal, invoice-review, service-confirmation, and quoting operations. Designed a scalable data model connecting customers, properties, opportunities, proposal work items, previous accounts, invoices, line items, confirmation work, and related operational records. Developed automation that transformed uploaded customer invoices into structured Salesforce data, reducing manual entry and improving the consistency of downstream processes. Created custom Lightning Web Components, screen flows, routing processes, review interfaces, and queue-based experiences that helped employees complete complex work more efficiently. Also supported integrations, requirements gathering, testing, Jira-based delivery, user acceptance testing, DevOps Center deployments, release management, documentation, and organizational change as the company transitioned from legacy tracking systems to a centralized Salesforce environment.'
  },
  {
    year: 'October 2025',
    title: 'Admin Theatre Speaker',
    company: 'Dreamforce',
    image: '/images/timeline/dreamforce-2025.png',
    desc: 'Presented “Building Salesforce Projects to Land Your Next Role” in the Dreamforce Admin Theatre. Shared practical strategies for selecting meaningful project ideas, building solutions that demonstrate real Salesforce skills, documenting technical decisions, and presenting completed work in a way that communicates both technical ability and business value. Explained how aspiring and experienced Salesforce professionals can use personal projects, developer environments, custom applications, and portfolio content to strengthen their professional credibility. The presentation drew from personal career experience and provided attendees with actionable guidance for turning hands-on Salesforce work into compelling stories for resumes, interviews, networking conversations, and online portfolios. Speaking at Dreamforce represented a significant professional milestone and further established a visible presence within the Salesforce community.'
  },
  {
    year: 'October 2025',
    title: 'Featured Guest',
    company: 'Salesforce Admins Podcast',
    image: '/images/timeline/salesforce-admins-podcast.png',
    desc: 'Appeared as a featured guest on the Salesforce Admins Podcast to discuss professional growth, community involvement, Salesforce automation, and lessons learned throughout a nontraditional career journey. Shared experiences related to developing Salesforce expertise, creating practical solutions, participating in the Trailblazer Community, and pursuing opportunities that increased professional visibility. Discussed the importance of continuous learning, hands-on experimentation, relationship building, and communicating the business value behind technical work. The conversation was intended to encourage Salesforce administrators to continue building, sharing their knowledge, and contributing to the ecosystem even when their career path does not follow a traditional route. The appearance expanded professional reach and reinforced a reputation as an authentic and engaged Salesforce community voice.'
  },
  {
    year: 'July 2026 – Present',
    title: 'Founder and Product Architect',
    company: 'The Dreamin’ Roomie Connect',
    image: '/images/timeline/dreamin-roomie-connect.png',
    desc: 'Founded The Dreamin’ Roomie Connect, a platform designed to help conference attendees find compatible roommates, reduce lodging expenses, and make professional events more accessible. Developed the initial product vision, defined the target audience, identified the core user experience, and began designing the technical foundation needed to support member profiles, event participation, roommate preferences, matching, messaging, notifications, authentication, and account management. Leads the platform’s product strategy, branding, user-experience design, data modeling, Salesforce architecture, security planning, and application-development approach. The project combines entrepreneurial leadership with hands-on solution design and provides an opportunity to build an original product that addresses a recognizable challenge faced by members of professional and community-driven event ecosystems.'
  }
];

function About() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);

  const activeTimelineItem =
    activeTimelineIndex !== null
      ? timelineData[activeTimelineIndex]
      : null;

  const showTimelineItem = (index) => {
    setActiveTimelineIndex(index);
  };

  return (
    <div className="container about-page">
      <h2>Never Miss a Chance to Sparkle</h2>

      <div className="about-layout">
        <div className="about-bio glow-card">
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

          <div className="resume-button-wrapper">
            <a
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <section
          className="about-timeline"
          aria-labelledby="career-milestones-heading"
        >
          <div className="timeline-heading-row">
            <div>
              <h3 id="career-milestones-heading">
                Career Milestones
              </h3>

              <p className="timeline-instructions">
                Hover over, tab to, or select a logo to view the full
                milestone.
              </p>
            </div>
          </div>

          <div
            className="timeline-stage"
            onMouseLeave={() => setActiveTimelineIndex(null)}
          >
            <div className="timeline-scroller">
              <div
                className="horizontal-timeline"
                role="list"
              >
                {timelineData.map((item, index) => {
                  const isAbove = index % 2 === 0;
                  const isActive =
                    activeTimelineIndex === index;

                  return (
                    <article
                      key={`${item.company}-${item.year}`}
                      className={`horizontal-timeline-item ${
                        isAbove ? 'is-above' : 'is-below'
                      }`}
                      role="listitem"
                    >
                      <span
                        className="timeline-connector"
                        aria-hidden="true"
                      />

                      <span
                        className="timeline-node"
                        aria-hidden="true"
                      />

                      <button
                        type="button"
                        className={`timeline-trigger ${
                          isActive ? 'is-active' : ''
                        }`}
                        aria-label={`${item.title} at ${item.company}, ${item.year}. Show details.`}
                        aria-expanded={isActive}
                        aria-controls="timeline-detail-card"
                        onMouseEnter={() =>
                          showTimelineItem(index)
                        }
                        onFocus={() =>
                          showTimelineItem(index)
                        }
                        onBlur={() =>
                          setActiveTimelineIndex(null)
                        }
                        onClick={() =>
                          showTimelineItem(index)
                        }
                      >
                        <span className="timeline-logo-frame">
                          <img
                            src={item.image}
                            alt=""
                            className="timeline-logo"
                            loading="lazy"
                          />
                        </span>

                        <span className="timeline-year-label">
                          {item.year}
                        </span>
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              id="timeline-detail-card"
              className={`timeline-detail-overlay ${
                activeTimelineItem ? 'is-visible' : ''
              }`}
              aria-live="polite"
              aria-hidden={!activeTimelineItem}
            >
              {activeTimelineItem && (
                <div className="timeline-detail-card glow-card">
                  <p className="timeline-detail-year">
                    {activeTimelineItem.year}
                  </p>

                  <h4>{activeTimelineItem.title}</h4>
                  <h5>{activeTimelineItem.company}</h5>
                  <p>{activeTimelineItem.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;