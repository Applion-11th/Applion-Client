import React from "react";
import "../ddaytimer/timer.css";

export const DisplayDate = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div id="dday">{value}</div>
      <span>{type}</span>
    </div>
  );
};
