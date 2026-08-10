import { useEffect, useRef } from "react";

const REVEAL_STATE = {
  PENDING: "pending",
  VISIBLE: "visible",
} as const;

/**
 * Reveals descendants marked with [data-reveal] once they enter the viewport.
 * Falls back to showing everything when IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>("[data-reveal]");

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((target) => {
        target.dataset.reveal = REVEAL_STATE.VISIBLE;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.dataset.reveal = REVEAL_STATE.VISIBLE;
          target.classList.add("animate-fade-up");
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
