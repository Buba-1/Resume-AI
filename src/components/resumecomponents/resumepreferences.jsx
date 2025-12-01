import React, { useState } from "react";
import "./resumepreferences.css";

const ResumePreferences = ({ passState, passObject }) => {
  const [preferences, setPreferences] = useState({
    showPhoto: true,
    applyColorToHeader: false,
    selectedColor: "#3498db",
  });

  const colors = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#e67e22",
    "#1abc9c",
  ];

  const handlePhotoToggle = (show) => {
    setPreferences((prev) => ({ ...prev, showPhoto: show }));
  };

  const handleHeaderColorToggle = (apply) => {
    setPreferences((prev) => ({ ...prev, applyColorToHeader: apply }));
  };

  const handleColorSelect = (color) => {
    setPreferences((prev) => ({ ...prev, selectedColor: color }));
  };

  const handleConfirm = () => {
    //passState("confirm");
    //passObject(preferences);
    console.log("chikd pref obj", preferences);
  };

  const handleCancel = () => {
    //passState("cancel");
  };

  return (
    <div className="preferences-container">
      <div className="preferences-sections">
        {/* Header Style Section */}
        <section className="preference-section">
          <h3>Header Style</h3>
          <button
            onClick={() => handleHeaderColorToggle(true)}
            className={preferences.applyColorToHeader ? "selected" : ""}
          >
            Apply color to the header
          </button>
          <button
            onClick={() => handleHeaderColorToggle(false)}
            className={!preferences.applyColorToHeader ? "selected" : ""}
          >
            Do not apply color to the header
          </button>
        </section>

        {/* Photo Section */}
        <section className="preference-section">
          <h3>Photo</h3>
          <button
            onClick={() => handlePhotoToggle(true)}
            className={preferences.showPhoto ? "selected" : ""}
          >
            Show photo
          </button>
          <button
            onClick={() => handlePhotoToggle(false)}
            className={!preferences.showPhoto ? "selected" : ""}
          >
            Hide photo
          </button>
        </section>

        {/* Color Preference Section */}
        <section className="preference-section">
          <h3>Color Preference</h3>
          <div className="color-container">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => handleColorSelect(color)}
                className={`color-circle ${
                  preferences.selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Confirm / Cancel Buttons */}
      <div className="preferences-actions">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ResumePreferences;
