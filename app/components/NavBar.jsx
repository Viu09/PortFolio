"use client";

import LanguageToggle from "./LanguageToggle";

/**
 * Sticky navigation with section anchors and language switcher.
 */
export default function NavBar({
  profileName,
  navItems,
  activeSection,
  onSectionChange,
  lang,
  onLangChange
}) {
  return (
    <nav className="nav">
      <div className="logo">{profileName}</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => onSectionChange(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <LanguageToggle lang={lang} onChange={onLangChange} />
    </nav>
  );
}
