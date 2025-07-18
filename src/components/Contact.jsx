import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 transition-all">
      <div className="container mx-auto text-center px-5">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-extrabold text-black dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Let's connect! Feel free to reach out via email or through my socials.
        </motion.p>

        {/* Social Icons with Hover Effects */}
        <motion.div
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/zoheen-shahzad-239041252/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-blue-600 hover:text-blue-800 transition-all"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Zoheen0610"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-gray-800 dark:text-white hover:text-gray-600 transition-all"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:zoheen.shahz@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-red-500 hover:text-red-700 transition-all"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* Contact Form with Animated Input Fields */}
        <motion.form
          className="mt-8 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-pink-cherry outline-none"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-pink-cherry outline-non"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-pink-cherry outline-none"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full px-6 py-3 bg-pink-200 text-black font-semibold rounded-md hover:bg-pink-300 transition-all shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
