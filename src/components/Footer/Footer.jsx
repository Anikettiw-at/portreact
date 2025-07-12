import React from 'react';
import './Footer.css';

const Footer = () => {
  // Use public folder for assets or inline SVG
  const userIconSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am a full stack web developer from Lucknow, Uttar Pradesh with 1 year of experience.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <div className="user-icon">
              {userIconSvg}
            </div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Aniket Tiwari. All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
