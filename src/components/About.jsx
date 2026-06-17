import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold dark:text-white mb-6">About Me</h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  I'm Zoheen — a 4th year ECE undergrad from New Delhi, curious about the
  overlap between research and building. I work mostly in Python, with a focus
  on NLP, RAG, and geospatial ML. I like problems that sit somewhere between
  a paper and a product.
</p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          My work spans from estimating electricity access across 38,000+ villages
          using satellite and socio-economic data, to publishing in IEEE on urban
          traffic congestion analysis. I care about building systems that are both
          technically rigorous and practically meaningful.
        </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;