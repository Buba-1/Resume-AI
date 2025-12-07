import React from "react";
import "./countsection.css";

const Counts = () => {
  return (
    <div className="parent">
      <div className="container">
        <div className="row">
          <p className="title0">53,000 + </p>
          <p className="title1">Resumes</p>
          <p className="title2">Built</p>
        </div>
        <div className="row">
          <p className="title0">10 minutes</p>
          <p className="title1">Average Resume</p>
          <p className="title2">Building Time</p>
        </div>
        <div className="row">
          <p className="title0">ATS</p>
          <p className="title1">Resume</p>
          <p className="title2">Scanning Proof</p>
        </div>
        <div className="row">
          <p className="title0">3,500,000 +</p>
          <p className="title1">Jobs</p>
          <p className="title2">Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Counts;
