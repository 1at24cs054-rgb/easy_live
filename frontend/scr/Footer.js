import React from 'react';

const Footer = ({ translations, currentLanguage }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EasyLiving</h3>
            <p>{translations[currentLanguage]?.['footer-desc'] || 'Your trusted partner'}</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">{translations[currentLanguage]?.['privacy-policy'] || 'Privacy Policy'}</a>
            <a href="#terms">{translations[currentLanguage]?.['terms'] || 'Terms of Service'}</a>
            <a href="#contact">{translations[currentLanguage]?.['contact-us'] || 'Contact Us'}</a>
          </div>
          <div className="footer-contact">
            <p>{translations[currentLanguage]?.['email'] || '📧 contact@easyliving.com'}</p>
            <p>{translations[currentLanguage]?.['phone'] || '📞 +91 98765 43210'}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{translations[currentLanguage]?.['copyright'] || '© 2026 EasyLiving.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
