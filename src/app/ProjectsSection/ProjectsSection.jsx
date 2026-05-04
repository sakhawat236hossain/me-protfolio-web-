"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";

// Assets (Imports remain same)
import homeNest from "../../../assets/homeNest.png";
import AllApps from "../../../assets/AllApps.png";
import greenNest from "../../../assets/greenNest.png";
import dragonNews from "../../../assets/dragonNews.png";
import ticketBooking from "../../../assets/Book.png";
import hishabKitab from "../../../assets/hishabKitab.png";


const projectsData = [
    {
    title: "Ticket Booking",
    tags: ["Next.js", "Node.js", "MongoDB"],
    description:
      "A dynamic ticketing marketplace with real-time seat selection, admin panel, and secure resale verification system.",
    image: ticketBooking,
    liveLink: "https://online-ticket-booking-platform.netlify.app/",
    githubClient:
      "https://github.com/sakhawat236hossain/Online-Ticket-Booking-Platform-client-",
    color: "from-rose-500 via-pink-600 to-purple-600",
  },
  {
  title: "Care.xyz",
  tags: ["Next.js", "React", "Tailwind", "Node.js", "MERN Stack"],
  description:
    "A role-based service platform where admins can manage services and users can purchase and track them in their dashboard. Built to practice full-stack integration with Next.js and real-time dashboard features.",
  image: careXyz,
  liveLink: "https://care-xyz-client-web.vercel.app/", 
  githubClient: "https://github.com/sakhawat236hossain/Care-xyz-client", 
  color: "from-indigo-400 via-purple-500 to-pink-600", 
},
  {
    title: "Home Nest",
    tags: ["MERN Stack", "Express.js", "Dashboard"],
    description:
      "High-end Real Estate solution with interactive property listings, secure payments, and a powerful admin control panel.",
    image: homeNest,
    liveLink: "https://home-nest-a10-b12.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/Home-Nest-client",
    color: "from-blue-600 via-indigo-600 to-violet-700",
  },


  {
    title: "Green Nest",
    tags: ["React", "Tailwind", "Firebase"],
    description:
      "A premium eco-commerce platform for plant enthusiasts. Features include plant care guides and environmental awareness modules.",
    image: greenNest,
    liveLink: "https://greennest-assigment-9.firebaseapp.com/",
    githubClient: "https://github.com/sakhawat236hossain/Green-Nest-A9",
    color: "from-emerald-400 via-teal-500 to-cyan-600",
  },


  {
    title: "Apps Hub",
    tags: ["JavaScript", "Tools", "React"],
    description:
      "An integrated dashboard featuring utility tools and mini-apps, designed with a focus on seamless user navigation.",
    image: AllApps,
    liveLink: "https://apps-hub-and-dtails.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/all-app-data",
    color: "from-orange-500 via-red-500 to-rose-600",
  },
  {
    title: "Dragon News",
    tags: ["React", "Context", "Firebase"],
    description:
      "A real-time news aggregation platform with category filtering and dynamic content loading for a smooth experience.",
    image: dragonNews,
    liveLink: "https://all-news-data.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/all-app-data",
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Hishab Kitab",
    tags: ["Next.js", "MongoDB", "Typescript"],
    description:
      "A real-time Habit tracking application with interactive dashboards and data visualization, built to practice Next.js and MongoDB integration.",
    image: hishabKitab,
    liveLink: "https://hishabkitam.vercel.app/",
    githubClient: "https://github.com/sakhawat236hossain/HishabKitab",
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-purple-500"></span>
              <span className="text-purple-600 dark:text-purple-400 font-black tracking-[0.3em] uppercase text-xs">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Works
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-6"
          >
            Crafting digital experiences where functionality meets aesthetic
            excellence.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <motion.div
                    className="relative h-72 w-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[4px]`}
                    >
                      <ProjectLink
                        href={project.liveLink}
                        icon={<FaExternalLinkAlt size={20} />}
                        label="Live Site"
                      />
                      <ProjectLink
                        href={project.githubClient}
                        icon={<FaGithub size={22} />}
                        label="Source"
                      />
                    </div>

                    {/* Quick Badge */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">
                        Featured Case
                      </span>
                    </div>
                  </motion.div>

                  {/* Content Details */}
                  <div className="p-8 flex-grow space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-black tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Aesthetic Footer Line */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action Button */}
        <div className="mt-24 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black overflow-hidden shadow-2xl transition-all"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs flex items-center gap-3">
              {showAll ? "Show Less" : "Discover More Projects"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const ProjectLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-2 text-white group/link"
  >
    <div className="w-14 h-14 bg-white/10 hover:bg-white hover:text-slate-900 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center transition-all duration-300 shadow-2xl">
      {icon}
    </div>
    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
      {label}
    </span>
  </motion.a>
);

export default ProjectsSection;
