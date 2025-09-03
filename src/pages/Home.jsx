import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Achievement from "../components/Achievement";
import Backtotop from "../components/BackToTop";
import Bg from "../components/Bg";

const Home = () => {
  return (
    <div className=" text-black dark:text-white">
      <Bg className="relative overflow-visible">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievement />
        <Contact />
        <Backtotop />
      </Bg>
    </div>
  );
};

export default Home;
