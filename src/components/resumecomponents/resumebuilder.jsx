import React from "react";
import { useState, useEffect } from "react";
import ResumePreferences from "./resumepreferences";

const ResumeBuilder = () => {
  const [resumeHeader, setResumeHeader] = useState({});
  const [resumeBody, setResumeBody] = useState([]);
  const [resumeReference, setResumeReference] = useState([]);

  return (
    <div>
    <p>Resume builder page </p>
    <ResumePreferences />

    </div>

  );
  
};

export default ResumeBuilder;
