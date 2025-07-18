import React, { useState } from 'react';
import './Header.css';

import logo from './assets/logo.png'; // ✅ Correct import path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className='logo-img' />
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'show' : ''}`}>
          <a href="#features">Services</a>
          <a href="#pricing">Specialists</a>
          <a href="#support">Our Message</a>
          <button className="btn">WhatsApp</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
