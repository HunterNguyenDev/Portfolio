import avatar from "../assets/images/avatar.png";
import resume from "../assets/resume/CV_Nguyễn Văn Hậu_English.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={avatar}
            alt="Avatar of Nguyen Van Hau"
            className="aspect-square w-200 cursor-pointer rounded-full object-cover opacity-80 duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="no-wrap h-20 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-5xl font-light whitespace-nowrap text-transparent md:text-7xl">
            Nguyen Van Hau
          </h1>

          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-2xl text-transparent md:text-5xl">
            Web Developer
          </h3>

          <p className="mt-2 text-sm text-pretty text-gray-400 md:text-base">
          I'm a passionate Front-end Web Developer with a strong focus on building responsive, user-friendly, and accessible web interfaces. With experience in HTML, CSS, JavaScript, and modern frameworks like React, I enjoy turning design concepts into interactive digital experiences. I take pride in writing clean, maintainable code and continuously learning new technologies to improve my craft. Whether working independently or collaborating in a team, I always aim to create high-quality web products that provide real value to users.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-5 rounded-4xl bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600 md:px-6 md:py-5"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
