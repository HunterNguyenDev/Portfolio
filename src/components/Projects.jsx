import project1 from "../assets/images/Movie_app.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";

import { motion } from "framer-motion";

const projectsData = [
  {
    image: project1,
    title: "Movie App",
    description:
      "Developed a movie website with a visually appealing and responsive design for both desktop and mobile users.",
    technologies: ["Tailwind CSS", "React"],
    link: "https://movie-app-test3.vercel.app/",
  },
  {
    image: image2,
    title: "Project 2",
    description: "Description of project 2",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://example.com/project2",
  },
  {
    image: image3,
    title: "Project 3",
    description: "Description of project 3",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://example.com/project3",
  },
  {
    image: image4,
    title: "Project 4",
    description: "Description of project 4",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://example.com/project4",
  },
  {
    image: image5,
    title: "Project 5",
    description: "Description of project 5",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://example.com/project5",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// const ProjectCard = ({ project }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center gap-8 rounded-lg bg-gray-800 p-4 shadow-lg transition-transform duration-300 hover:scale-105"
//       whileHover={{ scale: 1.05 }}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-48 w-full rounded-lg object-cover"
//       />
//       <h2 className="text-xl font-semibold text-white">{project.title}</h2>
//       <p className="text-gray-400">{project.description}</p>
//       <div className="flex flex-wrap gap-2 text-sm text-gray-500">
//         {project.technologies.map((tech) => (
//           <span key={tech} className="bg-gray-700 px-2 py-1 rounded-full">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
//       >
//         View Project
//       </a>
//     </motion.div>
//   );
// }

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <img
            src={project.image}
            alt={project.title}
            className="h-[200px] cursor-pointer rounded-2xl object-cover transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="text-gray-400">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          {" "}
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
