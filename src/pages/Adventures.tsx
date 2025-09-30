import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, MapPin, Music, Waves, Plane, Mountain } from "lucide-react";

const Adventures = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const adventures = [
    {
      icon: Camera,
      title: "Fotografía",
      description: "Capturando momentos únicos en cada viaje y experiencia",
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Exploración",
      description: "Descubriendo nuevos lugares y culturas alrededor del mundo",
      color: "text-green-400"
    },
    {
      icon: Waves,
      title: "Natación",
      description: "Entrenamiento regular y competencias en aguas abiertas",
      color: "text-cyan-400"
    },
    {
      icon: Music,
      title: "Música",
      description: "Creando contenido musical y explorando nuevos géneros",
      color: "text-purple-400"
    },
    {
      icon: Plane,
      title: "Viajes",
      description: "Planificando y viviendo aventuras en destinos únicos",
      color: "text-orange-400"
    },
    {
      icon: Mountain,
      title: "Deportes",
      description: "Senderismo, escalada y actividades al aire libre",
      color: "text-red-400"
    }
  ];

  const experiences = [
    {
      title: "Creación de Contenido",
      description: "Produciendo videos y contenido educativo en YouTube sobre tecnología y desarrollo de software.",
      category: "Digital Creation"
    },
    {
      title: "Aventuras Acuáticas",
      description: "Competencias de natación en aguas abiertas y entrenamientos en diferentes países.",
      category: "Sports"
    },
    {
      title: "Exploración Cultural",
      description: "Documentando tradiciones locales y experiencias culturales a través de la fotografía.",
      category: "Travel"
    },
    {
      title: "Proyectos Musicales",
      description: "Colaboraciones musicales y experimentos con producción digital.",
      category: "Music"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen py-section px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hero font-light text-foreground mb-8 text-center"
        >
          Adventures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          La vida es sobre coleccionar experiencias, no cosas. Aquí algunas de las aventuras que alimentan mi creatividad y pasión.
        </motion.p>

        {/* Passion Icons Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {adventures.map((adventure, index) => {
            const IconComponent = adventure.icon;
            return (
              <motion.div
                key={adventure.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group text-center"
              >
                <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface/80 hover:scale-105">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <IconComponent className={`w-6 h-6 ${adventure.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{adventure.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{adventure.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-title font-medium text-foreground mb-12 text-center">Experiencias Destacadas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: "easeOut" }}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-foreground">{experience.title}</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {experience.category}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes una aventura en mente? ¡Hablemos sobre nuevas oportunidades de colaboración!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-surface border border-border rounded-lg text-foreground hover:border-accent/30 hover:bg-surface/80 transition-all duration-normal"
          >
            Conectemos
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Adventures;