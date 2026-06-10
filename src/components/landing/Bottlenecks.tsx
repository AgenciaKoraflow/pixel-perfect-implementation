import { Clock, Wallet, Unplug, Compass } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Atendimento que demora",
    desc: "Leads esperando. Conversão caindo no fim de semana.",
  },
  {
    icon: Wallet,
    title: "Criação cara e lenta",
    desc: "R$ 11.000+ por campanha antes do anúncio rodar.",
  },
  {
    icon: Unplug,
    title: "Sistemas desconectados",
    desc: "CRM, planilha, WhatsApp. Visibilidade real? Zero.",
  },
  {
    icon: Compass,
    title: "Decisões no achismo",
    desc: "Sem dashboard. Sem critério. Você paga o custo depois.",
  },
];

export const Bottlenecks = () => (
  <section className="min-h-screen flex items-center py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Gargalos</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Onde sua operação <em className="not-italic text-gradient-gold">perde caixa</em> todo dia
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it) => (
          <article
            key={it.title}
            className="group flex gap-5 rounded-[20px] border border-white/10 bg-card/60 p-7 transition-all hover:border-primary/30 hover:bg-card"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/15 bg-background">
              <it.icon className="h-5 w-5 text-primary" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-white">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
                {it.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);