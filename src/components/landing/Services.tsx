import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const services = [
  {
    img: service1,
    tagYellow: "Atendimento",
    tagDark: "WhatsApp + CRM",
    title: "Agentes de Atendimento 24/7",
    desc: "SDRs e atendentes virtuais que qualificam leads, respondem dúvidas e marcam reuniões enquanto seu time descansa.",
  },
  {
    img: service2,
    tagYellow: "Operações",
    tagDark: "Workflows",
    title: "Automação de Processos Internos",
    desc: "Conectamos sistemas, eliminamos retrabalho e orquestramos rotinas críticas com agentes que aprendem com seus dados.",
  },
  {
    img: service3,
    tagYellow: "Vendas",
    tagDark: "Pipeline",
    title: "Inteligência Comercial Aplicada",
    desc: "Forecasts, scoring de oportunidades e análise de pipeline para vendedores agirem no momento certo, com a oferta certa.",
  },
  {
    img: service4,
    tagYellow: "Backoffice",
    tagDark: "Documentos",
    title: "Análise de Documentos com LLM",
    desc: "Extração estruturada de contratos, NFs e PDFs em escala — com validação humana onde o risco compensa.",
  },
];

export const Services = () => (
  <section id="servicos" className="py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Serviços</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Soluções <em className="not-italic text-gradient-gold">desenhadas</em> para o
          seu negócio
        </h2>
        <p className="mt-5 body-text">
          Cada implementação é única. Mapeamos processos, identificamos gargalos e construímos agentes que entregam ROI mensurável.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-[20px] border border-white/15 bg-card transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative h-56 overflow-hidden">
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
                <span className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground" style={{ fontFamily: "Inter" }}>
                  {s.tagYellow}
                </span>
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