import React, { useState, useEffect } from "react";
import "./personal.css"; // external stylesheet

const PersonalForm = ({ initialData = {}, passData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    linkName: "",
  });

  // populate form with initial data if provided
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm(initialData);
    }
  }, [initialData]);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle button click
  const handleSubmit = () => {
    passData(form); // send data to parent
  };

  return (
    <div className="form-container">
      <h2>User Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="url"
        name="website"
        placeholder="Website Link"
        value={form.website}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkName"
        placeholder="Name of the Link"
        value={form.linkName}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonalForm;
