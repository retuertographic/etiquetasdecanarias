"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useViewportWidth } from "./use-breakpoint";

export type CarouselBreakpoint = {
  /** Minimum viewport width (px) this setting applies from. */
  min: number;
  items: number;
  nav: boolean;
  autoplay: boolean;
};

type CarouselProps = {
  slides: ReactNode[];
  breakpoints: CarouselBreakpoint[];
  navStyle: "round" | "plain";
  className?: string;
  ariaLabel: string;
  /** Horizontal gap (px) between slides; applied as trailing slide padding. */
  gap?: number;
};

const SPEED = 350; // owl fluidSpeed
const AUTOPLAY_TIMEOUT = 3000;

function Chevron({ dir, className }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

/** Looping carousel modelled on the Owl Carousel instances used by the source page. */
export function Carousel({ slides, breakpoints, navStyle, className, ariaLabel, gap = 0 }: CarouselProps) {
  const width = useViewportWidth();
  const setting = [...breakpoints].reverse().find((b) => width >= b.min) ?? breakpoints[0];
  const count = slides.length;
  const perView = Math.min(setting.items, count);

  // Render three copies so the track can loop in both directions.
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [hover, setHover] = useState(false);
  const drag = useRef<{ x: number; dx: number } | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);

  const go = useCallback((delta: number) => {
    setAnimate(true);
    setIndex((i) => i + delta);
  }, []);

  // After sliding into a cloned region, jump back to the middle copy without animation.
  const onTransitionEnd = () => {
    if (index < count || index >= count * 2) {
      setAnimate(false);
      setIndex(((index % count) + count) % count + count);
    }
  };

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  useEffect(() => {
    if (!setting.autoplay || hover) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_TIMEOUT);
    return () => window.clearInterval(id);
  }, [setting.autoplay, hover, go]);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, dx: 0 };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    drag.current.dx = e.clientX - drag.current.x;
    setDragOffset(drag.current.dx);
  };
  const onPointerUp = () => {
    if (!drag.current) return;
    const { dx } = drag.current;
    drag.current = null;
    setDragOffset(0);
    const itemWidth = (viewport.current?.clientWidth ?? 1) / perView;
    if (Math.abs(dx) > Math.min(60, itemWidth / 3)) go(dx < 0 ? Math.max(1, Math.round(-dx / itemWidth)) : -Math.max(1, Math.round(dx / itemWidth)));
  };

  const all = [...slides, ...slides, ...slides];
  const pct = 100 / perView;

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="overflow-hidden">
        <div ref={viewport} style={{ marginRight: -gap }}>
        <div
          className="flex touch-pan-y select-none"
          style={{
            transform: `translate3d(calc(${-index * pct}% + ${dragOffset}px), 0, 0)`,
            transition: animate && dragOffset === 0 ? `transform ${SPEED}ms ease` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDragStart={(e) => e.preventDefault()}
        >
          {all.map((slide, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `${pct}%`, paddingRight: gap }}
              // Off-screen copies stay out of the tab order and the accessibility tree.
              inert={i < index || i >= index + perView}
            >
              {slide}
            </div>
          ))}
        </div>
        </div>
      </div>

      {setting.nav && count > perView && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className={cn(
              navStyle === "round"
                ? "absolute top-1/2 -left-[87px] flex h-[67px] w-[70px] -translate-y-1/2 items-center justify-center rounded-[72px] bg-[#afd2db] text-[#14436e] transition-colors hover:bg-[#14436e] hover:text-white max-[1380px]:-left-[60px] max-[1380px]:h-[50px] max-[1380px]:w-[50px]"
                : "absolute top-1/2 left-[-86px] flex h-14 w-14 -translate-y-1/2 items-center justify-center text-[#4a4a4a] hover:text-[#FF6900] max-[1380px]:left-[-40px]",
            )}
          >
            <Chevron dir="left" className={navStyle === "round" ? "h-6 w-6" : "h-7 w-7"} />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className={cn(
              navStyle === "round"
                ? "absolute top-1/2 -right-[87px] flex h-[67px] w-[70px] -translate-y-1/2 items-center justify-center rounded-[72px] bg-[#afd2db] text-[#14436e] transition-colors hover:bg-[#14436e] hover:text-white max-[1380px]:-right-[60px] max-[1380px]:h-[50px] max-[1380px]:w-[50px]"
                : "absolute top-1/2 right-[-86px] flex h-14 w-14 -translate-y-1/2 items-center justify-center text-[#4a4a4a] hover:text-[#FF6900] max-[1380px]:right-[-40px]",
            )}
          >
            <Chevron dir="right" className={navStyle === "round" ? "h-6 w-6" : "h-7 w-7"} />
          </button>
        </>
      )}
    </div>
  );
}
