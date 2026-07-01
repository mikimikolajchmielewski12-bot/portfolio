"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className = "", delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-earth/20"
        initial={{ x: "0%" }}
        animate={isInView ? { x: "100%" } : {}}
        transition={{ duration: 1.2, delay: delay + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
