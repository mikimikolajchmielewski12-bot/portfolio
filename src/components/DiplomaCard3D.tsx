"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DiplomaCard3DProps {
  title: string;
  institution: string;
  date: string;
  description: string;
  imageSrc: string;
  index: number;
  total: number;
  rotation: number;
}

export function DiplomaCard3D({
  title,
  institution,
  date,
  description,
  imageSrc,
  index,
  total,
  rotation,
}: DiplomaCard3DProps) {
  const angleOffset = (index / total) * 30 - 15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex-shrink-0 w-72 md:w-80"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        className="relative w-full transition-transform duration-100 ease-out"
        style={{
          transform: `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * (Math.PI / 180)) * 5}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 288px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-earth text-xs tracking-[0.2em] uppercase">
                {date}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-cream text-lg tracking-[0.1em] uppercase mb-1">
              {title}
            </h3>
            <p className="text-earth/80 text-xs tracking-[0.15em] uppercase mb-3">
              {institution}
            </p>
            <p className="text-cream/60 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="absolute top-0 left-0 w-full h-full rounded-2xl ring-1 ring-inset ring-earth/10 group-hover:ring-earth/30 transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
