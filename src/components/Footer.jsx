import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to='/' id='footer-logo'>
        Frontender
      </Link>
      <hr id='footer-line'/>
      <ul id='footer-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
