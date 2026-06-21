"use client";

import { ScrollReveal } from "./ScrollReveal";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/30" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Kontakt
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-6">
            Porozmawiajmy
            <br />
            <span className="gold-gradient">o współpracy</span>
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
            <a
              href={`mailto:${profile.email}`}
              className="group relative px-10 py-4 bg-gold text-black text-sm tracking-[0.2em] uppercase font-semibold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <span className="relative z-10">Wyślij wiadomość</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="flex items-center gap-6 mt-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-cream/20">|</span>
              <a
                href={asset("/images/CV Mikołaj Chmielewski.pdf")}
                download
                className="text-cream/40 hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors"
              >
                Pobierz CV
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
