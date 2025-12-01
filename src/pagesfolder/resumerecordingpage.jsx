import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PersonalForm from "../components/formcomponents/personalform";
import Referencesform from "../components/formcomponents/referenceform";
import QuestionsScreen from "../components/recorderComponents/recorderwindow";

const Resumerecordingpage = () => {
  const [bundulledData, setBundulledData] = useState({
    personalObject: {},
    bodyArrayData: [],
    referenceArrayData: [],
  });

  const addingPersonalData = (data) => {
    setBundulledData((prev) => ({
      ...prev,
      personalObject: data,
    }));
  };

  const addingBodyData = (data) => {
    setBundulledData((prev) => ({
      ...prev,
      bodyArrayData: data,
    }));
  };

  const addingReferenceData = (data) => {
    setBundulledData((prev) => ({
      ...prev,
      referenceArrayData: data,
    }));
  };

  const handleSubmit = () => {
    console.log(" Recorded Resume Data is bundled here:", bundulledData);
  };

  return (
    <div className="background">
      <PersonalForm passData={addingPersonalData} />
      <Referencesform passData={addingReferenceData} />
      Resume recorder page
      <QuestionsScreen arrayExtractor={addingBodyData} />
      <button onClick={handleSubmit}>Generate Resume</button>
      <Link to="/build_resume" state={{ bundulledData }}>
        carry data to resume build page
      </Link>
    </div>
  );
};

export default Resumerecordingpage;
