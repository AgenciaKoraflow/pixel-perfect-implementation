import { Sparkles, Target, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Foco em ROI mensurável",
    desc: "Toda implementação parte de uma métrica de negócio. Sem agentes pelo agente.",
  },
  {
    icon: Sparkles,
    title: "Implementação sob medida",
    desc: "Nada de templates engessados. Cada solução é desenhada para o seu fluxo real.",
  },
  {
    icon: ShieldCheck,
    title: "Governança e segurança",
    desc: "LGPD, controle de acesso e logs auditáveis. IA com responsabilidade desde o dia zero.",
  },
];

export const Differentials = () => (
  <section id="metodo" className="py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Diferenciais</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Por que <em className="not-italic text-gradient-gold">contratar</em> a Brabaflow
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((it, idx) => (
          <article
            key={it.title}
            className="group rounded-[20px] border border-white/15 bg-card p-8 transition-all hover:border-primary/40 hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-button shadow-gold transition-transform group-hover:scale-110">
              <it.icon className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <h3 className="mt-6 font-display text-xl font-medium text-white">
              <span className="text-body/60 mr-2">0{idx + 1}.</span>
              {it.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
              {it.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);