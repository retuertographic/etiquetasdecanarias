"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = { src: string; width: number; height: number };

type HeroSliderProps = {
  slides: Slide[];
  /** CSS aspect ratio of the frame, e.g. "3 / 1". */
  aspect: string;
  className?: string;
  sizes: string;
};

const DELAY = 3000;
const FADE = 500;

/** Fading banner slider (RoyalSlider "fade" transition, 3s autoplay, pause on hover). */
export function HeroSlider({ slides, aspect, className, sizes }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);

  const go = useCallback(
    (delta: number) => setActive((a) => (a + delta + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (hover) return;
    const id = window.setInterval(() => go(1), DELAY);
    return () => window.clearInterval(id);
  }, [hover, go]);

  return (
    <div
      className={cn("relative overflow-hidden rounded-[12px]", className)}
      style={{ aspectRatio: aspect }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Promociones"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={i === 0}
          sizes={sizes}
          className="object-cover"
          style={{ opacity: i === active ? 1 : 0, transition: `opacity ${FADE}ms ease-in-out` }}
          aria-hidden={i !== active}
        />
      ))}
      {[-1, 1].map((d) => (
        <button
          key={d}
          type="button"
          aria-label={d < 0 ? "Anterior" : "Siguiente"}
          onClick={() => go(d)}
          className={cn(
            "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white opacity-90 drop-shadow-[0_0_3px_rgba(0,0,0,0.45)] hover:opacity-100",
            d < 0 ? "left-2" : "right-2",
          )}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {d < 0 ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
          </svg>
        </button>
      ))}
    </div>
  );
}
