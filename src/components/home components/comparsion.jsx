import React from "react";
import "./comparison.css";

const ComparisonSection = () => {
  return (
    <section className="comparison-container">
      <h2 className="comparison-title">Good Resume vs Bad Resume</h2>

      <div className="comparison-grid">
        {/* BAD RESUME */}
        <div className="comparison-card bad-card">
          <h3 className="comparison-heading bad-text">❌ Bad Resume</h3>
          <div className="comparison-image">
            <img
              src="https://www.my-resume-templates.com/sample-resume-cv-format/"
              alt="Bad Resume Example"
            />
          </div>
          <ul className="comparison-list">
            <li>Generic statements</li>
            <li>Too wordy or too empty</li>
            <li>No measurable achievements</li>
            <li>Poor formatting / layout problems</li>
          </ul>
        </div>

        {/* GOOD RESUME */}
        <div className="comparison-card good-card">
          <h3 className="comparison-heading good-text">✅ Good Resume</h3>
          <div className="comparison-image">
            <img
              src="https://resumegenius.com/wp-content/uploads/2020/06/resume-example.png"
              alt="Good Resume Example"
            />
          </div>
          <ul className="comparison-list">
            <li>Strong, clear bullet points</li>
            <li>Achievement-focused</li>
            <li>Uses metrics (e.g. +35% sales)</li>
            <li>Clean, modern formatting & layout</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
