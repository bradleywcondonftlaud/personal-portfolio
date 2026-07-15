import React from 'react';
import profileImg from '../assets/profile.png';
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
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-subtitle">HELLO, I'M</p>
          <h1 className="hero-name">BRADLEY CONDON</h1>
          <h2 className="hero-tagline">SALESFORCE ADMINISTRATOR</h2>
          <p className="hero-quote">"Never miss a chance to sparkle."</p>
          <a href="/contact" className="btn-primary">LET'S CONNECT &rarr;</a>
        </div>
        <div className="hero-image-container">
          <img src={profileImg} alt="Bradley Condon" className="hero-image" />
        </div>
      </div>

        {/* Highlights & Experience Badges */}
            {/* NEW: The section remains the same, but the population logic is reusable */}
            <div className="highlights-grid">
                
                {/* NEW: We now automatically generate cards using the mapping logic below */}
                {featureCardsData.map((cardData, index) => (
                // Use 'FeatureCard' for each entry. Pass all the data in via Props.
                // Note the 'key={index}' - React requires a unique key for list items.
                <FeatureCard 
                    key={index} 
                    title={cardData.title} 
                    description={cardData.description} 
                    glowColor={cardData.glowColor} 
                />
                ))}

            </div>
            </div>
        );
        }

export default Home;