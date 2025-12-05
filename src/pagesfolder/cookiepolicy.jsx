import React from "react";
import "./cookiepolicy.css";

export default function CookiePolicy() {
  return (
    <main className="cookie-page">
      <div className="container">
        <h1>Cookie Policy</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small files stored on your device to help websites
            remember information about your visit.
          </p>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <ul>
            <li>Essential cookies for login and security.</li>
            <li>
              Performance cookies for analytics and improving the Service.
            </li>
            <li>
              Preference cookies to remember template choices and UI settings.
            </li>
          </ul>
        </section>

        <section>
          <h2>Managing Cookies</h2>
          <p>
            You can set your browser to refuse cookies or to alert you when
            cookies are being sent. Note that some features may not work if
            cookies are disabled.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For cookie-related questions contact{" "}
            <a href="mailto:support@resumeai.com">support@resumeai.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
