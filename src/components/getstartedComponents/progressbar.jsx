import React from 'react';
import "./progressbar.css";

const progressbar = ({progressvalue}) => {
  return (
    <div>
      {/* Fixed Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: `${progressvalue}%` }}></div>
        </div>
        <span className="progress-bar-text">{progressvalue}% Complete</span>
      </div>
    </div>
  );
}

export default progressbar