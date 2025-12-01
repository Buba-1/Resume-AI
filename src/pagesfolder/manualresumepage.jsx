import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ManualBodyForm from "../components/formcomponents/manualbodyform";
import PersonalForm from "../components/formcomponents/personalform";
import Referencesform from "../components/formcomponents/referenceform";

const Manualresumepage = () => {
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

  const addingManualBodyData = (data) => {
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
    console.log("Manual Resume Data is here:", bundulledData);
  };

  return (
    <div className="background">
      manualresumepage
      <PersonalForm passData={addingPersonalData} />
      <ManualBodyForm sendData={addingManualBodyData} />
      <Referencesform passData={addingReferenceData} />
      <button onClick={handleSubmit}>Generate Resume</button>
      <Link to="/build_resume" state={{ bundulledData }}>
        carry data to resume build page
      </Link>
    </div>
  );
};

export default Manualresumepage;
