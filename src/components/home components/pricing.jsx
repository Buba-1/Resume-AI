import React from "react";
import "./pricing.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Simple & Transparent Pricing</h2>

      <div className="pricing-grid">
        {/* Free Tier */}
        <div className="pricing-card">
          <h3 className="pricing-plan-title">Free Tier</h3>
          <p className="pricing-price">$0</p>

          <ul className="pricing-features">
            <li>✔ Voice interview</li>
            <li>✔ Basic resume</li>
            <li>✔ 1 template</li>
          </ul>

          <button className="pricing-btn">Get Started</button>
        </div>

        {/* Pro Tier */}
        <div className="pricing-card pro">
          <h3 className="pricing-plan-title">Pro Tier</h3>
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

          <button className="pricing-btn pro-btn">Upgrade Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
