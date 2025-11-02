import React from 'react';
import '../styles/Header.css';

/**
 * Header Component - Main navigation header
 * @param {Object} props 
 */
const Header = ({ onLogoClick }) => {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="header-logo" onClick={onLogoClick} role="button" tabIndex={0}>
          <h1 className="logo-text">
            NEWS PORTAL
          </h1>
        </div>
        
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                <span className="nav-home"></span>
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;