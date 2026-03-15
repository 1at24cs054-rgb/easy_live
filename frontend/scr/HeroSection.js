import React from 'react';

const HeroSection = ({ translations, currentLanguage, onStartExploring }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {translations[currentLanguage]?.['hero-title'] || 'Find your next EasyLiving space'}
          </h1>
          <p className="hero-subtitle">
            {translations[currentLanguage]?.['hero-subtitle'] || 'Rent, PGs, Lease, Co-living, Buy - all in one place'}
          </p>
          <button className="cta-button" onClick={onStartExploring}>
            {translations[currentLanguage]?.['start-exploring'] || 'Start Exploring'}
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="hero-icon">🏠</div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;