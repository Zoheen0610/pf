import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
  // Intersection Observer Hooks
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className=" text-black dark:text-white max-w-3xl mx-auto py-10 px-5">
      <motion.h1
        className="text-4xl font-extrabold text-black dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Positions of Responsibility & Achievements
      </motion.h1>

      {/* GDSC Role - Scroll Animation */}
      <motion.div
        ref={ref1}
        className="bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, x: -30 }}
        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold ">
          GDSC-JMI (Social Media Team Lead)
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Managed event promotions and community engagement, driving{" "}
          <strong>50K+ total views</strong> and reaching{" "}
          <strong>5K+ unique accounts</strong>.
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
          <li>
            Organized multiple tech events and fests ensuring smooth execution.
          </li>
          <li>Created high-impact reels and graphics for event promotion.</li>
          <li>Recognized for consistent and impactful contributions**.</li>
        </ul>
      </motion.div>

      {/* Achievements - Scroll Animation */}
      <motion.div
        ref={ref2}
        className="bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg mt-8 transition-transform transform hover:scale-105"
        initial={{ opacity: 0, x: 30 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Achievements
        </h2>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
          <li>
            <strong>Google-Talentsprint WE Scholar (2023)</strong> - Among 200
            selected out of 22,000+ applicants, after clearing 4 rigorous
            selection rounds. Received 1,00,000 rupees in scholarship.
          </li>
          <li>
            <strong>Gold Medal (2019)</strong> - Awarded for academic
            excellence, recognizing outstanding performance.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Achievements;
