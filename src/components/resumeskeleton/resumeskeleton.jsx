import React from "react";
import DefaultHeader from "../Resumedesigns/defaultdesign";
import DefaultDesign from "../Resumedesigns/defaultdesign";
import {
  sampleUserIntro,
  sampleUserDetails,
  sampleUserRef,
} from "../Resumedesigns/sampledata";



const Resumeskeleton = ({
  headdetails = {},
  bodydetails = [],
  refdetails = [],
}) => {

  const handleGeneratePDF = async () => {
    // Convert JSX → HTML
    const htmlString = ReactDOMServer.renderToString(<SamplePDFComponent />);

    const response = await fetch("http://localhost:5000/sample_endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: htmlString }),
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.pdf";
    a.click();
  };




  return (
    <div>
      <div>
        <DefaultDesign
          userData={sampleUserIntro}
          userDetails={sampleUserDetails}
          userRef={sampleUserRef}
        />
        <button onClick={handleGeneratePDF}>
          Generate Resume PDF
        </button>
      </div>
    </div>
  );
};

export default Resumeskeleton;
