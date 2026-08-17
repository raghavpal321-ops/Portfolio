import "../styles/Hero.css";

import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <h3>Hello, I'm</h3>

          <h1>Raghav Pal</h1>

          <h2>MERN Stack Developer</h2>

          <p>
                  I build modern web applications using the MERN stack and AI/ML solutions using Python and computer vision, turning real-world problems into practical and user-friendly solutions.
          </p>

          <div className="hero-buttons">

            <button>Download Resume</button>

            <button>Contact Me</button>

          </div>

            <div className="hero-stats">

    <div>
        <h3>3+</h3>
        <p>Projects</p>
    </div>

    <div>
        <h3>10+</h3>
        <p>Technologies</p>
    </div>

    <div>
        <h3>100%</h3>
        <p>Learning</p>
    </div>

    <div>
        <h3>Open</h3>
        <p>Internship</p>
    </div>

  </div>

        </div>

        <div className="hero-image">

          <div className="image-card">

            <img src={profile} alt="Raghav" />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;