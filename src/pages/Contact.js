import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container contact-container">
      <h2>CONTACT</h2>
      <div className="contact-layout glow-card">
        {/* Salesforce Web-to-Lead Post Action Endpoint */}
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D6g0000053mSQ" 
          method="POST" 
          className="contact-form"
        >
          <h3>Let's Build Something Together</h3>
          
          {/* Hidden Core Salesforce Structural Parameters */}
          <input type="hidden" name="oid" value="00D6g0000053mSQ" />
          {/* Note: Update the value below to your live site domain once deployed online */}
          <input type="hidden" name="retURL" value="www.bradleycondon.com" />
          <input type="hidden" id="lead_source" name="lead_source" value="Web" />

          {/* Optional Debugging Lines (Uncomment value parameters during local sandbox tests if needed) */}
          {/* <input type="hidden" name="debug" value="1" /> */}
          {/* <input type="hidden" name="debugEmail" value="bradleywcondonftlaud@gmail.com" /> */}

          {/* Form Fields Styled to Match the Cosmic Aesthetic */}
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" maxLength="40" required placeholder="First Name" />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" maxLength="80" required placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" maxLength="40" placeholder="e.g., Hiring Manager" />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" maxLength="40" placeholder="Company Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" maxLength="80" required placeholder="your.email@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" maxLength="40" placeholder="(555) 555-5555" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Message</label>
            <textarea id="description" name="description" rows="5" required placeholder="Tell me about your project or open opportunities..."></textarea>
          </div>

          <button type="submit" name="submit" className="btn-primary" style={{ border: 'none', width: '100%', justifyContent: 'center' }}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;