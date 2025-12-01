import React, { useState, useEffect } from "react";
import "./reference.css";

const ReferencesForm = ({ initialData = [], passData }) => {
  const [references, setReferences] = useState([
    { name: "", details: "", institute: "", phone: "", email: "" },
  ]);

  // load initial data if provided
  useEffect(() => {
    if (initialData.length > 0) {
      setReferences(initialData);
    }
  }, [initialData]);

  // handle input changes
  const handleChange = (index, field, value) => {
    const updated = [...references];
    updated[index][field] = value;
    setReferences(updated);
  };

  // add a new reference block
  const addReference = () => {
    setReferences([
      ...references,
      { name: "", details: "", institute: "", phone: "", email: "" },
    ]);
  };

  // delete a reference block
  const deleteReference = (index) => {
    const updated = references.filter((_, i) => i !== index);
    setReferences(updated);
  };

  // submit all references to parent
  const handleComplete = () => {
    passData(references);
    console.log("reference array from child", references);
  };

  return (
    <div className="references-container">
      <h2>References</h2>

      {references.map((ref, index) => (
        <div key={index} className="reference-block">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={ref.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />

          <textarea
            name="details"
            placeholder="Details"
            value={ref.details}
            onChange={(e) => handleChange(index, "details", e.target.value)}
          ></textarea>

          <input
            type="text"
            name="institute"
            placeholder="Institute"
            value={ref.institute}
            onChange={(e) => handleChange(index, "institute", e.target.value)}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={ref.phone}
            onChange={(e) => handleChange(index, "phone", e.target.value)}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={ref.email}
            onChange={(e) => handleChange(index, "email", e.target.value)}
          />

          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteReference(index)}
          >
            Delete Reference
          </button>
        </div>
      ))}

      <button type="button" onClick={addReference} className="add-btn">
        + Add Reference
      </button>

      {references.length > 0 && (
        <button type="button" onClick={handleComplete} className="complete-btn">
          Complete
        </button>
      )}
    </div>
  );
};

export default ReferencesForm;
