// React Component: FAQSection.jsx
import React, { useState } from "react";
import "./faq.css";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is my data safe?",
      answer:
        "Yes. Your data is processed securely and never shared with third parties.",
    },
    {
      question: "Can I edit my resume after generating it?",
      answer:
        "Absolutely. You can tweak, modify, and adjust every part before downloading.",
    },
    {
      question: "Do I need to type anything?",
      answer:
        "No. You can speak to the AI naturally, and it handles the rest.",
    },
    {
      question: "Can I download in PDF?",
      answer:
        "Yes. You can download a clean, professional PDF instantly.",
    },
    {
      question: "Will it work on mobile?",
      answer:
        "Yes. The entire experience is optimized for mobile and tablet devices.",
    },
    {
      question: "What languages does it support?",
      answer:
        "It supports all major languages thanks to multilingual AI processing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <ChevronDown size={22} className="faq-icon" />
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================
   External CSS: FAQSection.css
   Brand Color: Navy (#001f3f)
   ===================================== */
