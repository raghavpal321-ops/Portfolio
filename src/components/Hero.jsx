import "../styles/Hero.css";

import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <h3>Hello, I'm</h3>

          <h1>Raghav Pal</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build responsive web applications using React, Node.js,
            Express, and MongoDB. I enjoy learning new technologies
            and solving real-world problems through code.
          </p>

          <div className="hero-buttons">

            <button>Download Resume</button>

            <button>Contact Me</button>

          </div>

            <div className="hero-stats">

    <div>
        <h3>5+</h3>
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