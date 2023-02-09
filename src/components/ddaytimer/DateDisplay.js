import React from 'react';
import "../ddaytimer/timer.css";

const DateDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <div id="dday">{value}</div>
      <span>{type}</span>
    </div>
  );
};

export default DateDisplay;
