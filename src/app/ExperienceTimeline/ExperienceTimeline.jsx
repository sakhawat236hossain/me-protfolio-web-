"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

const experienceData = [
  {
    title: "MERN Stack Developer",
    organization: "Personal Projects & Freelance",
    date: "Dec 2024 - Present",
    description:
      "Built production-grade applications with React, Next.js, Node.js, and MongoDB, delivering responsive interfaces with secure backend workflows.",
    icon: <FaCode />,
    color: "from-purple-600 to-blue-600",
    glow: "shadow-purple-500/20",
  },
  {
    title: "Full-Stack Product Development",
    organization: "TicketBari & Care.xyz",
    date: "2025 - 2026",
    description:
      "Designed end-to-end booking platforms with role-based dashboards, payment integration, and analytics-driven interfaces.",
    icon: <FaRocket />,
    color: "from-pink-600 to-rose-600",
    glow: "shadow-pink-500/20",
  },
];

const educationData = [
  {
    title: "Web Development Bootcamp",
    organization: "Programming Hero",
    date: "July 2025",
    description:
      "Completed intensive MERN stack training focusing on React, Node.js, databases, and modern development workflows.",
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-cyan-600",
    glow: "shadow-blue-500/20",
  },
  {
    title: "Madrasa Academic Background",
    organization: "Traditional Studies",
    date: "Formative Years",
    description:
      "Built a foundation of discipline, patience, and analytical thinking that now supports my problem-solving in software development.",
    icon: <FaCertificate />,
    color: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/20",
  },
];

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
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
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Journey
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                Professional Experience
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Built production-ready applications, dashboards, and APIs for
                real-world digital products.
              </p>
            </div>
            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-2xl hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${item.color} ${item.glow} text-white flex items-center justify-center shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-purple-600 font-black">
                        {item.date}
                      </p>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                Education & Growth
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Foundational training and academic discipline that strengthen my
                software development approach.
              </p>
            </div>
            <div className="space-y-10">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-2xl hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${item.color} ${item.glow} text-white flex items-center justify-center shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-600 font-black">
                        {item.date}
                      </p>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
