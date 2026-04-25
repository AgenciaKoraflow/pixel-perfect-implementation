import { Zap, Lock, Gem, MessageSquare } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Velocidade Inteligente",
    desc: "Não é pressa. É expertise. Entregamos rápido porque sabemos o que fazer. Você não espera meses por uma solução.",
  },
  {
    icon: Lock,
    title: "Transparência Total",
    desc: "Você sabe o que vai receber antes de começar. Relatórios semanais, sem surpresa. Processo claro, sem gambiarra.",
  },
  {
    icon: Gem,
    title: "Qualidade de Entrega",
    desc: "IA é ferramenta. Expertise é diferencial. Cada solução é revisada e testada — pronta pra usar, não pra ajustar depois.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Real",
    desc: "Seu time conversa direto com a gente. Feedback? Resposta em 24h. Sem intermediários, sem demora.",
  },
];

export const PorqueNos = () => (
  <section id="diferenciais" className="py-24 md:py-32 bg-surface-deep">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Por que escolher a <span className="text-gradient-purple">Koraflow</span>?
        </h2>
        <p className="mt-4 text-lg text-body">
          Não somos a agência mais barata.
          <br />
          Mas somos a mais clara.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <article
            key={it.title}
            className="group rounded-xl border-l-[3px] border-primary bg-surface-blue p-6 transition-all hover:border-l-[5px] hover:bg-primary/10"
          >
            <it.icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body-soft">{it.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);