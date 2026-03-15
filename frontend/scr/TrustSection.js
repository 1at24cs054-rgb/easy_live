import React from 'react';

const TrustSection = ({ translations, currentLanguage }) => {
  const trustItems = [
    { icon: '✅', key: 'verified-listings' },
    { icon: '🔒', key: 'secure-payments' },
    { icon: '🕒', key: 'support' }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        {trustItems.map((item, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <span>{translations[currentLanguage]?.[item.key] || item.key}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;