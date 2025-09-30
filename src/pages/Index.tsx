import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AdventuresSection from "@/components/AdventuresSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AdventuresSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
