import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "@/assets/abel-profile.jpg";

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-accent/20 shadow-lg">
            <img 
              src={profileImage} 
              alt="Abel Albuez Sanchez" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-6 tracking-tight"
        >
          Abel Albuez Sanchez
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl font-light text-muted-foreground max-w-md mx-auto"
        >
          From lines of code to big ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;