"use client";

/**
 * Lightweight SVG visuals used in project cards and detail headers.
 */
const visualMap = {
  terminal: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <rect x="8" y="12" width="104" height="56" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="12" width="104" height="14" rx="10" fill="currentColor" opacity="0.12" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <circle cx="30" cy="20" r="2.5" fill="currentColor" />
      <circle cx="40" cy="20" r="2.5" fill="currentColor" />
      <path d="M22 40 L34 46 L22 52" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="52" x2="62" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  library: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <rect x="18" y="16" width="18" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="42" y="12" width="22" height="56" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="70" y="20" width="18" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="26" x2="32" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="24" x2="60" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="74" y1="30" x2="84" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <rect x="18" y="18" width="36" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="44" width="36" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="68" y="30" width="34" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="54" y1="27" x2="68" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="54" y1="53" x2="68" y2="44" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="27" r="2" fill="currentColor" />
      <circle cx="28" cy="53" r="2" fill="currentColor" />
    </svg>
  ),
  engine: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <circle cx="60" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="56" y="16" width="8" height="8" fill="currentColor" />
      <rect x="56" y="56" width="8" height="8" fill="currentColor" />
      <rect x="34" y="36" width="8" height="8" fill="currentColor" />
      <rect x="78" y="36" width="8" height="8" fill="currentColor" />
    </svg>
  ),
  neural: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <circle cx="24" cy="22" r="5" fill="currentColor" />
      <circle cx="24" cy="58" r="5" fill="currentColor" />
      <circle cx="60" cy="40" r="6" fill="currentColor" />
      <circle cx="96" cy="22" r="5" fill="currentColor" />
      <circle cx="96" cy="58" r="5" fill="currentColor" />
      <line x1="29" y1="22" x2="54" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="58" x2="54" y2="44" stroke="currentColor" strokeWidth="2" />
      <line x1="66" y1="36" x2="91" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="66" y1="44" x2="91" y2="58" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  api: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <path d="M40 26 L26 40 L40 54" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 26 L94 40 L80 54" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="40" r="6" fill="currentColor" />
    </svg>
  ),
  dashboard: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <rect x="14" y="16" width="92" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="24" y="28" width="18" height="24" rx="4" fill="currentColor" opacity="0.2" />
      <rect x="48" y="36" width="16" height="16" rx="4" fill="currentColor" opacity="0.3" />
      <rect x="70" y="30" width="24" height="22" rx="4" fill="currentColor" opacity="0.18" />
    </svg>
  ),
  cicd: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <circle cx="24" cy="40" r="6" fill="currentColor" />
      <circle cx="60" cy="24" r="6" fill="currentColor" />
      <circle cx="60" cy="56" r="6" fill="currentColor" />
      <circle cx="96" cy="40" r="6" fill="currentColor" />
      <line x1="30" y1="40" x2="54" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="40" x2="54" y2="52" stroke="currentColor" strokeWidth="2" />
      <line x1="66" y1="28" x2="90" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="66" y1="52" x2="90" y2="40" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  tdd: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <rect x="20" y="18" width="80" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M32 34 L38 40 L48 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="34" x2="86" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 50 L38 56 L48 46" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  security: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <path d="M60 14 L90 24 V44 C90 56 78 66 60 70 C42 66 30 56 30 44 V24 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M52 42 L58 48 L70 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  default: (
    <svg className="project-illustration" viewBox="0 0 120 80" aria-hidden="true">
      <circle cx="60" cy="40" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="40" r="6" fill="currentColor" />
    </svg>
  )
};

export default function ProjectVisual({ type, className }) {
  return (
    <div className={`card-visual ${className || ""}`}>
      <div className="visual-frame">{visualMap[type] || visualMap.default}</div>
    </div>
  );
}
