import React from "react";
import "./keyfeatures.css";

const KeyFeatures = () => {
  return (
    <section className="features-container">
      <h2 className="features-title">Key Features</h2>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>AI Voice Interview</h3>
          <p>
            The AI conducts a mini career interview to collect your real
            experience.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>Smart Data Extraction</h3>
          <p>Turns spoken answers into polished text.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>Multiple Resume Templates</h3>
          <p>Choose from modern, minimal, creative, and executive styles.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>ATS-Compatible Output</h3>
          <p>Ensure your resume passes recruitment software scans.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>Real-Time Editing</h3>
          <p>Adjust anything live with voice or typing.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>Export to PDF & Word</h3>
          <p>Instant download or email your final resume.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>AI Suggestions & Optimization</h3>
          <p>Automatically improves bullet points with measurable results.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
