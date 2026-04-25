import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTAFinal = () => (
  <section id="cta" className="relative overflow-hidden py-24 md:py-32 bg-gradient-cta">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-primary/15 blur-[120px]"
    />
    <div className="container-narrow relative text-center">
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto">
        Pronto para sair do <span className="text-gradient-purple">problema?</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
        Agende uma conversa com nosso time. Diagnóstico gratuito, sem compromisso.
        <br />
        15 minutos para descobrir se a gente pode ajudar.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
        <Button asChild variant="purple" size="hero" className="group">
          <a href="#">
            Agendar Diagnóstico Agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          ou conversar via WhatsApp
        </a>
      </div>

      <p className="mt-5 text-xs text-body-mute">
        Calendário aberto. Falamos português. Resposta em 24h.
      </p>
    </div>
  </section>
);