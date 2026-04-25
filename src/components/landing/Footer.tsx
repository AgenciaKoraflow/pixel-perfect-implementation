import { Instagram, Linkedin, Twitter } from "lucide-react";

const cols = [
  {
    title: "Soluções",
    links: ["Atendimento", "Operações", "Vendas", "Backoffice"],
  },
  {
    title: "Empresa",
    links: ["Método", "Cases", "Sobre", "Carreiras"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Podcast", "Newsletter", "Manifesto"],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-white font-display font-semibold text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-button text-primary-foreground font-bold">
              B
            </span>
            Brabaflow
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
            Implementação sob medida de Agentes de IA para empresas que querem operar mais leves e crescer mais rápido.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background hover:bg-white/5 transition"
              >
                <Icon className="h-4 w-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-medium text-white mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-body hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Big logo wordmark with bottom fade */}
      <div className="relative mb-10">
        <div
          className="select-none text-center font-display font-semibold tracking-tighter leading-none text-white/[0.06]"
          style={{ fontSize: "clamp(80px, 18vw, 240px)" }}
        >
          brabaflow
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-xs text-body/70">
          © {new Date().getFullYear()} Brabaflow. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-body/70 hover:text-white transition">Privacidade</a>
          <a href="#" className="text-xs text-body/70 hover:text-white transition">Termos</a>
          <a href="#" className="text-xs text-body/70 hover:text-white transition">LGPD</a>
        </div>
      </div>
    </div>
  </footer>
);