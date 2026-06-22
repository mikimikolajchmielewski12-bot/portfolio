"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "168, 152, 136",
  "201, 187, 168",
  "214, 201, 184",
  "184, 169, 150",
];

export function WavyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * 1.2 - 0.1,
      y: Math.random() * 1.2 - 0.1,
      radius: 0.2 + Math.random() * 0.3,
      color: COLORS[i % COLORS.length],
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: (Math.random() - 0.5) * 0.002,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const blob of blobs) {
        const cx =
          canvas.width * blob.x +
          Math.sin(time * blob.speedX + blob.phaseX) * canvas.width * 0.05;
        const cy =
          canvas.height * blob.y +
          Math.cos(time * blob.speedY + blob.phaseY) * canvas.height * 0.05;
        const r = canvas.width * blob.radius;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `rgba(${blob.color}, 0.12)`);
        gradient.addColorStop(0.4, `rgba(${blob.color}, 0.06)`);
        gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
