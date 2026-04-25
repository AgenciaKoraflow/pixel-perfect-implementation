import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva uma implementação?",
    a: "Projetos típicos saem do diagnóstico para produção em 4 a 8 semanas. Implementações maiores são divididas em ondas para gerar valor desde a primeira entrega.",
  },
  {
    q: "Preciso de uma equipe técnica interna?",
    a: "Não. Cuidamos de toda a stack — modelos, integrações, deploy e monitoramento. Seu time fica focado em validar resultados e tomar decisões.",
  },
  {
    q: "Quais sistemas vocês integram?",
    a: "WhatsApp Business, HubSpot, Pipedrive, Salesforce, Notion, Google Workspace, Microsoft 365, ERPs (Bling, Tiny, Omie), bancos de dados e qualquer API REST.",
  },
  {
    q: "Como vocês garantem segurança e LGPD?",
    a: "Dados ficam na sua infraestrutura ou em provedores aprovados. Aplicamos controle de acesso, logs auditáveis e contratos com cláusulas específicas de tratamento.",
  },
  {
    q: "Como funciona o investimento?",
    a: "Modelo híbrido: setup do projeto + mensalidade de operação. Apresentamos a proposta após o diagnóstico inicial, sempre amarrada às métricas que importam para você.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 items-start">
        <div className="md:sticky md:top-32">
          <span className="eyebrow mb-5">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
            Perguntas <em className="not-italic text-gradient-gold">frequentes</em>
          </h2>
          <p className="mt-5 body-text">
            Não encontrou o que procurava? Mande uma mensagem — respondemos em até 24h.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="py-5 text-left text-base md:text-lg font-medium text-white hover:no-underline hover:text-primary transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-body" style={{ fontFamily: "Inter" }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);