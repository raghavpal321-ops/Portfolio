import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
            src={project.image}
            alt={project.title}
        />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;