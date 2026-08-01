'use client';

export function OatzyPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`${className ?? ''} placeholder-art placeholder-art--oatzy`} role="img" aria-label="Oatzy Foods — visual coming soon">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="oatzyBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a2b1c" />
            <stop offset="100%" stopColor="#1c140c" />
          </linearGradient>
          <linearGradient id="oatzyPouch" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8d9c0" />
            <stop offset="55%" stopColor="#c9a56a" />
            <stop offset="100%" stopColor="#8a5a2b" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#oatzyBg)" />
        {Array.from({ length: 60 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 37) % 400}
            cy={(i * 53) % 300}
            r={i % 3 === 0 ? 2.4 : 1.4}
            fill="#d4a24c"
            opacity={0.18}
          />
        ))}
        <path d="M150 60 Q140 40 200 40 Q260 40 250 60 L262 250 Q260 268 200 268 Q140 268 138 250 Z" fill="url(#oatzyPouch)" stroke="#3a2b1c" strokeWidth="2" />
        <rect x="150" y="120" width="100" height="60" rx="8" fill="#f6ede0" opacity="0.92" />
        <text x="200" y="155" textAnchor="middle" fontSize="15" fontWeight="700" fill="#3a2b1c" fontFamily="Inter, sans-serif">OATZY</text>
      </svg>
      <div className="placeholder-art__caption">
        <strong>Oatzy Foods</strong>
        <span>3D e-commerce experience</span>
      </div>
    </div>
  );
}

export function Studio8Placeholder({ className }: { className?: string }) {
  return (
    <div className={`${className ?? ''} placeholder-art placeholder-art--studio8`} role="img" aria-label="Studio 8 Pilates — visual coming soon">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="studioBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#efe3dc" />
            <stop offset="100%" stopColor="#e3cdc6" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#studioBg)" />
        <g stroke="#8a5a63" strokeWidth="2.4" fill="none" opacity="0.85">
          <rect x="60" y="150" width="280" height="26" rx="6" />
          <rect x="80" y="120" width="70" height="30" rx="4" />
          <line x1="90" y1="150" x2="90" y2="230" />
          <line x1="310" y1="150" x2="310" y2="230" />
          <line x1="150" y1="120" x2="150" y2="80" />
          <line x1="80" y1="80" x2="150" y2="80" />
          <line x1="80" y1="80" x2="80" y2="120" />
          <circle cx="115" cy="70" r="6" />
          <circle cx="140" cy="70" r="6" />
        </g>
        <text x="200" y="255" textAnchor="middle" fontSize="14" letterSpacing="2" fill="#7a4a52" fontFamily="Inter, sans-serif">REFORMER</text>
      </svg>
      <div className="placeholder-art__caption placeholder-art__caption--dark">
        <strong>Studio 8 Pilates</strong>
        <span>Pilates studio experience</span>
      </div>
    </div>
  );
}
