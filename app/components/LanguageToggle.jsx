"use client";

/**
 * Toggle between French and English UI copy.
 */
export default function LanguageToggle({ lang, onChange }) {
  const nextLang = lang === "fr" ? "en" : "fr";

  return (
    <div className="lang-switch">
      <button
        className={`lang-toggle ${lang === "en" ? "is-en" : "is-fr"}`}
        type="button"
        role="switch"
        aria-checked={lang === "en"}
        aria-label="Language toggle"
        title="Toggle language"
        onClick={() => onChange(nextLang)}
      >
        <span className={`flag-slot ${lang === "fr" ? "active" : ""}`}>
          <svg className="flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
            <rect width="8" height="16" fill="#0055A4" />
            <rect x="8" width="8" height="16" fill="#FFFFFF" />
            <rect x="16" width="8" height="16" fill="#EF4135" />
          </svg>
        </span>
        <span className={`flag-slot ${lang === "en" ? "active" : ""}`}>
          <svg className="flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
            <rect width="24" height="16" fill="#B22234" />
            <rect y="2" width="24" height="2" fill="#FFFFFF" />
            <rect y="6" width="24" height="2" fill="#FFFFFF" />
            <rect y="10" width="24" height="2" fill="#FFFFFF" />
            <rect y="14" width="24" height="2" fill="#FFFFFF" />
            <rect width="10" height="8" fill="#3C3B6E" />
            <circle cx="2" cy="2" r="0.6" fill="#FFFFFF" />
            <circle cx="4" cy="3.5" r="0.6" fill="#FFFFFF" />
            <circle cx="6" cy="2" r="0.6" fill="#FFFFFF" />
            <circle cx="8" cy="3.5" r="0.6" fill="#FFFFFF" />
            <circle cx="3" cy="5.5" r="0.6" fill="#FFFFFF" />
            <circle cx="5" cy="6.5" r="0.6" fill="#FFFFFF" />
            <circle cx="7" cy="5.5" r="0.6" fill="#FFFFFF" />
            <circle cx="9" cy="6.5" r="0.6" fill="#FFFFFF" />
          </svg>
        </span>
        <span className="toggle-thumb" aria-hidden="true" />
      </button>
    </div>
  );
}
