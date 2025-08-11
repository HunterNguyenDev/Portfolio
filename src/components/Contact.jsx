import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { LuSend } from "react-icons/lu";

import toast from "react-hot-toast";

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

  const form = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (formData.message.trim().length < 5) {
      toast.error("Message must be at least 5 characters");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Use EmailJS to send the form data
    // Cach 1: toast.promise
    
    toast
      .promise(
        emailjs.sendForm("service_uyhqd2q", "template_efb6uls", form.current, {
          publicKey: "XvUjKeUKwkjS7zMv1",
        }), //gửi dữ liệu form đến EmailJS API
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again later.",
        },
      )
      .then(() => setFormData({ name: "", email: "", message: "" }))
      .finally(() => setIsSubmitting(false));

    // Cach 2: KHONG dung toast.promise (Cách thông thường)

    /* setIsSubmitting(true);
    toast.loading("Sending message..."); // Hiện toast trạng thái loading

    emailjs
      .sendForm("service_uyhqd2q", "template_efb6uls", form.current, {
        publicKey: "XvUjKeUKwkjS7zMv1",
      })
      .then(() => {
        toast.dismiss(); // Tắt toast loading
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false); // Bật lại nút submit
      });
    **/

    console.log({ toast, formData });
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
              <h3 className="mb-6 text-center text-3xl font-medium text-white md:text-left">
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
                      className="text-muted-foreground text-primary flex flex-wrap break-all transition-colors"
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
                      className="text-muted-foreground text-primary transition-colors"
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
                      className="text-muted-foreground text-primary transition-colors"
                    >
                      Thu Duc, Ho Chi Minh City, Viet Nam
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 text-white shadow-xs">
              <h3 className="mb-6 text-center text-3xl font-medium text-white md:text-left">
                Send Message
              </h3>

              <form className="space-y-7" ref={form} onSubmit={sendEmail}>
                <div className="relative h-16">
                  <label
                    htmlFor="name"
                    className="absolute -top-3 left-4 z-10 rounded-md bg-black/80 px-1"
                  >
                    {" "}
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="focus:ring-primary top-0 left-0 z-[1] w-full rounded-lg border bg-transparent px-5 py-4 focus:ring-2 focus:outline-none"
                    placeholder="Hunter Nguyen..."
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative h-16">
                  <label
                    htmlFor="email"
                    className="absolute -top-3 left-4 z-10 rounded-md bg-black/80 px-1"
                  >
                    {" "}
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="focus:ring-primary top-0 left-0 z-[1] w-full rounded-lg border bg-transparent px-5 py-4 focus:ring-2 focus:outline-none"
                    placeholder="hunternguyen@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative h-16">
                  <label
                    htmlFor="message"
                    className="absolute -top-3 left-4 z-10 rounded-md bg-black/80 px-1"
                  >
                    {" "}
                    Message
                  </label>

                  <textarea
                    rows="2"
                    id="message"
                    name="message"
                    required
                    className="focus:ring-primary top-0 left-0 z-[1] w-full resize-none rounded-lg border bg-transparent px-5 py-4 focus:ring-2 focus:outline-none"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-12 flex w-full items-center justify-center gap-2 rounded-4xl bg-gradient-to-r from-pink-500 to-blue-500 px-3 py-2 text-white shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600 md:px-3 md:py-2"
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
