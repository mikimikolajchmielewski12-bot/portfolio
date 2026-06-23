"use client";

interface IconBulletProps {
  icon: string;
  text: string;
}

export function IconBullet({ icon, text }: IconBulletProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-earth text-base flex-shrink-0 mt-0.5">{icon}</span>
      <span className="text-cream/50 text-sm leading-relaxed">{text}</span>
    </div>
  );
}
