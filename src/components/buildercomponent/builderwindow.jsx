import React from "react";

const Resume = () => {
  const data = resumeData; // use sample data directly
  const { name, title, contact, summary, experience, education, skills } = data;

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>{name}</h1>
        <h2 style={styles.title}>{title}</h2>
        <p>
          {contact.email} | {contact.phone} | {contact.website}
        </p>
      </header>

      {/* Summary */}
      {summary && (
        <section style={styles.section}>
          <h3>Summary</h3>
          <p>{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section style={styles.section}>
          <h3>Experience</h3>
          {experience.map((job, index) => (
            <div key={index} style={styles.item}>
              <strong>{job.position}</strong> - {job.company} ({job.start} -{" "}
              {job.end})<p>{job.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section style={styles.section}>
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} style={styles.item}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.start} -{" "}
              {edu.end})
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section style={styles.section}>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  name: {
    margin: 0,
    fontSize: "2em",
  },
  title: {
    margin: 0,
    fontSize: "1.2em",
    color: "#666",
  },
  section: {
    marginBottom: "20px",
  },
  item: {
    marginBottom: "10px",
  },
};

// Sample data
const resumeData = {
  name: "Bubacarr Jallow",
  title: "Software Developer",
  contact: {
    email: "bubacarr@example.com",
    phone: "+1234567890",
    website: "www.example.com",
  },
  summary: "Passionate developer with experience in React and Node.js.",
  experience: [
    {
      position: "Frontend Developer",
      company: "Tech Co",
      start: "Jan 2022",
      end: "Present",
      description: "Building scalable web applications using React.",
    },
  ],
  education: [
    {
      degree: "BSc Computer Science",
      institution: "Some University",
      start: "2018",
      end: "2022",
    },
  ],
  skills: ["React", "JavaScript", "Node.js", "CSS"],
};

export default Resume;
