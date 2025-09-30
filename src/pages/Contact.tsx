import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Youtube, Mail, Github } from "lucide-react";

const Contact = () => {
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
      label: "Github",
      href: "https://github.com/abelalbuez",
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
    <section ref={ref} className="min-h-screen py-section px-6 bg-background flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8"
        >
          Let's Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Always interested in new opportunities, collaborations, and conversations about technology, creativity, and adventure.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="bg-surface border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-foreground mb-6">Send me a message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
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

export default Contact;