import { Linkedin, ArrowUp, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: t.nav.about, href: isHome ? "#about" : "/#about" },
    { name: t.nav.projects, href: isHome ? "#projects" : "/#projects" },
    { name: t.nav.experience, href: isHome ? "#experience" : "/#experience" },
    { name: t.nav.contact, href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <footer className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="max-w-md">
            <Link to="/" className="text-3xl font-bold tracking-tighter">
              GUSTAVO<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t.footer.nav}</h4>
              <ul className="space-y-4 text-sm font-bold">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t.footer.socials}</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="https://linkedin.com/in/gustavoladeira" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com/gustavoladeira" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-border/50 gap-8">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            © {currentYear} Gustavo Ladeira. {t.footer.rights}
          </p>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
