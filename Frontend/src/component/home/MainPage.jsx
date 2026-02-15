import React from "react";
import { Download, Rocket, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import images from "../../assets/img";
import myCV from "../../assets/FarzanResume.pdf";

export default function MainPage() {
  /* ---------------- PREMIUM STAGGER ---------------- */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  /* ---------------- 3D PARALLAX ---------------- */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [7, -7]);
  const rotateY = useTransform(x, [-300, 300], [-7, 7]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const particles = [
    { size: "w-4 h-4", color: "bg-white", pos: "top-0 left-1/2 -translate-x-1/2" },
    { size: "w-3 h-3", color: "bg-zinc-500", pos: "bottom-0 left-1/2 -translate-x-1/2" },
    { size: "w-2 h-2", color: "bg-white/50", pos: "top-1/2 right-0 -translate-y-1/2" },
    { size: "w-2.5 h-2.5", color: "bg-zinc-400", pos: "top-1/2 left-0 -translate-y-1/2" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20 overflow-hidden bg-[#050505]"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] -z-10 animate-pulseSoft" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-8"
        >
          <motion.div
            variants={item}
            className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full w-fit"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available for Freelance & Full-Time
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Farzan
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-zinc-400 max-w-lg leading-relaxed"
          >
            Full-Stack Engineer specializing in React and Node.js. 
            I build scalable applications with high-performance code 
            and minimalist design.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-5 pt-4">
            <motion.a
              href={myCV}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <Download size={18} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white font-semibold px-6 py-4 transition-colors hover:text-zinc-400"
            >
              View My Work <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[400px] lg:w-[420px] lg:h-[540px] flex items-center justify-center">
            
            {/* Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%]"
            >
              {particles.map((p, i) => (
                <div key={i} className={`absolute ${p.size} ${p.color} ${p.pos} rounded-full blur-[1px]`} />
              ))}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
            </motion.div>

            {/* Image Card */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative z-10 w-full h-full bg-zinc-900 border border-white/10 rounded-[24px] shadow-2xl overflow-hidden p-3 transition-transform duration-200 ease-out"
            >
              <div className="w-full h-full overflow-hidden rounded-[18px]  transition-all duration-700">
                <img
                  src={images?.Farzanimg}
                  alt="Farzan"
                  className="h-full w-full object-cover scale-110"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}