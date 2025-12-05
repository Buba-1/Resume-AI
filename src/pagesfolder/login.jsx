import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Welcome Back</h2>

        <form className="login-form">
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />

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

          <button className="btn-primary">Sign In</button>
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
