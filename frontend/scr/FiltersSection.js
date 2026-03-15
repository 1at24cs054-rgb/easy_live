import React from 'react';

const FiltersSection = ({
  searchValue,
  areaValue,
  typeValue,
  minPrice,
  maxPrice,
  onSearchChange,
  onAreaChange,
  onTypeChange,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyFilters,
  translations,
  currentLanguage,
  showTypeFilter = true
}) => {
  return (
    <section className="filters-section">
      <div className="filters-container">
        <div className="filter-group">
          <input
            type="text"
            placeholder={translations[currentLanguage]?.['search-placeholder'] || 'Search...'}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <select value={areaValue} onChange={(e) => onAreaChange(e.target.value)}>
            <option value="all">{translations[currentLanguage]?.['area-all'] || 'All Areas'}</option>
            <option value="koramangala">Koramangala</option>
            <option value="indiranagar">Indiranagar</option>
            <option value="jayanagar">Jayanagar</option>
            <option value="whitefield">Whitefield</option>
            <option value="marathahalli">Marathahalli</option>
          </select>
        </div>
        {showTypeFilter && (
          <div className="filter-group">
            <select value={typeValue} onChange={(e) => onTypeChange(e.target.value)}>
              <option value="all">{translations[currentLanguage]?.['type-all'] || 'All Types'}</option>
              <option value="rent">{translations[currentLanguage]?.['type-rent'] || 'Rent'}</option>
              <option value="pg">{translations[currentLanguage]?.['type-pg'] || 'PGs'}</option>
              <option value="lease">{translations[currentLanguage]?.['type-lease'] || 'Lease'}</option>
              <option value="coliving">{translations[currentLanguage]?.['type-coliving'] || 'Co-living'}</option>
              <option value="buy">{translations[currentLanguage]?.['type-buy'] || 'Buy'}</option>
            </select>
          </div>
        )}
        <div className="filter-group price-group">
          <input
            type="number"
            placeholder={translations[currentLanguage]?.['min-price'] || 'Min Price'}
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
          />
          <input
            type="number"
            placeholder={translations[currentLanguage]?.['max-price'] || 'Max Price'}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
          />
        </div>
        <button className="filter-btn" onClick={onApplyFilters}>
          {translations[currentLanguage]?.['apply-filters'] || 'Apply Filters'}
        </button>
      </div>
    </section>
  );
};

export default FiltersSection;