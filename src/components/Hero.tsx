"use client";

import { ProfileImage3D } from "./ProfileImage3D";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,152,136,0.1)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(248,239,228,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <ScrollReveal>
            <div className="inline-block mb-4">
              <span className="text-earth text-xs tracking-[0.3em] uppercase border border-earth/30 px-4 py-1.5 rounded-full">
                Portfolio
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} variant="zoomIn">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.9] tracking-[-0.02em] uppercase mb-4">
              <TextReveal text={profile.name.split(" ")[0]} delay={0.3} />
              <br />
              <span className="earth-gradient inline-block">
                <TextReveal text={profile.name.split(" ").slice(1).join(" ")} delay={0.6} />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-cream/50 text-lg md:text-xl tracking-[0.15em] uppercase mb-8">
              {profile.headline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-cream/40 text-base max-w-lg leading-relaxed mb-10 mx-auto md:mx-0">
              {profile.bio}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} variant="scaleIn">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <MagneticButton
                href="#contact"
                className="group relative px-8 py-3 bg-earth text-black text-sm tracking-[0.2em] uppercase font-semibold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,152,136,0.5)]"
              >
                <span className="relative z-10">Kontakt</span>
                <div className="absolute inset-0 bg-earth-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </MagneticButton>
              <MagneticButton
                href="#education"
                className="group relative px-8 py-3 border border-earth/30 text-cream text-sm tracking-[0.2em] uppercase overflow-hidden rounded-full transition-all duration-300 hover:border-earth/60"
              >
                <span className="relative z-10">Zobacz więcej</span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <ScrollReveal delay={0.3}>
            <ProfileImage3D src={asset(profile.avatar)} alt={profile.name} />
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-earth/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-earth rounded-full" />
        </div>
      </div>
    </section>
  );
}
