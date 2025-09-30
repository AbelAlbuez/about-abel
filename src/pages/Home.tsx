import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">

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
          className="text-xl font-light text-muted-foreground max-w-lg mx-auto mb-12"
        >
          From lines of code to big ideas. Software & AI Engineer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-surface border border-border rounded-lg text-foreground hover:border-accent/30 hover:bg-surface/80 transition-all duration-normal group"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;