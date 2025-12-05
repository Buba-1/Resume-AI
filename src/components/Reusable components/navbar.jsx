import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* DESKTOP WINDOW */}
      <div className="nav-window-desktop">
        <ul className="nav-links-desktop">
          <li>My Account</li>
          <li>Home</li>
          <li>Settings</li>
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
            <li>My Account</li>
            <li>Home</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
