import React from "react";
import "./termsofservice.css";

export default function TermsOfService() {
  return (
    <main className="tos-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your use of Voice Resume AI ("the Service"), a product of Voice Resume AI, a company based in Brooklyn, New York, USA. By using the Service you agree to these Terms.
          </p>
        </section>

        <section>
          <h2>Accounts</h2>
          <p>
            To use the Service you must create an account. You may sign up using email or via Google Sign-In. You are responsible for keeping your credentials secure and for all activity on your account.
          </p>
        </section>

        <section>
          <h2>Service Description</h2>
          <p>
            Voice Resume AI helps users build resumes by speaking to an AI or by filling forms. The Service analyzes speech or text, extracts experience, skills, and achievements, and generates downloadable PDF resumes and templates.
          </p>
        </section>

        <section>
          <h2>Payments & Subscriptions</h2>
          <p>
            Paid features may be offered. We plan to support payment providers such as Stripe, PayPal, and Razorpay. By purchasing paid features you agree to any payment terms presented at checkout.
          </p>
          <p>
            Pricing, billing frequency, and refund rules will be displayed at the time of purchase. The Service currently targets low-cost pricing (e.g. under $10 per paid item), but actual prices may change.
          </p>
        </section>

        <section>
          <h2>Data & Privacy</h2>
          <p>
            We process user inputs (voice and text) to generate resumes. We do not store voice recordings or user data permanently: data required to create the resume are deleted after the resume generation process completes, except where you explicitly choose to save data to your account.
          </p>
        </section>

        <section>
          <h2>Acceptable Use</h2>
          <p>
            You must not use the Service for unlawful activities or to provide false or misleading information. You are responsible for the accuracy of the information you provide.
          </p>
        </section>

        <section>
          <h2>Disclaimers & Limitation of Liability</h2>
          <p>
            The Service is provided "as is." While our AI (powered by Whisper and Gemini) aims for high accuracy, AI-generated content may contain errors or omissions. Voice Resume AI is not liable for indirect, incidental, or consequential damages arising from your use of the Service to the fullest extent permitted by law.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of New York, United States, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact: <a href="mailto:support@resumeai.com">support@resumeai.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}