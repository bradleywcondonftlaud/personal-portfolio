/* --- src/pages/Contact.js (FIXED & FULLY STYLED) --- */
import React from 'react';
import './Contact.css'; // Importing your dedicated CSS file

function Contact() {
  return (
    <div className="container contact-container">
      {/* 
         Headline using your established text gradient and shadow styles.
      */}
      <h2>CONTACT</h2>
      
      {/*
         Using 'glow-card' for the background aesthetic and 'contact-layout' 
         for the specific form structure and grid alignment defined in CSS.
      */}
      <div className="contact-layout glow-card">
        
        {/* Salesforce Web-to-Case POST Action Endpoint with correct encoding and Org ID */}
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D6g0000053mSQ" 
          method="POST"
          className="contact-form"
        >

          {/* Let's keep the user's specific headline. */}
          <h3>Let's Build Something Together</h3>

          {/* 
             --- FIXED SYNTAX: Add quotes to type="hidden" and self-closing tags ---
          */}
          <input type="hidden" name="orgid" value="00D6g0000053mSQ" />
          
          {/*
             --- FIXED SYNTAX: Update retURL with correct protocol (https) ---
          */}
          <input type="hidden" name="retURL" value="https://www.bradleycondon.com/received" />
          
          {/* 
             NOTE: Debugging elements must remain commented out or use correct JSX comment syntax.
             If you want to debug, uncomment these and provide values.
          */}
          {/* <input type="hidden" name="debug" value=1> */}
          {/* <input type="hidden" name="debugEmail" value="bradleywcondonftlaud@gmail.com"> */}

          {/* 
             We wrap each field group in a <div> with the class 'form-group'.
             This is how we apply the cosmic layout grid without using <br> tags.
          */}
          
          <div className="form-group">
            {/* 
               --- FIXED SYNTAX: Change html attribute 'for' to 'htmlFor' ---
            */}
            <label htmlFor="name">Contact Name</label>
            <input id="name" maxLength="80" name="name" size="20" type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" maxLength="80" name="email" size="20" type="text" placeholder="your.email@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" maxLength="40" name="phone" size="20" type="text" placeholder="(555) 555-5555" />
          </div>

          <div className="form-group">
            <label htmlFor="00N6g00000Z5c7z">Contact Request Reason</label>
            <select id="00N6g00000Z5c7z" name="00N6g00000Z5c7z" title="Contact Request Reason">
              <option value="">--None--</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Other">Other</option>
              <option value="Partnership">Partnership</option>
              <option value="Provide Feedback">Provide Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="00N6g00000Z6Q6C">Contact Request Reason Detail</label>
            <select id="00N6g00000Z6Q6C" name="00N6g00000Z6Q6C" title="Contact Request Reason Detail">
              <option value="">--None--</option>
              <option value="Portfolio Content Feedback">Portfolio Content Feedback</option>
              <option value="Portfolio Design Feedback">Portfolio Design Feedback</option>
              <option value="Project Feedback">Project Feedback</option>
              <option value="Project Collaboration">Project Collaboration</option>
              {/* FIXED JSX: Escape special characters like ' with &#39; */}
              <option value="Dreamin&#39; Roomie Connect Partnership">Dreamin&#39; Roomie Connect Partnership</option>
              <option value="Affiliate Program Partnership">Affiliate Program Partnership</option>
              <option value="Full-Time Employment">Full-Time Employment</option>
              <option value="Part-Time Employment">Part-Time Employment</option>
              <option value="Temporary Employment">Temporary Employment</option>
              <option value="Project-Based Employment">Project-Based Employment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" rows="5" placeholder="Tell me more about your inquiry..."></textarea>
          </div>

          {/* 
             Applying your primary button style and aligning it to the right 
             using explicit margin configuration.
          */}
          <input 
            type="submit" 
            name="submit" 
            value="SUBMIT MESSAGE" 
            className="btn-primary" 
            style={{ margin: '30px 0 0 auto', display: 'block', border: 'none' }}
          />

        </form>
      </div>
    </div>
  );
}

export default Contact;