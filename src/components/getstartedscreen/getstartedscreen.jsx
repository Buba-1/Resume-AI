import React from "react";
import QuestionsScreen from "../recorderComponents/recorderwindow";
import Resume from "../buildercomponent/builderwindow";
import PersonalForm from "../formcomponents/personalform";
import ReferencesForm from "../formcomponents/referenceform";
import ManualBodyForm from "../formcomponents/manualbodyform";
import AiBodyForm from "../formcomponents/aibodyform";
import ResumeBuilder from "../resumecomponents/resumebuilder";
import DefaulDesign from "./defauldesign";
import sampleObject from "./sampledefaultdata";

const Getstartedscreen = () => {


  const initialData = [
    {
      title: "Work Experience",
      description: "Worked as a software engineer at XYZ Corp.",
      bulletpoints: ["Built scalable APIs", "Improved system performance"],
    },
    {
      title: "Education",
      description: "Bachelor in Computer Science from ABC University",
      bulletpoints: ["Graduated with honors", "Specialized in AI"],
    },
  ];

const handleEditedData = (data) => {
  console.log("data before editing", initialData);
   console.log("Edited Data :", data);
};

  return (
    <div>
      {/* <DefaulDesign />*/}
      <DefaulDesign object={sampleObject} />
      <QuestionsScreen />
      <PersonalForm />
      <ReferencesForm />
      <ManualBodyForm />
      <AiBodyForm initialArray={initialData} passData={handleEditedData} />
      <ResumeBuilder />
    </div>
  );
};

export default Getstartedscreen;
