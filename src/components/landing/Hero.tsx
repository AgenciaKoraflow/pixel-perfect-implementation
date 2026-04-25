import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-44 pb-32 md:pt-52 md:pb-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="container-narrow text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
          </span>
          Implementação · Sob medida · IA aplicada
        </div>

        <h1 className="mt-8 font-display text-[44px] sm:text-6xl md:text-[75px] font-medium leading-[1.05] tracking-tight text-white animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Fazemos <em className="not-italic font-medium text-gradient-gold">Agentes de IA</em>
          <br className="hidden sm:block" />
          {" "}trabalharem por <span className="text-body">você</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-body leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Implementamos sistemas de IA personalizados que automatizam processos, escalam operações e liberam seu time para o que realmente importa.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="hero" className="group">
            Entender como funciona
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-xs text-body">Resposta em até 24 horas · Sem compromisso</p>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};