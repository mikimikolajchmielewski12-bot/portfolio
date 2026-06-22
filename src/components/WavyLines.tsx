"use client";

import { useEffect, useRef } from "react";

export function WavyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const lines = Array.from({ length: 4 }, (_, i) => ({
      y: 0.2 + i * 0.2,
      amplitude: 30 + i * 20,
      frequency: 0.002 + i * 0.0005,
      speed: 0.3 + i * 0.15,
      phase: i * 1.5,
      color: `rgba(168, 152, 136, ${0.04 + i * 0.02})`,
      lineWidth: 1 + i * 0.5,
    }));

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const line of lines) {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.lineWidth;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height * line.y +
            Math.sin(x * line.frequency + time * line.speed + line.phase) *
              line.amplitude +
            Math.sin(x * line.frequency * 1.7 + time * line.speed * 0.6 + line.phase + 2) *
              line.amplitude * 0.4;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
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
