import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoKoraflow from "@/assets/logo-koraflow.png";

const cols = [
  {
    title: "Soluções",
    links: [
      { label: "Inteligência", href: "#solucoes" },
      { label: "Desenvolvimento", href: "#solucoes" },
      { label: "Criatividade", href: "#solucoes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Processo", href: "#processo" },
      { label: "Diferenciais", href: "#sobre" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2">
          <div>
            <img src={logoKoraflow} alt="Koraflow" className="h-9 w-auto" />
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
            <a
              href="https://www.instagram.com/koraflow.ia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background hover:bg-white/5 transition"
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-background hover:bg-white/5 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-medium text-white mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-body hover:text-white transition-colors"
                  >
                    {l.label}
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
          <Link to="/privacidade" className="text-xs text-body/70 hover:text-white transition">Privacidade</Link>
          <Link to="/termos" className="text-xs text-body/70 hover:text-white transition">Termos</Link>
        </div>
      </div>
    </div>
  </footer>
);