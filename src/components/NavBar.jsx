import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Tech", href: "#tech" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/haunguyen79",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <BsGithub />,
      href: "https://github.com/haunguyen79",
      label: "GitHub",
      color: "hover:text-gray-500",
    },
    {
      icon: <BsFacebook />,
      href: null,
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <BsYoutube />,
      href: null,
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        Hunter.
      </a>

      {/* Menu (Desktop) */}
      <ul className="hidden gap-10 md:flex">
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Socials (Desktop) */}
      <ul className="hidden gap-5 md:flex">
        {socialLinks.map(({ icon, href, label, color }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`cursor-pointer text-xl opacity-70 transition-all duration-300 ${color} hover:opacity-100`}
              >
                {icon}
              </a>
            ) : (
              <span
                aria-label={label}
                className={`cursor-pointer text-xl opacity-70 transition-all duration-300 ${color} hover:opacity-100`}
              >
                {icon}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon (Mobile) */}
      {isOpened ? (
        <BiX className="block text-4xl md:hidden" onClick={() => setIsOpened(false)} />
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={() => setIsOpened(true)} />
      )}

      {/* Menu (Mobile) */}
      {isOpened && (
        <div className="fixed top-[84px] right-0 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                  onClick={() => setIsOpened(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            {socialLinks.map(({ icon, href, label, color }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`cursor-pointer text-xl opacity-70 transition-all duration-300 ${color} hover:opacity-100`}
                  >
                    {icon}
                  </a>
                ) : (
                  <span
                    aria-label={label}
                    className={`cursor-pointer text-xl opacity-70 transition-all duration-300 ${color} hover:opacity-100`}
                  >
                    {icon}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
