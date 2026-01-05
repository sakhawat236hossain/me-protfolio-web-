"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaCertificate, FaRocket, FaChevronRight } from 'react-icons/fa';

const timelineData = [
  {
    title: "Web Development Mastery",
    organization: "Programming Hero",
    date: "July 2025 - Present",
    description: "Intensive training on the MERN Stack. Developed deep expertise in React.js, Node.js, and modern web architecture through 12+ industry-standard projects.",
    icon: <FaCode />,
    color: "from-purple-600 to-blue-600",
    glow: "shadow-purple-500/20"
  },
  {
    title: "Self-Learning & Innovation",
    organization: "Open Source / Personal Lab",
    date: "Ongoing Journey",
    description: "Deep-diving into Next.js 14+, Framer Motion for advanced animations, and system design to build scalable and high-performance applications.",
    icon: <FaRocket />,
    color: "from-pink-600 to-rose-600",
    glow: "shadow-pink-500/20"
  },
  {
    title: "Rooted in Discipline",
    organization: "Madrasa Academic Background",
    date: "Formative Years",
    description: "My traditional background instilled in me profound patience and a strong ethical foundation—qualities I now apply to complex debugging and problem-solving.",
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-cyan-600",
    glow: "shadow-blue-500/20"
  },
  {
    title: "The Next Big Step",
    organization: "Aspiring MERN Developer",
    date: "Ready for 2026",
    description: "Actively looking for opportunities to contribute to a professional team and grow as a software engineer while delivering high-quality web solutions.",
    icon: <FaCertificate />,
    color: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/20"
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-transparent">
      
      {/* --- Decorative Background Orbs --- */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            My Professional Evolution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white"
          >
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">Journey</span>
          </motion.h2>
        </div>

        {/* --- Timeline Wrapper --- */}
        <div className="relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-x-1/2"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                
                {/* --- Content Card --- */}
                <motion.div 
                   initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}
                >
                  <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-slate-200 dark:from-slate-800 to-transparent hover:from-purple-500/40 transition-all duration-500">
                    <div className="p-6 md:p-8 bg-white dark:bg-[#080B14] rounded-[22px] backdrop-blur-xl transition-all">
                      <div className={`inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-purple-500 uppercase mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="w-8 h-[1px] bg-purple-500/30"></span>
                        {item.date}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-purple-500 transition-colors">
                        {item.title}
                      </h3>
                      
                      <h4 className="text-sm font-bold text-slate-400 mb-5 flex items-center gap-2 justify-start md:justify-end lg:justify-start">
                         {index % 2 !== 0 && <FaChevronRight className="text-[10px] text-purple-500" />}
                         {item.organization}
                         {index % 2 === 0 && <FaChevronRight className="text-[10px] text-purple-500 rotate-180 hidden md:block" />}
                      </h4>

                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* --- Central Point (Icon) --- */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} ${item.glow} text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-[#020617] cursor-pointer`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* --- Spacer for Grid --- */}
                <div className="hidden md:block w-[45%] md:order-2"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;