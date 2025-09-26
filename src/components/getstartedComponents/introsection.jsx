import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./introsection.css";

const IntroSection = forwardRef(({ onStatusChange, data }, ref) => {
  const [categories, setCategories] = useState([
    { category: "Personal Details", status: "pending" },
    { category: "Education", status: "pending" },
    { category: "Work Experience", status: "completed" },
    { category: "Skills", status: "pending" },
    { category: "Projects", status: "pending" },
    { category: "Certifications", status: "pending" },
    { category: "Languages", status: "pending" },
    { category: "Awards & Honors", status: "pending" },
    { category: "Volunteer Experience", status: "pending" },
    { category: "References", status: "pending" },
  ]);

  const setStatus = (arrayIndex, status) => {
    setCategories((prev) =>
      prev.map((item, index) =>
        index === arrayIndex ? { ...item, status } : item
      )
    );

    if (onStatusChange) {
      onStatusChange(arrayIndex, status);
    }
  };

  useImperativeHandle(ref, () => ({
    setStatus,
  }));

  return (
    <div className="resume-categories">
      {categories.map((item, index) => (
        <div key={index} className={`category-item ${item.status}`}>
          {item.category} — <em>{item.status}</em>
        </div>
      ))}
    </div>
  );
});

export default IntroSection;
