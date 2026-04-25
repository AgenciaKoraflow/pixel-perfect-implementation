import { useEffect, useState } from "react";
import { Menu, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Método Brabaflow", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "FAQ", href: "#faq" },
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
              B
            </span>
            <span className="hidden sm:inline">Brabaflow</span>
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
            <button
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};