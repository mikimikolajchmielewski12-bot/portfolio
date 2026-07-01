import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { TripsSection } from "@/components/TripsSection";
import { ContactSection } from "@/components/ContactSection";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="curve" />
      <AboutSection />
      <SectionDivider variant="wave" />
      <EducationSection />
      <SectionDivider variant="angle" />
      <ExperienceSection />
      <SectionDivider variant="wave" />
      <AchievementsSection />
      <SectionDivider variant="curve" />
      <TripsSection />
      <SectionDivider variant="angle" />
      <ContactSection />
    </>
  );
}
