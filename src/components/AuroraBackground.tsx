import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

import { THEME, themeStore } from "../stores/theme";
import { SoftAurora } from "./SoftAurora";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function AuroraBackground() {
  const theme = useStore(themeStore);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return null;

  const isDark = theme === THEME.DARK;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 opacity-35 transition-opacity duration-500 dark:opacity-60">
      <SoftAurora
        color1="#2dd4bf"
        color2="#0ea5e9"
        brightness={isDark ? 0.55 : 0.3}
        enableMouseInteraction
      />
    </div>
  );
}
