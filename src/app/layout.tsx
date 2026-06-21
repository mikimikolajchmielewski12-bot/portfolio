import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mikołaj Chmielewski | Premium Portfolio",
  description:
    "Portfolio Mikołaja Chmielewskiego – kursy, szkolenia, wyjazdy, osiągnięcia i rozwój.",
  openGraph: {
    title: "Mikołaj Chmielewski | Portfolio",
    description:
      "Premium portfolio – kursy, szkolenia, wyjazdy i osiągnięcia.",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
