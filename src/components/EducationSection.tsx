"use client";

import { useScrollRotation } from "@/hooks/useScrollRotation";
import { DiplomaCard3D } from "./DiplomaCard3D";
import { ScrollReveal } from "./ScrollReveal";
import { education } from "@/lib/data";

export function EducationSection() {
  const { ref, rotation } = useScrollRotation();

  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Edukacja
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Kursy &amp;
            <br />
            <span className="gold-gradient">Szkolenia</span>
          </h2>
        </ScrollReveal>

        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none -mx-6 px-6">
          {education.map((item, index) => (
            <div key={item.id} className="snap-start">
              <DiplomaCard3D
                title={item.title}
                institution={item.institution}
                date={item.date}
                description={item.description}
                imageSrc={item.diplomaImage}
                index={index}
                total={education.length}
                rotation={rotation}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
            {education.length} pozycji &middot; Przewiń w dół aby zobaczyć więcej
          </p>
        </div>
      </div>
    </section>
  );
}
