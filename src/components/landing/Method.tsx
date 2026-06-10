const steps = [
  {
    n: "01",
    title: "Diagnóstico Ágil",
    desc: "Chamada de 15–30min. Diagnóstico em 72h.",
  },
  {
    n: "02",
    title: "Estratégia Clara",
    desc: "Preço, prazo e processo definidos antes de começar.",
  },
  {
    n: "03",
    title: "Entrega de Qualidade",
    desc: "Velocidade inteligente, relatórios semanais, pronto pra usar.",
  },
];

export const Method = () => (
  <section id="processo" className="min-h-screen flex items-center py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Processo</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Do diagnóstico à entrega, <em className="not-italic text-gradient-gold">sem fase obscura</em>.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative rounded-[20px] border border-white/10 bg-card/50 p-7 transition-all hover:border-white/30 hover:bg-card"
          >
            <div className="font-display text-3xl font-semibold text-gradient-gold">{s.n}</div>
            <h3 className="mt-4 font-display text-lg font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body" style={{ fontFamily: "Inter" }}>{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-9 -right-2 w-4 h-px bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);