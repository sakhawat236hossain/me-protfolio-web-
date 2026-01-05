import HeroSection from "./components/HeroSection/HeroSection";
import About from "./AboutMe/AboutMe";
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";
import SkillsSection from "./SkillsSection/SkillsSection";
import Services from "./Services/Services";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-[#050810] selection:bg-purple-500 selection:text-white">
    
      
      <main className="flex flex-col">
        
        <section id="home">
          <HeroSection />
        </section>

        <div className="space-y-0">
          <section id="about" className="pt-20">
            <About />
          </section>
          <section id="experience">
            <ExperienceTimeline />
          </section>
        </div>

        <section id="skills" className="py-20 bg-slate-50/50 dark:bg-white/[0.02]">
          <TechnicalExpertise />
          <SkillsSection />
        </section>

        <section id="services" className="py-10">
          <Services />
        </section>

        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>

       

        <section id="contact" className="py-20">
          <Contact />
        </section>

      </main>

      
    </div>
  );
}