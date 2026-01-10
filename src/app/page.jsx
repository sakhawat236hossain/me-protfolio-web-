"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./AboutMe/AboutMe";
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";
import SkillsSection from "./SkillsSection/SkillsSection";
import Services from "./Services/Services";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Contact from "./components/Contact/Contact";

// Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen font-sans selection:bg-purple-500 selection:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex flex-col">
        <section id="home">
          <HeroSection />
        </section>

        <div className="space-y-0">
          <motion.section id="about" className="pt-20" {...fadeInUp}>
            <About />
          </motion.section>
          <motion.section id="experience" {...fadeInUp}>
            <ExperienceTimeline />
          </motion.section>
        </div>

        <motion.section id="skills" className="py-20" {...fadeInUp}>
          <TechnicalExpertise />
          <SkillsSection />
        </motion.section>

        <motion.section id="services" className="py-10" {...fadeInUp}>
          <Services />
        </motion.section>

        <motion.section id="projects" className="py-20" {...fadeInUp}>
          <ProjectsSection />
        </motion.section>

        <motion.section id="contact" className="py-20" {...fadeInUp}>
          <Contact />
        </motion.section>
      </main>
    </motion.div>
  );
}
