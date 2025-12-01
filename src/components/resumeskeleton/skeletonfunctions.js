import ReactDOMServer from "react-dom/server";
import React from "react";
import DesignOne from "../Resumedesigns/designone";
import DefaultDesign from "../Resumedesigns/defaultdesign";

const handleGeneratePDF = async (designtype) => {
  try {
    let htmlString = "";

    if (designtype === "DesignOne") {
      htmlString = ReactDOMServer.renderToString(<DesignOne />);
    }

    if (designtype === "DefaultDesign") {
      htmlString = ReactDOMServer.renderToString(<DefaultDesign />);
    }

    if (!htmlString) {
      alert("Invalid design type!");
      return null;
    }

    const response = await fetch(
      "https://ai-voice-resume-server.onrender.com/sample_endpoint",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html: htmlString }),
      }
    );

    if (!response.ok) {
      alert("Failed to generate PDF");
      return null;
    }

    const blob = await response.blob();

    alert("PDF generated! Now click Download.");
    setPdfBlob(blob);

    
  } catch (err) {
    console.error("PDF Generation Error:", err);
    alert("Something went wrong. Check console.");
    return null;
  }
};

export { handleGeneratePDF };
