import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Cloud, Brain } from "lucide-react";

const AboutWork = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const specializations = [
    {
      icon: Code,
      title: "Full-Stack Development",
      technologies: [".NET Core", "React", "Angular", "Node.js", "Next.js"],
      description: "Complete experience in frontend and backend development, creating robust and scalable web applications."
    },
    {
      icon: Database,
      title: "Database & Architecture",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Microservices", "API Design"],
      description: "Design and implementation of efficient data architectures and distributed systems."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      description: "Cloud application deployment and management with modern DevOps practices."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Computer Vision", "NLP"],
      description: "Implementation of artificial intelligence solutions and advanced data analysis."
    }
  ];

  const currentProjects = [
    {
      title: "Telemedicine Platform",
      company: "Clarika",
      description: "Comprehensive system for remote medical consultations with real-time video calls and medical record management.",
      impact: "40% reduction in wait times for specialized consultations"
    },
    {
      title: "Corporate Warranty System",
      company: "Novatech Dev",
      description: "Complete automation of warranty management process with intelligent claim processing.",
      impact: "5x faster claim processing and 60% reduction in manual errors"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen py-section px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Link
            to="/about"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          Professional Work
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My professional journey is characterized by technical versatility and a focus on creating solutions 
            that solve complex problems in critical sectors such as banking, healthcare and logistics.
          </p>
        </motion.div>

        {/* Specializations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{spec.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{spec.description}</p>
                <div className="flex flex-wrap gap-2">
                  {spec.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Current Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-title font-medium text-foreground mb-8 text-center">Current Projects</h2>
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                  <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.company}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Impact:</span> {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="bg-surface border border-border rounded-2xl p-8"
        >
          <h2 className="text-title font-medium text-foreground mb-6 text-center">My Professional Approach</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              In every project, my approach goes beyond simply implementing functionalities. I focus on 
              deeply understanding the business domain, the specific challenges of the sector and the real needs 
              of end users. This holistic understanding allows me to design solutions that not only 
              work technically, but generate real and sustainable value.
            </p>
            <p className="leading-relaxed">
              Code quality, scalability and maintainability are fundamental pillars in my work. 
              I use agile methodologies, exhaustive testing and clear documentation to ensure that every solution 
              can evolve and adapt to changing business needs in the long term.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutWork;