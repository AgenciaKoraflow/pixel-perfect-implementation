const logos = [
  "Nexora", "Bravolt", "Lumière", "Aurix", "Cobalt", "Sertão", "Vivara", "Helix",
];

export const ClientLogos = () => (
  <section className="py-16 border-y border-white/10 overflow-hidden">
    <div className="container-wide">
      <p className="eyebrow text-center mb-8 text-body/70">Empresas que confiam na Brabaflow</p>
      <div className="relative">
        <div className="flex animate-marquee gap-16 whitespace-nowrap will-change-transform">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold tracking-tight text-white/40 hover:text-white/80 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  </section>
);