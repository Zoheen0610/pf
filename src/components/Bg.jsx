import React, { useState, useEffect } from "react";

export default function Bg({ className = "", children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed w-full bg-white dark:bg-black overflow-hidden ${className}`}
    >
      <div
        className="fixed inset-0 [background-size:40px_40px] dark:opacity-0 transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(228,228,231,0.7) 1px, transparent 1px),
            linear-gradient(to bottom,rgba(228,228,231,0.7) 1px, transparent 1px)
          `,
        }}
      />

      {/* Dark grid */}
      <div
        className="fixed inset-0 [background-size:40px_40px] opacity-0 dark:opacity-100 transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(70,70,70,0.1) 1px, transparent 1px),
            linear-gradient(to bottom,rgba(70,70,70,0.1) 1px, transparent 1px)
          `,
        }}
      />

      {/* Pink glowing grid borders (masked to cursor cluster) */}
      <div
        className="fixed inset-0 [background-size:40px_40px] pointer-events-none transition-all duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(236,72,153,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(236,72,153,0.5) 1px, transparent 1px)
          `,
          WebkitMaskImage: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px, white, transparent)`,
          maskImage: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px, white, transparent)`,
        }}
      />

      {/* Hero text or children */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
