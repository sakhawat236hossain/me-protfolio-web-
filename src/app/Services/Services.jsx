"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLayerGroup, 
  FaDatabase, 
  FaRocket, 
  FaDesktop, 
  FaMobileAlt 
} from 'react-icons/fa';

const services = [
  {
    title: "MERN Stack Development",
    description: "Building robust, scalable full-stack web applications using MongoDB, Express, React, and Node.js with a focus on performance.",
    icon: <FaLayerGroup className="text-purple-500" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "UI/UX Implementation",
    description: "Converting complex designs (Figma/Adobe XD) into pixel-perfect, highly interactive, and responsive user interfaces.",
    icon: <FaDesktop className="text-blue-500" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "RESTful API Integration",
    description: "Developing and integrating secure APIs to connect frontend with backend services seamlessly and efficiently.",
    icon: <FaCode className="text-emerald-500" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web performance, improving SEO scores, and ensuring lightning-fast load times for a better user experience.",
    icon: <FaRocket className="text-orange-500" />,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Database Management",
    description: "Architecting efficient database schemas with MongoDB and ensuring data integrity and smooth retrieval processes.",
    icon: <FaDatabase className="text-pink-500" />,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Responsive Web Design",
    description: "Crafting mobile-first web designs that look stunning on any screen size, from smartphones to large desktop monitors.",
    icon: <FaMobileAlt className="text-sky-500" />,
    color: "from-sky-500 to-blue-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-transparent">
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
            My specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Services</span>
          </motion.h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I help businesses grow by building high-quality digital products with modern technologies and a user-centric approach.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} opacity-10 absolute blur-xl group-hover:opacity-30 transition-opacity`}></div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Corner Accent */}
              <div className={`absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity`}>
                 <div className={`w-12 h-[2px] bg-gradient-to-r ${service.color}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;