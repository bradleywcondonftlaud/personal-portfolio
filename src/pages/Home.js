import React from 'react';
import FeatureCard from '../components/FeatureCards/FeatureCard';
import './Home.css';

function Home() {

    const featureCardsData = [
        { 
        title: "SALESFORCE EXPERT", 
        description: "Certified professional with hands-on experience delivering Salesforce solutions that drive adoption and maximize platform utility.", 
        glowColor: "cyan" 
        },
        { 
        title: "DREAMFORCE SPEAKER", 
        description: 'Presented "Building Personal Projects to Land Your Next Salesforce Role" live at Dreamforce, showcasing declarative automation and career paths.', 
        glowColor: "orange" 
        },
        { 
        title: "COMMUNITY BUILDER", 
        description: "Active co-leader of the Serviceblazer Community Group, passionate about resource sharing and supporting emerging ecosystem talent.", 
        glowColor: "magenta" 
        },
        { 
        title: "DETAIL ORIENTED", 
        description: "Deeply focused on clean, high-fidelity layouts, precise UX design configurations, and robust process automation engineering.", 
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
