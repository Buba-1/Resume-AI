import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* DESKTOP WINDOW */}
      <div className="nav-window-desktop">
        <ul className="nav-links-desktop">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/how_to_use">
            <li>How To Use</li>
          </Link>
          <Link to="/my_profile">
            <li>My Account</li>
          </Link>
          <Link to="/options">
            <li>Get Started</li>
          </Link>
          <Link to="/options">
            <li>My Resumes</li>
          </Link>
          <Link to="/templates">
            <li>Templates</li>
          </Link>
          <Link to="/options">
            <li>Create My Resume</li>
          </Link>
        </ul>
      </div>

      {/* MOBILE/TABLET WINDOW */}
      <div className="nav-window-mobile">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`bar ${isOpen ? "fade" : ""}`}></div>
          <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
        </div>

        {/* MOBILE MENU (Animated) */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/how_to_use">
              <li>How To Use</li>
            </Link>
            <Link to="/my_profile">
              <li>My Account</li>
            </Link>
            <Link to="/options">
              <li>Get Started</li>
            </Link>
            <Link to="/options">
              <li>My Resumes</li>
            </Link>
            <Link to="/templates">
              <li>Templates</li>
            </Link>
            <Link to="/options">
              <li>Create My Resume</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
