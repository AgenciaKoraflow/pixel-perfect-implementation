import { Zap, Eye, BadgeCheck, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Velocidade Inteligente",
    desc: "Entregamos rápido porque sabemos o que fazer.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Você sabe o que vai receber antes de começar.",
  },
  {
    icon: BadgeCheck,
    title: "Qualidade de Entrega",
    desc: "Pronta pra usar — não pra ajustar depois.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Real",
    desc: "Resposta em 24h. Sem intermediários.",
  },
];

export const Differentials = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Por que Koraflow</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Inteligência que entrega. <em className="not-italic text-gradient-gold">Clareza</em> que sustenta.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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