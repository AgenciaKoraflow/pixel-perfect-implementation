import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Soluções",
    links: ["Agentes de IA", "Automações", "Sites & Apps", "Conteúdo Visual"],
  },
  {
    title: "Empresa",
    links: ["Como funciona", "Por que nós", "FAQ", "Contato"],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 bg-surface-deep relative overflow-hidden">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-foreground font-display font-bold text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-button text-primary-foreground font-bold">
              K
            </span>
            Koraflow
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-body-soft">
            Velocidade inteligente em soluções com IA. Diagnóstico, estratégia e entrega — com transparência total.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-body-soft hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Big wordmark */}
      <div className="relative mb-10">
        <div
          className="select-none text-center font-display font-bold tracking-tighter leading-none text-white/[0.05]"
          style={{ fontSize: "clamp(80px, 18vw, 240px)" }}
        >
          koraflow
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-surface-deep" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-xs text-body-mute">
          © {new Date().getFullYear()} Koraflow. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-body-mute hover:text-primary transition">Privacidade</a>
          <a href="#" className="text-xs text-body-mute hover:text-primary transition">Termos</a>
          <a href="#" className="text-xs text-body-mute hover:text-primary transition">LGPD</a>
        </div>
      </div>
    </div>
  </footer>
);