import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Novatech",
      role: "Software Engineer",
      period: "2023–Present",
      description: "Leading full-stack development initiatives and system architecture design.",
    },
    {
      company: "Clarika",
      role: "Developer",
      period: "2024–2025",
      description: "Contributing to innovative solutions and collaborative development processes.",
    },
  ];

  const education = [
    {
      institution: "Universidad Javeriana",
      degree: "MSc in Engineering",
      period: "2023–Present",
      description: "Advanced studies in software engineering and technology innovation.",
    },
    {
      institution: "APEC",
      degree: "BSc in Computer Science",
      period: "2018–2023",
      description: "Foundation in computer science principles and software development.",
    },
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
          Journey
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-title font-medium text-foreground mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-accent rounded-full -left-1 top-1" />
                  <div className="bg-surface rounded-lg p-6 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{exp.company}</h4>
                      <span className="text-caption text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{exp.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-title font-medium text-foreground mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-accent rounded-full -left-1 top-1" />
                  <div className="bg-surface rounded-lg p-6 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{edu.institution}</h4>
                      <span className="text-caption text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;