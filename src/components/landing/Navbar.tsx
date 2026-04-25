import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Soluções", href: "#solucao" },
  { label: "Como funciona", href: "#processo" },
  { label: "Por que nós", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="container-narrow">
        <nav
          className={`glass-pill flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "bg-background/80" : ""
          }`}
          aria-label="Principal"
        >
          <a href="#" className="flex items-center gap-2 text-foreground font-display font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-button text-primary-foreground font-bold">
              K
            </span>
            <span className="hidden sm:inline">Koraflow</span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="purple" size="sm" className="hidden sm:inline-flex">
              <a href="#cta">Agendar diagnóstico</a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10 transition"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-white/15 bg-background/95 backdrop-blur p-5">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm text-foreground/85 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="purple" className="w-full">
                  <a href="#cta" onClick={() => setOpen(false)}>Agendar diagnóstico</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};