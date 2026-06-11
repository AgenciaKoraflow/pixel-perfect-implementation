import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosticModal } from "@/components/landing/DiagnosticModal";

export const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <section className="relative py-24 md:py-32 overflow-hidden">
    {/* Decorative gold blur */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 h-[610px] w-[1000px] rounded-full bg-primary/10 blur-[95px]"
    />

    <div id="contato" className="container-narrow relative">
      <div className="rounded-[28px] border border-white/15 bg-card/80 p-10 md:p-16 text-center backdrop-blur">
        <span className="eyebrow mb-5">Vamos conversar</span>
        <h2 className="font-display text-4xl md:text-[50px] font-medium leading-[1.1] tracking-tight text-white max-w-2xl mx-auto">
          Pronto para colocar <em className="not-italic text-gradient-gold">inteligência</em> em movimento?
        </h2>
        <p className="mt-5 mx-auto max-w-xl body-text">
          15 a 30 minutos de conversa. Diagnóstico em 72h. Zero compromisso.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Button variant="hero" size="hero" className="group" onClick={() => setModalOpen(true)}>
            Agendar Diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="hero">
            Falar com o time
          </Button>
        </div>
      </div>
    </div>
    <DiagnosticModal open={modalOpen} onOpenChange={setModalOpen} />
  </section>
  );
};