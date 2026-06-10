import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CarouselItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface FeatureCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
}

export const FeatureCarousel = React.forwardRef<HTMLDivElement, FeatureCarouselProps>(
  ({ items, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(items.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    React.useEffect(() => {
      const timer = setInterval(handleNext, 4000);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn('relative w-full h-[300px] flex items-center justify-center overflow-hidden', className)}
        {...props}
      >
        {/* Cards track */}
        <div className="relative w-full h-full flex items-center justify-center [perspective:1200px]">
          {items.map((item, index) => {
            const total = items.length;
            let pos = ((index - currentIndex) + total) % total;
            if (pos > Math.floor(total / 2)) pos = pos - total;

            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;

            return (
              <div
                key={index}
                className="absolute w-64 sm:w-72 transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${pos * 55}%) scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7}) rotateY(${pos * -10}deg)`,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                  filter: isCenter ? 'none' : 'blur(4px)',
                  visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                  pointerEvents: isCenter ? 'auto' : 'none',
                }}
              >
                <article className="group flex flex-col items-center text-center rounded-[20px] border border-white/15 bg-card p-8 transition-colors hover:border-primary/40">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-button shadow-gold transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body" style={{ fontFamily: 'Inter' }}>
                    {item.desc}
                  </p>
                </article>
              </div>
            );
          })}
        </div>

        {/* Prev button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full z-20 bg-background/60 backdrop-blur-sm border-white/15 hover:border-primary/40"
          onClick={handlePrev}
          aria-label="Card anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Next button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full z-20 bg-background/60 backdrop-blur-sm border-white/15 hover:border-primary/40"
          onClick={handleNext}
          aria-label="Próximo card"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Dots */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
              )}
              aria-label={`Ir para card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
);

FeatureCarousel.displayName = 'FeatureCarousel';
