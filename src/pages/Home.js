import React from 'react';
import FeatureCard from '../components/FeatureCards/FeatureCard';
import './Home.css';

function Home() {

    const featureCardsData = [
        { 
        title: "INNOVATIVE SOLUTION BUILDER", 
        description: "I enjoy looking beyond the obvious solution and finding smarter, more creative ways to solve business challenges with Salesforce. By combining automation, thoughtful data architecture, custom interfaces, and emerging technologies, I build solutions that improve efficiency while creating better experiences for both users and customers.", 
        glowColor: "cyan" 
        },
        { 
        title: "HUMAN-CENTERED BUILDER", 
        description: "I design Salesforce experiences around the people who will use them every day. Whether I am building a Flow, configuring Service Cloud, developing a custom interface, or improving an existing process, I focus on reducing friction, increasing adoption, and helping users work with greater confidence.", 
        glowColor: "orange" 
        },
        { 
        title: "COMMUNITY-DRIVEN LEADER", 
        description: "Community has played an important role in my Salesforce journey, and I believe strongly in helping others grow alongside me. As a Serviceblazer Community Group co-leader, speaker, and content contributor, I share practical knowledge, encourage collaboration, and help create spaces where people feel welcomed, supported, and inspired.", 
        glowColor: "magenta" 
        },
        { 
        title: "RESOURCEFUL AND ADAPTABLE", 
        description: "I am not afraid to step into an unfamiliar challenge, learn what is needed, and find a way forward. I approach new tools, complex requirements, and unexpected obstacles with curiosity and persistence, using experimentation, research, and continuous improvement to turn uncertainty into practical results.", 
        glowColor: "gold" 
        },
    ];

  return (
    <div className="container home-container">
      <div className="homepage-grid">
        <div className="hero-text">
          <p className="hero-subtitle">HELLO, I'M</p>
          <h1 className="hero-name">BRADLEY CONDON</h1>
          <h2 className="hero-tagline">SALESFORCE ADMINISTRATOR</h2>
          <p className="hero-quote">"Never miss a chance to sparkle."</p>
          <a href="/contact" className="btn-primary">LET'S CONNECT &rarr;</a>
        </div>
        <div className="hero-image-container">
          <img src="/homepage.gif" alt="Bradley Condon" className="hero-image" />
        </div>

        <div className="highlights-grid" aria-label="Professional highlights">
          {featureCardsData.map((cardData) => (
            <FeatureCard
              key={cardData.title}
              title={cardData.title}
              description={cardData.description}
              glowColor={cardData.glowColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
