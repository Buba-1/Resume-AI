// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css"; // Imported as 'styles'

export default function Footer() {
  return (
    // Updated className to styles.footerContainer
    <footer className={styles.footerContainer}>
      {/* Updated className to styles.footerGrid */}
      <div className={styles.footerGrid}>
        {/* Call to Action */}
        {/* Updated className to styles.footerCard */}
        <div className={styles.footerCard}>
          <h3>Ready to Build Your Resume?</h3>
          {/* Updated className to styles.ctaButton */}
          <a className={styles.ctaButton} href="#">
            Get Started Now
          </a>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCard}>
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
        <div className={styles.footerCard}>
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
              <Link to={"/create_account"}>Create Account</Link>
            </li>
            <li>
              <Link to={"/registeration_successful"}>regis succs</Link>
            </li>
          </ul>
        </div>

        {/* AI Safety Disclaimer */}
        <div className={styles.footerCard}>
          <h3>AI Safety & Data Use</h3>
          <p>
            Your voice data is processed securely and never stored permanently.
            We follow ethical AI and privacy best practices.
          </p>
        </div>

        {/* Contact & Support */}
        <div className={styles.footerCard}>
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
        <div className={styles.footerCard}>
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
        <div className={styles.footerCard}>
          <h3>VoiceResumeAI</h3>
          <p>
            Your AI-powered voice assistant that creates modern, ATS-friendly
            resumes in minutes.
          </p>
        </div>
      </div>

      {/* Updated className to styles.footerCopy */}
      <p className={styles.footerCopy}>
        © {new Date().getFullYear()} VoiceResumeAI — All rights reserved.
      </p>
    </footer>
  );
}
