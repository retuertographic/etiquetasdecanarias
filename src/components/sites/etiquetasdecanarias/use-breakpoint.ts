"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

/** Returns the viewport width (falls back to a desktop width during SSR). */
export function useViewportWidth(serverWidth = 1440) {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => serverWidth,
  );
}
