import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={asset("/images/LOGO M.CH. BIAŁE.png")}
            alt="M.CH."
            width={24}
            height={24}
            className="object-contain brightness-0 invert opacity-50"
          />
          <span className="text-cream/30 text-xs tracking-[0.2em] uppercase">
            Mikołaj Chmielewski
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/miko%C5%82aj-chmielewski-aa18a82b3"
            target="_blank"
            className="text-cream/30 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors"
          >
            LinkedIn
          </Link>
          <a
            href={asset("/images/CV Mikołaj Chmielewski.pdf")}
            download
            className="text-cream/30 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors"
          >
            CV
          </a>
        </div>

        <p className="text-cream/20 text-[10px] tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}
