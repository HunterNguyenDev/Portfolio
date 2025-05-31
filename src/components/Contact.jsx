const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h=[70vh] flex min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Send me an E-mail through this button and I'll respond as soon as possible!
        </p>

        <a
          href="mailto:hauhonguyen2001@gmail.com"
          className="hover:transition-y-2 rounded-lg border border-indigo-600 bg-black px-5 py-4 text-lg font-bold text-nowrap text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
