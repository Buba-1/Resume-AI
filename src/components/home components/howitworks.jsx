import React from "react";
import "./howitworks.css";
import { MessageCircle, Sparkles, FileText } from "lucide-react";

export default function HowItWorks() {
    const steps = [
      {
        icon: <MessageCircle size={40} />,
        title: "Talk to the AI",
        points: [
          "Speak naturally.",
          "AI asks smart follow-up questions.",
          "No typing needed.",
        ],
      },
      {
        icon: <Sparkles size={40} />,
        title: "Choose a Resume Template",
        points: [
          "Pick from professionally designed templates.",
          "Clean, modern, and ATS-friendly layouts.",
          "Customize colors, style, and structure.",
        ],
      },
      {
        icon: <Sparkles size={40} />,
        title: "AI Processes Your Information",
        points: [
          "Extracts experience, achievements, skills, education.",
          "Turns messy answers into clean, measurable bullet points.",
        ],
      },
      {
        icon: <FileText size={40} />,
        title: "Generate Your Resume",
        points: [
          "Ready-to-download PDF.",
          "Multiple modern templates.",
          "ATS-friendly formatting.",
        ],
      },
    ];

  return (
    <section className="how-it-works-section">
      <h2 className="hiw-title">How It Works</h2>
      <div className="hiw-steps-container">
        {steps.map((step, index) => (
          <div className="hiw-step-card" key={index}>
            <div className="hiw-icon">{step.icon}</div>
            <h3 className="hiw-step-title">{step.title}</h3>
            <ul className="hiw-step-list">
              {step.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
