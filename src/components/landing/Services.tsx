const services = [
  {
    tag: "IA & Automação",
    title: "Agentes que atendem, qualificam e vendem 24/7",
    desc: "Sem aumentar headcount. Operação que responde em segundos, todos os dias.",
  },
  {
    tag: "Sistemas & Plataformas",
    title: "Landing pages, sistemas e e-commerce",
    desc: "Construídos e gerenciamos para escalar com sua operação — não para travar quando ela cresce.",
  },
  {
    tag: "Criativos com IA",
    title: "Criativos em massa para minerar o menor CPC",
    desc: "Sem estúdio, sem fotógrafo. Volume e variação para o algoritmo encontrar o vencedor.",
  },
];

export const Services = () => {
  return (
    <section id="solucoes" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-full max-w-[970px] mx-auto px-8 flex flex-col gap-16">
        <header className="text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-5">Soluções</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
            Três frentes.{" "}
            <em className="not-italic text-gradient-gold">Contratadas</em> como você precisa.
          </h2>
          <p className="mt-5 body-text">
            Contrate uma vertical isolada ou combine quando o problema for integrado.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.tag}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <span
                className="inline-block w-fit rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
                style={{ fontFamily: "Inter" }}
              >
                {s.tag}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-white leading-snug">
                {s.title}
              </h3>
              <p className="body-text leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
