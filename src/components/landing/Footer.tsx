import { Instagram, Linkedin, Facebook, Twitter, Mail } from "lucide-react";

const cols = [
  {
    title: "Soluções",
    links: ["Inteligência", "Desenvolvimento", "Criatividade"],
  },
  {
    title: "Empresa",
    links: ["Processo", "Sobre", "Cases", "Contato"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Newsletter", "Manifesto"],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-white font-display font-semibold text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-button text-primary-foreground font-bold">
              K
            </span>
            Koraflow
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
            Inteligência em Movimento. Intelligence · Development · Creativity — sistemas que pensam, atendem e vendem 24h por dia.
          </p>
          <a
            href="mailto:contato@koraflow.com.br"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:text-primary transition"
          >
            <Mail className="h-4 w-4" />
            contato@koraflow.com.br
          </a>
          <div className="mt-6 flex items-center gap-2">
            {[
              { Icon: Instagram, href: "https://instagram.com/koraflow", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com/koraflow", label: "Facebook" },
              { Icon: Twitter, href: "https://twitter.com/koraflow", label: "Twitter" },
              { Icon: Linkedin, href: "https://linkedin.com/company/koraflow", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
          koraflow
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-xs text-body/70">
          © {new Date().getFullYear()} Koraflow. Inteligência em Movimento.
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