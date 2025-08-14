import React, { useState } from 'react';
import './Header.css';

import logo from './assets/logo.png'; // ✅ Correct import path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header" id="home">
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
          <a href="#facilities" onClick={(e) => scrollToSection(e, 'facilities')}>Services</a>
          <a href="#doctors" onClick={(e) => scrollToSection(e, 'doctors')}>Specialists</a>
          <a href="#ceo-section" onClick={(e) => scrollToSection(e, 'ceo-section')}>Our Message</a>
          <a className="btn" href="https://wa.me/922758257692?text=Hello%2C%20I%20want%20to%20book%20an%20appointment" 
  target="_blank">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
};

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Header;
