import React from "react";
import { motion } from "framer-motion";
import images from "../../assets/img";
import { Zap, Layers, Code2 } from "lucide-react";

export default function About() {
  const statsData = [
    
    { label: "Projects", value: "4+", icon: <Layers size={20} /> },
    { label: "Skills", value: "6+", icon: <Code2 size={20} /> },
  ];

  return (
    <section className="relative py-32 px-6 lg:px-24 bg-[#050505] overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE – Image with Orbital Particles */}
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="relative w-[300px] h-[360px] lg:w-[400px] lg:h-[480px] flex items-center justify-center">
            
            {/* ROTATING PARTICLE RING (Monochrome) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[110%] h-[110%] z-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-600 rounded-full" />
              <div className="absolute inset-0 border border-white/5 rounded-full" />
            </motion.div>

            {/* MIDNIGHT GLASS CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 h-full w-full bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl flex items-center justify-center p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <motion.img
                src={images.cartoon01}
                alt="About Me"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 max-h-[85%] object-contain  transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE – Content */}
        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
              About <span className="text-zinc-500">Me</span>
            </h2>
            <div className="w-16 h-1 bg-white rounded-full" />
          </motion.div>

          <motion.p
            className="text-lg text-zinc-400 leading-relaxed max-w-xl"
          >
            I am a Full-Stack Developer driven by clean code and minimalist design. 
            I specialize in building robust digital products that bridge the gap 
            between complex backend logic and seamless user interfaces.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-all"
              >
                <div className="p-3 bg-white text-black rounded-xl mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1 font-black">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}