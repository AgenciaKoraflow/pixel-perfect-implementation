import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRAME_COUNT, loadFrames } from "@/utils/frameLoader";
import { renderFrame, syncCanvasSize } from "@/utils/canvasRenderer";

gsap.registerPlugin(ScrollTrigger);

interface Options {
  wrapperRef: RefObject<HTMLDivElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
  heroContentRef: RefObject<HTMLDivElement>;
  videoContentRef: RefObject<HTMLDivElement>;
}

export function useFrameSequence({
  wrapperRef,
  canvasRef,
  heroContentRef,
  videoContentRef,
}: Options) {
  const imagesRef = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sticky = canvas.parentElement as HTMLElement;
    syncCanvasSize(canvas, sticky);

    // gsap.to animates this object; onUpdate reads obj.frame to draw the canvas
    const obj = { frame: 0 };

    const draw = (index: number) => {
      const img = imagesRef.current[Math.round(index)];
      if (img) renderFrame(canvas, ctx, img);
    };

    const resizeObserver = new ResizeObserver(() => {
      syncCanvasSize(canvas, sticky);
      draw(obj.frame);
    });
    resizeObserver.observe(sticky);

    if (heroContentRef.current)
      gsap.set(heroContentRef.current, { opacity: 1 });
    if (videoContentRef.current)
      gsap.set(videoContentRef.current, { opacity: 0, y: 40, pointerEvents: "none" });

    // aborted prevents Strict Mode's double-invocation from creating a second tween
    let aborted = false;
    let tween: gsap.core.Tween | null = null;

    loadFrames(
      FRAME_COUNT,
      (firstFrame) => {
        if (aborted) return;
        imagesRef.current[0] = firstFrame;
        // Draw img-1 immediately — before the scroll tween is even created
        draw(0);
      },
      (images) => {
        if (aborted) return;
        // Share the array reference early so draw() sees frames as they load
        imagesRef.current = images;

        // Start ScrollTrigger as soon as the first frame is ready — don't wait
        // for all 155 frames. draw() skips null entries gracefully, so frames
        // that haven't loaded yet simply hold the last rendered frame.
        tween = gsap.to(obj, {
          frame: FRAME_COUNT - 1,
          ease: "none",
          // immediateRender ensures onUpdate fires right away with the correct
          // initial scroll-based value, preventing a stale first frame
          immediateRender: true,
          onUpdate() {
            draw(obj.frame);

            const p = obj.frame / (FRAME_COUNT - 1);

            if (heroContentRef.current) {
              const heroOpacity = p < 0.5 ? 1 : Math.max(0, 1 - (p - 0.5) / 0.25);
              gsap.set(heroContentRef.current, { opacity: heroOpacity });
            }

            if (videoContentRef.current) {
              const videoProgress = p < 0.65 ? 0 : Math.min(1, (p - 0.65) / 0.35);
              gsap.set(videoContentRef.current, {
                opacity: videoProgress,
                y: 40 * (1 - videoProgress),
                pointerEvents: videoProgress > 0 ? "auto" : "none",
              });
            }
          },
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.65,
          },
        });
      },
    ).then((images) => {
      if (aborted) return;
      imagesRef.current = images;
    });

    return () => {
      aborted = true;
      tween?.kill();
      resizeObserver.disconnect();
    };
  }, [wrapperRef, canvasRef, heroContentRef, videoContentRef]);
}
