"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative group"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {/* Button Container with gradient border effect */}
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[2px] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Icon container with rotation */}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: isDark ? 180 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl"
                >
                  <FiMoon className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl"
                >
                  <FiSun className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Orbiting particles effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-400"
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hover tooltip */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl">
          {isDark ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </motion.button>
  );
}
