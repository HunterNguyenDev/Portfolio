import { motion } from "framer-motion";
import projectsData from "../data/projectsData";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// ScrollReveal Component
const ScrollReveal = ({ children }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// ProjectCard Component
const ProjectCard = ({
  project: { image, title, description, technologies, demoUrl, githubUrl },
}) => (
  <ScrollReveal>
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
      <article className="flex flex-col gap-8 md:flex-row md:gap-24">
        <img
          src={image}
          alt={title}
          className="h-[200px] cursor-pointer rounded-2xl object-cover transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors duration-300 hover:text-2xl hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
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
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
    </ScrollReveal>
    <div className="flex w-full max-w-[1000px] flex-col gap-16 py-10 text-white">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>

    <div className="text-center">
      <a
        className="flex items-center gap-2 rounded-4xl bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600 md:px-5 md:py-4"
        href="https://github.com/haunguyen79"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check My GitHub <FaArrowRight size={16} />
      </a>
    </div>
  </section>
);

export default Projects;
