// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Call to Action */}
        <div className="footer-card">
          <h3>Ready to Build Your Resume?</h3>
          <a className="cta-button" href="#">
            Get Started Now
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-card">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Resources / Legal */}
        <div className="footer-card">
          <h3>Resources & Legal</h3>
          <ul>
            <li>
              <Link to={"/terms-of-service"}>Terms of Service</Link>
            </li>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/cookie-policy"}>Cookie Policy</Link>
            </li>
            <li>
              <Link to={"/user-guide"}>User Guide</Link>
            </li>
            <li>
              <Link to={"/login"}>login</Link>
            </li>
            <li>
              <Link to={"/create-account"}>Create Account</Link>
            </li>
          </ul>
        </div>

        {/* AI Safety Disclaimer */}
        <div className="footer-card">
          <h3>AI Safety & Data Use</h3>
          <p>
            Your voice data is processed securely and never stored permanently.
            We follow ethical AI and privacy best practices.
          </p>
        </div>

        {/* Contact & Support */}
        <div className="footer-card">
          <h3>Contact & Support</h3>
          <ul>
            <li>
              <a href="mailto:support@voiceresumeai.com">Email Support</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Submit a Request</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-card">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* Branding + Mission */}
        <div className="footer-card">
          <h3>VoiceResumeAI</h3>
          <p>
            Your AI-powered voice assistant that creates modern, ATS-friendly
            resumes in minutes.
          </p>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} VoiceResumeAI — All rights reserved.
      </p>
    </footer>
  );
}
