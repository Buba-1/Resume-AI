import React, { useState,useEffect} from "react";
import "./manualbodyform.css";

const ManualBodyForm = ({ sendData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bulletpoints, setBulletpoints] = useState([""]); // start with one bullet
  const [dataArray, setDataArray] = useState([]);

  // handle bullet point change
  const handleBulletChange = (index, value) => {
    const updated = [...bulletpoints];
    updated[index] = value;
    setBulletpoints(updated);
  };

  useEffect(()=>{
    console.log("Data Array data from useEffect", dataArray);
  }, [dataArray]);

  // add a new bullet input
  const addBulletPoint = () => {
    setBulletpoints([...bulletpoints, ""]);
  };

  // add current form data to array
  const addDataObject = () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const obj = {
      title,
      description,
      bulletpoints: bulletpoints.filter((b) => b.trim() !== ""),
    };

    setDataArray((prev) => [...prev, obj]);

    // reset form
    setTitle("");
    setDescription("");
    setBulletpoints([""]);
  };

  // delete a section
  const handleDelete = (index) => {
    setDataArray((prev) => prev.filter((_, i) => i !== index));
    console.log("Data Array after deleting", dataArray);
  };

  // send data array to parent
  const handleComplete = () => {
    sendData(dataArray);
  };

  return (
    <div className="data-form-container">
      <h2>Manual Body Add Section</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="bullets-container">
        <label>Bullet Points</label>
        {bulletpoints.map((bp, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Bullet point ${index + 1}`}
            value={bp}
            onChange={(e) => handleBulletChange(index, e.target.value)}
          />
        ))}
        <button onClick={addBulletPoint}>New Bullet Point</button>
      </div>

      <button onClick={addDataObject}>Done</button>

      {dataArray.length > 0 && (
        <div className="data-display">
          <h3>Added Sections</h3>
          {dataArray.map((item, idx) => (
            <div key={idx} className="data-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <ul>
                {item.bulletpoints.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
              <button className="delete-btn" onClick={() => handleDelete(idx)}>
                Delete
              </button>
            </div>
          ))}

          <button className="complete-btn" onClick={handleComplete}>
            Complete
          </button>
        </div>
      )}
    </div>
  );
};

export default ManualBodyForm;
