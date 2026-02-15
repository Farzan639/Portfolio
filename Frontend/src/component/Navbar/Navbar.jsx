import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollToSection, activeSection }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 w-full flex justify-center z-50 px-6"
    >
      <nav
        className="flex items-center justify-between w-full max-w-5xl px-8 py-3 
        bg-[#0a0a0a]/80 backdrop-blur-2xl 
        border border-white/10 shadow-2xl
        rounded-2xl"
      >
        {/* Logo - High Contrast White */}
        <motion.div
          whileHover={{ x: 2 }}
          onClick={() => scrollToSection("home")}
          className="cursor-pointer"
        >
          <span className="font-bold text-xl tracking-tighter text-white">
            MOHD FARZAN<span className="opacity-40 font-light">.</span>
          </span>
        </motion.div>

        {/* Navigation - Minimalist Tabs */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 group outline-none"
              >
                <span
                  className={`relative z-10 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-black" // Text turns black when background is white
                      : "text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>

                {/* Pure White Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Secondary Action */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>
      </nav>
    </motion.div>
  );
}