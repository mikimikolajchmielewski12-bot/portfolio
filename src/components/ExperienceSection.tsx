"use client";

import { ScrollReveal } from "./ScrollReveal";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Doświadczenie
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Moja
            <br />
            <span className="gold-gradient">Ścieżka</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent -translate-x-1/2" />

          {experience.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />

                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-gold bg-black z-10" />

                <div className="flex-1 pl-8 md:pl-0">
                  <div className="glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                          item.type === "work"
                            ? "bg-gold/20 text-gold"
                            : "bg-cream/10 text-cream/60"
                        }`}
                      >
                        {item.type === "work" ? "Praca" : "Wolontariat"}
                      </span>
                    </div>
                    <h3 className="text-xl text-cream tracking-[0.1em] uppercase mb-1">
                      {item.position}
                    </h3>
                    <p className="text-gold/80 text-xs tracking-[0.15em] uppercase mb-1">
                      {item.company}
                    </p>
                    <p className="text-cream/30 text-[10px] tracking-[0.2em] uppercase mb-3">
                      {item.startDate} — {item.endDate}
                    </p>
                    <p className="text-cream/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
