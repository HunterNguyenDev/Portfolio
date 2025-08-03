import { motion } from "framer-motion";
import { useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { LuSend } from "react-icons/lu";

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

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully!");

      setIsSubmitting(false);

      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <ScrollReveal>
      <div
        id="contact"
        className="flex min-h-[70vh] min-w-full items-center justify-center"
      >
        <div className="container max-w-5xl space-y-6 p-14">
          <h2 className="text-center text-4xl text-white md:text-6xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-8 mb-12 max-w-2xl text-center text-lg text-gray-400">
            Have a project in mind or just want to collaborate? Feel free to
            reach out! I'm always open to discussing new ideas opportunities.
          </p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8 p-8">
              <h3 className="mb-6 text-3xl font-medium text-white">
                Contact Information
              </h3>

              <div className="justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <CiMail className="text-primary h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a
                      href="mailto:hauhonguyen2001@gmail.com"
                      className="text-muted-foreground hover text-primary transition-colors"
                    >
                      hauhonguyen2001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <CiPhone className="text-primary h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a
                      href="tel: +84368047739"
                      className="text-muted-foreground hover text-primary transition-colors"
                    >
                      +84 368047739
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <CiLocationOn className="text-primary h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <a
                      href="https://www.google.com/maps?q=Thu+Duc,+Ho+Chi+Minh+City"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover text-primary transition-colors"
                    >
                      Thu Duc, Ho Chi Minh City, Vietnam
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 text-white shadow-xs">
              <h3 className="mb-6 text-3xl font-medium text-white">
                Send Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    {" "}
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="border-input focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="Hunter Nguyen..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {" "}
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="border-input focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="hunternguyen@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    {" "}
                    Message
                  </label>

                  <textarea
                    rows="2"
                    id="message"
                    name="message"
                    required
                    className="border-input focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-4xl bg-gradient-to-r from-pink-500 to-blue-500 px-3 py-2 text-white shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600 md:px-3 md:py-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <LuSend size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Contact;
