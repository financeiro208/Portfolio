import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "../lib/LanguageContext";

const skills = [
  "Photoshop", "Illustrator", "Premiere Pro", "After Effects",
  "Figma", "Framer", "WordPress", "Wix",
  "Motion Design", "UI/UX Design", "Video Editing", "Photography"
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 sticky lg:top-32"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
              {t.about.badge}
            </h2>
            <h3 className="text-5xl font-bold tracking-tighter leading-none mb-8">
              {t.about.title}
            </h3>
            <div className="w-20 h-1 bg-primary mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 space-y-12"
          >
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12 pt-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">{t.services.badge}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs font-medium rounded-md bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{t.about.philosophy}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.about.philosophyText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
