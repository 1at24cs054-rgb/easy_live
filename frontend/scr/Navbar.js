import React, { useState, useEffect } from 'react';

const Navbar = ({ currentLanguage, onLanguageChange, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h1>EasyLiving</h1>
        </div>
        <div className="nav-menu">
          <a href="#home" className="nav-link active" onClick={() => handleNavClick('home')}>
            {translations[currentLanguage]?.home || 'Home'}
          </a>
          <a href="#rent" className="nav-link" onClick={() => handleNavClick('section-rent')}>
            {translations[currentLanguage]?.rent || 'Rent'}
          </a>
          <a href="#pg" className="nav-link" onClick={() => handleNavClick('section-pg')}>
            {translations[currentLanguage]?.pg || 'PGs'}
          </a>
          <a href="#lease" className="nav-link" onClick={() => handleNavClick('section-lease')}>
            {translations[currentLanguage]?.lease || 'Lease'}
          </a>
          <a href="#coliving" className="nav-link" onClick={() => handleNavClick('section-coliving')}>
            {translations[currentLanguage]?.coliving || 'Co-living'}
          </a>
          <a href="#buy" className="nav-link" onClick={() => handleNavClick('section-buy')}>
            {translations[currentLanguage]?.buy || 'Buy'}
          </a>
          <a href="#contact" className="nav-link" onClick={() => handleNavClick('contact')}>
            {translations[currentLanguage]?.contact || 'Contact'}
          </a>
        </div>
        <div className="language-selector">
          {['en', 'hi', 'kn'].map(lang => (
            <button
              key={lang}
              className={`lang-btn ${currentLanguage === lang ? 'active' : ''}`}
              onClick={() => onLanguageChange(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;