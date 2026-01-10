"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaRocket,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    title: "MERN Stack Development",
    description:
      "Building robust, scalable full-stack web applications using MongoDB, Express, React, and Node.js with a focus on performance.",
    icon: <FaLayerGroup className="text-purple-500" />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Converting complex designs (Figma/Adobe XD) into pixel-perfect, highly interactive, and responsive user interfaces.",
    icon: <FaDesktop className="text-blue-500" />,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "RESTful API Integration",
    description:
      "Developing and integrating secure APIs to connect frontend with backend services seamlessly and efficiently.",
    icon: <FaCode className="text-emerald-500" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web performance, improving SEO scores, and ensuring lightning-fast load times for a better user experience.",
    icon: <FaRocket className="text-orange-500" />,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Database Management",
    description:
      "Architecting efficient database schemas with MongoDB and ensuring data integrity and smooth retrieval processes.",
    icon: <FaDatabase className="text-pink-500" />,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Responsive Web Design",
    description:
      "Crafting mobile-first web designs that look stunning on any screen size, from smartphones to large desktop monitors.",
    icon: <FaMobileAlt className="text-sky-500" />,
    color: "from-sky-500 to-blue-600",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-600 dark:text-purple-400 font-black tracking-[0.3em] uppercase text-xs"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4"
          >
            My specialized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Services
            </span>
          </motion.h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I help businesses grow by building high-quality digital products
            with modern technologies and a user-centric approach.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon Container */}
              <motion.div
                className="mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} opacity-10 absolute blur-xl group-hover:opacity-30 transition-opacity`}
                ></div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {service.icon}
                </div>
              </motion.div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Corner Accent */}
              <motion.div
                className="absolute bottom-6 right-8"
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-12 h-[2px] bg-gradient-to-r ${service.color}`}
                ></div>
              </motion.div>

              {/* Animated particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-purple-400"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: [0, 1, 0],
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                  }}
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
