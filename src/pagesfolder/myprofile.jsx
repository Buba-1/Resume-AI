import React from "react";
import "./myprofile.css"; // Import the CSS file



export default function MyProfile() {
  // Simulated user data
  const USER_NAME = "John Doe";
  const INITIALS = USER_NAME.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const handleLogout = () => {
    console.log("User logged out!");
    alert("Logout button clicked!");
  };

  const handleCreateResume = () => {
    console.log("Navigating to resume creation!");
    alert("Create Resume Now button clicked!");
  };

  return (
    <div className="profile-page-container">
      <div className="profile-content-wrapper">
        {/* Top Header Section */}
        <div className="header-card">
          <div className="user-info-group">
            {/* Round Avatar */}
            <div className="initials-avatar">{INITIALS}</div>

            {/* Welcome Message */}
            <div className="welcome-message">
              <h1>Welcome, {USER_NAME}</h1>
            </div>
          </div>

          {/* Logout Button */}
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Resume Section */}
        <div className="resume-section-card">
          <p>Your saved resumes will be displayed here.</p>

          <button className="btn-create-resume" onClick={handleCreateResume}>
            Create My Resume Now
          </button>
        </div>
      </div>
    </div>
  );
}
