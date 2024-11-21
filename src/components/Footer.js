import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="info">
          <h4>Company Info</h4>
          <p>About | Legal</p>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <p>Hosting | Cloud</p>
        </div>
        <div className="contact">
          <h4>Get in Touch</h4>
          <p>1800-555-663</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MedicalFunc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
