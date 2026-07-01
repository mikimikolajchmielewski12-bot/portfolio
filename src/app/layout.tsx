import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { WavyLines } from "@/components/WavyLines";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GridBackground } from "@/components/GridBackground";
import { NoiseTexture } from "@/components/NoiseTexture";

export const metadata: Metadata = {
  title: "Mikołaj Chmielewski | Portfolio",
  description:
    "Portfolio Mikołaja Chmielewskiego – kursy, szkolenia, wyjazdy, osiągnięcia i rozwój.",
  openGraph: {
    title: "Mikołaj Chmielewski Portfolio",
    description:
      "Portfolio Mikołaja Chmielewskiego – kursy, szkolenia, wyjazdy, osiągnięcia i rozwój.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="bg-black text-cream font-antonio antialiased">
        <ScrollProgress />
        <FloatingParticles />
        <GridBackground />
        <NoiseTexture />
        <Navigation />
        <main className="relative">
          <WavyLines />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
