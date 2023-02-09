import React from 'react';
import "../ddaytimer/timer.css";

const TimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <div className="timer">{value}</div>
      <span>{type}</span>
    </div>
  );
};

export default TimeDisplay;
