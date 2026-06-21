"use client";

import { ScrollReveal } from "./ScrollReveal";
import { profile } from "@/lib/data";
import Image from "next/image";
import { asset } from "@/lib/asset";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              O mnie
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={asset(profile.secondaryPhoto)}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-earth/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-6">
                Kim
                <br />
                <span className="earth-gradient">jestem?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-cream/60 text-base leading-relaxed mb-6">
                {profile.aboutDetailed}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "∞", label: "Pasja" },
                  { value: "∞", label: "Rozwój" },
                  { value: "∞", label: "Kursy" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-earth mb-1">
                      {stat.value}
                    </div>
                    <div className="text-cream/40 text-xs tracking-[0.2em] uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
