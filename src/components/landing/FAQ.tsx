import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual é o preço?",
    a: "Depende da solução. Cada negócio é diferente. No diagnóstico, compartilhamos um preço justo baseado no escopo.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Varia por solução. Mas garantimos: velocidade inteligente, sem sacrificar qualidade.",
  },
  {
    q: "Como sei que vocês vão entregar?",
    a: "Boa pergunta. Oferecemos diagnóstico sem compromisso — você verifica antes de decidir. Além disso, temos clientes em diferentes estágios de projeto que validam nosso trabalho todos os dias.",
  },
  {
    q: "A IA gera conteúdo genérico?",
    a: "IA é ferramenta. Qualidade é expertise. Cada conteúdo passa por revisão humana e é customizado para seu nicho específico. Não é genérico.",
  },
  {
    q: "Por que não contratar um freelancer?",
    a: "Freelancer = você gerencia tudo. A gente? Você só aprova. Menos trabalho seu, resultado garantido. Além disso, você tem backup, suporte contínuo e responsabilidade de entrega.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-24 md:py-32 bg-surface-navy">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Dúvidas <span className="text-gradient-purple">Frequentes</span>
        </h2>
        <p className="mt-4 text-lg text-body">
          Tudo que você precisa saber antes de marcar uma conversa.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-lg border border-white/10 bg-surface-blue px-5 data-[state=open]:bg-surface-deep data-[state=open]:border-primary/40 transition-colors"
          >
            <AccordionTrigger className="py-5 text-left text-[15px] md:text-base font-semibold text-foreground hover:no-underline data-[state=open]:text-primary transition-colors">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-[1.8] text-body border-l-[3px] border-primary pl-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);