import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
      className={`fixed bottom-6 right-6 p-3 bg-gray-500 text-white rounded-full shadow-md transition-all 
      ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-gray-600`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
