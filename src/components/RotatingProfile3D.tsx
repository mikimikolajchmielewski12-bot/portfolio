"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMouseTilt } from "@/hooks/useMouseTilt";

interface RotatingProfile3DProps {
  src: string;
  alt: string;
}

export function RotatingProfile3D({ src, alt }: RotatingProfile3DProps) {
  const { ref: tiltRef, tilt } = useMouseTilt();
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
      setRotation(progress * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const frontRotateY = rotation;
  const backRotateY = rotation + 180;

  return (
    <div ref={sectionRef} className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      <div
        ref={tiltRef}
        className="relative w-full h-full"
        style={{ perspective: "1200px" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${frontRotateY}deg)`,
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
            <div className="absolute inset-0 ring-2 ring-inset ring-earth/30 rounded-full" />
          </div>

          <div
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden"
            style={{
              transform: `rotateY(${backRotateY}deg)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-[10px] tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                    Polska
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-4 rounded-full border border-earth/10 pointer-events-none"
          style={{
            transform: `rotateX(${tilt.rotateX * 0.5}deg) rotateY(${tilt.rotateY * 0.5}deg) translateZ(-20px)`,
            transformStyle: "preserve-3d",
          }}
        />
        <div
          className="absolute -inset-8 rounded-full border border-earth/5 pointer-events-none"
          style={{
            transform: `rotateX(${tilt.rotateX * 0.3}deg) rotateY(${tilt.rotateY * 0.3}deg) translateZ(-40px)`,
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
}
