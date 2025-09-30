import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Github, Youtube, Mail } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const socials = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:aalbuezs@gmail.com",
      username: "aalbuezs@gmail.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/stackedbyabel",
      username: "@stackedbyabel"
    },
    {
      icon: Github,
      label: "Facebook",
      href: "https://facebook.com/abelalbuez",
      username: "abelalbuez"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@abelalbuez",
      username: "@abelalbuez"
    }
  ];

  return (
    <section ref={ref} className="py-section px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section font-light text-foreground mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Always interested in new opportunities, collaborations, and conversations about technology, creativity, and adventure.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-surface rounded-2xl p-6 border border-border transition-all duration-normal hover:border-accent/30 hover:bg-surface/80 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-normal">
                  <social.icon className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{social.label}</h3>
                <p className="text-caption text-muted-foreground">{social.username}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="border-t border-border pt-8"
        >
          <p className="text-caption text-muted-foreground">
            © 2024 Abel Albuez Sanchez. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;