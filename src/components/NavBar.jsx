import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const menuOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        Hunter.
      </a>

      <ul className="hidden gap-10 md:flex">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>

        <a
          href="#project"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Project</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden gap-5 md:flex">
        <a
          href="https://www.linkedin.com/in/v%C4%83n-h%E1%BA%ADu-nguy%E1%BB%85n-258846342/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/HunterNguyenDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100"
        >
          <BsGithub />
        </a>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
          <BsFacebook />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
      </ul>

      {isOpened ? (
        <BiX className="block text-4xl md:hidden" onClick={menuOpened} />
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={menuOpened} />
      )}

      {isOpened && (
        <div
          className={`fixed top-[84px] right-0 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpened ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>

            <a
              href="#project"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Project</li>
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <a
              href="https://www.linkedin.com/in/v%C4%83n-h%E1%BA%ADu-nguy%E1%BB%85n-258846342/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/HunterNguyenDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100"
            >
              <BsGithub />
            </a>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
              <BsFacebook />
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
