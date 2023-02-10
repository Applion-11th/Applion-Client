import React from "react";
import "../ddaytimer/timer.css";

export const DisplayTime = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div className="timer">{value}</div>
      <span>{type}</span>
    </div>
  );
};
