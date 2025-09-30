import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const posts = [
    {
      title: "El Futuro de la IA en el Desarrollo de Software",
      excerpt: "Explorando cómo la inteligencia artificial está transformando la manera en que desarrollamos software y las implicaciones para los desarrolladores del futuro.",
      date: "2024-03-15",
      readTime: "8 min",
      category: "AI & Technology",
      image: "/blog/ai-future.jpg",
      featured: true
    },
    {
      title: "El Arte del Código Limpio",
      excerpt: "Principios fundamentales para escribir código mantenible, legible y eficiente que perdure en el tiempo y facilite la colaboración en equipo.",
      date: "2024-03-10",
      readTime: "6 min",
      category: "Software Development",
      image: "/blog/clean-code.jpg",
      featured: false
    },
    {
      title: "Construyendo Aplicaciones Escalables",
      excerpt: "Estrategias y patrones de arquitectura para desarrollar aplicaciones que puedan crecer y adaptarse a las necesidades cambiantes del negocio.",
      date: "2024-03-05",
      readTime: "10 min",
      category: "Architecture",
      image: "/blog/scalable-apps.jpg",
      featured: false
    },
    {
      title: "Microservicios vs Monolitos: ¿Cuándo usar cada uno?",
      excerpt: "Un análisis práctico de las ventajas y desventajas de cada arquitectura, con ejemplos reales de cuándo elegir una u otra.",
      date: "2024-02-28",
      readTime: "7 min",
      category: "Architecture",
      image: "/blog/microservices.jpg",
      featured: false
    },
    {
      title: "Navegando el Mundo del Cloud Computing",
      excerpt: "Guía completa para entender los servicios en la nube, desde conceptos básicos hasta estrategias avanzadas de migración y optimización.",
      date: "2024-02-20",
      readTime: "12 min",
      category: "Cloud & DevOps",
      image: "/blog/cloud-computing.jpg",
      featured: false
    },
    {
      title: "Testing: La Clave del Software Confiable",
      excerpt: "Metodologías y herramientas de testing que aseguran la calidad del software, desde pruebas unitarias hasta testing end-to-end.",
      date: "2024-02-15",
      readTime: "9 min",
      category: "Testing & QA",
      image: "/blog/testing.jpg",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div ref={ref} className="min-h-screen py-section px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Reflexiones sobre tecnología, desarrollo de software, inteligencia artificial y las tendencias que están moldeando el futuro digital.
        </motion.p>

        {/* Featured Post */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2 bg-muted"></div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-accent hover:text-foreground transition-colors group">
                      Leer más
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:bg-surface/80 transition-all duration-300 h-full">
                <div className="h-48 bg-muted"></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                    
                    <button className="text-sm text-accent hover:text-foreground transition-colors">
                      Leer →
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <div className="bg-surface border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Mantente al día con las últimas tendencias
            </h3>
            <p className="text-muted-foreground mb-6">
              Recibe notificaciones sobre nuevos artículos y insights sobre tecnología directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;