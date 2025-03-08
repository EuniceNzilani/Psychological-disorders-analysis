import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MindEase</div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/screening">Screening</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* Replace the button with a Link to the AuthPage */}
      <Link to="/login" className="login-button">Login/Signup</Link>
    </header>
  );
}

export default Header;