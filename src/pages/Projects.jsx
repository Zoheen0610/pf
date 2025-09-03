import React from "react";
import Bg from "../components/Bg";

const projects = [
  {
    title: "SkillPilot",
    description:
      "AI-powered career guidance platform with resume tools and salary insights.",
    link: "https://skillpilot.netlify.app/",
  },
  {
    title: "Grammar Error Correction (GEC)",
    description:
      "An AI model using T5 for correcting grammatical errors in text.",
    link: "https://github.com/Zoheen0610/GEC",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Predicts 10-year risk of coronary heart disease using machine learning.",
    link: "https://github.com/Zoheen/CHD-ML-",
  },
  {
    title: "Food-en-Route",
    description: "A restaurant management system with real-time menu updates.",
    link: "https://github.com/Zoheen/WEproject",
  },
];

const miniProjects = [
  {
    title: "Polaroid",
    description: "A creative polaroid effect showcase.",
    link: "https://github.com/Zoheen0610/polaroid",
  },
  {
    title: "Saving Tracker",
    description: "A financial management app to track savings and expenses.",
    link: "https://github.com/Zoheen0610/savingstracker",
  },
  {
    title: "Loan Calculator",
    description: "A simple calculator to estimate loan EMIs.",
    link: "https://github.com/Zoheen0610/loancalculator",
  },
];

const Projects = () => {
  return (
    <div className="dark:bg-black text-black dark:text-white px-4 py-10 min-h-screen">
      <Bg className="relative overflow-visible">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
          Projects
        </h1>

        {/* Main Projects */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mt-12 mb-6">
          Mini Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </Bg>
    </div>
  );
};

export default Projects;
