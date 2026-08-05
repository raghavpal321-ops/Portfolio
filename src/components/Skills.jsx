import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
  title: "Tools",
  skills: [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
  ],
},
  ];

  return (
    <section className="skills" id="skills" data-aos="fade-up">

      <h2 className="section-title">My Skills</h2>

      <p className="skills-subtitle">
        I build modern, responsive, and scalable web applications using
        the latest technologies across frontend, backend, databases, and
        development tools.
      </p>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (

          <div className="category-card" key={index}>

            <h3>{category.title}</h3>

            <div className="skills-list">

              {category.skills.map((skill, i) => (

                <div className="skill-item" key={i}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;