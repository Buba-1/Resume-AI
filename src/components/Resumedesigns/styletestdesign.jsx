import React from "react";

const InlineResume = ({ data }) => {
  const container = {
    fontFamily: "Arial, sans-serif",
    padding: "32px",
    lineHeight: 1.5,
    color: "#222",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const header = {
    textAlign: "center",
    marginBottom: "24px",
  };

  const nameStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4px",
  };

  const titleStyle = {
    fontSize: "18px",
    color: "#555",
  };

  const sectionTitle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "4px",
    marginTop: "24px",
  };

  const paragraph = {
    fontSize: "15px",
    marginBottom: "12px",
  };

  const listItem = {
    marginBottom: "6px",
  };

  return (
    <div style={container}>
      {/* HEADER */}
      <div style={header}>
        <div style={nameStyle}>{data.name}</div>
        <div style={titleStyle}>{data.title}</div>
      </div>

      {/* CONTACT INFO */}
      <div>
        <div style={sectionTitle}>Contact</div>
        <p style={paragraph}>
          <strong>Email:</strong> {data.email} <br />
          <strong>Phone:</strong> {data.phone} <br />
          <strong>Location:</strong> {data.location}
        </p>
      </div>

      {/* SUMMARY */}
      <div>
        <div style={sectionTitle}>Professional Summary</div>
        <p style={paragraph}>{data.summary}</p>
      </div>

      {/* SKILLS */}
      <div>
        <div style={sectionTitle}>Skills</div>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index} style={listItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* EXPERIENCE */}
      <div>
        <div style={sectionTitle}>Work Experience</div>

        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {exp.role} — {exp.company}
            </div>
            <div
              style={{ color: "#777", fontSize: "14px", marginBottom: "6px" }}
            >
              {exp.start} to {exp.end}
            </div>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} style={listItem}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <div>
        <div style={sectionTitle}>Education</div>

        {data.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {edu.degree}
            </div>
            <div style={{ color: "#555" }}>{edu.school}</div>
            <div style={{ color: "#777", fontSize: "14px" }}>
              {edu.start} – {edu.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineResume;
