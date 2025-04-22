import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">Vishwa</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => handleLinkClick('home')}>Home</a></li>
        <li><a href="#about" onClick={() => handleLinkClick('about')}>About Us</a></li>
        <li><a href="#services" onClick={() => handleLinkClick('services')}>Services</a></li>
        <li><a href="#portfolio" onClick={() => handleLinkClick('portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
