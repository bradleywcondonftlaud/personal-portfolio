/* --- src/components/FeatureCards/FeatureCard.js --- */
import React from 'react';
import './FeatureCards.css';

// The component accepts 'props' (properties) passed from the main page.
function FeatureCard({ title, description, glowColor }) {
  
  // Combine the base class with the specific dynamic color class.
  const glowClass = `card-title-glow glow-color-${glowColor}`;

  return (
    // 'reusable-feature-card' applies the basic layout.
    // 'highlight-card' applies the common card aesthetic.
    <div className="reusable-feature-card highlight-card">
      <div className="card-title-wrapper">
        {/* The glow effect sitting behind the title */}
        <div className={glowClass}></div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;