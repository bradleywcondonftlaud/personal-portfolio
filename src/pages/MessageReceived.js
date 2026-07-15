/* --- src/pages/MessageReceived.js --- */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MessageReceived.css'; // Importing your CSS file

function MessageReceived() {
  const navigate = useNavigate();

  // Use the useEffect hook to handle the automatic redirection
  useEffect(() => {
    // 1. Set a 10-second timer (10000 milliseconds)
    const timer = setTimeout(() => {
      console.log('Automatically redirecting back to Home...');
      navigate('/'); // Use React Router to navigate back home
    }, 10000);

    // 2. Clean up the timer if the user leaves the page before it fires
    return () => clearTimeout(timer);
  }, [navigate]); // navigate is a dependency of this effect

  return (
    <div className="container message-received-container">
      {/* The 'MessageCard' uses the glow-card aesthetic defined globally 
         in App.css, ensuring seamless brand integration.
      */}
      <div className="glow-card message-card">
        
        {/* Animated Confirmation Icon with Neon Halo */}
        <div className="icon-wrapper">
          <div className="success-icon-halo"></div>
          <div className="success-icon">&#10003;</div>
        </div>

        {/* Clear Confirmation Headline with Neon Glow Text */}
        <h1 className="success-headline">MESSAGE RECEIVED</h1>
        
        {/* Descriptive paragraphs for reassurance */}
        <div className="message-details">
          <p className="confirmation-main">
            Thank you for reaching out!
          </p>
          <p className="confirmation-subtext">
            Your message was successfully transmitted and routed.
          </p>
          <p className="reassurance">
            A confirmation has been logged, and I will review your inquiry and get in touch shortly.
          </p>
        </div>

        {/* Dynamic, automated redirection notice */}
        <div className="auto-redirect-notice">
          <p>You will be automatically returned to the Homepage in a few moments...</p>
          <div className="loading-bar-wrapper">
            <div className="loading-bar-fill"></div>
          </div>
        </div>

        {/* Immediate manual alternative button */}
        <a href="/" className="btn-primary">
          RETURN TO HOME NOW &rarr;
        </a>
      </div>
    </div>
  );
}

export default MessageReceived;