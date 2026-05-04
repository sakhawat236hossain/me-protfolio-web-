"use client";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const ResumeButton = () => {
  // Update this URL to your actual resume file path
  const resumeUrl = "/resume2.pdf"; // Place your resume.pdf in the public folder
  const resumeFileName = "Sakhawat_Hossain_Resume.pdf";

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden rounded-2xl font-bold transition-all cursor-pointer"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl" />

      {/* Inner background */}
      <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-2xl transition-colors" />

      {/* Hover gradient overlay */}
      <motion.div className="absolute inset-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative flex items-center gap-3 z-10">
        {/* Animated icon container */}
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <FaDownload className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />

          {/* Pulsing circle behind icon */}
          <motion.div
            className="absolute inset-0 -z-10 bg-purple-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        <span className="text-slate-900 dark:text-white group-hover:text-white transition-colors font-bold tracking-wide">
          Download Resume
        </span>

        {/* Decorative PDF icon */}
        <FaFilePdf className="w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />
    </motion.button>
  );
};

export default ResumeButton;
