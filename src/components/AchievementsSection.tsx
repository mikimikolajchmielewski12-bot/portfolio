"use client";

import { ScrollReveal } from "./ScrollReveal";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Osiągnięcia
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="scaleIn">
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Moje
            <br />
            <span className="earth-gradient">Osiągnięcia</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="glass rounded-2xl p-8 group hover:border-earth/30 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute inset-0 aurora-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">
                    {item.icon}
                  </div>
                  <span className="text-earth/60 text-[10px] tracking-[0.2em] uppercase">
                    {item.date}
                  </span>
                  <h3 className="text-lg text-cream tracking-[0.1em] uppercase mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
