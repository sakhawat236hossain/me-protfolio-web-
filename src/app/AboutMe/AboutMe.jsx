"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import myIMG from "../../../assets/profile.jpg";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* --- Left side: Modern Image Composition --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-[280px] h-[350px] sm:w-[380px] sm:h-[480px]">
            {/* Multi-layered Decorative Frames */}
            <motion.div
              className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-600/30 rounded-3xl -z-10 hidden sm:block"
              animate={{
                rotate: [0, 5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl -z-10"
              animate={{
                rotate: [0, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Main Image Card */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-slate-800"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={myIMG}
                alt="About Sakhawat"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 sm:-left-12 bg-white dark:bg-slate-900 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border-b-4 border-purple-600 z-20"
            >
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                1+
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Years Exp.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Right side: Content & Stats --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-tighter uppercase mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            My Biography
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight"
            variants={itemVariants}
          >
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Masterpieces
            </span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed"
            variants={itemVariants}
          >
            <p>
              Hello! I'm{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                Md Sakhawat Hossain
              </span>
              . I am a results-driven Frontend Developer specializing in the
              MERN stack. My mission is to bridge the gap between complex
              backend logic and pixel-perfect frontend design.
            </p>
            <p>
              With expertise in{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Next.js, Tailwind CSS, and Framer Motion
              </span>
              , I create interfaces that aren't just functional, but emotionally
              engaging for the users.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <FeatureBox icon={<FaCode />} title="Clean Code" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureBox icon={<FaLightbulb />} title="Creative UI" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureBox icon={<FaRocket />} title="Fast Load" />
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center lg:justify-start gap-12">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                20+
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Projects Done
              </span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800"></div>
            {/* <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900 dark:text-white">15+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Clients</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for small feature boxes
const FeatureBox = ({ icon, title }) => (
  <motion.div
    className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-purple-500/50 transition-colors group"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-purple-600 dark:text-purple-400 text-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
      {title}
    </span>
  </motion.div>
);

export default About;
