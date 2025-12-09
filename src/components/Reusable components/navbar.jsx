import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      {/* DESKTOP WINDOW (No changes needed here) */}
      <div className={styles["nav-window-desktop"]}>
        <ul className={styles["nav-links-desktop"]}>
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
      <div className={styles["nav-window-mobile"]}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div
            className={`${styles.bar} ${isOpen ? styles.rotate1 : ""}`}
          ></div>
          <div className={`${styles.bar} ${isOpen ? styles.fade : ""}`}></div>
          <div
            className={`${styles.bar} ${isOpen ? styles.rotate2 : ""}`}
          ></div>
        </div>

        {/* MOBILE MENU (Fixed: added onClick={toggleMenu} to each Link) */}
        <div
          className={`${styles["mobile-menu"]} ${isOpen ? styles.open : ""}`}
        >
          <ul>
            <Link to="/" onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link to="/how_to_use" onClick={toggleMenu}>
              <li>How To Use</li>
            </Link>
            <Link to="/my_profile" onClick={toggleMenu}>
              <li>My Account</li>
            </Link>
            <Link to="/options" onClick={toggleMenu}>
              <li>Get Started</li>
            </Link>
            <Link to="/options" onClick={toggleMenu}>
              <li>My Resumes</li>
            </Link>
            <Link to="/templates" onClick={toggleMenu}>
              <li>Templates</li>
            </Link>
            <Link to="/options" onClick={toggleMenu}>
              <li>Create My Resume</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
