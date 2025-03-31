import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "C++",
  "Git & GitHub",
  "MongoDB",
];

const Skills = () => {
  return (
    <div className="py-12 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-blue-200 dark:bg-gray-800 text-blue-900 dark:text-blue-300 font-semibold rounded-lg shadow-md transition-all hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
