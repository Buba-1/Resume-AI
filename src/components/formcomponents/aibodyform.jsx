import React, { useState } from "react";
import "./aibodyform.css"

const AiBodyForm = ({ initialArray, passData }) => {
  const [formData, setFormData] = useState(initialArray);

  // handle change for title/description
  const handleChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);
  };

  // handle change for bulletpoints
  const handleBulletChange = (sectionIndex, bulletIndex, value) => {
    const updated = [...formData];
    updated[sectionIndex].bulletpoints[bulletIndex] = value;
    setFormData(updated);
  };

  // add a new bullet point to a section
  const addBulletPoint = (index) => {
    const updated = [...formData];
    updated[index].bulletpoints.push("");
    setFormData(updated);
  };

  // add a new section
  const addSection = () => {
    setFormData((prev) => [
      ...prev,
      { title: "", description: "", bulletpoints: [""] },
    ]);
  };

  // complete and send data to parent
  const handleComplete = () => {
    passData(formData);
  };

  return (
    <div className="editor-container">
      <h2>Edit Sections</h2>

      {formData.map((section, idx) => (
        <div key={idx} className="editor-card">
          <input
            type="text"
            placeholder="Title"
            value={section.title}
            onChange={(e) => handleChange(idx, "title", e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={section.description}
            onChange={(e) => handleChange(idx, "description", e.target.value)}
          ></textarea>

          <div className="bullets-container">
            <label>Bullet Points</label>
            {section.bulletpoints.map((bp, bIdx) => (
              <input
                key={bIdx}
                type="text"
                placeholder={`Bullet point ${bIdx + 1}`}
                value={bp}
                onChange={(e) => handleBulletChange(idx, bIdx, e.target.value)}
              />
            ))}
            <button
              type="button"
              className="bullet-btn"
              onClick={() => addBulletPoint(idx)}
            >
              Add Bullet Point
            </button>
          </div>
        </div>
      ))}

      <div className="editor-actions">
        <button onClick={addSection}>Add New Section</button>
        {formData.length > 0 && (
          <button className="complete-btn" onClick={handleComplete}>
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default AiBodyForm;
