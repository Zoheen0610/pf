import React from "react";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Python",
  "C++",
  "Git & GitHub",
  "MongoDB",
  "Computer Vision",
  "Convolutional Neural Networks",
  "NLP",
];

const Skills = () => {
  return (
    <div className="py-16 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-3 bg-white/80 dark:bg-black/30 backdrop-blur-lg text-gray-800 dark:text-pink-300 font-medium rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-pink-300/30"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
