import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive web application for visualizing and understanding neural network architectures.",
      tech: ["React", "D3.js", "TensorFlow.js"],
      status: "In Progress"
    },
    {
      title: "Smart City Dashboard",
      description: "Real-time analytics dashboard for urban data visualization and smart city initiatives.",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      status: "Completed"
    },
    {
      title: "Music Mood Analyzer",
      description: "AI-powered tool that analyzes music tracks and suggests playlists based on emotional context.",
      tech: ["Machine Learning", "Spotify API", "Node.js"],
      status: "Prototype"
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
          Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-surface rounded-2xl p-8 border border-border transition-all duration-normal hover:border-accent/30 hover:bg-surface/80">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-title font-medium text-foreground mb-2">{project.title}</h3>
                    <span className={`text-caption px-3 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                      project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-fast">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-fast">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-caption px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;