import { useEffect, useRef, Children } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxStack = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = Array.from(
        containerRef.current!.children
      ) as HTMLElement[];

      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        }).to(panel, {
          ease: "none",
          startAt: { filter: "brightness(100%) contrast(100%)" },
          filter: "brightness(60%) contrast(135%)",
          yPercent: -12,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className="sticky top-0 min-h-screen bg-background"
          style={{ zIndex: i + 1 }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
