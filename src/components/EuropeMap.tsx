"use client";

import { useMemo } from "react";

interface City {
  name: string;
  x: number;
  y: number;
  label: string;
  isHome?: boolean;
}

const cities: City[] = [
  { name: "chelm", x: 480, y: 345, label: "Chełm", isHome: true },
  { name: "krakow", x: 455, y: 360, label: "Kraków" },
  { name: "lublin", x: 470, y: 340, label: "Lublin" },
  { name: "almancil", x: 80, y: 450, label: "Almancil" },
  { name: "povoa", x: 90, y: 400, label: "Póvoa de Varzim" },
  { name: "sevilla", x: 70, y: 475, label: "Sewilla" },
  { name: "valsinni", x: 380, y: 480, label: "Valsinni" },
  { name: "brussels", x: 290, y: 290, label: "Bruksela" },
];

function StarField() {
  const stars = useMemo(() => {
    const arr: { x: number; y: number; r: number; opacity: number }[] = [];
    for (let i = 0; i < 120; i++) {
      arr.push({
        x: Math.random() * 800,
        y: Math.random() * 600,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    return arr;
  }, []);

  return (
    <>
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#f8efe4"
          opacity={s.opacity}
        />
      ))}
    </>
  );
}

export function EuropeMap() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="800" height="600" fill="#000" />

        <StarField />

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="landGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a2a1a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="400" rx="180" ry="120" fill="url(#landGlow)" />
        <ellipse cx="450" cy="350" rx="200" ry="180" fill="url(#landGlow)" />
        <ellipse cx="300" cy="300" rx="150" ry="100" fill="url(#landGlow)" />
        <ellipse cx="550" cy="400" rx="120" ry="100" fill="url(#landGlow)" />
        <ellipse cx="350" cy="480" rx="80" ry="60" fill="url(#landGlow)" />

        <path
          d="M70,420 Q100,380 140,380 Q170,360 200,360 Q240,340 280,320
             Q320,300 360,280 Q400,260 440,240 Q480,220 520,200
             Q540,200 540,220 Q540,240 520,260 Q500,280 480,300
             Q460,320 440,340 Q420,360 400,380 Q380,400 360,420
             Q340,440 320,460 Q300,480 280,480 Q260,480 240,460
             Q220,440 200,440 Q180,440 160,440 Q140,440 120,440
             Q100,440 90,440 Q80,440 70,420 Z"
          fill="#1a2a1a"
          opacity="0.5"
        />

        <path
          d="M380,480 Q400,460 420,440 Q440,420 460,420
             Q480,420 490,440 Q500,460 500,480 Q500,500 490,520
             Q480,540 460,550 Q440,560 420,550 Q400,540 390,520
             Q380,500 380,480 Z"
          fill="#1a2a1a"
          opacity="0.5"
        />

        {cities.map((city) => (
          <g key={city.name}>
            {city.isHome ? (
              <>
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={12}
                  fill="#C9BBA8"
                  opacity="0.15"
                  filter="url(#glowStrong)"
                />
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={6}
                  fill="#C9BBA8"
                  opacity="0.3"
                  filter="url(#glowStrong)"
                />
              </>
            ) : null}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.isHome ? 3 : 2.5}
              fill={city.isHome ? "#f8efe4" : "#A89888"}
              filter="url(#glow)"
            />
            <text
              x={city.x + 8}
              y={city.y + 4}
              fill="#f8efe4"
              opacity="0.7"
              fontSize="7"
              fontFamily="Antonio, sans-serif"
              letterSpacing="0.15em"
            >
              {city.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
