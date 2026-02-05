"use client";

/**
 * Compact SVG set for skill badges (monoline, consistent style).
 */
const icons = {
  c: (
    <svg className="skill-svg" viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="24,4 40,14 40,34 24,44 8,34 8,14" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="24" y="30" textAnchor="middle" fontSize="16" fontFamily="Space Grotesk" fill="currentColor">C</text>
    </svg>
  ),
  cpp: (
    <svg className="skill-svg" viewBox="0 0 64 48" aria-hidden="true">
      <polygon points="24,4 40,14 40,34 24,44 8,34 8,14" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="24" y="30" textAnchor="middle" fontSize="16" fontFamily="Space Grotesk" fill="currentColor">C++</text>
    </svg>
  ),
  bash: (
    <svg className="skill-svg" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 22 L22 26 L16 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  python: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 26 C18 18 24 14 32 14 H40 C46 14 50 18 50 24 V32 H28 C22 32 18 28 18 26 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M46 38 C46 46 40 50 32 50 H24 C18 50 14 46 14 40 V32 H36 C42 32 46 36 46 38 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="20" r="2" fill="currentColor" />
      <circle cx="36" cy="44" r="2" fill="currentColor" />
    </svg>
  ),
  haskell: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 14 L28 32 L8 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 14 L52 32 L32 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="32" r="3" fill="currentColor" />
    </svg>
  ),
  react: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 32 32)" />
    </svg>
  ),
  vue: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 14 L32 46 L52 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M20 14 L32 36 L44 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  ),
  quasar: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M38 38 L48 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  flutter: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <polygon points="12,32 32,12 52,12 32,32" fill="none" stroke="currentColor" strokeWidth="4" />
      <polygon points="12,52 32,32 52,32 32,52" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  ),
  nextjs: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M24 42 V22 L40 42 V22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  github: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M24 40 C22 44 18 44 18 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 40 C42 44 46 44 46 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 26 L28 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 26 L36 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  jenkins: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="28" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="22" y="40" width="20" height="10" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="26" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="3" />
      <line x1="26" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="3" />
    </svg>
  ),
  kubernetes: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <line x1="32" y1="14" x2="32" y2="24" stroke="currentColor" strokeWidth="3" />
      <line x1="32" y1="40" x2="32" y2="50" stroke="currentColor" strokeWidth="3" />
      <line x1="14" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="3" />
      <line x1="40" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="3" />
      <line x1="20" y1="20" x2="26" y2="26" stroke="currentColor" strokeWidth="3" />
      <line x1="38" y1="38" x2="44" y2="44" stroke="currentColor" strokeWidth="3" />
      <line x1="20" y1="44" x2="26" y2="38" stroke="currentColor" strokeWidth="3" />
      <line x1="38" y1="26" x2="44" y2="20" stroke="currentColor" strokeWidth="3" />
    </svg>
  ),
  "unit-tests": (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="16" width="36" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M22 32 L28 38 L40 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  cybersec: (
    <svg className="skill-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10 L50 18 V32 C50 42 42 50 32 54 C22 50 14 42 14 32 V18 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M26 32 L30 36 L40 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
};

export default function SkillIcon({ name, label }) {
  if (icons[name]) {
    return icons[name];
  }

  return (
    <span className="skill-text" aria-hidden="true">
      {(label || name || "?").slice(0, 2).toUpperCase()}
    </span>
  );
}
