"use client";

import { useEffect, useRef, useState } from "react";

interface Tilt {
  rotateX: number;
  rotateY: number;
}

export function useMouseTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<Tilt>({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateY = (mouseX / (rect.width / 2)) * 10;
      const rotateX = -(mouseY / (rect.height / 2)) * 10;

      setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, tilt };
}
