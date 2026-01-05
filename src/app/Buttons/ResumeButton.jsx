"use client"
import { motion } from "framer-motion";

const ResumeButton = () => {
  const resumeUrl = "https://drive.google.com/file/d/1jx9dgtxTAczvuFdgHkyisCM5Oj86yR7S/view?usp=drive_link";

  return (
    <motion.a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full group"
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 to-orange-400 group-hover:opacity-100"></span>
      {/* Shine Effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transition-transform duration-700 -translate-x-full group-hover:translate-x-full rotate-12"></span>
      <span className="relative">Resume</span>
    </motion.a>
  );
};

export default ResumeButton;