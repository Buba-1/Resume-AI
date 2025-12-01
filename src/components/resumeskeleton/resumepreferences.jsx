import React, { useState } from "react";
import "./resumepreferences.css";

const ResumePreferences = ({ passColor }) => {
  const [color, setColor] = useState("");

  const colors = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#e67e22",
    "#1abc9c",
  ];

  const handleColorSelect = (selected) => {
    setColor(selected);
    passColor(selected);
  };

  return (
    <div className="preferences-container">
      <div className="preferences-sections">
        <section className="preference-section">
          <h3>Color Preference</h3>

          <div className="color-container">
            {colors.map((colorItem) => (
              <div
                key={colorItem}
                onClick={() => handleColorSelect(colorItem)}
                className={`color-circle ${
                  color === colorItem ? "selected" : ""
                }`}
                style={{
                  backgroundColor: colorItem,
                  "--selected-shadow": color, // shadow uses selected color
                }}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="preferences-actions">
        <button onClick={() => console.log("Color set:", color)}>
          Confirm
        </button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default ResumePreferences;
