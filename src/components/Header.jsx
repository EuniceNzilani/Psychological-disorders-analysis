import React from 'react';
import { useState } from "react";

import { Link } from 'react-router-dom';
import './Header.css';
import ProfilePopup from './ProfilePopup';
function Header() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };
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
      <div className="profile-icon" onClick={toggleProfilePopup} style={{ cursor: "pointer" }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="currentColor"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
  </svg>
</div>

      {isProfilePopupOpen && <ProfilePopup onClose={toggleProfilePopup} />}
    </header>
  );
}

export default Header;