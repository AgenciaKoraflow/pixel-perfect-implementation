import { MessageSquare, ShoppingBag, Cog, Video } from "lucide-react";

const cards = [
  {
    icon: MessageSquare,
    title: "Falta de Conteúdo Consistente",
    desc: "Produzir conteúdo todo dia custa caro e demanda tempo que você não tem.",
  },
  {
    icon: ShoppingBag,
    title: "Poucas Vendas / E-commerce Parado",
    desc: "Seu e-commerce existe mas não converte. Não sabe se é tráfego, design ou estratégia. Continua perdendo vendas todo dia.",
  },
  {
    icon: Cog,
    title: "Lentidão no Atendimento",
    desc: "Seu time gasta horas em tarefas repetitivas. Clientes esperam, atendimento falha, oportunidades escapam.",
  },
  {
    icon: Video,
    title: "Custo Alto de Produção Visual",
    desc: "Vídeos fazem converter. Mas produzir é caro e demora. Você desiste antes de começar.",
  },
];

export const Problema = () => (
  <section id="problema" className="py-24 md:py-32 bg-surface-blue">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Qual é o gargalo do <span className="text-gradient-purple">seu negócio</span>?
        </h2>
        <p className="mt-4 text-lg text-body">
          Toda empresa enfrenta um desses problemas. (Ou mais de um.)
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group rounded-xl border border-primary/20 bg-surface-navy p-6 transition-all hover:bg-primary/10 hover:border-primary hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110">
              <c.icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-foreground leading-snug">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-body-soft">{c.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);