import { Play } from "lucide-react";

export const VideoSection = () => (
  <section className="py-24 md:py-32 border-y border-white/10">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow mb-5">Vídeo</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Koraflow <em className="not-italic text-gradient-gold">em movimento</em>
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
  </section>
);

// Backwards-compatible export
export const ClientLogos = VideoSection;