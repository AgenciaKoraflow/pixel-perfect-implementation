import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    img: service2,
    tagYellow: "Inteligência",
    tagDark: "IA & Automação",
    title: "Agentes que atendem, qualificam e vendem 24/7",
    desc: "Sem aumentar headcount. Operação que responde em segundos, todos os dias.",
  },
  {
    img: service3,
    tagYellow: "Desenvolvimento",
    tagDark: "Sistemas & Plataformas",
    title: "Landing pages, sistemas e e-commerce",
    desc: "Construídos e gereciamos para escalar com sua operação — não para travar quando ela cresce.",
  },
  {
    img: service1,
    tagYellow: "Criatividade",
    tagDark: "Criativos com IA",
    title: "Criativos em massa para minerar o menor CPC",
    desc: "Sem estúdio, sem fotógrafo. Volume e variação para o algoritmo encontrar o vencedor.",
  },
];

export const Services = () => (
  <section id="solucoes" className="py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Soluções</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Três frentes. <em className="not-italic text-gradient-gold">Contratadas</em> como você precisa.
        </h2>
        <p className="mt-5 body-text">
          Contrate uma vertical isolada ou combine quando o problema for integrado.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative isolate overflow-hidden rounded-[20px] border border-white/15 bg-card transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative h-56 overflow-hidden rounded-t-[20px]">
              <img
                src={s.img}
                alt={s.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute top-4 left-4 flex items-end gap-2">
                <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur" style={{ fontFamily: "Inter" }}>
                  {s.tagDark}
                </span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl font-medium text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
                {s.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);