interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle";
}

export function SectionDivider({ variant = "wave" }: SectionDividerProps) {
  if (variant === "curve") {
    return (
      <div className="relative h-24 -mt-12 -mb-12 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-24"
        >
          <path
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
            fill="url(#curveGrad)"
            opacity="0.03"
          />
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A89888" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className="relative h-20 -mt-10 -mb-10 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-20"
        >
          <polygon
            points="0,80 1440,0 1440,80"
            fill="url(#angleGrad)"
            opacity="0.04"
          />
          <defs>
            <linearGradient id="angleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A89888" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-24 -mt-12 -mb-12 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-24"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#A89888" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#C9BBA8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M0,30 C240,80 480,0 720,40 C960,80 1200,10 1440,50 L1440,100 L0,100 Z"
          fill="url(#waveGrad)"
          opacity="0.03"
        />
        <path
          d="M0,50 C240,90 480,20 720,60 C960,100 1200,30 1440,70 L1440,100 L0,100 Z"
          fill="url(#waveGrad2)"
          opacity="0.02"
        />
      </svg>
    </div>
  );
}
