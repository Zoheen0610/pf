import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex flex-col items-center justify-center h-screen text-center bg-white dark:bg-black transition-all">
      <motion.h1
        className="text-5xl font-bold dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-gray-500">Zoheen</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Fullstack Developer | Passionate about Machine Learning
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/128HfHWnOqUpuHHjcWOyaK8hzfDzHxifU/view?usp=sharing"
        download="resume.pdf"
        className="mt-6 px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Resume
      </motion.a>
    </section>
  );
};

export default Hero;
