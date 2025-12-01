import React from "react";
import DefaultDesign from "../Resumedesigns/defaultdesign";
import DesignOne from "../Resumedesigns/designone";

const Resumelistcontainer = ({ chosenDesign }) => {
  const selectingDesign = (designName) => {
    chosenDesign(designName);
  };

  return (
    <div>
      <h3>Resumelistcontainer</h3>

      <div>
        <DefaultDesign />
        <button onClick={() => selectingDesign("DefaultDesign")}>
          Choose this one
        </button>
      </div>

      <div>
        <DesignOne />
        <button onClick={() => selectingDesign("DesignOne")}>
          Choose this one
        </button>
      </div>
    </div>
  );
};

export default Resumelistcontainer;
