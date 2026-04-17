import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../lib/LanguageContext";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t } = useLanguage();

  const projectImages = [
    "https://picsum.photos/seed/shop/1200/800",
    "https://picsum.photos/seed/ai/1200/800",
    "https://picsum.photos/seed/creative/1200/800",
  ];

  return (
    <section id="projects" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">{t.projects.badge}</h2>
            <h3 className="text-6xl font-bold tracking-tighter leading-none">
              {t.projects.title}
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm leading-relaxed italic">
            {t.projects.quote}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-background border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="grid md:grid-cols-2 items-center">
                  <div className={`relative aspect-[4/3] md:aspect-auto md:h-[500px] overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <img
                      src={project.coverImage || projectImages[index % projectImages.length]}
                      alt={project.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className={`p-10 md:p-16 flex flex-col justify-center ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{project.category}</span>
                    <h4 className="text-4xl font-bold tracking-tighter mb-6 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-[10px] uppercase tracking-wider border-primary/20 text-primary/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="default" className="rounded-full px-6 group/btn" nativeButton={false} render={
                        <Link to={`/project/${project.id}`}>
                          {t.projects.viewProject}
                          <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Link>
                      } />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-12 py-8 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all">
            {t.projects.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
