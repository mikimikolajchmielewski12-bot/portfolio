"use client";

import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { profile, education, experience, trips } from "@/lib/data";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { AnimatedCounter } from "./AnimatedCounter";
import { ImageReveal } from "./ImageReveal";

const interests = [
  "Architektura",
  "Taternictwo",
  "Dyplomacja",
  "Social Media",
  "Biomechanika",
  "Zdrowy styl życia",
];

const stats = [
  { value: education.length, suffix: "", label: "Kursy i certyfikaty", icon: "🎓" },
  { value: experience.length, suffix: "", label: "Projekty społeczne", icon: "🤝" },
  { value: trips.length, suffix: "", label: "Wyjazdy zagraniczne", icon: "🌍" },
];

function AnimatedStat({ value, suffix, label, icon, delay }: { value: number; suffix: string; label: string; icon: string; delay: number }) {
  return (
    <ScrollReveal delay={delay} variant="scaleIn">
      <div className="text-center group">
        <div className="text-3xl md:text-4xl font-bold text-earth mb-1">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-base group-hover:scale-110 transition-transform duration-300">{icon}</span>
          <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">{label}</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function AboutSection() {
  const paragraphs = profile.aboutDetailed.split("\n\n").filter(Boolean);

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

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <ImageReveal className="rounded-2xl">
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
              </ImageReveal>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-earth/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-earth/10 rounded-full -z-10 animate-breathe" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-earth/5 rounded-full -z-10 animate-spin-slow" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.3} variant="slideLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-6">
                Kim
                <br />
                <span className="earth-gradient inline-block"><TextReveal text="jestem?" delay={0.4} /></span>
              </h2>
            </ScrollReveal>

            {paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.4 + i * 0.1}>
                <p className="text-cream/60 text-base leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              </ScrollReveal>
            ))}

            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={0.6 + i * 0.1} />
              ))}
            </div>

            <ScrollReveal delay={0.9} variant="fadeIn">
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-earth/10">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-earth/20 text-earth/70 hover:text-earth hover:border-earth/40 transition-all duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
