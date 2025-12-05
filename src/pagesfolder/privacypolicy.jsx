// PrivacyPolicy.jsx
import React from "react";
import "./privacypolicy.css";

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Overview</h2>
          <p>
            Voice Resume AI ("we", "us") respects your privacy. This Policy
            explains how we collect, use, and share information when you use our
            services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <ul>
            <li>Email address and name (for account creation and access).</li>
            <li>
              Voice recordings and transcript data while you use the
              voice-to-resume feature (processed and not stored permanently).
            </li>
            <li>
              Resume content and metadata needed to create the PDF output.
            </li>
            <li>
              Analytics data to improve the Service (non-identifying where
              possible).
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Data</h2>
          <p>
            We use collected information to provide and improve the Service, to
            process payments, to communicate with you, and to personalize
            templates and recommendations.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We do not store voice recordings or session data permanently. By
            default, session data used to generate a resume is deleted after the
            resume is generated, unless you explicitly save your resume/profile
            to your account.
          </p>
        </section>

        <section>
          <h2>Sharing & Third Parties</h2>
          <p>
            We may share data with service providers (e.g., payment processors
            such as Stripe or PayPal) and AI providers (e.g., Whisper, Gemini)
            strictly to deliver the Service. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You may access, correct, or delete your personal information by
            contacting us at{" "}
            <a href="mailto:support@resumeai.com">support@resumeai.com</a>. If
            you are in a region with specific privacy laws (e.g., GDPR, CCPA),
            you may have additional rights; contact us to request them.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect data in transit and at rest,
            and follow industry standards to secure user data.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy inquiries:{" "}
            <a href="mailto:support@resumeai.com">support@resumeai.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
