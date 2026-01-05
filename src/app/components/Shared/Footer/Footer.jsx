"use client"
import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaPaperPlane, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 1, icon: <AiFillGithub />, link: "https://github.com/sakhawat236hossain", label: "Github" },
    { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/", label: "LinkedIn" },
    { id: 3, icon: <AiFillFacebook />, link: "https://www.facebook.com/md.sakhawth.hosain", label: "Facebook" },
    { id: 4, icon: <AiOutlineTwitter />, link: "https://x.com/MdSakhawat21005", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      
      {/* --- Animated Background Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-72 h-72 bg-purple-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* 1. Brand & Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white uppercase mb-4">
                Sakhawat<span className="text-purple-600 italic font-serif">.Dev</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Designing and developing high-performance web experiences with a focus on clean aesthetics and scalable code.
              </p>
            </motion.div>
          </div>

          {/* 2. Social Connect Section */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] text-center lg:text-left">
              Digital Presence
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {socialLinks.map((item) => (
                <motion.a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group shadow-sm"
                >
                  <span className="text-xl text-slate-600 dark:text-slate-400 group-hover:text-purple-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 3. Quick Action / Contact Hint */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="w-14 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-2xl group transition-all"
            >
              <FaArrowUp className="group-hover:animate-bounce transition-all" />
            </motion.button>
            <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Back to Top</p>
          </div>
        </div>

        {/* --- Bottom Strip --- */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright Info */}
          <div className="text-slate-400 dark:text-slate-500 text-xs font-medium tracking-wide order-2 md:order-1 text-center md:text-left leading-loose">
            © {currentYear} <span className="text-slate-900 dark:text-white font-bold">MD. Sakhawat Hossain</span>. 
            Crafted with passion in Dhaka, BD.
          </div>

          {/* Availability Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 px-6 py-2.5 bg-green-500/5 dark:bg-green-500/10 rounded-full border border-green-500/20 order-1 md:order-2"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-[11px] font-black text-green-700 dark:text-green-400 uppercase tracking-[0.2em]">
              Available for Freelance
            </span>
          </motion.div>
          
          {/* Legal / Policy Links */}
          <div className="flex gap-8 order-3">
             <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-purple-600 uppercase tracking-widest transition-colors">Privacy</a>
             <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-purple-600 uppercase tracking-widest transition-colors">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;