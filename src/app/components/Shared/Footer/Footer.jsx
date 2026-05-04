"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaPaperPlane, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <AiFillGithub />,
      link: "https://github.com/sakhawat236hossain",
      label: "Github",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <AiFillFacebook />,
      link: "https://www.facebook.com/md.sakhawth.hosain",
      label: "Facebook",
    },
    {
      id: 4,
      icon: <AiOutlineTwitter />,
      link: "https://x.com/MdSakhawat21005",
      label: "Twitter",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-purple-200/50 dark:border-purple-900/30 transition-colors duration-500">
      {/* --- Animated Background Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-[10%] w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* 1. Brand & Value Proposition */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent uppercase mb-3 sm:mb-4">
                Sakhawat
                <span className="text-purple-600 dark:text-purple-400 italic font-serif">
                  .Dev
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Designing and developing high-performance web experiences with a
                focus on clean aesthetics and scalable code.
              </p>
            </motion.div>
          </div>

          {/* 2. Social Connect Section */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8">
            <h4 className="text-purple-600 dark:text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] text-center lg:text-left">
              Digital Presence
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl sm:rounded-2xl border border-purple-200 dark:border-purple-800/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                >
                  <span className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 3. Quick Action / Back to Top */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white flex items-center justify-center shadow-xl sm:shadow-2xl shadow-purple-500/30 group transition-all hover:shadow-purple-500/50"
            >
              <FaArrowUp className="text-sm sm:text-base group-hover:animate-bounce transition-all" />
            </motion.button>
            <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Back to Top
            </p>
          </div>
        </div>

        {/* --- Bottom Strip --- */}
        <div className="pt-8 sm:pt-10 border-t border-purple-200/50 dark:border-purple-900/30 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Copyright Info */}
          <div className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs font-medium tracking-wide order-2 md:order-1 text-center md:text-left leading-loose px-4">
            © {currentYear}{" "}
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              MD. Sakhawat Hossain
            </span>
            . Crafted with passion in Dhaka, BD.
          </div>

          {/* Availability Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-2.5 bg-green-500/5 dark:bg-green-500/10 rounded-full border border-green-500/20 order-1 md:order-2"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              Available for Freelance
            </span>
          </motion.div>

          {/* Legal / Policy Links */}
          <div className="flex gap-6 sm:gap-8 order-3">
            <a
              href="#"
              className="text-[10px] font-bold text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] font-bold text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
