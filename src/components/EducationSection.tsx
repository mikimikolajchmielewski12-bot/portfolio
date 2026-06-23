"use client";

import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { DiplomaGallery } from "./DiplomaGallery";
import { ScrollReveal } from "./ScrollReveal";
import { education } from "@/lib/data";
import { asset } from "@/lib/asset";

export function EducationSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Edukacja
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="slideRight">
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Kursy &amp;
            <br />
            <span className="earth-gradient">Szkolenia</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <CourseCard
              key={item.id}
              title={item.title}
              institution={item.institution}
              date={item.date}
              description={item.description}
              imageSrc={asset(item.diplomaImage)}
              index={index}
              type={item.type}
            />
          ))}
        </div>

        <ScrollReveal delay={0.3} variant="zoomIn">
          <div className="mt-12 text-center">
            <button
              onClick={() => setGalleryOpen(true)}
              className="group relative px-8 py-3 border border-earth/30 text-cream text-sm tracking-[0.2em] uppercase overflow-hidden rounded-full transition-all duration-300 hover:border-earth/60 hover:scale-105"
            >
              <span className="relative z-10">Zobacz dyplomy →</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      <DiplomaGallery open={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </section>
  );
}
