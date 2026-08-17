import "../styles/Certifications.css";

const certificationFiles = import.meta.glob(
  "../assets/certifications/*.pdf",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const certifications = Object.entries(certificationFiles).map(
  ([path, file]) => {
    const fileName = path.split("/").pop();

    let title = fileName
      .replace(".pdf", "")
      .replace(/[-_]/g, " ")
      .trim();

    if (title.toLowerCase().includes("walmart")) {
      title = "Advanced Software Engineering Job Simulation";
    } else if (title.toLowerCase().includes("cisco")) {
      title = "Getting Started with Cisco Packet Tracer";
    } else if (title.toLowerCase().includes("microsoft")) {
      title = "Microsoft Learn Achievement";
    }

    return {
      title,
      file,
    };
  }
);

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications"
      data-aos="fade-up"
    >
      <span className="section-label">CERTIFICATIONS</span>

      <h2 className="section-title">My Certifications</h2>

      <p className="certifications-subtitle">
        Certifications and achievements that reflect my continuous learning
        and technical development.
      </p>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            <div className="certification-icon">
              📜
            </div>

            <div className="certification-content">
              <h3>{certification.title}</h3>

              <p>
                Certificate of completion and achievement.
              </p>

              <a
                href={certification.file}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;