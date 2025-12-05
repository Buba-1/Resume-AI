import React from "react";
import DefaultDesign from "../Resumedesigns/defaultdesign";
import DesignOne from "../Resumedesigns/designone";
import sampleObject from "../Resumedesigns/sampledata";

const Resumelistcontainer = ({ chosenDesign,  colorOne, objectOne, imageUrlOne  }) => {
  const selectingDesign = (designName) => {
    chosenDesign(designName);
  };

  return (
    <div>
      <h3>Resumelistcontainer</h3>

      <div>
        <DefaultDesign
          color={colorOne}
          object={objectOne}
          imageUrl={imageUrlOne}
        />
        <button onClick={() => selectingDesign("DefaultDesign")}>
          Choose this one
        </button>
      </div>

      <div>
        <DesignOne color={colorOne} object={objectOne} imageUrl={imageUrlOne} />
        <button onClick={() => selectingDesign("DesignOne")}>
          Choose this one
        </button>
      </div>
    </div>
  );
};

export default Resumelistcontainer;
