import React, { useState, useEffect } from "react";
import { FaMicrophone, FaPlay } from "react-icons/fa";
import "./recorderwindow.css";
import RecorderModal from "./recordermodal";

const QuestionsScreen = ({ arrayExtractor }) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Education",
      instruction: "Please describe your highest level of education.",
      status: "unanswered",
      recording: null,
    },
    {
      id: 2,
      title: "Work Experience",
      instruction: "Describe your most recent job experience.",
      status: "unanswered",
      recording: null,
    },
  ]);

  const [finalArray, setFinalArray] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Whenever finalArray changes, pass it to the parent via arrayExtractor
  useEffect(() => {
    if (arrayExtractor) {
      arrayExtractor(finalArray);
    }
  }, [finalArray, arrayExtractor]);

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

    // Mark question as answered
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === activeQuestionId ? { ...q, status: "answered" } : q
      )
    );
  };

  // Handle Submit button
  const handleSubmit = () => {
    if (arrayExtractor) {
      arrayExtractor(finalArray);
    }
    alert("Final array sent to parent!");
  };

  return (
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
