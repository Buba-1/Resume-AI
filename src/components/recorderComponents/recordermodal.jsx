import React, { useState, useEffect } from "react";
import "./recordermodal.css";
import AudioRecorder from "./recorder";

const RecorderModal = ({ onModalStateChange, editedTranscriptExtractor }) => {
  const [message, setMessage] = useState("");
  const [editedText, setEditedText] = useState("");
  const [modalState, setModalState] = useState(null); // null | "cancel" | "accept"
  const [recorderState, setRecorderState] = useState("ready"); // internal recorder state

  // Update message + textarea content whenever recorder state changes
  useEffect(() => {
    handleRecorderState(recorderState);

    // Auto-cancel if recorder signals "cancel"
    if (recorderState === "cancel") triggerCancel();
  }, [recorderState]);

  const handleRecorderState = (state) => {
    switch (state) {
      case "ready":
        setMessage("Click start to begin recording your message.");
        break;
      case "recording":
        setMessage("Recording in progress... Speak clearly.");
        break;
      case "cancel":
        setMessage("Recording canceled. You can start again.");
        break;
      case "paused":
        setMessage("Recording paused. Resume when ready.");
        break;
      case "preview":
        setMessage("Playing back your recording.");
        break;
      case "sent":
        setMessage("Your recording has been sent successfully.");
        break;
      case "transcribed":
        setMessage("Your recording has been transcribed. You can edit below:");
        break;
      default:
        setMessage("Idle state.");
    }
  };

  // Modal Cancel
  const triggerCancel = () => {
    setModalState("cancel");
    setEditedText(""); // clear input
    if (onModalStateChange) onModalStateChange("cancel");
  };

  // Modal Accept
  const triggerAccept = () => {
    setModalState("accept");
    if (editedTranscriptExtractor) editedTranscriptExtractor(editedText);
    if (onModalStateChange) onModalStateChange("accept");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Message */}
        <p className="modal-message">{message}</p>

        {/* Transcription editor */}
        {recorderState === "transcribed" && (
          <div className="modal-editor">
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              rows={6}
              className="modal-textarea"
            />
            <div className="modal-buttons">
              <button className="btn-cancel" onClick={triggerCancel}>
                Cancel
              </button>
              <button className="btn-accept" onClick={triggerAccept}>
                Accept
              </button>
            </div>
          </div>
        )}

        {recorderState !== "sent" && recorderState !== "transcribed" && (
          <AudioRecorder
            onStateChange={setRecorderState}
            onTranscription={setEditedText} // automatically fill textarea
          />
        )}
      </div>
    </div>
  );
};

export default RecorderModal;
