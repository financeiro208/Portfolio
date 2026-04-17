import { motion } from "motion/react";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Text Overlay - Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.03]">
        <h2 className="text-[25vw] font-bold leading-none tracking-tighter">CREATIVE</h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground border-l-2 border-primary pl-4">
                {t.hero.role}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-10 max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-bold inline-block"
              >
                {t.hero.title1}
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-light text-muted-foreground inline-block"
              >
                {t.hero.title2}
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-bold text-primary inline-block"
              >
                {t.hero.title3}
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <Button size="lg" className="rounded-full px-10 py-7 text-lg group" nativeButton={false} render={
                <a href="#projects">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              } />
              
              <div className="flex gap-6 items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t.hero.followMe}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" nativeButton={false} render={<a href="https://linkedin.com/in/gustavoladeira" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>} />
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" nativeButton={false} render={<a href="https://instagram.com/gustavoladeira" target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>} />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/profile/800/1200" 
                alt="Profile" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-medium leading-relaxed italic">
                  {t.hero.quote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border/50 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-border/50 -z-10" />
    </section>
  );
}
