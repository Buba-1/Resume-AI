import React from "react";
import "./TranscriptList.css";

function TranscriptList({ data, onEdit, handleConfirm }) {
  return (
    <div className="transcript-list">
      {data.map((item, index) => (
        <div
          key={index}
          className={`transcript-item ${
            item.status === "confirmed" ? "confirmed" : ""
          }`}
        >
          <h3 className="transcript-title">{item.title}</h3>
          <p className="transcript-body">{item.transcript}</p>
          <div className="button-group">
            <button className="edit-btn" onClick={() => onEdit(index)}>
              Edit
            </button>
            <button
              className="confirm-btn"
              onClick={() => handleConfirm(index)}
            >
              {item.status === "confirmed" ? "Unconfirm" : "Confirm"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TranscriptList;
