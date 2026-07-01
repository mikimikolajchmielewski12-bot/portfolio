"use client";

import { ScrollReveal } from "./ScrollReveal";
import { EuropeMap } from "./EuropeMap";
import { trips } from "@/lib/data";

function getFlagEmoji(country: string): string {
  const flags: Record<string, string> = {
    Portugalia: "🇵🇹",
    Hiszpania: "🇪🇸",
    Włochy: "🇮🇹",
    Polska: "🇵🇱",
    Belgia: "🇧🇪",
  };
  const match = Object.entries(flags).find(([key]) => country.includes(key));
  return match ? match[1] : "📍";
}

export function TripsSection() {
  return (
    <section id="trips" className="relative py-32 px-6 overflow-hidden">
      <EuropeMap />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Wyjazdy
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="slideLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Konferencje &amp;
            <br />
            <span className="earth-gradient">Wydarzenia</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trips.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 group hover:border-earth/30 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-earth/[0.02] group-hover:bg-earth/[0.04] transition-all duration-700 animate-spin-slow" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">{getFlagEmoji(item.location)}</span>
                    <div className="min-w-0">
                      <h3 className="text-lg text-cream tracking-[0.1em] uppercase leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-cream/40 text-[10px] tracking-[0.2em] uppercase mt-1">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-earth text-xs tracking-[0.2em] uppercase">
                      {item.date}
                    </span>
                  </div>
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
