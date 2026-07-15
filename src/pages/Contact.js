/* --- src/pages/Contact.js (FULL SOLUTION: FIXED & DEPENDENT LOGIC) --- */
import React from 'react';
import './Contact.css'; // Importing your dedicated CSS file

function Contact() {

  // Phase 1: The JavaScript Data Object for your Dependency Matrix.
  const dependencyData = {
    "Job Opportunity": [
      "Full-Time Employment",
      "Part-Time Employment",
      "Temporary Employment",
      "Project-Based Employment",
      "Other"
    ],
    "Partnership": [
      "Dreamin&#39; Roomie Connect Partnership",
      "Affiliate Program Partnership",
      "Other"
    ],
    "Provide Feedback": [
      "Portfolio Content Feedback",
      "Portfolio Design Feedback",
      "Project Feedback",
      "Other"
    ],
    "Other": [
      "General Inquiry",
      "Other"
    ]
  };

  // Phase 2: The JavaScript Function to handle dynamic updates.
  const handleReasonChange = (e) => {
    // 1. Get the newly selected reason string.
    const selectedReason = e.target.value;
    
    // 2. Identify the unique Child 'Detail' field element in the DOM.
    const detailFieldId = "00N6g00000Z6Q6C";
    const detailField = document.getElementById(detailFieldId);
    
    // 3. WIPE: Completely clear all current options from the child dropdown.
    detailField.innerHTML = "";
    
    // 4. Create a default, required '--None--' option for all states.
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "--None--";
    detailField.add(defaultOption);

    // 5. Check if the matrix contains child data for this parent reason.
    if (selectedReason in dependencyData) {
      const dependentOptions = dependencyData[selectedReason];
      
      // 6. MAP & INJECT: Rebuild the picklist using only the valid children.
      dependentOptions.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        // Escape special characters for display (e.g., &#39; -> ')
        option.text = optionText.replace('&#39;', "'");
        detailField.add(option);
      });
    }
  };

  return (
    <div className="container contact-container">
      {/* Established typography style for the main header. */}
      <h2>CONTACT</h2>
      
      {/* Feature the card background and use the styled contact grid structure. */}
      <div className="contact-layout glow-card">
        
        {/* The corrected Salesforce Web-to-Case endpoint, action, and method. */}
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D6g0000053mSQ" 
          method="POST"
          className="contact-form"
        >

          {/* We must retain the user's specific text verbatim. */}
          <h3>Let's Build Something Together</h3>

          {/* Hidden, essential structural Salesforce parameters. */}
          <input type="hidden" name="orgid" value="00D6g0000053mSQ" />
          <input type="hidden" name="retURL" value="https://www.bradleycondon.com/received" />

          {/* Optional, commented-out debug elements. */}
          {/* <input type="hidden" name="debug" value=1> */}
          {/* <input type="hidden" name="debugEmail" value="bradleywcondonftlaud@gmail.com"> */}

          {/* Form fields integrated into our cosmic layout grid. */}
          
          <div className="form-group">
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

          {/* --- THE ACTIVE PARENT PICKLIST --- */}
          <div className="form-group">
            <label htmlFor="00N6g00000Z5c7z">Contact Request Reason</label>
            {/* We attach our dependency handler to this specific event: onChange. 
               This is how the magic connects.
            */}
            <select 
              id="00N6g00000Z5c7z" 
              name="00N6g00000Z5c7z" 
              title="Contact Request Reason"
              onChange={handleReasonChange} // We call the logic function here
            >
              <option value="">--None--</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Other">Other</option>
              <option value="Partnership">Partnership</option>
              <option value="Provide Feedback">Provide Feedback</option>
            </select>
          </div>

          {/* --- THE DEPENDENT CHILD PICKLIST --- */}
          <div className="form-group">
            <label htmlFor="00N6g00000Z6Q6C">Contact Request Reason Detail</label>
            {/* The 'id' on this field MUST match Phase 2's target function.
               We start this field empty, with only the mandatory default, 
               as it is controlled by the logic above.
            */}
            <select 
              id="00N6g00000Z6Q6C" 
              name="00N6g00000Z6Q6C" 
              title="Contact Request Reason Detail"
            >
              <option value="">--None--</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" rows="5" placeholder="Tell me more about your inquiry..."></textarea>
          </div>

          {/* Align the cosmic primary button style to the right. */}
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