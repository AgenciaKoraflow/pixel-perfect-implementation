import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: "IA & Automação",
    title: "Agentes que atendem, qualificam e vendem 24/7",
    desc: "Sem aumentar headcount. Operação que responde em segundos, todos os dias.",
  },
  {
    tag: "Sistemas & Plataformas",
    title: "Landing pages, sistemas e e-commerce",
    desc: "Construídos e gerenciados para escalar com sua operação — não para travar quando ela cresce.",
  },
  {
    tag: "Criativos com IA",
    title: "Criativos em massa para minerar o menor CPC",
    desc: "Sem estúdio, sem fotógrafo. Volume e variação para o algoritmo encontrar o vencedor.",
  },
];

const TAG_ACTIVE = {
  color: "hsl(28 100% 50%)",
  borderColor: "hsl(28 100% 50%)",
  backgroundColor: "hsl(28 100% 50% / 0.12)",
};
const TAG_IDLE = {
  color: "hsl(0 0% 100%)",
  borderColor: "hsl(0 0% 100% / 0.15)",
  backgroundColor: "hsl(0 0% 100% / 0.07)",
};

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return;

    const tags = tagRefs.current.filter(Boolean) as HTMLElement[];
    const slides = slideRefs.current.filter(Boolean) as HTMLElement[];

    // Initial state: first item active, rest hidden
    gsap.set(tags[0], TAG_ACTIVE);
    gsap.set(slides[0], { autoAlpha: 1 });
    slides.slice(1).forEach((s) => gsap.set(s, { autoAlpha: 0 }));

    gsap.set(fill, {
      scaleY: 1 / services.length,
      transformOrigin: "top center",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${services.length * 50}%`,
        pin: true,
        scrub: true,
      },
    });

    tags.forEach((tag, i) => {
      const prev = tags[i - 1];
      if (prev) {
        tl.set(tag, TAG_ACTIVE, 0.5 * i)
          .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
          .set(prev, TAG_IDLE, "<")
          .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
      }
    });

    tl.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        duration: tl.duration(),
      },
      0
    ).to({}, {}); // pause at end before un-pin

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solucoes"
      className="h-screen flex items-center overflow-hidden"
    >
      <div className="w-full max-w-[970px] mx-auto px-8 flex flex-col gap-20">
        <header className="text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-5">Soluções</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
            Três frentes.{" "}
            <em className="not-italic text-gradient-gold">Contratadas</em> como você precisa.
          </h2>
          <p className="mt-5 body-text">
            Contrate uma vertical isolada ou combine quando o problema for integrado.
          </p>
        </header>

        <div className="flex gap-16 items-center">
          {/* Left: tag menu with progress fill bar */}
          <div className="relative flex-shrink-0">
            {/* track */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            {/* fill */}
            <div
              ref={fillRef}
              className="absolute left-0 top-0 w-px origin-top"
              style={{ height: "100%", backgroundColor: "hsl(28 100% 50%)" }}
            />

            <ul className="pl-8 flex flex-col gap-5 m-0 p-0 list-none">
              {services.map((s, i) => (
                <li key={s.tag}>
                  <span
                    ref={(el) => { tagRefs.current[i] = el; }}
                    className="inline-block rounded-md border px-3 py-1.5 text-sm font-medium backdrop-blur cursor-default select-none"
                    style={{ fontFamily: "Inter", ...TAG_IDLE }}
                  >
                    {s.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: title + desc slides */}
          <div className="relative flex-1" style={{ minHeight: 180 }}>
            {services.map((s, i) => (
              <div
                key={s.tag}
                ref={(el) => { slideRefs.current[i] = el; }}
                className="absolute inset-0 flex flex-col justify-center gap-5"
                style={{ opacity: 0, visibility: "hidden" }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white leading-snug">
                  {s.title}
                </h3>
                <p className="body-text leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
