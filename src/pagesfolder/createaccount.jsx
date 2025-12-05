import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./createaccount.css";
export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    // In a real application, you would call your Firebase or backend registration API here.
    console.log({ firstName, lastName, email, password });

    setTimeout(() => {
      setLoading(false);
      // Logic for successful registration or error message would go here.
      alert(
        "Registration attempt logged to console. Check network tab for real API call."
      );
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Create Your Account</h2>

        <form className="registration-form" onSubmit={handleRegister}>
          {/* First Name and Last Name in a Row */}
          <div className="name-row">
            <input
              type="text"
              placeholder="First Name"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="login-link">
          <span>Already have an account?</span>
          <Link to="/login" className="link-large">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
