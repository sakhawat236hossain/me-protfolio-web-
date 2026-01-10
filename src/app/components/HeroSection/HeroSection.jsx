"use client";
import React from "react";
import { Link } from "react-scroll";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaDownload, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import myIMG from "../../../../assets/profile.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import ResumeButton from "@/app/Buttons/ResumeButton"; // আপনার আগের ResumeButton কম্পোনেন্ট

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-28 pb-10 md:py-0 overflow-hidden"
      style={{ opacity }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] lg:w-[85%] gap-12">
        {/* === LEFT SECTION: CONTENT === */}
        <motion.div
          className="text-center md:text-left w-full md:w-3/5"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm md:text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 tracking-[0.3em] uppercase">
              Welcome to my portfolio
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
                Sakhawat Hossain
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Section */}
          <div className="mt-4 text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 h-8 md:h-12">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React UI Expert",
                  "Next.js Enthusiast",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>

          <motion.p
            className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I specialize in building high-performance, responsive, and visually
            stunning web applications. Turning complex ideas into simple,
            elegant digital solutions.
          </motion.p>

          {/* Action Buttons: Hire Me & Resume */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Hire Me Button - Primary Action */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-2xl font-bold shadow-lg transition-all cursor-pointer"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>

              <div className="relative flex items-center gap-3 text-white z-10">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaEnvelope className="w-5 h-5" />
                </motion.div>
                <span className="tracking-wide">Hire Me</span>
              </div>
            </Link>

            {/* Resume Button */}
            <ResumeButton />
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-10 flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <SocialIcon
              icon={<AiFillGithub />}
              link="https://github.com/sakhawat236hossain"
            />
            <SocialIcon
              icon={<FaLinkedinIn />}
              link="https://linkedin.com/in/md-sakhawat-hossain-web-developer/"
            />
            <SocialIcon
              icon={<AiFillFacebook />}
              link="https://facebook.com/md.sakhawth.hosain"
            />
            <SocialIcon
              icon={<AiOutlineTwitter />}
              link="https://x.com/MdSakhawat21005"
            />
          </motion.div>
        </motion.div>

        {/* === RIGHT SECTION: IMAGE === */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ y: y2 }}
        >
          <div className="relative group w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Main Image Wrapper */}
            <motion.div
              className="relative w-full h-full p-3 rounded-[2.5rem] shadow-2xl z-10 backdrop-blur-sm border border-white/10 dark:border-slate-700"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full overflow-hidden rounded-[2rem]">
                <Image
                  src={myIMG}
                  alt="Md Sakhawat Hossain"
                  fill
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Badge (Optional - Experience or Project count) */}
            <div className="absolute -bottom-4 -right-4 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-800 hidden sm:block">
              <p className="text-purple-600 font-black text-xl">10+</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                Projects Done
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-xl p-3 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-xl shadow-sm transition-all hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 border border-transparent hover:border-purple-400"
  >
    {icon}
  </motion.a>
);

export default HeroSection;
