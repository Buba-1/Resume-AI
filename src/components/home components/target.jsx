import React from "react";
import "./target.css";

const TargetAudience = () => {
  return (
    <section className="audience-container">
      <h2 className="audience-title">Who Is This For?</h2>

      <div className="audience-grid">
        <div className="audience-card">Job Seekers</div>
        <div className="audience-card">Students</div>
        <div className="audience-card">Career Changers</div>
        <div className="audience-card">Freelancers</div>
        <div className="audience-card">International Applicants</div>
        <div className="audience-card">People With Weak Resumes</div>
        <div className="audience-card">
          Workers Who Hate Writing Long Descriptions
        </div>
        <div className="audience-card">Anyone Building Their First Resume</div>
      </div>
    </section>
  );
};

export default TargetAudience;
