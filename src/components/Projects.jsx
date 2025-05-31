import { motion } from "framer-motion";
import projectsData from "../data/projectsData";

// ScrollReveal Component 
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// ProjectCard Component
const ProjectCard = ({ project: { image, title, description, technologies, link } }) => (
  <ScrollReveal>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="flex flex-col gap-8 md:flex-row md:gap-24">
        <img
          src={image}
          alt={title}
          className="h-[200px] cursor-pointer rounded-2xl object-cover transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  </ScrollReveal>
);

// Projects Component
const Projects = () => (
  <section
    id="project"
    className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24 md:py-24"
  >
    <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
    </ScrollReveal>
    <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
