import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva uma entrega?",
    a: "Cada projeto tem seu prazo, calculado conforme escopo e objetivo. Você sabe exatamente quanto tempo vai levar antes de aprovar.",
  },
  {
    q: "Como funciona o investimento?",
    a: "Solução por entrega, não hora trabalhada. Cada vertical tem 3 níveis: entry, core e recorrente.",
  },
  {
    q: "Conseguem integrar com nossos sistemas?",
    a: "Se tem API ou export, fazemos conversar.",
  },
  {
    q: "IA faz tudo sozinha?",
    a: "IA é ferramenta. Expertise é diferencial. Sem expertise humana, entrega vira genérica.",
  },
  {
    q: "Como funciona o contrato?",
    a: "Cada vertical tem seu modelo — projetos pontuais ou planos recorrentes. As condições são apresentadas com clareza na proposta, antes de qualquer assinatura.",
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
          Não encontrou o que procurava? Mande uma mensagem — respondemos em 24h.
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