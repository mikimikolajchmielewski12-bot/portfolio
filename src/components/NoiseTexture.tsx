export function NoiseTexture() {
  return (
    <svg className="fixed inset-0 pointer-events-none z-[2] w-full h-full opacity-[0.015]" aria-hidden="true">
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
