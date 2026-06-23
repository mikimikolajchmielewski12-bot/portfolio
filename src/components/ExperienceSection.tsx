"use client";

import { ScrollReveal } from "./ScrollReveal";
import { IconBullet } from "./IconBullet";
import { MetricWidget } from "./MetricWidget";
import { experience } from "@/lib/data";

const experienceDetails: Record<number, { bullets: { icon: string; text: string }[]; metrics: { icon: string; value: string; label: string }[] }> = {
  1: {
    bullets: [
      { icon: "🎯", text: "Przewodniczenie komisji ds. promocji i social mediów MRM Chełm" },
      { icon: "🎯", text: "Członkostwo w komisji ds. świadomości cyfrowej i dobrostanu młodzieży" },
      { icon: "🤝", text: "Udział w I Prezydenckim Kongresie Rad Młodzieżowych" },
      { icon: "🤝", text: "Współpraca przy budowie krajowej strategii młodzieżowej" },
      { icon: "📊", text: "Koordynacja działań promocyjnych i komunikacji w mediach społecznościowych" },
    ],
    metrics: [
      { icon: "🏛️", value: "2", label: "Komisje" },
      { icon: "📅", value: "od 2024", label: "Staż" },
      { icon: "📱", value: "Social Media", label: "Obszar" },
    ],
  },
  2: {
    bullets: [
      { icon: "🎯", text: "Koordynacja międzynarodowych projektów młodzieżowych" },
      { icon: "🤝", text: "Organizacja wymian i wydarzeń międzynarodowych" },
      { icon: "🤝", text: "Współpraca z partnerami zagranicznymi przy projektach Erasmus+" },
    ],
    metrics: [
      { icon: "🌍", value: "Międzynarodowe", label: "Projekty" },
      { icon: "📅", value: "od 2025", label: "Staż" },
    ],
  },
  3: {
    bullets: [
      { icon: "🎯", text: "Lider projektu 'Zielone Łapki' – ekologia i ochrona zwierząt" },
      { icon: "🎯", text: "Lider projektu 'Buduj z nami przyszłość zwierząt'" },
      { icon: "🤝", text: "Zarządzanie zespołem i budowanie kampanii społecznych" },
      { icon: "📊", text: "Realizacja projektów w ramach ogólnopolskiej olimpiady 'Zwolnieni z Teorii'" },
    ],
    metrics: [
      { icon: "📦", value: "2", label: "Projekty" },
      { icon: "🏆", value: "Olimpiada", label: "Zwolnieni z Teorii" },
    ],
  },
  4: {
    bullets: [
      { icon: "🎯", text: "Udział w projektowaniu i urządzaniu ogrodów" },
      { icon: "🎯", text: "Dobór roślinności i realizacja nasadzeń" },
      { icon: "📊", text: "Płatny staż w firmie architektonicznej w ramach 'Czas na Zawodowców'" },
    ],
    metrics: [
      { icon: "💼", value: "Płatny", label: "Staż" },
      { icon: "📅", value: "1 miesiąc", label: "Sierpień 2025" },
    ],
  },
  5: {
    bullets: [
      { icon: "🎯", text: "Prowadzenie szkolnych profili w mediach społecznościowych" },
      { icon: "🎯", text: "Tworzenie treści promujących wydarzenia i osiągnięcia" },
      { icon: "🤝", text: "Wystąpienia w Erasmus Room podczas dni promocyjnych szkoły" },
      { icon: "📊", text: "Promocja działalności Erasmus+ i projektów międzynarodowych" },
    ],
    metrics: [
      { icon: "📱", value: "Profile szkolne", label: "Social Media" },
      { icon: "🎤", value: "Wystąpienia", label: "Erasmus Room" },
    ],
  },
  6: {
    bullets: [
      { icon: "🎯", text: "Współorganizacja 'Chełmskiego Dnia NGO'" },
      { icon: "🎯", text: "Organizacja ogólnopolskiego projektu 'Mały Mistrz' w Chełmie" },
      { icon: "🎯", text: "Współorganizacja VII Jagiełło Półmaratonu Chełmskiego" },
      { icon: "🎯", text: "Organizacja festynu 'Rodzinna Strefa Aktywności'" },
      { icon: "🎯", text: "Współorganizacja konferencji 'Projekt #Dorosłość' i 'Młodzi. Aktywni. Utalentowani'" },
      { icon: "🤝", text: "Koordynacja wolontariuszy i partnerów lokalnych" },
    ],
    metrics: [
      { icon: "🎪", value: "6+", label: "Wydarzeń" },
      { icon: "🏟️", value: "Lokalne", label: "i ogólnopolskie" },
    ],
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-earth text-xs tracking-[0.3em] uppercase">
              Doświadczenie
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="zoomIn">
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-[1.1] tracking-[-0.02em] uppercase mb-16">
            Moja
            <br />
            <span className="earth-gradient">Ścieżka</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-earth/40 via-earth/20 to-transparent -translate-x-1/2" />

          {experience.map((item, index) => {
            const details = experienceDetails[item.id];
            return (
              <ScrollReveal key={item.id} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1" />

                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-earth bg-black z-10" />

                  <div className="flex-1 pl-8 md:pl-0">
                    <div className="glass rounded-2xl p-8 hover:border-earth/30 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                            item.type === "work"
                              ? "bg-earth/20 text-earth"
                              : "bg-cream/10 text-cream/60"
                          }`}
                        >
                          {item.type === "work" ? "Praca" : "Wolontariat"}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl text-cream tracking-[0.1em] uppercase mb-1">
                        {item.position}
                      </h3>
                      <p className="text-earth/80 text-xs tracking-[0.15em] uppercase mb-1">
                        {item.company}
                      </p>
                      <p className="text-cream/30 text-[10px] tracking-[0.2em] uppercase mb-5">
                        {item.startDate} — {item.endDate}
                      </p>

                      {details && (
                        <>
                          <div className="space-y-2 mb-6">
                            {details.bullets.map((b, i) => (
                              <IconBullet key={i} icon={b.icon} text={b.text} />
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-3 pt-4 border-t border-earth/10">
                            {details.metrics.map((m, i) => (
                              <MetricWidget key={i} icon={m.icon} value={m.value} label={m.label} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
