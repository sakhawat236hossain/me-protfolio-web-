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
          ? "py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
          : "py-6 bg-transparent"
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
                  className={`relative px-4 py-2 cursor-pointer text-sm font-bold tracking-wide transition-all duration-300 hover:text-purple-500 uppercase group ${
                    scrolled
                      ? "text-slate-700 dark:text-slate-200"
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
            className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800"
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
          className="md:hidden flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800"
                : "text-white bg-white/10 backdrop-blur-md"
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
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
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-[75%] h-full bg-white dark:bg-slate-950 z-[100] md:hidden shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-end mb-12">
                <button onClick={toggleMenu} className="p-2 text-slate-500">
                  <IoClose size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
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
                      className="text-3xl font-black text-slate-800 dark:text-white block tracking-tighter hover:text-purple-600 transition-all relative group"
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        className="inline-block"
                      >
                        {link.name}
                      </motion.span>
                      <motion.span
                        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-auto pb-10 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
                <ResumeButton />
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
