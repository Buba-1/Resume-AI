import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ data, index, onAction }) => {
  const [inputValue, setInputValue] = useState(data.body);

  useEffect(() => {
    setInputValue(data.body);
  }, [data]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{data.title}</h2>
        <textarea
          rows="5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={() => onAction("cancel", index)}>Cancel</button>
          <button onClick={() => onAction("confirm", index, inputValue)}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
