import React from 'react';

const PropertyModal = ({ property, isOpen, onClose, translations, currentLanguage }) => {
  if (!isOpen || !property) return null;

  const handleContactNow = () => {
    alert('Our team will contact you soon!');
    onClose();
  };

  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          <div className="modal-image">
            <div
              className="modal-placeholder"
              style={{
                backgroundImage: `url('${property.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {!property.image && <div className="modal-icon">🏠</div>}
            </div>
          </div>
          <div className="modal-details">
            <div className="modal-badge">{property.type.toUpperCase()}</div>
            <h2>{property.title}</h2>
            <p>📍 {property.location}</p>
            <div className="modal-price">
              ₹{property.price.toLocaleString()}
              {property.priceType === 'month' ? '/month' : ''}
            </div>
            <div className="modal-description">{property.description}</div>
            <div className="modal-highlights">
              {property.highlights?.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  {highlight}
                </div>
              ))}
            </div>
            <button className="modal-cta" onClick={handleContactNow}>
              {translations[currentLanguage]?.['contact-now'] || 'Contact Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;