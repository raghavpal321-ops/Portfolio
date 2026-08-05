import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" data-aos="zoom-in">

      <h2 className="section-title">
        My Projects
      </h2>

      <div className="projects-container">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;