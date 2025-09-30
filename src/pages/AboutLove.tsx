import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Plane, Waves, Music, Mountain, Youtube } from "lucide-react";

const AboutLove = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const passions = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing the essence of every moment and place I visit. Photography teaches me to see the world from different perspectives and value details that others might overlook.",
      highlight: "Over 10,000 photos taken in 15 countries"
    },
    {
      icon: Plane,
      title: "Travel & Exploration",
      description: "Every trip is an opportunity for personal and professional growth. Discovering new cultures, landscapes and ways of life feeds my creativity and broadens my global perspective.",
      highlight: "15+ countries visited and counting"
    },
    {
      icon: Waves,
      title: "Swimming",
      description: "The discipline and mental resistance that swimming requires translate directly into my work. Water is my space for meditation and reflection, where I find mental clarity.",
      highlight: "Training 4 times per week"
    },
    {
      icon: Music,
      title: "Music Creation",
      description: "Music is applied mathematics and emotional expression combined. Composing and producing music develops both my analytical and creative sides, essential skills in software development.",
      highlight: "Several published musical projects"
    },
    {
      icon: Mountain,
      title: "Outdoor Adventures",
      description: "Hiking, climbing and extreme sports teach me about risk management, strategic planning and perseverance - fundamental qualities for solving complex problems.",
      highlight: "Mountains conquered on 3 continents"
    },
    {
      icon: Youtube,
      title: "Content Creation",
      description: "Sharing knowledge and experiences through video allows me to connect with a global community. It's my way of giving back to the tech community that has taught me so much.",
      highlight: "Active channel with educational content"
    }
  ];

  const personalProjects = [
    {
      title: "Travel Documentary",
      description: "Video series documenting open water swimming adventures around the world.",
      status: "In production"
    },
    {
      title: "Musical Project",
      description: "Experimental album combining natural sounds recorded during travels with electronic compositions.",
      status: "Coming soon"
    },
    {
      title: "Adventure Blog",
      description: "Photographic narratives about cultural and natural exploration, combining technology and adventure.",
      status: "Active"
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
          What I Love
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My passions go beyond code. Every adventure, every experience, contributes to my growth 
            as a person and professional, feeding the creativity and perspective I apply to my work.
          </p>
        </motion.div>

        {/* Passions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {passions.map((passion, index) => {
            const IconComponent = passion.icon;
            return (
              <motion.div
                key={passion.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{passion.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{passion.description}</p>
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-xs text-accent font-medium">{passion.highlight}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-title font-medium text-foreground mb-8 text-center">Personal Projects</h2>
          <div className="space-y-6">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Life Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="bg-surface border border-border rounded-2xl p-8"
        >
          <h2 className="text-title font-medium text-foreground mb-6 text-center">Life Philosophy</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              I deeply believe that life is about collecting experiences, not things. Every adventure, 
              every challenge overcome, every new skill learned becomes part of my personal 
              and professional arsenal. The diversity of experiences enriches my perspective and allows me 
              to approach problems from unique angles.
            </p>
            <p className="mb-6 leading-relaxed">
              Creativity doesn't arise in a vacuum - it needs to be constantly nourished. My adventures, 
              from swimming in crystal clear waters to climbing challenging mountains, are not just hobbies: 
              they are investments in my creative and professional development that translate into more 
              innovative solutions and fresher approaches in my work.
            </p>
            <p className="leading-relaxed">
              Finally, sharing these experiences and knowledge through digital content allows me 
              to contribute to a global community of explorers and creators. Every story 
              shared, every lesson learned, has the potential to inspire others to expand 
              their own boundaries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLove;