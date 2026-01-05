"use client"
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", img: "https://img.icons8.com/color/96/html-5.png", shadow: "shadow-orange-500/20" },
  { name: "CSS", img: "https://img.icons8.com/color/96/css3.png", shadow: "shadow-blue-500/20" },
  { name: "JavaScript", img: "https://img.icons8.com/color/96/javascript.png", shadow: "shadow-yellow-500/20" },
  { name: "React", img: "https://img.icons8.com/color/96/react-native.png", shadow: "shadow-cyan-500/20" },
  { name: "Next.js", img: "https://img.icons8.com/fluency/96/nextjs.png", shadow: "shadow-slate-500/20" },
  { name: "Tailwind", img: "https://img.icons8.com/color/96/tailwindcss.png", shadow: "shadow-sky-500/20" },
  { name: "Node.js", img: "https://img.icons8.com/fluency/96/node-js.png", shadow: "shadow-green-500/20" },
  { name: "Express.js", img: "https://img.icons8.com/office/96/express-js.png", shadow: "shadow-gray-500/20" },
  { name: "MongoDB", img: "https://img.icons8.com/color/96/mongodb.png", shadow: "shadow-green-600/20" },
  { name: "Firebase", img: "https://img.icons8.com/color/96/firebase.png", shadow: "shadow-amber-500/20" },
  { name: "Git", img: "https://img.icons8.com/color/96/git.png", shadow: "shadow-red-500/20" },
  { name: "GitHub", img: "https://img.icons8.com/fluency/96/github.png", shadow: "shadow-slate-400/20" },
  { name: "Vercel", img: "https://img.icons8.com/fluency/96/vercel.png", shadow: "shadow-white/10" },
  { name: "Figma", img: "https://img.icons8.com/color/96/figma.png", shadow: "shadow-purple-500/20" },
  { name: "VS Code", img: "https://img.icons8.com/fluency/96/visual-studio-code-2019.png", shadow: "shadow-blue-600/20" },
  { name: "npm", img: "https://img.icons8.com/color/96/npm.png", shadow: "shadow-red-600/20" },
  { name: "Postman", img: "https://img.icons8.com/color/96/postman-api.png", shadow: "shadow-orange-600/20" },
  { name: "REST API", img: "https://img.icons8.com/ios-filled/96/api-settings.png", shadow: "shadow-slate-400/20" },
];

const SkillsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="skills" className="relative w-full py-10 md:py-20 px-4 overflow-hidden bg-transparent">
      
      {/* --- Aesthetic Background Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center relative mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-black tracking-[0.5em] uppercase text-xs mb-4 block"
          >
            My Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 animate-gradient-x">Skillset</span>
          </motion.h2>
          <div className="relative inline-flex items-center justify-center">
            <div className="w-40 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ left: "-100%" }}
                    whileInView={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 w-20 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                />
            </div>
          </div>
        </div>

        {/* --- Skill Rows --- */}
        <div className="space-y-12 relative">
          {/* Row 1 */}
          <div className="relative">
            <Marquee speed={60} gradient={false} pauseOnHover={true}>
              {skillsData.slice(0, 9).map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </Marquee>
          </div>

          {/* Row 2 */}
          <div className="relative">
            <Marquee speed={60} direction="right" gradient={false} pauseOnHover={true}>
              {skillsData.slice(9).map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Refined SkillCard Component ---
const SkillCard = ({ skill }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotateY: 10 }}
    className="mx-4 md:mx-8 py-8 perspective-1000"
  >
    <div className={`relative w-28 h-36 md:w-44 md:h-56 flex flex-col items-center justify-center rounded-[2.5rem] bg-white dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200 dark:border-white/5 transition-all duration-500 group cursor-pointer shadow-2xl ${skill.shadow} hover:border-purple-500/50`}>
      
      {/* Card Inner Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Floating Icon */}
      <div className="relative w-14 h-14 md:w-24 md:h-24 mb-4 transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
        <img
          src={skill.img}
          alt={skill.name}
          className="w-full h-full object-contain filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Text with Letter Spacing */}
      <p className="font-black text-[10px] md:text-sm text-slate-400 group-hover:text-white transition-colors tracking-[0.2em] uppercase">
        {skill.name}
      </p>

      {/* Hover Line Indicator */}
      <div className="absolute bottom-6 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
      
    </div>
  </motion.div>
);

export default SkillsSection;