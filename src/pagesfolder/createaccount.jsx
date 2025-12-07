import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createaccount.css";
import { createClient } from "@supabase/supabase-js";

// Supabase client (Vite)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // NEW: This controls which UI shows
  const [userRegistered, setUserRegistered] = useState(false);

  function logSampleKey() {
    console.log("Sample ENV Key:", import.meta.env.VITE_SAMPLE_ENV_KEY);
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      alert("Please enter both first and last names.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
          emailRedirectTo: window.location.origin + "/registration_successful",
        },
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      // NEW: Switch UI to success message
      setUserRegistered(true);
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    }

    setLoading(false);
  };

  // -------------------------------
  // SUCCESS MESSAGE COMPONENT
  // -------------------------------
  const SuccessMessage = () => {
    return (
      <div className="login-card" style={{ textAlign: "center" }}>
        <h2 className="title">Registration Successful! 🎉</h2>

        <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
          We've sent a <strong>verification link</strong> to your email.
          <br />
          Please check your inbox (and spam folder) to verify your account and
          get started.
        </p>

        <button
          className="btn-primary"
          onClick={() => window.location.reload()}
        >
          Back to Home
        </button>
      </div>
    );
  };

  // ===================================
  // RETURN UI (switch based on state)
  // ===================================
  return (
    <div className="login-container">
      {/* If registered → show success message */}
      {userRegistered ? (
        <SuccessMessage />
      ) : (
        /* Else → show registration form */
        <div className="login-card">
          <h2 className="title">Create Your Account</h2>

          <form className="registration-form" onSubmit={handleRegister}>
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

            <input
              type="email"
              placeholder="Email Address"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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

          <button onClick={logSampleKey}>Test ENV Key</button>

          <div className="login-link">
            <span>Already have an account?</span>
            <Link to="/login" className="link-large">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
