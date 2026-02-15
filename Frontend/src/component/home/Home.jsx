import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "../Navbar/Navbar.jsx";
import MainPage from "./MainPage.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const targetRef = sectionRefs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3,
      rootMargin: "-10% 0px -10% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  /**
   * ENHANCED BRAND-COLORED SOCIAL LINK
   * Features: Brand-specific glow, squircle shape, and 3D inner highlight
   */
  const SocialLink = ({ href, icon: Icon, label, activeColor }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.1, 
        y: -3,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: activeColor // Border glows with brand color
      }}
      whileTap={{ scale: 0.95 }}
      className="relative p-4 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-2xl text-zinc-500 transition-all duration-300 group shadow-2xl"
      aria-label={label}
    >
      {/* Background Glow - Matches Brand Color */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500" 
        style={{ backgroundColor: activeColor }}
      />
      
      <Icon 
        size={22} 
        className="relative z-10 transition-colors duration-300 group-hover:text-white" 
      />

      {/* Subtle Inner highlight for physical depth */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" />
    </motion.a>
  );

  return (
    <div className="relative min-h-screen font-sans bg-[#0a0a0c] text-zinc-200 selection:bg-white selection:text-black">
      
      {/* 2026 ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base Layer: Midnight Charcoal (Superior to pure black) */}
        <div className="absolute inset-0 bg-[#0a0a0c]" />
        
        {/* Studio Lighting: Top Center Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.12),transparent_50%)]" />

        {/* Top Left: Slate Blue Atmospheric Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-slate-500/10 blur-[140px] rounded-full animate-pulse" />
        
        {/* Bottom Right: Industrial Zinc Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/15 blur-[120px] rounded-full" />
      </div>

      {/* FIXED SOCIALS SIDEBAR with Colored Interaction */}
      <div className="fixed left-8 bottom-0 z-50 hidden lg:flex flex-col gap-4 mb-10">
        <SocialLink 
          href="https://github.com/Farzan639" 
          icon={Github} 
          label="GitHub" 
          activeColor="#a855f7" // Brand Purple
        />
        <SocialLink 
          href="https://www.linkedin.com/in/mohd-farzan-raza-870157355/" 
          icon={Linkedin} 
          label="LinkedIn" 
          activeColor="#0ea5e9" // Brand Blue
        />
        <SocialLink 
          href="mailto:mohdfarzan01@gmail.com" 
          icon={Mail} 
          label="Email" 
          activeColor="#ef4444" // Brand Red
        />
        
        {/* Vertical Shimmer Line */}
        <div className="w-[1.5px] h-24 bg-gradient-to-t from-zinc-500/50 via-zinc-500/10 to-transparent mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      </div>

      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      <main className="relative z-10 px-4 lg:px-12 py-24 max-w-[1400px] mx-auto space-y-32">
        
        <section id="home" ref={sectionRefs.home} className="section-style">
         <MainPage scrollToSection={scrollToSection} />
        </section>

        <section id="about" ref={sectionRefs.about} className="section-style">
          <About />
        </section>

        <section id="projects" ref={sectionRefs.projects} className="section-style">
          <ProjectsSection />
        </section>

        <section id="skills" ref={sectionRefs.skills} className="section-style">
          <SkillsSection />
        </section>

        <section id="contact" ref={sectionRefs.contact} className="section-style">
          <Contact />
        </section>
      </main>

      {/* High-Contrast Section Styles */}
      <style jsx>{`
        .section-style {
          width: 100%;
          min-height: 80vh;
          border-radius: 3rem;
          overflow: hidden;
          /* Premium Dual-Gradient for Glass Effect */
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);
          scroll-margin-top: 8rem;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .section-style:hover {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}