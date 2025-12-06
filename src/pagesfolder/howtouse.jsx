import React from "react";
import "./howtouse.css";

// Define the steps for using the AI Resume Builder

/**
 * Component to display the step-by-step guide for the AI Resume Builder application.
 * Uses a Navy Blue theme as requested.
 */
export default function HowToUse() {


  const howToUseSteps = [
    {
      index: 1,
      message:
        "Click the 'Get Started' button to initiate the resume creation process.",
    },
    {
      index: 2,
      message:
        "Speak naturally and clearly to the AI assistant, detailing your work experience, education, and skills.",
    },
    {
      index: 3,
      message:
        "The AI extracts and intelligently structures your spoken input into organized, professional resume sections.",
    },
    {
      index: 4,
      message:
        "Instantly view a professionally drafted resume, with optimized language and formatting, ready for refinement.",
    },
    {
      index: 5,
      message:
        "Browse our gallery and select your preferred aesthetic design template to apply to your content.",
    },
    {
      index: 6,
      message:
        "Download your final, high-quality, customized resume as a universal PDF document.",
    },
  ];


  return (
    <div className="guide-container">
     

      <div className="guide-card">
        <header className="guide-header">
          <h1 className="guide-title">How to Build Your Resume with AI</h1>
          <p className="guide-subtitle">
            A simple, 6-step process to a professional career document.
          </p>
        </header>

        <section className="steps-list">
          {howToUseSteps.map((step) => (
            <div key={step.index} className="step-item">
              <div className="step-number">{step.index}</div>
              <div className="step-content">
                <p className="step-message">
                  {/* Highlighting key actions for better readability */}
                  {step.index === 1 && (
                    <span>
                      <strong>Click the 'Get Started' button</strong> to
                      initiate the resume creation process.
                    </span>
                  )}
                  {step.index === 2 && (
                    <span>
                      <strong>
                        Speak naturally and clearly to the AI assistant
                      </strong>
                      , detailing your work experience, education, and skills.
                    </span>
                  )}
                  {step.index === 3 && (
                    <span>
                      The AI{" "}
                      <strong>extracts and intelligently structures</strong>{" "}
                      your spoken input into organized, professional resume
                      sections.
                    </span>
                  )}
                  {step.index === 4 && (
                    <span>
                      <strong>
                        Instantly view a professionally drafted resume
                      </strong>
                      , with optimized language and formatting, ready for
                      refinement.
                    </span>
                  )}
                  {step.index === 5 && (
                    <span>
                      Browse our gallery and{" "}
                      <strong>
                        select your preferred aesthetic design template
                      </strong>{" "}
                      to apply to your content.
                    </span>
                  )}
                  {step.index === 6 && (
                    <span>
                      <strong>
                        Download your final, high-quality, customized resume as
                        a universal PDF document
                      </strong>
                      .
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
