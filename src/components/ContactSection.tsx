"use client";

import { ScrollReveal } from "./ScrollReveal";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";
import { MagneticButton } from "./MagneticButton";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/[0.03] to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-earth/30" />
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Kontakt
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-earth/30" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="zoomIn">
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-6">
            Porozmawiajmy
            <br />
            <span className="earth-gradient">o współpracy</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-cream/40 text-base max-w-lg mx-auto mb-12">
            Masz pytanie, propozycję współpracy, a może chcesz dowiedzieć się więcej?
            Napisz do mnie — odpowiem najszybciej jak potrafię.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center gap-6">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="group relative px-10 py-4 bg-earth text-black text-sm tracking-[0.2em] uppercase font-semibold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,152,136,0.35)]"
            >
              <span className="relative z-10">Wyślij wiadomość</span>
              <div className="absolute inset-0 bg-earth-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <div className="flex items-center gap-6 mt-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-earth text-sm tracking-[0.2em] uppercase transition-colors relative group/link"
              >
                LinkedIn
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-earth transition-all duration-300 group-hover/link:w-full" />
              </a>
              <span className="text-cream/20">|</span>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-earth text-sm tracking-[0.2em] uppercase transition-colors relative group/link"
              >
                Instagram
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-earth transition-all duration-300 group-hover/link:w-full" />
              </a>
              <span className="text-cream/20">|</span>
              <a
                href={asset("/images/CV Mikołaj Chmielewski.pdf")}
                download
                className="text-cream/40 hover:text-earth text-sm tracking-[0.2em] uppercase transition-colors relative group/link"
              >
                Pobierz CV
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-earth transition-all duration-300 group-hover/link:w-full" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4} variant="fadeIn">
          <div className="mt-16 flex justify-center gap-6">
            <div className="w-8 h-8 rounded-full border border-earth/20 flex items-center justify-center animate-breathe">
              <div className="w-2 h-2 rounded-full bg-earth/40" />
            </div>
            <div className="w-8 h-8 rounded-full border border-earth/15 flex items-center justify-center animate-breathe" style={{ animationDelay: "1s" }}>
              <div className="w-2 h-2 rounded-full bg-earth/30" />
            </div>
            <div className="w-8 h-8 rounded-full border border-earth/10 flex items-center justify-center animate-breathe" style={{ animationDelay: "2s" }}>
              <div className="w-2 h-2 rounded-full bg-earth/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
