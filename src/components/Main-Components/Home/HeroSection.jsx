import React from 'react';
import '../../Styles/Main.css';
import hero from '../../../photos/hero-image.png';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div id='hero-section'>
      <div id='hero-description'>
        <h1>Become a Front-end <span id='expert-text'>Expert</span></h1>
        <h3>Expand your front-end knowledge through cloning real world websites</h3>
        <Link to='projects'><button>Projects</button></Link>
      </div>
      <div id='hero-container'>
        <img src={hero} alt="hero image" id='hero-image' />
      </div>
    </div>
  )
}

export default HeroSection
