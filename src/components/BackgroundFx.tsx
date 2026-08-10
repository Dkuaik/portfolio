import { useEffect, useRef } from "react";

/**
 * Decorative background: grid + accent aurora + a glow that follows the pointer.
 * The pointer glow writes CSS custom properties directly on the node so moving
 * the mouse never triggers a React re-render.
 */
export function BackgroundFx() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = spotlightRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--mx", `${event.clientX}px`);
        node.style.setProperty("--my", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="fx-grid absolute inset-0 text-zinc-400 dark:text-zinc-700" />
      <div className="fx-aurora absolute inset-x-0 top-0 h-[70vh]" />
      <div ref={spotlightRef} className="fx-spotlight absolute inset-0" />
    </div>
  );
}
