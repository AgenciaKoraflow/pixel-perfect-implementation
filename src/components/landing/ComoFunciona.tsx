import { Search, ClipboardList, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "1",
    icon: Search,
    title: "DIAGNÓSTICO ÁGIL",
    desc: [
      "Agendamos uma chamada (15-30 minutos).",
      "A gente entende sua dor, seu negócio, seu objetivo.",
      "Você recebe um diagnóstico claro por email, em 72h.",
    ],
    transparency: "Você sabe exatamente qual é a solução",
  },
  {
    n: "2",
    icon: ClipboardList,
    title: "ESTRATÉGIA CLARA",
    desc: [
      "Apresentamos a solução (como funciona, o que você recebe).",
      "Mostramos o preço, o prazo, o processo.",
      "Você aprova ou ajusta com feedback.",
    ],
    transparency: "Nada de surpresa no meio do caminho",
  },
  {
    n: "3",
    icon: CheckCircle2,
    title: "ENTREGA DE QUALIDADE",
    desc: [
      "Executamos a solução com velocidade inteligente.",
      "Você acompanha o progresso (relatórios semanais).",
      "Entregamos pronto para usar e publicar.",
    ],
    transparency: "Você sabe o status sempre",
  },
];

export const ComoFunciona = () => (
  <section id="processo" className="py-24 md:py-32 bg-surface-navy">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Processo Transparente. <span className="text-gradient-purple">Do início ao fim.</span>
        </h2>
        <p className="mt-4 text-lg text-body">
          Você sabe exatamente o que vai receber e quando.
          <br />
          Sem surpresa. Sem burocracia.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative">
        {steps.map((s, i) => (
          <article
            key={s.n}
            className="relative rounded-xl border border-white/10 bg-surface-blue p-7 transition-all hover:border-primary/40"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-gradient-purple leading-none">
                {s.n}
              </span>
              <s.icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold tracking-wide text-foreground">
              {s.title}
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-body-soft">
              {s.desc.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-md border-l-[3px] border-primary bg-primary/10 px-4 py-2.5 text-sm font-medium text-foreground">
              "{s.transparency}"
            </div>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-primary/30" aria-hidden />
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);