
const Footer = () => {
  return (
    <footer>
      <div className="mt-10 border-t border-gray-400 py-5 text-center text-sm text-gray-300 flex flex-wrap w-full justify-center">

        &copy; {new Date().getFullYear()} Nguyen Van Hau (Hunter Nguyen). All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
