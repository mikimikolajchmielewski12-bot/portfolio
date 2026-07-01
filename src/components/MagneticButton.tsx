"use client";

import { useRef, useState, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: pos.x === 0 && pos.y === 0 ? "transform 0.4s ease-out" : "transform 0.1s ease-out",
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={style}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as unknown as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
}
