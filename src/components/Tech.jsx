import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const icons = [
  { Icon: BiLogoHtml5, color: "text-orange-500", name: "HTML5" },
  { Icon: BiLogoCss3, color: "text-blue-500", name: "CSS3" },
  { Icon: BiLogoJavascript, color: "text-yellow-400", name: "JavaScript" },
  { Icon: BiLogoTypescript, color: "text-blue-500", name: "TypeScript" },
  { Icon: BiLogoTailwindCss, color: "text-sky-400", name: "Tailwind CSS" },
  { Icon: BiLogoReact, color: "text-cyan-400", name: "React" },
  { Icon: BiLogoRedux, color: "text-purple-600", name: "Redux" },
  { Icon: BiLogoNodejs, color: "text-green-500", name: "Node.js" },
];

const Tech = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="py-10">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {icons.map(({ Icon, color, name }) => (
            <div key={name} className="group flex flex-col items-center">
              <Icon
                aria-label={name}
                title={name}
                className={`cursor-pointer text-[80px] transition-all duration-300 ease-in-out hover:-translate-y-5 sm:text-[100px] md:text-[120px] ${color}`}
              />
              <span className="mt-2 text-xl text-gray-200 transition group-hover:font-semibold sm:text-base">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
