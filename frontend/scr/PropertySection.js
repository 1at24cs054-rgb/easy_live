import React from 'react';
import PropertyCard from './PropertyCard';

const PropertiesSection = ({
  sectionId,
  sectionTitle,
  properties,
  onViewDetails,
  translations,
  currentLanguage
}) => {
  return (
    <section id={sectionId} className="property-section">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="properties-grid">
          {properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
                translations={translations}
                currentLanguage={currentLanguage}
              />
            ))
          ) : (
            <p className="no-properties">
              No properties found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;