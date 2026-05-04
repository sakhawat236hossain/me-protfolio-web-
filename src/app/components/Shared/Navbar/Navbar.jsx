"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ResumeButton from "@/app/Buttons/ResumeButton";
import ThemeToggle from "@/app/components/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Projects", to: "projects" },
    { id: 4, name: "Skills", to: "skills" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-lg shadow-purple-500/5 dark:shadow-purple-500/10 border-b border-slate-200/50 dark:border-slate-800/50"
          : "py-6 bg-gradient-to-b from-white/5 dark:from-slate-950/5 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* --- Logo --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative group"
        >
          <Link
            to="home"
            smooth={true}
            className="text-2xl md:text-3xl font-black cursor-pointer tracking-tighter flex items-center gap-1"
          >
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              SAKHAWAT
            </motion.span>
            <motion.span
              className="w-2 h-2 rounded-full bg-purple-600"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Link>
        </motion.div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.ul
            className="flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-80}
                  activeClass="active-link"
                  className={`relative px-4 py-2 cursor-pointer text-sm font-bold tracking-wide transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 uppercase group ${
                    scrolled
                      ? "text-slate-800 dark:text-slate-100"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    {link.name}
                  </motion.span>
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 nav-underline"
                    initial={{ width: 0 }}
                    whileHover={{ width: "70%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex items-center gap-4 pl-4 border-l border-purple-200 dark:border-purple-900/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ThemeToggle />
            <ResumeButton />
          </motion.div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <motion.div
          className="md:hidden flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ThemeToggle />
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer p-3 rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 dark:from-purple-500 dark:via-purple-600 dark:to-blue-500 text-white shadow-lg shadow-purple-500/40 dark:shadow-purple-500/30 border border-purple-400/50 dark:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/60"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <IoClose size={24} className="drop-shadow-lg" />
              ) : (
                <HiMenuAlt3 size={24} className="drop-shadow-lg" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-[85%] sm:w-[75%] max-w-sm h-full bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-950 dark:to-purple-950/20 z-[100] md:hidden shadow-2xl flex flex-col p-6 sm:p-8 border-l border-purple-200 dark:border-purple-900/30"
            >
              <div className="flex justify-between items-center mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    MENU
                  </span>
                </motion.div>
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer p-2 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 hover:shadow-lg transition-all"
                >
                  <IoClose size={28} />
                </motion.button>
              </div>

              <div className="flex flex-col space-y-4 sm:space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      activeClass="text-purple-600 scale-110"
                      onClick={toggleMenu}
                      className="cursor-pointer text-2xl sm:text-3xl font-black text-slate-800 dark:text-white block tracking-tighter hover:text-purple-600 dark:hover:text-purple-400 transition-all relative group py-2"
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        className="inline-block"
                      >
                        {link.name}
                      </motion.span>
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-600 to-pink-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-auto pt-8 space-y-4 border-t border-purple-200 dark:border-purple-900/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col gap-3">
                  <ResumeButton />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Active Link Styles --- */}
      <style jsx global>{`
        .active-link {
          color: #9333ea !important; /* purple-600 */
        }
        .active-link .nav-underline {
          width: 20px !important;
        }
        @media (dark-mode: true) {
          .active-link {
            color: #a855f7 !important; /* purple-500 */
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
