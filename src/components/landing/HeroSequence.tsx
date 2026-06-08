import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFrameSequence } from "@/hooks/useFrameSequence";

// Total scroll space allocated to this sequence (multiples of viewport height)
const SCROLL_MULTIPLIER = 4;

export const HeroSequence = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoContentRef = useRef<HTMLDivElement>(null);

  useFrameSequence({ wrapperRef, canvasRef, heroContentRef, videoContentRef });

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh`, position: "relative" }}
    >
      {/* Sticky viewport — stays at top while user scrolls through the wrapper */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Animated canvas background */}
        <canvas
          ref={canvasRef}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.75,
            zIndex: 0,
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background"
          style={{ zIndex: 1 }}
        />

        {/* ── Hero content (fades out mid-scroll) ── */}
        <div
          ref={heroContentRef}
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        >
          <div className="container-narrow text-left pt-44 pb-32 md:pt-52 md:pb-40">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Inteligência · Desenvolvimento · Criatividade
            </div>

            <h1
              className="mt-8 font-display text-[44px] sm:text-6xl md:text-[75px] font-medium leading-[1.05] tracking-tight text-white animate-fade-up max-w-4xl"
              style={{ animationDelay: "0.1s" }}
            >
              Inteligência em movimento.
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg text-body leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Sistemas que pensam. Criativos que vendem. Operação que escala. Tudo construído pra
              sua empresa parar de correr atrás do próprio rabo.
            </p>

            <div
              className="mt-9 flex flex-col items-start gap-3 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="hero" className="group">
                Agendar Diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-xs text-body">Resposta em 72h · Sem compromisso</p>
            </div>
          </div>
        </div>

        {/* ── VideoSection reveal (fades in near end of scroll) ── */}
        <div
          ref={videoContentRef}
          className="absolute inset-0 flex items-center"
          style={{ zIndex: 2, opacity: 0 }}
        >
          <div className="container-narrow py-24 md:py-32 w-full">
            <header className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-5">Vídeo</span>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
                Koraflow{" "}
                <em className="not-italic text-gradient-gold">em movimento</em>
              </h2>
              <p className="mt-5 body-text">
                Tecnologia, criatividade e estratégia operando juntas — em 60 segundos.
              </p>
            </header>

            <div className="group relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/15 bg-card cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-background" />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[24px] opacity-60 blur-2xl bg-primary/20"
              />
              <div className="absolute inset-0 grid place-items-center">
                <button
                  type="button"
                  aria-label="Play vídeo"
                  className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform group-hover:scale-110"
                >
                  <Play className="h-7 w-7 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background"
          style={{ zIndex: 3 }}
        />
      </div>
    </div>
  );
};
