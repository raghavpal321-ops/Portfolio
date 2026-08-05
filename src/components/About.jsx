import "../styles/About.css";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBullseye,
  FaLocationDot,
} from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">

      <div className="about-header">

        <span>ABOUT ME</span>

        <h2 className="section-title">Know Me Better</h2>

        <p>
          Passionate about building modern web applications and continuously
          improving my development skills through real-world projects and
          hands-on learning.
        </p>

      </div>

      {/* Floating Description Card */}

      <div className="about-description-card">

        <div className="about-description">

          <p>
            I am currently pursuing a B.Tech in Computer Science and have a
            strong interest in Full Stack Web Development. I enjoy transforming
            ideas into responsive, user-friendly, and scalable web applications
            using modern technologies.
          </p>

          <p>
            My journey has helped me develop practical experience with React,
            Node.js, Express.js, MongoDB, JavaScript, and REST APIs. I believe
            in continuous learning and enjoy solving real-world problems through
            clean and efficient code.
          </p>

        </div>

      </div>

      {/* Information Cards */}

      <div className="about-cards">

  <div className="about-card">

    <div className="about-icon">
      <FaGraduationCap />
    </div>

    <h3>Education</h3>

    <p>B.Tech</p>

    <span>Computer Science</span>

  </div>

  <div className="about-card">

    <div className="about-icon">
      <FaLocationDot />
    </div>

    <h3>Location</h3>

    <p>Kanpur</p>

    <span>Uttar Pradesh</span>

  </div>

  <div className="about-card">

    <div className="about-icon">
      <FaBullseye />
    </div>

    <h3>Goal</h3>

    <p>Building Impactful</p>

    <span>Digital Products</span>

  </div>

  <div className="about-card">

    <div className="about-icon">
      <FaLaptopCode />
    </div>

    <h3>Tech Stack</h3>

    <p>React • Node.js</p>

    <span>Express • MongoDB</span>

  </div>

</div>

    </section>
  );
}

export default About;