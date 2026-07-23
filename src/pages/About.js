import React, { useState } from 'react';

const milestones = [
  {
    id: 'nclh',
    logo: '/images/nclh-logo.png', // Replace with your actual image path
    title: 'Norwegian Cruise Line Holdings',
    details: 'Applied and was offered a position after three rounds of interviews during the COVID-19 pandemic. Supported Guest Services and Casino Sales teams, completely updated the UI to reflect company branding, and prevented a major security breach.'
  },
  {
    id: 'cci',
    logo: '/images/cci-logo.png',
    title: 'CCI Training Center',
    details: 'Worked on a short-term contract project as a Zoho Administrator to implement Zoho for the organization.'
  },
  {
    id: 'serviceblazer',
    logo: '/images/serviceblazer-logo.png',
    title: 'Serviceblazer Community Group',
    details: 'Became heavily involved in the community and currently serve as one of the four co-leaders of the Serviceblazer Virtual Community Group (AMER).'
  },
  {
    id: 'automate-this',
    logo: '/images/automate-this-logo.png',
    title: 'Automate This! Appearance',
    details: 'Submitted a declarative automation to Jennifer Lee. Streamed live to showcase how I automated my certification study routine by sending practice questions via text message using email-to-text gateways.'
  },
  {
    id: 'wss',
    logo: '/images/wss-logo.png',
    title: 'Waste Solution Services',
    details: 'Currently working as the Technology and Systems Specialist, assisting in the full implementation and configuration of their Salesforce org.'
  },
  {
    id: 'dreamforce',
    logo: '/images/dreamforce-logo.png',
    title: 'Dreamforce 2025 Speaker',
    details: 'Presented a session titled "Building Personal Projects to Land Your Next Salesforce Role" in the Dreamforce Admin Theatre.'
  }
];

export default function AboutLayout() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[35%_30%_35%] gap-6 items-stretch">
      
      {/* LEFT COLUMN: Static Text */}
      <div className="border-2 border-cyan-400 rounded-2xl p-6 text-white bg-slate-900/50">
        <h2 className="text-2xl font-bold mb-4">Never Miss a Chance to Sparkle</h2>
        <p className="mb-4 text-sm leading-relaxed">
          For someone living with social anxiety, the idea of "sparkling" can feel entirely counterintuitive. 
          But throughout my career, I discovered a powerful truth: sparkling doesn't have to mean being the loudest voice in the room.
        </p>
        <p className="text-sm leading-relaxed">
          Today, I am a certified Salesforce Administrator, Service Cloud Consultant, and Platform App Builder who thrives on transforming complex business challenges into practical, scalable solutions.
        </p>
      </div>

      {/* CENTER COLUMN: Vertical Timeline */}
      <div className="relative flex flex-col items-center py-4 gap-8 before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-white before:z-0">
        {milestones.map((milestone) => (
          <button 
            key={milestone.id}
            onClick={() => setActiveMilestone(milestone)}
            className="relative z-10 w-24 h-24 rounded-lg bg-slate-800 border-2 border-slate-600 hover:border-cyan-400 transition-colors overflow-hidden flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <img 
              src={milestone.logo} 
              alt={milestone.title} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* RIGHT COLUMN: Dynamic Details */}
      <div className="border-2 border-cyan-400 rounded-2xl p-6 text-white bg-slate-900/50 flex flex-col items-center justify-center text-center min-h-[300px]">
        {activeMilestone ? (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{activeMilestone.title}</h3>
            <p className="text-sm leading-relaxed">{activeMilestone.details}</p>
          </div>
        ) : (
          <p className="text-lg font-medium text-slate-300">
            Select an item from the middle to see additional details.
          </p>
        )}
      </div>

    </div>
  );
}