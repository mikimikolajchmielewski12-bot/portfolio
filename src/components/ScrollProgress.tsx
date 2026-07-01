"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-earth-light via-earth to-earth-dark transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
      <div
        className="h-full w-full absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-cream/20 to-transparent"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
