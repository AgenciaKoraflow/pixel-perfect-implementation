import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-hero">
    {/* Subtle abstract lines */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>

    <div className="container-narrow text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur animate-fade-up">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        Diagnóstico ágil · Estratégia clara · Entrega de qualidade
      </div>

      <h1
        className="mt-8 font-display text-[40px] sm:text-5xl md:text-[64px] font-bold leading-[1.05] tracking-tight text-foreground animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Velocidade Inteligente.
        <br className="hidden sm:block" />{" "}
        <span className="text-gradient-purple">Solução Pronta</span> para Fazer Diferença
      </h1>

      <p
        className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-body animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Sua empresa merece crescer sem esperar. Diagnóstico, estratégia, entrega — com transparência total. Em dias, não meses.
      </p>

      <div
        className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <Button asChild variant="purple" size="hero" className="group">
          <a href="#cta">
            Agendar Diagnóstico Gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <Button asChild variant="purpleOutline" size="hero">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Conversar via WhatsApp
          </a>
        </Button>
      </div>

      <p
        className="mt-5 text-sm text-body-mute animate-fade-up"
        style={{ animationDelay: "0.35s" }}
      >
        Sem compromisso. 15 minutos para entender sua necessidade.
      </p>
    </div>
  </section>
);