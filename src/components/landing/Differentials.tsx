import { Zap, Eye, BadgeCheck, MessageCircle } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

const items = [
  {
    icon: Zap,
    title: "Velocidade Inteligente",
    desc: "Entregamos rápido porque sabemos o que fazer.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Você sabe o que vai receber antes de começar.",
  },
  {
    icon: BadgeCheck,
    title: "Qualidade de Entrega",
    desc: "Pronta pra usar — não pra ajustar depois.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Real",
    desc: "Resposta em 24h. Sem intermediários.",
  },
];

export const Differentials = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container-narrow">
      <header className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-5">Por que Koraflow</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          Inteligência que entrega. <em className="not-italic text-gradient-gold">Clareza</em> que sustenta.
        </h2>
      </header>

      <FeatureCarousel items={items} className="mt-4" />
    </div>
  </section>
);