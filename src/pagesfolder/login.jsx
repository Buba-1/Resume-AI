import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { createClient } from "@supabase/supabase-js";

// Supabase client (Vite)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      // Success: log user details
      console.log("User logged in successfully:", data.user);
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Welcome Back</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
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
            minLength={8}
          />

          <div className="agreement">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree to the
              <Link to="/terms" className="link">
                {" "}
                Terms of Service{" "}
              </Link>
              and
              <Link to="/privacy" className="link">
                {" "}
                Privacy Policy
              </Link>
            </label>
          </div>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <button className="btn-google">Sign in with Google</button>

        <Link to="/forgot-password" className="forgot">
          Forgot password?
        </Link>

        <div className="create-account">
          <span>Don't have an account?</span>
          <Link to="/register" className="link-large">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
