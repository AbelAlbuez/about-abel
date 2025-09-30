import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Heart, Code, Briefcase } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sections = [
    {
      id: "core",
      title: "Core",
      icon: Heart,
      description: "My values and philosophy",
      preview: "Driven by curiosity and the belief that technology should solve real problems...",
      path: "/about/core"
    },
    {
      id: "work", 
      title: "Work",
      icon: Briefcase,
      description: "My professional experience",
      preview: "Software Engineer specialized in .NET, React, Angular, Node.js and AI...",
      path: "/about/work"
    },
    {
      id: "love",
      title: "Love",
      icon: Code,
      description: "My adventures and passions",
      preview: "When I'm not coding, you'll find me exploring new places...",
      path: "/about/love"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen py-section px-6 bg-background flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground text-center mb-20 max-w-2xl mx-auto"
        >
          Discover the three dimensions that define who I am: my core values, my professional journey and my personal passions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <Link to={section.path} className="group block">
                  <div className="bg-surface border border-border rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-accent/30 hover:bg-surface/80 hover:scale-105">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-title font-medium text-foreground mb-2 text-center">
                      {section.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-caption text-muted-foreground text-center mb-4">
                      {section.description}
                    </p>

                    {/* Preview */}
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {section.preview}
                    </p>

                    {/* Click indicator */}
                    <div className="text-center mt-6">
                      <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                        Click to explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;