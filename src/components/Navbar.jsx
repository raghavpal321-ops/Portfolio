import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Raghav<span>.</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>

      <div className="navbar-right">

        <a href="#contact" className="contact-btn">
          Contact
        </a>

        {/* Three Dot Menu */}
        <div className="menu-wrapper">

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            <FaEllipsisV />
          </button>

          {menuOpen && (
            <div className="dropdown-menu">

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#certifications" onClick={closeMenu}>
                Certifications
              </a>

              <a href="#resume" onClick={closeMenu}>
                Resume
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;