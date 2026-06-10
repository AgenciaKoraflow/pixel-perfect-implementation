import { useEffect, useState, useRef, useContext, createContext } from "react";
import { Menu } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

const MouseContext = createContext({ x: 0, y: 0 });

function SocialDockIcon({ link }: { link: typeof socialLinks[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement!.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const scale = useTransform(distance, [0, 80], [1.32, 1]);
  const springScale = useSpring(scale, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    // Fixed-size wrapper keeps the layout stable; only the inner element scales
    <div ref={ref} className="grid h-9 w-9 place-items-center">
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        style={{ scale: springScale }}
        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background text-white hover:bg-white/10 transition-colors"
      >
        {link.icon}
      </motion.a>
    </div>
  );
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: 0 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5">
      <div className="container-narrow">
        <nav
          className={`glass-pill flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${scrolled ? "bg-background/70" : ""
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
            <MouseContext.Provider value={mousePos}>
              <div
                className="hidden sm:flex items-end gap-2 mr-1"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {socialLinks.map((link) => (
                  <SocialDockIcon key={link.label} link={link} />
                ))}
              </div>
            </MouseContext.Provider>
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
