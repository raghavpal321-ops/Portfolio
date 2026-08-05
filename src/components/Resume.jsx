import "../styles/Resume.css";
import resume from "../assets/resume/Raghav_Pal_Resume.pdf";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="resume" data-aos="fade-up">

      <h2 className="section-title">Resume</h2>

      <p className="resume-subtitle">
        A quick overview of my education, technical skills, projects, and
        achievements. Feel free to download my latest resume.
      </p>

      <div className="resume-card">

        <div className="resume-icon">
          📄
        </div>

        <h3>Download My Resume</h3>

        <p>
          Explore my academic background, technical expertise, projects,
          certifications, and skills in a single document.
        </p>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          <FaDownload />
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;