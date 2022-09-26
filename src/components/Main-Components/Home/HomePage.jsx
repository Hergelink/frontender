import React from 'react';
import CallToAction from './CallToAction';
import Features from './Features';
import HeroSection from './HeroSection';

function HomePage() {
  return (
    <div className='main-container-div'>
      <HeroSection />
      <Features />
      <CallToAction />
    </div>
  );
}

export default HomePage;
