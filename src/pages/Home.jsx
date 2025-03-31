import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Achievement from "../components/Achievement";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-500 dark:text-blue-300">
      <Hero />
      <Skills />
      <Projects />
      <Achievement/>
      <Contact />
    </div>
  );
};

export default Home;
