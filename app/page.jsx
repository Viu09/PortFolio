"use client";

import { useEffect, useMemo, useState } from "react";
import { content, profile } from "./content";
import AmbientBackground from "./components/AmbientBackground";
import NavBar from "./components/NavBar";
import { useLang } from "./hooks/useLang";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";

export default function Home() {
  const { lang, setLang } = useLang("fr");
  const copy = content[lang];
  const navItems = useMemo(
    () => [
      { id: "about", label: copy.nav.about },
      { id: "projects", label: copy.nav.projects },
      { id: "skills", label: copy.nav.skills },
      { id: "contact", label: copy.nav.contact }
    ],
    [copy.nav.about, copy.nav.projects, copy.nav.skills, copy.nav.contact]
  );
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    let ticking = false;

    const updateActive = () => {
      const offset = 140;
      const scrollPosition = window.scrollY + offset;
      let currentId = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id;
        }
      });

      // Ensure the last item is active when reaching the page bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentId);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return (
    <main className="page">
      <AmbientBackground />
      <NavBar
        profileName={profile.name}
        navItems={navItems}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        lang={lang}
        onLangChange={setLang}
      />

      <HeroSection profile={profile} copy={copy} />
      <AboutSection copy={copy} />
      <ProjectsSection copy={copy} lang={lang} />
      <SkillsSection copy={copy} />
      <ServicesSection copy={copy} />
      <ContactSection copy={copy} profile={profile} />
    </main>
  );
}
