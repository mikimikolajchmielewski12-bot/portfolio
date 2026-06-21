import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { TripsSection } from "@/components/TripsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <TripsSection />
      <ContactSection />
    </>
  );
}
