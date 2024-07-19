// src/lab03/SeasonDisplay2.js
import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Nóng quá, thêm Vitamin C!',
    iconName: 'sun',
  },
  winter: {
    text: 'Trời ơi, nó lạnh!',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month < 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay2 = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display-container ${season}`}>
      <div className="season-display">
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    </div>
  );
};

export default SeasonDisplay2;
