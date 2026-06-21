"use client";

import { ScrollReveal } from "./ScrollReveal";
import { trips } from "@/lib/data";
import Image from "next/image";
import { asset } from "@/lib/asset";

export function TripsSection() {
  return (
    <section id="trips" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Wyjazdy
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Konferencje &amp;
            <br />
            <span className="earth-gradient">Wydarzenia</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trips.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="glass rounded-2xl overflow-hidden group hover:border-earth/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={asset(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-earth text-xs tracking-[0.2em] uppercase">
                      {item.date}
                    </span>
                    <p className="text-cream/50 text-[10px] tracking-[0.2em] uppercase">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-cream tracking-[0.1em] uppercase mb-2">
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
