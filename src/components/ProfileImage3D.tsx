"use client";

import { useMouseTilt } from "@/hooks/useMouseTilt";
import Image from "next/image";

interface ProfileImage3DProps {
  src: string;
  alt: string;
}

export function ProfileImage3D({ src, alt }: ProfileImage3DProps) {
  const { ref, tilt } = useMouseTilt();

  return (
    <div
      ref={ref}
      className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_rgba(212,175,55,0.15)] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
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
      </div>

      <div
        className="absolute -inset-4 rounded-full border border-gold/10 pointer-events-none"
        style={{
          transform: `rotateX(${tilt.rotateX * 0.5}deg) rotateY(${tilt.rotateY * 0.5}deg) translateZ(-20px)`,
          transformStyle: "preserve-3d",
        }}
      />
      <div
        className="absolute -inset-8 rounded-full border border-gold/5 pointer-events-none"
        style={{
          transform: `rotateX(${tilt.rotateX * 0.3}deg) rotateY(${tilt.rotateY * 0.3}deg) translateZ(-40px)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
