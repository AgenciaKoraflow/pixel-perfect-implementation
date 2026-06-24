import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import capaVideo from "@/assets/capa-video.png";

const VIDEO_ID = "3ymH9zLVEQU";

// Total scroll space allocated to this sequence (multiples of viewport height)
const SCROLL_MULTIPLIER = 3;

export const HeroSequence = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoContentRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useFrameSequence({ wrapperRef, canvasRef, heroContentRef, videoContentRef });

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideoOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [videoOpen]);

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
          <div className="container-narrow min-h-screen flex flex-col justify-center text-left pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up w-max">
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
              <Button variant="hero" size="hero" className="group" asChild>
                <a href="https://wa.me/5511978303459" target="_blank" rel="noopener noreferrer">
                  Falar com o time
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
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

            <div
              onClick={() => setVideoOpen(true)}
              className="group relative mx-auto aspect-video w-full max-w-4xl max-h-[440px] overflow-hidden rounded-[24px] border border-white/15 bg-card cursor-pointer"
            >
              <img
                src={capaVideo}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
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

      {/* Video lightbox */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            aria-label="Fechar vídeo"
            onClick={() => setVideoOpen(false)}
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Koraflow vídeo"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
