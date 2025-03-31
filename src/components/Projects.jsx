import { motion } from "framer-motion";
import skillpilotImg from "../assets/skillpilot.png";
import foodimg from "../assets/food.png"
import nlp from "../assets/nlp2.jpeg"
const projects = [
  {
    title: "SkillPilot",
    description: "An AI-powered tool to suggest career paths based on skills.",
    image: skillpilotImg,
    link: "https://skillpilot.netlify.app/",
  },
  {
    title: "GEC-Model",
    description: "A productivity app designed like a desk page.",
    image: nlp,
    link: "https://github.com/Zoheen0610/GEC",
  },
  {
    title: "Food-En-Route",
    description: "Food delivery App.",
    image:foodimg,
    link: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-all"
    >
      <h2 className="text-4xl font-bold text-center dark:text-white">
        My Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
