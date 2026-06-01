import { useEffect, useState } from "react";
import { Menu, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5">
      <div className="container-narrow">
        <nav
          className={`glass-pill flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "bg-background/70" : ""
          }`}
          aria-label="Principal"
        >
          <a href="#" className="flex items-center gap-2 text-white font-display font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-button text-primary-foreground font-bold">
              K
            </span>
            <span className="hidden sm:inline">Koraflow</span>
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/85 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-1">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background hover:bg-white/5 transition"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background hover:bg-white/5 transition"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
            <a
              href="#contato"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-gold"
            >
              <span className="hidden sm:inline">Agendar Diagnóstico</span>
              <Menu className="h-4 w-4 sm:hidden" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};