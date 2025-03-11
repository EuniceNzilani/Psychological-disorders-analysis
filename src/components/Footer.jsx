import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-description">Stay updated with the latest news and updates.</p>
          <div className="newsletter-input">
            <FaEnvelope className="newsletter-icon" />
            <input type="email" placeholder="Enter your email" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2023 MindEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;