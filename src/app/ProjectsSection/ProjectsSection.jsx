"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { projectsData } from "../projects/projectData";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterCategories = [
    "All",
    ...new Set(projectsData.flatMap((project) => project.tags)),
  ];

  const searchLower = searchQuery.toLowerCase();

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter =
      activeFilter === "All" ? true : project.tags.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    return matchesFilter && matchesSearch;
  });

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

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
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-0.5 bg-purple-500"></span>
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
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

        {/* Featured Case Study Previews */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {projectsData.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.35em] font-black text-purple-600">
                  Case Study
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-300 px-3 py-1 rounded-full">
                  {project.tags[0]}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack?.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-[0.2em] bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-sm font-black text-purple-600 group-hover:text-purple-500 transition">
                View case study →
              </span>
            </Link>
          ))}
        </div>

        {/* Search + Filter Controls */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, tech, or keywords..."
              className="w-full rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 pr-12 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-500/20"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
              🔎
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">
              Showing {filteredProjects.length} project
              {filteredProjects.length === 1 ? "" : "s"}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              {activeFilter === "All" ? "All categories" : activeFilter}
            </span>
          </div>
        </div>

        {/* Project Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {visibleProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-14 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xl font-black text-slate-900 dark:text-white mb-3">
              No case studies match your search.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Try clearing the search or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 },
                  }}
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
                        className={`absolute inset-0 bg-linear-to-b ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-xs`}
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
                        <Link
                          href={`/projects/${project.slug}`}
                          className="cursor-pointer flex flex-col items-center gap-2 text-white"
                        >
                          <div className="w-14 h-14 bg-white/10 hover:bg-white hover:text-slate-900 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center transition-all duration-300 shadow-2xl">
                            <FaServer size={22} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            Case Study
                          </span>
                        </Link>
                      </div>

                      {/* Quick Badge */}
                      <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">
                          Featured Case
                        </span>
                      </div>
                    </motion.div>

                    {/* Content Details */}
                    <div className="p-8 grow space-y-4">
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
                      className={`h-2 w-full bg-linear-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="mt-24 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-4xl font-black overflow-hidden shadow-2xl transition-all"
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
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    className="cursor-pointer flex flex-col items-center gap-2 text-white group/link"
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
