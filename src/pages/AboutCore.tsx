import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Target, Lightbulb, Users } from "lucide-react";

const AboutCore = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "I firmly believe that technology should be a force for good, solving real problems and improving people's lives."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every line of code I write has a clear purpose: to create solutions that generate tangible value and measurable impact."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Technology evolves constantly, and I evolve with it. Always seeking new ways to improve and create."
    },
    {
      icon: Users,
      title: "Effective Collaboration",
      description: "The best projects are born from teamwork. I value clear communication and collective idea building."
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
          Core Values
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The fundamental principles that guide my work and life. Every decision I make, every project I participate in, 
            is based on these values that I consider essential for creating technology with purpose.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="bg-surface border border-border rounded-2xl p-8"
        >
          <h2 className="text-title font-medium text-foreground mb-6 text-center">My Philosophy</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              I believe that technology is fundamentally human. Behind every algorithm, every line of code, 
              every system we build, there are people seeking solutions to real problems. My job is not 
              just to write code; it's to deeply understand human needs and translate them into elegant technological solutions.
            </p>
            <p className="mb-6 leading-relaxed">
              Critical thinking and creativity are not opposites - they are complementary. Logic helps me 
              structure robust solutions, while creativity allows me to find innovative approaches 
              that others might overlook. This combination is what makes each project unique and effective.
            </p>
            <p className="leading-relaxed">
              Finally, I believe in the power of collaboration and knowledge sharing. The best ideas 
              emerge when diverse minds come together with a common goal. That's why I value teamwork, 
              mentorship and building strong tech communities so much.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCore;