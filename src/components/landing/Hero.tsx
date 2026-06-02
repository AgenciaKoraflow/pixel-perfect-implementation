import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFrameSequence } from "@/hooks/useFrameSequence";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useFrameSequence(sectionRef, canvasRef);

  return (
    <section
      ref={sectionRef}
      className="relative pt-44 pb-32 md:pt-52 md:pb-40"
      style={{ minHeight: "100vh" }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0"
        style={{ zIndex: 0, opacity: 0.7 }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background"
        style={{ zIndex: 1 }}
      />

      {/* Text content */}
      <div className="container-narrow text-left relative" style={{ zIndex: 2 }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
          </span>
          Inteligência · Desenvolvimento · Criatividade
        </div>

        <h1 className="mt-8 font-display text-[44px] sm:text-6xl md:text-[75px] font-medium leading-[1.05] tracking-tight text-white animate-fade-up max-w-4xl" style={{ animationDelay: "0.1s" }}>
          Inteligência em movimento.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-body leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Sistemas que pensam. Criativos que vendem. Operação que escala. Tudo construído pra sua empresa parar de correr atrás do próprio rabo.
        </p>

        <div className="mt-9 flex flex-col items-start gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="hero" className="group">
            Agendar Diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-xs text-body">Resposta em 72h · Sem compromisso</p>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background"
        style={{ zIndex: 3 }}
      />
    </section>
  );
};