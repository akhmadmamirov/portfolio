import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-background">
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <span className="material-icons material-symbols-outlined close-button">close</span>
              ) : (
                <span className="material-icons material-symbols-outlined menu-button">menu</span>
              )}
            </div>
            <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
              <li
                className={
                  active === "home" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li
                className={
                  active === "about" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li
                className={
                  active === "experience" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/experience" onClick={toggleMenu}>
                  Experience
                </Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
