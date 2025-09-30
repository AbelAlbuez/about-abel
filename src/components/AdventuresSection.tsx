import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Map, Music, Code } from "lucide-react";

const AdventuresSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const adventures = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and stories through the lens, finding beauty in everyday scenes."
    },
    {
      icon: Map,
      title: "Travel",
      description: "Exploring new cultures, landscapes, and perspectives around the world."
    },
    {
      icon: Music,
      title: "Music",
      description: "Discovering sounds that inspire, from ambient electronic to indie folk."
    },
    {
      icon: Code,
      title: "Side Projects",
      description: "Experimenting with new technologies and building things that spark joy."
    }
  ];

  return (
    <section ref={ref} className="py-section px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section font-light text-foreground mb-16 text-center"
        >
          Adventures
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="bg-surface rounded-2xl p-8 border border-border transition-all duration-normal hover:border-accent/30 hover:bg-surface/80">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-normal">
                    <adventure.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-title font-medium text-foreground">{adventure.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{adventure.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground italic">
            "Life is either a daring adventure or nothing at all." — Helen Keller
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdventuresSection;