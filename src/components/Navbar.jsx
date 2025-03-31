import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-gray-800 dark:bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">ZS</h1>
      <div className="flex items-center gap-6">
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
        {/* Theme Toggle Button */}
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
    </nav>
  );
};

export default Navbar;
