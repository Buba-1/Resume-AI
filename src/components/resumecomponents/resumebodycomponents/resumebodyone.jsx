import React from "react";

const ResumeBodyOne = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return null; // don't render if empty or null
  }

  const sectionStyle = {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  };

  const descriptionStyle = {
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "10px",
    color: "#555",
  };

  const bulletContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const bulletStyle = {
    backgroundColor: "#e3e3e3",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "13px",
    color: "#222",
  };

  return (
    <div>
      {dataArray.map((section, index) => {
        if (
          !section ||
          section.title === "" ||
          section.description === "" ||
          !Array.isArray(section.bulletpoints)
        ) {
          return null; // skip invalid entries
        }

        return (
          <div key={index} style={sectionStyle}>
            <h3 style={titleStyle}>{section.title}</h3>
            <p style={descriptionStyle}>{section.description}</p>

            <div style={bulletContainerStyle}>
              {section.bulletpoints.map((point, idx) =>
                point && point.trim() !== "" ? (
                  <div key={idx} style={bulletStyle}>
                    {point}
                  </div>
                ) : null
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeBodyOne;
