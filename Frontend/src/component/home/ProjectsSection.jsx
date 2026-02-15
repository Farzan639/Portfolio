import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Rocket, Globe } from "lucide-react";

export default function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const projects = [
    {
      title: "Estate Landing Page",
      desc: "A high-performance responsive landing page for real estate. Focuses on clean UX, modern layout transitions, and optimized mobile viewing.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      icon: <Rocket size={24} />,
      github: "https://github.com/Farzan639/Estate-LP",
      live: "https://estate-lp.vercel.app/",
      accent: "#10b981" // Emerald
    },
    {
      title: "AI Image Generator",
      desc: "Full-stack platform converting text to visuals via Hugging Face API. Includes public gallery, image hosting, and prompt optimization.",
      tech: ["React", "Node", "MongoDB", "AI API"],
      icon: <Code2 size={24} />,
      github: "https://github.com/Farzan639/AI_Image_Generator",
      live: "#",
      accent: "#0ea5e9" // Blue
    },
    {
      title: "TripVerse",
      desc: "Road trip planning application with dynamic destination exploration. Features interactive maps, trip organization, and saved itineraries.",
      tech: ["MongoDB", "Express", "Tailwind", "Node"],
      icon: <Globe size={24} />,
      github: "https://github.com/Farzan639/RoadTrip-Planner",
      live: "https://road-trip-planner-xi.vercel.app/",
      accent: "#6366f1" // Indigo
    }
  ];

  return (
    <section className="relative min-h-screen w-full px-6 lg:px-24 py-32 overflow-hidden bg-[#050505]">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-800/10 rounded-full blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
            Featured <span className="text-zinc-500">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-white mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg max-w-2xl font-medium">
            Technical solutions built with a focus on performance, 
            scalability, and minimalist design architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                borderColor: `${project.accent}40`, // 25% opacity border
                backgroundColor: `${project.accent}05` // 2% opacity background
              }}
              className="group relative bg-white/[0.02] border border-white/5 
                         rounded-[2.5rem] p-8 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Brand Accent Glow */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: project.accent }}
              />

              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div 
                  className="p-4 rounded-2xl transition-all duration-500 text-black"
                  style={{ backgroundColor: 'white' }}
                >
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="p-2 text-zinc-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:tracking-wide transition-all duration-500">
                {project.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-8 text-sm group-hover:text-zinc-400 transition-colors">
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-black uppercase tracking-[0.15em] 
                               text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-white/5 transition-colors group-hover:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}