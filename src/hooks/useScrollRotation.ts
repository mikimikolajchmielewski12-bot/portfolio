"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollRotation() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + elementHeight))
      );

      setRotation(progress * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, rotation };
}
