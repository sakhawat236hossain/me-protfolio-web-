"use client"
import React from "react";
import { motion } from "framer-motion";

const skillsGroup = [
  {
    category: "Frontend Development",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/40",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    category: "Backend & Database",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/40",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "Tools & Deployment",
    color: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/40",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Vercel/Netlify", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 85 },
    ],
  },
];

const TechnicalExpertise = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500 dark:text-cyan-400 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3"
          >
            Efficiency & Skills
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsGroup.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }} 
              className="relative group"
            >
              <div className="h-full bg-white dark:bg-[#0d1526] backdrop-blur-xl border border-slate-200 dark:border-slate-800/50 p-6 md:p-8 rounded-[2.5rem] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-cyan-500/10 transition-all duration-500">
                
                {/* Header */}
                <div className="flex items-center gap-5 mb-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg ${group.glow}`}
                  >
                    <span className="text-2xl font-black">{group.category.charAt(0)}</span>
                  </motion.div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight group-hover:text-cyan-500 transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Progress Bars */}
                <div className="space-y-8">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm md:text-base font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="text-xs font-black text-cyan-600 dark:text-cyan-400"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "circOut", delay: 0.2 + (sIdx * 0.1) }}
                          className={`h-full bg-gradient-to-r ${group.color} rounded-full relative group-hover:brightness-125 transition-all`}
                        >
                          <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute -inset-1 bg-gradient-to-r ${group.color} rounded-[2.6rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;