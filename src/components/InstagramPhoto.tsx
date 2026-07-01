"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/asset";

interface InstagramPhotoProps {
  src: string;
  className?: string;
  size?: number;
  delay?: number;
}

export function InstagramPhoto({ src, className = "", size = 120, delay = 0 }: InstagramPhotoProps) {
  return (
    <motion.div
      className={`absolute overflow-hidden rounded-xl border border-earth/20 shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ width: size, height: size }}
    >
      <Image
        src={asset(src)}
        alt="Instagram photo"
        fill
        className="object-cover"
        sizes="120px"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
    </motion.div>
  );
}
