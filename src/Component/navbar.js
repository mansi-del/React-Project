import React from 'react';
import { Link } from 'react-scroll';
import './Style/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="caro" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="card" smooth={true} duration={500}>Menu</Link>
        </li>
        <li>
          <Link to="about_us" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}>Service</Link>
        </li>
        <li>
          <Link to="reviews" smooth={true} duration={500}>Review</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
