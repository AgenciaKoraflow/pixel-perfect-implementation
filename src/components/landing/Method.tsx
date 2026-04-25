const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos processos, identificamos gargalos e priorizamos onde IA gera valor real.",
  },
  {
    n: "02",
    title: "Desenho da solução",
    desc: "Definimos arquitetura, modelos, integrações e métricas de sucesso de cada agente.",
  },
  {
    n: "03",
    title: "Implementação",
    desc: "Construímos, testamos e colocamos em produção em ciclos curtos com seu time envolvido.",
  },
  {
    n: "04",
    title: "Operação contínua",
    desc: "Acompanhamos performance, refinamos prompts e evoluímos junto com o seu negócio.",
  },
];

export const Method = () => (
  <section className="py-24 md:py-32 border-t border-white/10">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Método Brabaflow</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Quatro passos da ideia ao agente <em className="not-italic text-gradient-gold">em produção</em>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative rounded-[20px] border border-white/10 bg-card/50 p-7 transition-all hover:border-white/30 hover:bg-card"
          >
            <div className="font-display text-3xl font-semibold text-gradient-gold">{s.n}</div>
            <h3 className="mt-4 font-display text-lg font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body" style={{ fontFamily: "Inter" }}>{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-9 -right-2 w-4 h-px bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);