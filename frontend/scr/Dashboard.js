import React from 'react';

const Dashboard = ({ translations, currentLanguage, onTileClick }) => {
  const tiles = ['rent', 'pg', 'lease', 'coliving', 'buy'];
  const icons = {
    rent: '🏠',
    pg: '👨‍🎓',
    lease: '📄',
    coliving: '🛌',
    buy: '💰'
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {tiles.map(tile => (
          <div
            key={tile}
            className="dashboard-tile"
            onClick={() => onTileClick(tile)}
            style={{ cursor: 'pointer' }}
          >
            <div className="tile-icon">{icons[tile]}</div>
            <h3>{translations[currentLanguage]?.[`tile-${tile}-title`] || tile.toUpperCase()}</h3>
            <p>{translations[currentLanguage]?.[`tile-${tile}-desc`] || 'See available options'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;