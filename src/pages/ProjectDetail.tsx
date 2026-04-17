import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Tag, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../lib/LanguageContext";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  
  const project = t.projects.items.find((p: any) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button variant="outline" nativeButton={false} render={
            <Link to="/">Back to Home</Link>
          } />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button variant="ghost" className="rounded-full group" nativeButton={false} render={
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          } />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Client</span>
                </div>
                <p className="font-bold">Internal Project</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Year</span>
                </div>
                <p className="font-bold">2024</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Services</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-sm font-medium px-3 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-full px-8 py-6 group" nativeButton={false} render={
              <a href="#" target="_blank" rel="noreferrer">
                Visit Live Site
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            } />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={project.coverImage || `https://picsum.photos/seed/${project.id}/1200/1200`} 
              alt={project.title}
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {project.slides && project.slides.length > 0 ? (
          <div className="mt-32">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Presentation</h2>
            <div className="flex flex-col gap-12 items-center">
              {project.slides.map((slide: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-secondary/20"
                >
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tighter mb-12">Project Overview</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden bg-secondary/50">
                 <img 
                  src={`https://picsum.photos/seed/${project.id}-1/1200/800`} 
                  alt="Detail 1"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden bg-secondary/50">
                 <img 
                  src={`https://picsum.photos/seed/${project.id}-2/1200/800`} 
                  alt="Detail 2"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </>
        )}

        {/* Videos Section */}
        {project.videos && project.videos.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.videos.map((video: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-secondary/20"
                >
                  <video 
                    src={video} 
                    controls 
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
