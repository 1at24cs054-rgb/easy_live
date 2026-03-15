import React, { useState } from 'react';

const PropertyCard = ({ property, onViewDetails, translations, currentLanguage }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="property-card fade-in">
      <div
        className="property-image"
        style={{ backgroundImage: `url('${property.image}')` }}
      >
        <div className="property-badge">{property.type.toUpperCase()}</div>
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">📍 {property.location}</p>
        <p className="property-description">{property.description}</p>
        <div className="property-details">
          <div className="property-price">
            ₹{property.price.toLocaleString()}
            {property.priceType === 'month' ? '/month' : ''}
          </div>
          <div className="property-features">
            {property.beds > 0 && <span>🛏️ {property.beds}</span>}
            {property.baths > 0 && <span>🛁 {property.baths}</span>}
            {property.wifi && <span>📶 Wi-Fi</span>}
          </div>
        </div>
        <div className="property-actions">
          <button
            className="btn-secondary"
            onClick={() => onViewDetails(property)}
          >
            {translations[currentLanguage]?.['view-details'] || 'View Details'}
          </button>
          <button
            className={`save-btn ${isSaved ? 'saved' : ''}`}
            onClick={handleSave}
          >
            ♥ {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;