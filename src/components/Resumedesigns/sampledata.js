const sampleUserIntro = {
  name: "Michael Johnson",
  email: "michael.johnson@example.com",
  phone: "+1 (415) 889-2033",
  website: "https://michaeljohnson.dev",
  linkName: "Portfolio",
};

const sampleUserDetails = [
  {
    title: "Work Experience",
    description: "Frontend Developer at TechNova Solutions (2019–2024)",
    bulletpoints: [
      "Developed and maintained responsive UI components using React.",
      "Improved page load performance by 32% through optimization techniques.",
      "Collaborated with backend engineers to integrate RESTful APIs.",
      "Led code reviews and mentored two junior developers."
    ]
  },
  {
    title: "Education",
    description: "Bachelor of Science in Computer Science — Stanford University",
    bulletpoints: [
      "Graduated with Honors (GPA 3.8/4.0)",
      "Coursework: Data Structures, Algorithms, Operating Systems, Databases"
    ]
  },
  {
    title: "Technical Skills",
    description: "Core technologies used across projects",
    bulletpoints: [
      "React, JavaScript (ES6+), TypeScript",
      "Node.js, Express, MongoDB",
      "REST APIs, Git, Docker. kubernates"
    ]
  }
];


const sampleUserRef = [
  {
    name: "Sarah Williams",
    details: "Former Engineering Manager",
    institute: "TechNova Solutions",
    phone: "+1 (415) 550-8821",
    email: "sarah.williams@technova.com",
  },
  {
    name: "Dr. Kevin Adams",
    details: "University Professor & Thesis Supervisor",
    institute: "Stanford University",
    phone: "+1 (650) 778-1990",
    email: "kadams@stanford.edu",
  },
];

export {
  sampleUserIntro,
  sampleUserDetails,
  sampleUserRef,
};