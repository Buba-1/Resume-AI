import React, { useState, useEffect } from "react";
import { FaMicrophone, FaPlay } from "react-icons/fa";
import "./recorderwindow.css";
import RecorderModal from "./recordermodal";
import questionsData from "./questions";
import { processUserDetails } from "../../functions/openaicreate";

const QuestionsScreen = ({ arrayExtractor }) => {
  const [questions, setQuestions] = useState(questionsData);

  const [finalArray, setFinalArray] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Whenever finalArray changes, pass it to the parent via arrayExtractor
  useEffect(() => {
    if (arrayExtractor) {
      arrayExtractor(finalArray);
    }
  }, [finalArray, arrayExtractor]);

  // For debugging: log finalArray whenever it updates
  useEffect(() => {
    console.log(
      "Final Array Updated, the right way to track the update using console log:",
      finalArray
    );
  }, [finalArray]);

  // Called when user clicks mic (does not record directly)
  const handleMicClick = (questionId) => {
    setActiveQuestionId(questionId);
    setShowModal(true);
  };

  // Called when modal returns Accept / Cancel
  const handleModalStateChange = (state) => {
    if (state === "cancel" || state === "accept") {
      setShowModal(false);
    }
  };

  // Called when modal returns edited transcript
  const handleEditedTranscript = (text) => {
    const questionTitle = questions.find(
      (q) => q.id === activeQuestionId
    )?.title;
    if (questionTitle) {
      // Add to finalArray
      setFinalArray((prev) => [...prev, { title: questionTitle, body: text }]);
    }

    console.log("finalArray updated:", finalArray);

    // Mark question as answered
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === activeQuestionId ? { ...q, status: "answered" } : q
      )
    );
  };

  // Handle Submit button
  const handleSubmit = async () => {
    if (arrayExtractor) {
      arrayExtractor(finalArray);
    }

    alert("Final array sent for processing. Check console for details.");
try {
  const receivedData = await processUserDetails(finalArray);

  let parsedData;
  if (typeof receivedData === "string") {
    try {
      parsedData = JSON.parse(receivedData);
      console.log("✅ Parsed JSON from OpenAI:", parsedData);
    } catch (e) {
      console.warn(
        "⚠️ Could not parse response as JSON, logging raw data instead."
      );
      console.log("Raw response:", receivedData);
      parsedData = null;
    }
  } else {
    // Already an object/array
    parsedData = receivedData;
    console.log("✅ Received structured data not json:", parsedData);
  }

  // You can still work with parsedData safely
  if (parsedData) {
    parsedData.forEach((item) => {
      console.log("title:", item.title);
      console.log("Description:", item.description);
      console.log("Bulletpoints:", item.bulletpoints);
    });
  }
} catch (error) {
  console.error("❌ Error while processing user details:", error);
}
  };

  return (
    <div className="window-container">
      <div className="list-container">
        {questions.map((q) => {
          const isActive = activeQuestionId === q.id && showModal;
          return (
            <div
              key={q.id}
              className={`list-item ${isActive ? "active" : ""} ${
                q.status === "answered" ? "answered" : ""
              }`}
            >
              <h3>{q.title}</h3>
              <p>{q.instruction}</p>

              <div className="button-group">
                {/* Only show mic for unanswered questions */}
                {q.status !== "answered" && (
                  <button onClick={() => handleMicClick(q.id)}>
                    <FaMicrophone />
                  </button>
                )}
              </div>

              <small>Status: {q.status}</small>
            </div>
          );
        })}
      </div>

      {/* Submit button at the bottom */}
      <div style={{ marginTop: "20px" }}>
        <button className="btn" onClick={handleSubmit}>
          Submit All
        </button>
      </div>

      {showModal && (
        <RecorderModal
          onModalStateChange={handleModalStateChange}
          editedTranscriptExtractor={handleEditedTranscript}
        />
      )}
    </div>
  );
};

export default QuestionsScreen;
