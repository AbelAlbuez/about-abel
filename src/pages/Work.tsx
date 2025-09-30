import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Novatech Dev",
      role: "Software Engineer",
      period: "2023 – Present",
      description: "Warranty management platform (React + .NET + gRPC), AWS Lambda, LitElement/HTMX.",
      technologies: ["React", ".NET", "gRPC", "AWS Lambda", "LitElement", "HTMX"]
    },
    {
      company: "Clarika",
      role: "Software Engineer (Consulting)",
      period: "2024 – 2025",
      description: "Client portal with React + Lit, Node.js + AWS Lambda workflows, real-time analytics.",
      technologies: ["React", "Lit", "Node.js", "AWS Lambda", "Analytics"]
    },
    {
      company: "Kopius Technology",
      role: "Software Engineer",
      period: "2022 – 2023",
      description: "Healthcare SaaS, telehealth with Node.js, WebRTC, Asterisk, .NET APIs, Redis caching, NServiceBus.",
      technologies: ["Node.js", "WebRTC", "Asterisk", ".NET", "Redis", "NServiceBus"]
    },
    {
      company: "Azumo LLC",
      role: "Software Engineer",
      period: "2021 – 2022",
      description: "Women's healthcare platform, React + Node.js, AWS DynamoDB, telehealth integrations, WebSockets.",
      technologies: ["React", "Node.js", "AWS DynamoDB", "WebSockets", "Telehealth"]
    },
    {
      company: "APAP",
      role: "Software Engineer",
      period: "2019 – 2021",
      description: "Banking microservices with Node.js + NestJS, RabbitMQ, Redis, risk management, digital savings accounts.",
      technologies: ["Node.js", "NestJS", "RabbitMQ", "Redis", "Banking"]
    },
    {
      company: "Remesas Vimenca / Western Union",
      role: "Software Engineer",
      period: "2018 – 2019",
      description: "Payment & transaction systems, .NET Core + Node.js microservices, PostgreSQL/SQL Server, AWS.",
      technologies: [".NET Core", "Node.js", "PostgreSQL", "SQL Server", "AWS"]
    },
  ];

  const education = [
    {
      institution: "Pontificia Universidad Javeriana",
      degree: "Master's in Systems & Computing Engineering",
      period: "In progress",
      description: "Advanced studies in software engineering, AI, and distributed systems architectures.",
    },
    {
      institution: "Universidad APEC",
      degree: "B.Sc. in Software Engineering",
      period: "Completed",
      description: "Solid foundation in computer science and software development.",
    },
    {
      institution: "ITLA",
      degree: "Associate in Software Development",
      period: "Completed",
      description: "Technical foundation in programming and application development.",
    },
  ];

  const skills = [
    {
      category: "Backend & APIs",
      items: ["Node.js", "TypeScript", "NestJS", "REST", "GraphQL", "gRPC", "Microservices", "Serverless (AWS Lambda, Azure Functions)"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "SQL Server", "TypeORM", "Entity Framework"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Angular", "Material UI", "LitElement", "HTMX", "WebRTC", "WebSockets"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Lambda, S3, DynamoDB, API Gateway)", "Azure (Service Bus, DevOps)", "Docker", "Kubernetes", "CI/CD (GitHub Actions, Azure Pipelines)"]
    },
    {
      category: "Testing",
      items: ["Jest", "Cypress", "NUnit", "xUnit"]
    },
    {
      category: "Other",
      items: ["Smart Contracts", "Crypto Wallets", "Authentication (OAuth2, JWT, PingID)", "Agile/Scrum"]
    }
  ];

  const industries = [
    "Banking & Financial Services",
    "Healthcare & Telemedicine",
    "Logistics & Supply Chain",
    "Warranty Systems",
    "AI Research"
  ];

  return (
    <div ref={ref} className="min-h-screen py-section px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          Professional Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          My professional journey spans multiple sectors, always focused on creating technological solutions that generate real impact.
        </motion.p>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-title font-medium text-foreground mb-8 text-center">Areas of Specialization</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-muted-foreground"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-title font-medium text-foreground mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-accent rounded-full -left-1 top-1" />
                  <div className="bg-surface rounded-lg p-6 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{exp.company}</h4>
                      <span className="text-caption text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{exp.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-title font-medium text-foreground mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeOut" }}
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16"
        >
          <h3 className="text-title font-medium text-foreground mb-8 text-center">Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                className="bg-surface rounded-lg p-6 border border-border"
              >
                <h4 className="font-medium text-foreground mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;