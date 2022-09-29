import React from 'react';
import '../../Styles/Main.css';

import colorPalette from '../../../features-img/color-palette.png';
import component from '../../../features-img/component.png';
import portfolio from '../../../features-img/portfolio.png';
import websites from '../../../features-img/websites.png';


function Features() {

  

  return (
    <div id='features-section'>
      <h2>
        Frontender helps you practice Real-World web applications and prepares
        you to your first job.
      </h2>
      <div id='features'>
        <div className='feature-item'>
          <div className='icons-div'>
            <img src={websites} alt="" className='icons' />
          </div>
          <p>
            Explore projects based on real websites with great designs which are perfect for gaining more experience.
          </p>
        </div>
        <div className='feature-item'>
          <div className='icons-div'>
          <img src={component} alt="" className='icons' />
          </div>
          <p>
            From simple components to full websites, advance your front-end abilities and go from zero to pro.
          </p>
        </div>
        <div className='feature-item'>
          <div className='icons-div'>
          <img src={colorPalette} alt="" className='icons' />
          </div>
          <p>
            Find color palettes, fonts and more to help you with your projects.
          </p>
        </div>
        <div className='feature-item'>
          <div className='icons-div'>
          <img src={portfolio} alt="" className='icons' />
          </div>
          <p>
            Add your Clone websites to your portfolio to showcase your abilities to potantial employers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
