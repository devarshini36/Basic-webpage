import React from 'react';
import './Navbar.css'; // Make sure to import your CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className="logo" />
        Webpage
      </h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
