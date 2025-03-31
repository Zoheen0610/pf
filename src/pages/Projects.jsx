import React from "react";

const projects = [
  {
    title: "SkillPilot",
    description:
      "AI-powered career guidance platform with resume tools and salary insights.",
    link: "https://skillpilot-wysm.onrender.com/",
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
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Projects
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Mini Projects Section */}
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-10 mb-4">
        Mini Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {miniProjects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
