"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  institution: string;
  date: string;
  description: string;
  imageSrc: string;
  index: number;
  type: "course" | "education";
}

export function CourseCard({
  title,
  institution,
  date,
  description,
  imageSrc,
  index,
  type,
}: CourseCardProps) {
  const isSchool = type === "education";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`glass rounded-2xl overflow-hidden group h-full transition-all duration-500 hover:border-earth/30 ${isSchool ? 'ring-1 ring-earth/20' : ''}`}>
        <div className="relative h-44 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                isSchool
                  ? "bg-earth/30 text-cream border border-earth/40"
                  : "bg-cream/10 text-cream/70 border border-cream/20"
              }`}
            >
              {isSchool ? "Edukacja formalna" : "Kurs"}
            </span>
          </div>
          <div className="absolute bottom-3 left-4">
            <span className="text-earth text-xs tracking-[0.2em] uppercase">{date}</span>
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
    </motion.div>
  );
}
