import * as React from "react";
import {
  TrendingDown,
  Award,
  CheckCircle2,
  UserX,
  Eye,
  RefreshCw,
  ImageIcon,
  Bot,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Hook = { icon: LucideIcon; title: string };

const services: Array<{
  tag: string;
  title: string;
  desc: string;
  hooks: Hook[];
}> = [
  {
    tag: "IA & Automação",
    title: "Agentes que atendem, qualificam e vendem 24/7",
    desc: "Sem aumentar headcount. Operação que responde em segundos, todos os dias.",
    hooks: [
      { icon: TrendingDown, title: "Você está perdendo dinheiro agora" },
      { icon: Award,        title: "Seus concorrentes já estão na frente" },
      { icon: CheckCircle2, title: "A decisão certa é simples" },
    ],
  },
  {
    tag: "Sistemas & Plataformas",
    title: "Landing pages, sistemas e e-commerce",
    desc: "Construídos e gerenciados para escalar com sua operação — não para travar quando ela cresce.",
    hooks: [
      { icon: UserX,     title: "Seu site está te custando clientes" },
      { icon: Eye,       title: "A primeira impressão é a que fica" },
      { icon: RefreshCw, title: "Investimento que se paga sozinho" },
    ],
  },
  {
    tag: "Criativos com IA",
    title: "Criativos em massa para minerar o menor CPC",
    desc: "Sem estúdio, sem fotógrafo. Volume e variação para o algoritmo encontrar o vencedor.",
    hooks: [
      { icon: ImageIcon, title: "Conteúdo visual vende mais" },
      { icon: Bot,       title: "Você não pode competir sem IA" },
      { icon: Clock,     title: "O momento é agora" },
    ],
  },
];

const CELL = 121.33;
const GAP = 8;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;
const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

function Cell() {
  return (
    <div
      aria-hidden="true"
      style={{ width: CELL, height: CELL }}
      className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] blur-[1px]"
    />
  );
}

function ServiceThemeTile({ tag }: { tag: string }) {
  return (
    <div
      style={{ width: CELL, height: CELL }}
      className="relative shrink-0 rounded-xl border border-[hsl(28_100%_50%/0.6)] bg-[hsl(28_100%_50%/0.1)] flex items-center justify-center p-3"
    >
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{ color: "hsl(28 100% 60%)", fontFamily: "Inter" }}
      >
        {tag}
      </span>
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs = 6,
}: {
  text: string;
  startIndex: number;
  staggerMs?: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span key={ci} className="scroll-reel-char" style={{ animationDelay: `${delay}ms` }}>
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export const Services = () => {
  const count = services.length;
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const next = index + dir;
      if (next < 0 || next >= count) return;
      animating.current = true;
      setIndex(next);
      setExiting(true);
      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    services.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) items.push({ type: "cell" }, { type: "cell" });
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = services[displayIndex];

  return (
    <section id="solucoes" className="py-24 md:py-32">
      <div className="container-narrow">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-5">Soluções</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
            Três frentes.{" "}
            <em className="not-italic text-gradient-gold">Contratadas</em> como você precisa.
          </h2>
          <p className="mt-5 body-text">
            Contrate uma vertical isolada ou combine quando o problema for integrado.
          </p>
        </header>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Soluções"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); paginate(1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); paginate(-1); }
          }}
          className="relative flex w-full flex-col items-stretch overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] md:min-h-[420px] md:flex-row"
        >
          {/* Reel side */}
          <div
            aria-hidden="true"
            className="relative h-56 w-full shrink-0 self-stretch overflow-hidden md:h-auto md:w-[380px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <div className="flex shrink-0 flex-col gap-2 will-change-transform" style={colStyle(sideY)}>
                {Array.from({ length: sideCellCount }).map((_, i) => <Cell key={i} />)}
              </div>
              <div className="flex shrink-0 flex-col gap-2 will-change-transform" style={colStyle(middleY)}>
                {middleItems.map((item, i) =>
                  item.type === "featured" ? (
                    <ServiceThemeTile key={i} tag={services[item.i].tag} />
                  ) : (
                    <Cell key={i} />
                  )
                )}
              </div>
              <div className="flex shrink-0 flex-col gap-2 will-change-transform" style={colStyle(sideY)}>
                {Array.from({ length: sideCellCount }).map((_, i) => <Cell key={i} />)}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex min-w-0 flex-1 flex-col justify-center self-stretch px-5 py-7 md:py-10">
            <div className="flex flex-col gap-5">
              {/* Text stage */}
              <div className="relative w-full overflow-hidden" aria-live="polite">
                {/* Invisible sizer keeps the container height stable */}
                <div aria-hidden="true" className="invisible flex flex-col gap-3">
                  <p className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
                    {current.title}
                  </p>
                  <p className="body-text leading-relaxed">{current.desc}</p>
                  <div className="pt-3 mt-1 border-t border-white/[0.08] flex flex-col gap-1.5">
                    {current.hooks.map((h) => (
                      <span key={h.title} className="flex items-center gap-1.5 text-xs text-white/50">
                        <h.icon size={12} className="shrink-0 opacity-70" />
                        {h.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  key={displayIndex}
                  className={`absolute inset-x-0 top-0 flex flex-col gap-3 will-change-[transform,opacity]${exiting ? " scroll-reel-exit" : ""}`}
                >
                  <p className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
                    <Chars text={current.title} startIndex={0} />
                  </p>
                  <p className="body-text leading-relaxed">
                    <Chars text={current.desc} startIndex={current.title.length + 4} />
                  </p>
                  <div className="pt-3 mt-1 border-t border-white/[0.08] flex flex-col gap-1.5">
                    {current.hooks.map((h, hi) => (
                      <p
                        key={h.title}
                        className="scroll-reel-row gap-1.5 text-xs text-white/50 m-0"
                        style={{ animationDelay: `${(current.title.length + current.desc.length + hi * 2) * 6}ms` }}
                      >
                        <h.icon size={12} className="shrink-0 opacity-70" />
                        {h.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => paginate(-1)}
                disabled={index === 0}
                aria-label="Solução anterior"
                className="grid h-6 w-6 cursor-pointer place-items-center rounded-full border border-white/15 bg-transparent p-0 text-white transition-[opacity,transform] duration-200 ease-out hover:enabled:scale-[1.08] active:enabled:scale-[0.94] disabled:cursor-default disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
              >
                <svg className="h-3 w-3 opacity-70" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.5 2.5 3.5 6l4 3.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                disabled={index === count - 1}
                aria-label="Próxima solução"
                className="grid h-6 w-6 cursor-pointer place-items-center rounded-full border border-white/15 bg-transparent p-0 text-white transition-[opacity,transform] duration-200 ease-out hover:enabled:scale-[1.08] active:enabled:scale-[0.94] disabled:cursor-default disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
              >
                <svg className="h-3 w-3 opacity-70" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m4.5 2.5 4 3.5-4 3.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
