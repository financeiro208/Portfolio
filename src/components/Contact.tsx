import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "../lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">{t.contact.badge}</h2>
              <h3 className="text-6xl font-bold tracking-tighter leading-none mb-10">
                {t.contact.title}
              </h3>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                {t.contact.desc}
              </p>

              <div className="space-y-8">
                <a href="mailto:Gustavo.ladeiradc@gmail.com" className="group flex items-center gap-6 p-6 rounded-3xl border border-border/50 bg-background hover:border-primary transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t.contact.emailMe}</div>
                    <div className="text-xl font-bold tracking-tight">Gustavo.ladeiradc@gmail.com</div>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </a>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 flex items-center gap-4 p-6 rounded-3xl border border-border/50 bg-background">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t.contact.callMe}</div>
                      <div className="text-lg font-bold tracking-tight">+55 (19) 99383-5409</div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 p-6 rounded-3xl border border-border/50 bg-background">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t.contact.location}</div>
                      <div className="text-lg font-bold tracking-tight">{t.contact.locValue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-10 md:p-16 rounded-[3rem] border border-border/50 shadow-xl"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">{t.contact.form.name}</label>
                      <Input placeholder="John Doe" className="h-14 rounded-2xl bg-muted/30 border-none focus-visible:ring-primary/20" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">{t.contact.form.email}</label>
                      <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-muted/30 border-none focus-visible:ring-primary/20" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">{t.contact.form.subject}</label>
                    <Input placeholder="Project Inquiry" className="h-14 rounded-2xl bg-muted/30 border-none focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">{t.contact.form.message}</label>
                    <Textarea placeholder={t.contact.form.placeholder} className="min-h-[180px] rounded-2xl bg-muted/30 border-none focus-visible:ring-primary/20 resize-none p-4" />
                  </div>
                </div>
                <Button className="w-full rounded-2xl h-16 text-lg font-bold group shadow-lg shadow-primary/20">
                  {t.contact.form.send}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
