import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tagDark: "IA & Automação",
    title: "Agentes que atendem, qualificam e vendem 24/7",
    desc: "Sem aumentar headcount. Operação que responde em segundos, todos os dias.",
  },
  {
    tagDark: "Sistemas & Plataformas",
    title: "Landing pages, sistemas e e-commerce",
    desc: "Construídos e gerenciamos para escalar com sua operação — não para travar quando ela cresce.",
  },
  {
    tagDark: "Criativos com IA",
    title: "Criativos em massa para minerar o menor CPC",
    desc: "Sem estúdio, sem fotógrafo. Volume e variação para o algoritmo encontrar o vencedor.",
  },
];

export const Services = () => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          const listItems = gsap.utils.toArray<HTMLElement>("li", listRef.current!);
          const slides = gsap.utils.toArray<HTMLElement>(".services-slide", pinSectionRef.current!);

          gsap.set(fillRef.current, {
            scaleY: 1 / listItems.length,
            transformOrigin: "top left",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinSectionRef.current,
              start: "top top",
              end: "+=" + (listItems.length - 1) * 50 + "%",
              pin: true,
              scrub: true,
            },
          });

          listItems.forEach((item, i) => {
            const prev = listItems[i - 1];
            if (prev) {
              tl.set(item, { color: "#ff8800" }, 0.5 * i)
                .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
                .set(prev, { color: "rgba(255,255,255,0.4)" }, "<")
                .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
            } else {
              gsap.set(item, { color: "#ff8800" });
              gsap.set(slides[i], { autoAlpha: 1 });
            }
          });

          tl.to(
            fillRef.current,
            {
              scaleY: 1,
              transformOrigin: "top left",
              ease: "none",
              duration: tl.duration(),
            },
            0
          );
        },
      });
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solucoes" className="pt-8 md:pt-12 pb-24 md:pb-0">

      {/* Desktop: pin scroll effect */}
      <div
        ref={pinSectionRef}
        className="hidden md:flex items-center justify-center flex-col h-screen"
      >
        <div className="w-full max-w-[970px] mx-auto px-8 flex flex-col gap-16">
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
          <div className="flex relative items-center">
            {/* Fill bar */}
            <div
              ref={fillRef}
              className="absolute left-2 top-4 w-0.5 h-full bg-[#ff8800]"
            />

            {/* Left: tagDark menu */}
            <ul
              ref={listRef}
              className="flex flex-col gap-6 pl-6 min-w-[220px] flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {services.map((s) => (
                <li
                  key={s.tagDark}
                  className="text-xl font-medium cursor-default select-none"
                  style={{ fontFamily: "Inter" }}
                >
                  {s.tagDark}
                </li>
              ))}
            </ul>

            {/* Right: content slides */}
            <div className="relative flex-1 ml-16 h-64">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="services-slide absolute inset-0 flex items-center"
                  style={{ opacity: 0, visibility: "hidden" }}
                >
                  <div className="max-w-[500px]">
                    <span
                      className="inline-block rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur mb-5"
                      style={{ fontFamily: "Inter" }}
                    >
                      {s.tagDark}
                    </span>
                    <h2 className="font-display text-[2.5rem] leading-tight font-medium tracking-tight text-white">
                      {s.title}
                    </h2>
                    <p className="mt-4 body-text leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-10 container-narrow pb-24">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col gap-4">
            <span
              className="inline-block rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur w-fit"
              style={{ fontFamily: "Inter" }}
            >
              {s.tagDark}
            </span>
            <h3 className="font-display text-2xl font-medium text-white">
              {s.title}
            </h3>
            <p className="body-text leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
