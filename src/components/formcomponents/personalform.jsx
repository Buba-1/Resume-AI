import React, { useState, useEffect } from "react";
import "./personal.css"; // external stylesheet

const PersonalForm = ({ initialData = {}, passData }) => {
  const [form, setForm] = useState({
    name: "jj",
    email: "@gmail.com",
    phone: "34422",
    websiteName: "linkedin",
    websitelink: "wwww.linkedin.com/in/jj",
    address: "New York",
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

  const handleSubmit = () => {
    console.log("Personal Form Data:", form);
    passData(form);
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
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="websiteName"
        placeholder="Name of the Link"
        value={form.websiteName}
        onChange={handleChange}
      />

      <input
        type="url"
        name="websitelink"
        placeholder="Website Link"
        value={form.websitelink}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonalForm;
