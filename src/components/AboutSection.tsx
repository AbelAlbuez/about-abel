import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Heart, Code, Briefcase, Lock, Unlock } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "core",
      title: "Core",
      icon: Heart,
      description: "Mis valores y pasiones",
      content: "Impulsado por la curiosidad y la creencia de que la tecnología debe resolver problemas reales. Abordo cada desafío con pensamiento analítico y visión creativa, siempre buscando construir soluciones que importen. Creo en el código limpio, la innovación constante y el impacto positivo."
    },
    {
      id: "work",
      title: "Work", 
      icon: Briefcase,
      description: "Mi experiencia profesional",
      content: "Software Engineer especializado en .NET, React, Angular, Node.js y AI. He trabajado en sectores críticos como banca, salud y logística, liderando proyectos innovadores en Novatech (2023–Presente) y contribuyendo a soluciones transformadoras en Clarika (2024–2025). Mi enfoque está en arquitecturas escalables y desarrollo full-stack."
    },
    {
      id: "love",
      title: "Love",
      icon: Code,
      description: "Mis aventuras y pasiones",
      content: "Cuando no estoy programando, me encontrarás explorando nuevos lugares, nadando, descubriendo música que me inspira, creando contenido para YouTube, o planeando la próxima aventura. Creo que la vida se trata de coleccionar experiencias, no cosas. La creatividad y la exploración alimentan mi desarrollo tanto personal como profesional."
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section ref={ref} className="min-h-screen py-section px-6 bg-background flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section font-light text-foreground mb-20 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  className={`bg-surface border border-border rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-accent/30 ${
                    isExpanded ? 'border-accent/50' : ''
                  }`}
                  onClick={() => toggleSection(section.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon and Lock State */}
                  <div className="flex items-center justify-center mb-6 relative">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-muted flex items-center justify-center"
                      animate={{ 
                        backgroundColor: isExpanded ? "hsl(var(--accent))" : "hsl(var(--muted))"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        className={`w-8 h-8 transition-colors duration-300 ${
                          isExpanded ? 'text-accent-foreground' : 'text-muted-foreground'
                        }`} 
                      />
                    </motion.div>
                    
                    {/* Lock/Unlock indicator */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{ scale: isExpanded ? 1.2 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isExpanded ? (
                        <Unlock className="w-5 h-5 text-accent" />
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      )}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-title font-medium text-foreground mb-2 text-center">
                    {section.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-caption text-muted-foreground text-center mb-4">
                    {section.description}
                  </p>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border pt-6 mt-4">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {section.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click indicator */}
                  <div className="text-center mt-4">
                    <span className="text-xs text-muted-foreground">
                      {isExpanded ? 'Click para cerrar' : 'Click para descubrir'}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;