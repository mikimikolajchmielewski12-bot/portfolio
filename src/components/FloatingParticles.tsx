"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "diamond" | "line";
  driftX: number;
}

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollYRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

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

    const count = Math.min(25, Math.floor((window.innerWidth * window.innerHeight) / 40000));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1.5 + Math.random() * 3,
      speed: 0.15 + Math.random() * 0.35,
      opacity: 0.08 + Math.random() * 0.15,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      type: (["circle", "diamond", "line"] as const)[Math.floor(Math.random() * 3)],
      driftX: (Math.random() - 0.5) * 0.3,
    }));

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    const handleMouse = (e: MouseEvent) => {
      mouseXRef.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseYRef.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scroll = scrollYRef.current;
      const mx = mouseXRef.current;
      const my = mouseYRef.current;

      for (const p of particlesRef.current) {
        const scrollOffset = scroll * 0.05;
        const mouseOffsetX = mx * 20;
        const mouseOffsetY = my * 15;

        p.y -= p.speed;
        p.x += p.driftX + Math.sin(scroll * 0.001 + p.y * 0.01) * 0.2;
        p.rotation += p.rotationSpeed;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        const drawX = p.x + mouseOffsetX * (p.size / 4);
        const drawY = p.y + scrollOffset + mouseOffsetY * (p.size / 4);

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = "#A89888";
        ctx.lineWidth = 0.8;

        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.type === "diamond") {
          const s = p.size * 1.2;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s, 0);
          ctx.closePath();
          ctx.stroke();
        } else {
          const l = p.size * 2;
          ctx.beginPath();
          ctx.moveTo(-l, 0);
          ctx.lineTo(l, 0);
          ctx.stroke();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
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
