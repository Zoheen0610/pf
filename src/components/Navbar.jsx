import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">ZS</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/education" className="hover:text-gray-400">
            Education
          </Link>
          <Link to="/experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-700 dark:bg-gray-600"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-center bg-gray-700 dark:bg-gray-800 py-4 rounded-lg">
          <Link
            to="/"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/education"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/experience"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setIsOpen(false);
            }}
            className="p-2 rounded-full bg-gray-600"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
