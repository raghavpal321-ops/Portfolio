import "../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        <div className="footer-left">

          <h2>
            Raghav<span>.</span>
          </h2>

          <p>
            Building responsive, modern and scalable web applications
            with clean code and beautiful user experiences.
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-icons">

            <a
              href="https://github.com/raghavpal321-ops"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/raghav-pal-108693343"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:raghavpal321@gmail.com">
              <MdEmail />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Raghav Pal.
          All Rights Reserved.
        </p>

        <a href="#home" className="back-top">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;