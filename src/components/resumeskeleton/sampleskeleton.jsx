import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import ResumePreferences from "./resumepreferences";
import Resumelistcontainer from "./resumelistcontainer";
import DesignOne from "../Resumedesigns/designone";
import DefaultDesign from "../Resumedesigns/defaultdesign";

const HelloWorld = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "40px",
        fontSize: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      Hello World
    </div>
  );
};

function SampleSkeleton() {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fileName, setFileName] = useState("");
  const [resumeColor, setResumeColor] = useState("#3498db");

  // the below design state stores the name of the chosen design
  const [design, setDesign] = useState("");

  const receiveColor = (color) => {
    setResumeColor(color);
  };

  // ----------------------------
  // PART 1 - Generate PDF
  // ----------------------------

  const handleGeneratePDF = async () => {
    try {
      let htmlString = "";

      if (design === "DesignOne") {
        htmlString = ReactDOMServer.renderToString(<DesignOne />);
      }

      if (design === "DefaultDesign") {
        htmlString = ReactDOMServer.renderToString(<DefaultDesign />);
      }
      
      htmlString = ReactDOMServer.renderToString(<HelloWorld />);

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

  // ----------------------------
  // PART 2 - Trigger modal
  // ----------------------------
  const openDownloadModal = () => {
    if (!pdfBlob) {
      alert("Please generate the PDF first!");
      return;
    }
    setModalVisible(true);
  };

  // ----------------------------
  // PART 3 - Download from modal
  // ----------------------------
  const confirmDownload = () => {
    if (!fileName.trim()) {
      alert("Please enter a file name!");
      return;
    }

    const finalName = fileName.endsWith(".pdf") ? fileName : fileName + ".pdf";

    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = finalName;
    a.click();

    window.URL.revokeObjectURL(url);
    setModalVisible(false);
  };

  const handleChosenDesign = (designName) => {
    console.log("Chosen design:", designName);
    setDesign(designName);
    //this section sets the name of the design from the list of resumes container.
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <p style={{ color: resumeColor }}>
        skeleton received Resume color: {resumeColor}
      </p>

      <ResumePreferences passColor={receiveColor} />
      <Resumelistcontainer chosenDesign={handleChosenDesign} />

      {/*    */}
      <h2 style={{ marginBottom: "20px" }}>React → PDF Generator</h2>

      {/* Button 1: Generate */}
      <button
        onClick={handleGeneratePDF}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          background: "green",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "20px",
        }}
      >
        Generate PDF (Step 1)
      </button>

      {/* Button 2: Download → opens modal */}
      <button
        onClick={openDownloadModal}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          background: "#4a90e2",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Download PDF (Step 2)
      </button>

      {/* Preview */}
      <div style={{ marginTop: "40px" }}>
        <h3>Component Preview:</h3>
      </div>

      {/* ----------------------------
          MODAL UI
      ---------------------------- */}
      {modalVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "320px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <h3>Name Your File</h3>

            <input
              type="text"
              placeholder="example-file"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              style={{
                width: "90%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={confirmDownload}
                style={{
                  padding: "10px 18px",
                  background: "#4CAF50",
                  border: "none",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Download
              </button>

              <button
                onClick={() => setModalVisible(false)}
                style={{
                  padding: "10px 18px",
                  background: "#d9534f",
                  border: "none",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SampleSkeleton;
