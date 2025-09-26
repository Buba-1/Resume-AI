


import React, { useState } from "react";
import IntroSection from "./introsection";
import TranscriptList from "./transcriptslist";
import Modal from "./modalcomponent/modal"; 
import "./GetStartedWindow.css";
import transcription from "./transcript";
import Progressbar from "./progressbar";

const GetStartedWindow = () => {
  const [transcripts, setTranscripts] = useState(transcription);

  const [confirmedArray, setConfirmedArray] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", body: "" });
  const [modalIndex, setModalIndex] = useState(null);

  // ========= HANDLERS =========

  // Open modal with transcript data
  const handleEdit = (index) => {
    // reverse confirm if the transcript is confirmed
    const updated = transcripts.map((item, i) =>
      i === index ? { ...item, status: "unconfirmed" } : item
    );
    setTranscripts(updated);
    updateConfirmedArray(updated); // 🔗 update confirmedArray immediately

    // then open modal with the transcript data
    setModalData({
      title: updated[index].title,
      body: updated[index].transcript,
    });
    setModalIndex(index);
    setModalOpen(true);
  };

  // Update confirmedArray based on transcripts
  const updateConfirmedArray = (updatedTranscripts) => {
    const newConfirmed = updatedTranscripts
      .filter((item) => item.status === "confirmed")
      .map((item) => ({ category: item.title, transcript: item.transcript }));

    setConfirmedArray(newConfirmed);
    console.log("Confirmed Array:", newConfirmed); // 👀 Debug log
  };

  // Toggle confirm/unconfirm from list
  const handleToggleConfirm = (index) => {
    const updated = transcripts.map((item, i) =>
      i === index
        ? {
            ...item,
            status: item.status === "confirmed" ? "unconfirmed" : "confirmed",
          }
        : item
    );
    setTranscripts(updated);
    updateConfirmedArray(updated);
  };

  // Modal confirm/cancel logic
  const handleModalAction = (action, index, newValue = null) => {
    if (action === "confirm") {
      const updated = transcripts.map((item, i) =>
        i === index
          ? {
              ...item,
              transcript: newValue, // update edited text
              status: "confirmed", // ✅ always confirm, not toggle
            }
          : item
      );
      setTranscripts(updated);
      updateConfirmedArray(updated);
    }

    // Reset modal for both confirm & cancel
    setModalOpen(false);
    setModalData({ title: "", body: "" });
    setModalIndex(null);
  };

  // ========= PROGRESS =========
  const progress = Math.round(
    (confirmedArray.length / transcripts.length) * 100
  );

  return (
    <div style={{ padding: 40 }}>
     
      <Progressbar progressvalue={progress}/>
      <TranscriptList
        data={transcripts}
        onEdit={handleEdit}
        handleConfirm={handleToggleConfirm}
      />

      {modalOpen && (
        <Modal
          data={modalData}
          index={modalIndex}
          onAction={handleModalAction}
        />
      )}
    </div>
  );
};

export default GetStartedWindow;
