import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">{t.experience.badge}</h2>
          <h3 className="text-6xl font-bold tracking-tighter leading-none">
            {t.experience.title}
          </h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative grid md:grid-cols-12 gap-8 py-12 border-b border-border/50 last:border-0 hover:bg-muted/5 transition-colors px-6 -mx-6 rounded-2xl"
            >
              <div className="md:col-span-3">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                <p className="text-primary font-medium mt-1 uppercase text-xs tracking-widest">{exp.company}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
