import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, Layout, Terminal, Globe, ShieldCheck } from "lucide-react";

export default function SkillsSection() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const skills = [
    { name: "React.js", icon: <Layout size={18} /> },
    { name: "Node.js", icon: <Terminal size={18} /> },
    { name: "Express.js", icon: <Cpu size={18} /> },
    { name: "MongoDB", icon: <Database size={18} /> },
    { name: "Tailwind CSS", icon: <Globe size={18} /> },
    { name: "REST APIs", icon: <ShieldCheck size={18} /> },
    { name: "Redux", icon: <Code2 size={18} /> },
    { name: "JavaScript", icon: <Code2 size={18} /> },
    { name: "Python", icon: <Terminal size={18} /> },
    { name: "Git & GitHub", icon: <Code2 size={18} /> },
    { name: "Responsive Design", icon: <Layout size={18} /> },
    
  ];

  return (
    <section className="relative min-h-screen w-full px-6 lg:px-24 py-32 overflow-hidden bg-[#050505]">

      {/* Center Background Glow (Midnight Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4 text-left"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
            Technical <span className="text-zinc-500">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-white rounded-full" />
          <p className="text-zinc-400 text-lg pt-4 font-medium max-w-xl">
            A specialized stack focused on building high-performance 
            web applications and scalable backend systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.04)"
              }}
              className="group flex items-center gap-4 bg-white/[0.02] border border-white/5
              rounded-xl py-5 px-6 transition-all duration-300 cursor-default shadow-sm"
            >
              {/* High Contrast Icon Box */}
              <div className="p-2.5 bg-white text-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              <span className="font-bold text-zinc-400 group-hover:text-white transition-colors tracking-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}