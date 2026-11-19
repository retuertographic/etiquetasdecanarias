"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = { src: string; width: number; height: number; alt?: string };

type HeroSliderProps = {
  slides: Slide[];
  /** CSS aspect ratio of the frame, e.g. "3 / 1". */
  aspect: string;
  className?: string;
  sizes: string;
  label?: string;
  /** RoyalSlider transition: "fade" (home banners) or "move" (product galleries). */
  transition?: "fade" | "move";
  speed?: number;
  /** Autoplay delay in ms; 0 disables autoplay. */
  delay?: number;
  fullscreen?: boolean;
};

function Arrow({ dir }: { dir: -1 | 1 }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir < 0 ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

/** RoyalSlider-style image slider: arrows, looping, autoplay paused on hover, optional fullscreen. */
export function HeroSlider({ slides, aspect, className, sizes, label = "Promociones", transition = "fade", speed = 500, delay = 3000, fullscreen = false }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);

  const go = useCallback((delta: number) => setActive((a) => (a + delta + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (hover || isFullscreen || !delay || slides.length < 2) return;
    const id = window.setInterval(() => go(1), delay);
    return () => window.clearInterval(id);
  }, [hover, isFullscreen, go, delay, slides.length]);

  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen, go]);

  const arrows = slides.length > 1 && ([-1, 1] as const).map((d) => (
    <button
      key={d}
      type="button"
      aria-label={d < 0 ? "Anterior" : "Siguiente"}
      onClick={() => go(d)}
      className={cn(
        "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white opacity-90 drop-shadow-[0_0_3px_rgba(0,0,0,0.45)] hover:opacity-100",
        d < 0 ? "left-2" : "right-2",
      )}
    >
      <Arrow dir={d} />
    </button>
  ));

  return (
    <>
      <div
        className={cn("group relative overflow-hidden rounded-[12px]", className)}
        style={{ aspectRatio: aspect }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        {transition === "fade" ? (
          slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt ?? ""}
              fill
              priority={i === 0}
              sizes={sizes}
              className="object-cover"
              style={{ opacity: i === active ? 1 : 0, transition: `opacity ${speed}ms ease-in-out` }}
              aria-hidden={i !== active}
            />
          ))
        ) : (
          <div className="flex h-full" style={{ transform: `translate3d(${-active * 100}%,0,0)`, transition: `transform ${speed}ms ease-out` }}>
            {slides.map((slide, i) => (
              <div key={slide.src} className="relative h-full w-full shrink-0" aria-hidden={i !== active}>
                <Image src={slide.src} alt={slide.alt ?? ""} fill priority={i === 0} loading={Math.abs(i - active) <= 1 ? "eager" : "lazy"} sizes={sizes} className="object-cover" />
              </div>
            ))}
          </div>
        )}
        {arrows}
        {fullscreen && (
          <button
            type="button"
            aria-label="Pantalla completa"
            onClick={() => setFullscreen(true)}
            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-[4px] bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/50 focus-visible:opacity-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
            </svg>
          </button>
        )}
      </div>

      {isFullscreen && (
        <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-[300] bg-black">
          <Image src={slides[active].src} alt={slides[active].alt ?? ""} fill sizes="100vw" className="object-contain" />
          {arrows}
          <button type="button" aria-label="Cerrar" onClick={() => setFullscreen(false)} className="absolute top-3 right-4 z-10 text-4xl leading-none text-white/80 hover:text-white">
            ×
          </button>
        </div>
      )}
    </>
  );
}
