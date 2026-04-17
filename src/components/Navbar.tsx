import { motion } from "motion/react";
import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "../lib/LanguageContext";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: t.nav.about, href: isHome ? "#about" : "/#about" },
    { name: t.nav.projects, href: isHome ? "#projects" : "/#projects" },
    { name: t.nav.experience, href: isHome ? "#experience" : "/#experience" },
    { name: t.nav.contact, href: isHome ? "#contact" : "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          GUSTAVO<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l pl-8 border-border/50">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="text-xs font-bold gap-2"
            >
              <Languages className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
            <ThemeToggle />
            <Button variant="default" size="sm" nativeButton={false} render={
              <a href={isHome ? "#contact" : "/#contact"}>{t.nav.hireMe}</a>
            } />
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="text-xs font-bold"
          >
            {language.toUpperCase()}
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            } />
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="default" className="w-full" nativeButton={false} render={
                  <a href={isHome ? "#contact" : "/#contact"}>{t.nav.hireMe}</a>
                } />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
