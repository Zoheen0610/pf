import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Image (Optional) */}
        {/* <motion.img
          src="https://via.placeholder.com/200" // Replace with your image
          alt="Profile"
          className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        /> */}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-center text-4xl font-bold dark:text-white py-5">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Hi, I'm Zoheen, a passionate frontend developer who loves crafting
            clean and interactive user interfaces. I enjoy working with React,
            Tailwind CSS, and creating intuitive designs that enhance user
            experience.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            When I'm not coding, I enjoy solving puzzles, exploring new
            technologies, and participating in tech fests.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
