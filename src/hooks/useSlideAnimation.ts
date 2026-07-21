import { useEffect, useState } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";

/**
 * Slide entrance animation controller.
 * Animations run once per slide visit, then the slide becomes static.
 */
export function useSlideAnimation(slideKey: string | number) {
  const [ready, setReady] = useState(true);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setReady(false);
    setComplete(false);

    const start = requestAnimationFrame(() => setReady(true));
    const done = window.setTimeout(() => {
      setComplete(true);
    }, pitchDeckConfig.animation.totalEntranceMs);

    return () => {
      cancelAnimationFrame(start);
      window.clearTimeout(done);
    };
  }, [slideKey]);

  return { ready, complete, animClass: ready ? "anim-enter" : "" };
}

export function delayClass(index: number): string {
  const n = Math.min(Math.max(index, 1), 10);
  return `anim-delay-${n}`;
}
