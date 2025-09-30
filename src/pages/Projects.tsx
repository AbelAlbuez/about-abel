import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Warranty Management System",
      description: "Complete platform for corporate warranty management with automated claim processing and real-time tracking.",
      tech: ["Next.js", ".NET", "gRPC", "PostgreSQL", "Azure"],
      status: "Production",
      category: "Full-Stack Application",
      link: "#",
      github: "#"
    },
    {
      title: "Corporate Banking Platform",
      description: "Banking system for corporate transactions with microservices architecture and high availability.",
      tech: ["Angular", "NestJS", "RabbitMQ", "Redis", "PostgreSQL"],
      status: "Completed",
      category: "Enterprise Solution",
      link: "#",
      github: "#"
    },
    {
      title: "Automated Location Sync",
      description: "Distributed system for automatic location data synchronization using AWS services and Node.js.",
      tech: ["Node.js", "AWS Lambda", "DynamoDB", "API Gateway", "CloudWatch"],
      status: "Production",
      category: "Cloud Infrastructure",
      link: "#",
      github: "#"
    },
    {
      title: "AI Image Segmentation Research",
      description: "Research experiments in medical image segmentation using SVM and Naive Bayes algorithms.",
      tech: ["Python", "scikit-learn", "SVM", "Naive Bayes", "OpenCV"],
      status: "Research",
      category: "AI/ML Research",
      link: "#",
      github: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "text-green-400";
      case "Completed":
        return "text-blue-400";
      case "Development":
        return "text-yellow-400";
      case "MVP":
        return "text-purple-400";
      case "Research":
        return "text-orange-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div ref={ref} className="min-h-screen py-section px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          A selection of projects that reflect my experience across different sectors and technologies, from enterprise applications to AI research.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-surface border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-accent/30 hover:bg-surface/80">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className={`text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      +{project.tech.length - 3} más
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Ver código fuente"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;