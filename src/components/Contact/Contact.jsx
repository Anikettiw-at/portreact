import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  
 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "651d058c-3c74-43d7-9ecf-63282e0b92b0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
      event.target.reset(); // Reset the form after successful submission
      
    }
 };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available for new projects — feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" /> <p>pt5602238@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" /> <p>+91 7607107616</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" /> <p>Lucknow, Uttar Pradesh</p>
            </div>

          </div>
        </div>


        <form onSubmit={onSubmit} className="contact-right">
        
          <label >Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label  >Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label  >Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          />

          <button type="submit" className="contact-submit">
            Submit now
          </button>

     
        </form>
      </div>
    </div>
  );
}


export default Contact;
