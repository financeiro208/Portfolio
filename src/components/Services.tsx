import { motion } from "motion/react";
import { Palette, Globe, Video, Film } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.web.title,
      description: t.services.web.desc,
      icon: Globe
    },
    {
      title: t.services.graphic.title,
      description: t.services.graphic.desc,
      icon: Palette
    },
    {
      title: t.services.motion.title,
      description: t.services.motion.desc,
      icon: Video
    },
    {
      title: t.services.video.title,
      description: t.services.video.desc,
      icon: Film
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">{t.services.badge}</h2>
          <h3 className="text-6xl font-bold tracking-tighter leading-none">
            {t.services.title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-border/50 bg-muted/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group"
            >
              <motion.div 
                initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20, 
                  delay: 0.2 + (index * 0.1) 
                }}
                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-background group-hover:text-primary transition-colors"
              >
                <service.icon className="h-6 w-6" />
              </motion.div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
