"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight" | "zoomIn";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

export function ScrollReveal({ children, className, delay = 0, variant = "fadeUp" }: ScrollRevealProps) {
  const getAnim = () => {
    switch (variant) {
      case "fadeIn":
        return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
      case "scaleIn":
        return { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } };
      case "slideLeft":
        return { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 } };
      case "slideRight":
        return { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 } };
      case "zoomIn":
        return { initial: { opacity: 0, scale: 0.6, y: 40 }, whileInView: { opacity: 1, scale: 1, y: 0 } };
      default:
        return { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 } };
    }
  };

  const anim = getAnim();

  return (
    <motion.div
      initial={anim.initial}
      whileInView={anim.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
