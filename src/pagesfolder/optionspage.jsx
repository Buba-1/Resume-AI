import React from "react";
import { Link } from "react-router-dom";
import "./options.css";

const Optionspage = () => {
  return (
    <div className="background">
      <section className="pricing-section">
        <h2 className="pricing-title">Simple & Transparent Pricing</h2>

        <div className="pricing-grid">
          {/* Pro Tier */}
          <div className="pricing-card pro">
            <h3 className="pricing-plan-title">AI Mode</h3>
            <p className="pricing-price">
              $5 – $15 <span className="one-time">one-time</span>
            </p>

            <ul className="pricing-features">
              <li>✔ All templates</li>
              <li>✔ Custom colors</li>
              <li>✔ Cover letter generator</li>
              <li>✔ Unlimited edits</li>
              <li>✔ Priority AI processing</li>
            </ul>

            <Link to="/recording_resume">
              <button className="pricing-btn pro-btn">Upgrade Now</button>
            </Link>
          </div>

          {/* Free Tier */}
          <div className="pricing-card">
            <h3 className="pricing-plan-title">Manual Mode</h3>
            <p className="pricing-price">$0</p>

            <ul className="pricing-features">
              <li>✔ Voice interview</li>
              <li>✔ Basic resume</li>
              <li>✔ 1 template</li>
            </ul>

            <Link to="/manual_resume">
              <button className="pricing-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </section>
      Ooptionspage page
      <Link to="/recording_resume">
        <div className="getstartedbtn">
          <p className="btntxt">Record Resume</p>
        </div>
      </Link>
      <Link to="/retouch_resume">
        <div className="getstartedbtn">
          <p className="btntxt"> Retouch Resume</p>
        </div>
      </Link>
      <Link to="/manual_resume">
        <div className="getstartedbtn">
          <p className="btntxt">Manual Resume</p>
        </div>
      </Link>
      <Link to="/build_resume">
        <div className="getstartedbtn">
          <p className="btntxt">To builder</p>
        </div>
      </Link>
    </div>
  );
};

export default Optionspage;
