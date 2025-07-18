import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Achievement from "../components/Achievement";
import Backtotop from "../components/BackToTop";
const Home = () => {
  return (
    <div className=" bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-black dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
      <Backtotop />
    </div>
  );
};

export default Home;
