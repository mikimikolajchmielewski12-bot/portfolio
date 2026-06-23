"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { education } from "@/lib/data";

interface DiplomaGalleryProps {
  open: boolean;
  onClose: () => void;
}

export function DiplomaGallery({ open, onClose }: DiplomaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const diplomas = education.filter((e) => e.diplomaImage);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % diplomas.length);
  }, [diplomas.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + diplomas.length) % diplomas.length);
  }, [diplomas.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  if (!diplomas.length) return null;

  const current = diplomas[currentIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
          onClick={onClose}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-cream/60 hover:text-cream text-lg z-10"
              aria-label="Zamknij"
            >
              ✕
            </button>

            <div className="relative w-full aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={asset(current.diplomaImage)}
                alt={current.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-cream text-sm tracking-[0.1em] uppercase">
                {current.title}
              </p>
              <p className="text-cream/40 text-xs tracking-[0.15em] uppercase mt-1">
                {current.institution} &middot; {current.date}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={prev}
                className="text-cream/40 hover:text-earth text-sm tracking-[0.2em] uppercase transition-colors"
              >
                ← Poprzedni
              </button>
              <span className="text-cream/20 text-xs">
                {currentIndex + 1} / {diplomas.length}
              </span>
              <button
                onClick={next}
                className="text-cream/40 hover:text-earth text-sm tracking-[0.2em] uppercase transition-colors"
              >
                Następny →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
