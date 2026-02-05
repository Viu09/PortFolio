"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { content, profile } from "../../content";
import AmbientBackground from "../../components/AmbientBackground";
import LanguageToggle from "../../components/LanguageToggle";
import ProjectVisual from "../../components/ProjectVisual";
import { useLang } from "../../hooks/useLang";
import { findProject, flattenProjects } from "../../lib/projects";

/**
 * Placeholder for the future project video embed.
 */
function VideoPlaceholder() {
  return (
    <div className="video-placeholder">
      <svg className="video-icon" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="16" width="44" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="30,26 30,38 42,32" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const paramLang = searchParams.get("lang");
  const { lang, setLang } = useLang("fr", paramLang);
  const copy = content[lang];
  const routeParams = useParams();
  const rawSlug = routeParams?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const result = useMemo(() => {
    if (!slug) return null;
    return findProject(copy, slug);
  }, [copy, slug]);

  const projectList = useMemo(() => flattenProjects(copy), [copy]);

  const index = projectList.findIndex((item) => item.slug === slug);
  const prevProject = index > 0 ? projectList[index - 1] : null;
  const nextProject = index >= 0 && index < projectList.length - 1 ? projectList[index + 1] : null;

  if (!result) {
    return (
      <main className="page project-page">
        <AmbientBackground />
        <nav className="nav">
          <div className="logo">{profile.name}</div>
          <div className="nav-links">
            <Link href="/#projects">{copy.projectPage.back}</Link>
          </div>
          <LanguageToggle lang={lang} onChange={setLang} />
        </nav>
        <section className="section">
          <div className="section-header">
            <p className="kicker">{copy.projectPage.overview}</p>
            <h2>{copy.projectPage.notFoundTitle}</h2>
          </div>
          <div className="copy-grid">
            <div className="copy-card">
              <p className="card-desc">{copy.projectPage.notFoundBody}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const { project, group } = result;

  return (
    <main className="page project-page">
      <AmbientBackground />

      <nav className="nav">
        <div className="logo">{profile.name}</div>
        <div className="nav-links">
          <Link href="/#projects">{copy.projectPage.back}</Link>
        </div>
        <LanguageToggle lang={lang} onChange={setLang} />
      </nav>

      <div className="project-subnav">
        <a href="#overview">{copy.projectPage.toc.overview}</a>
        <a href="#case-study">{copy.projectPage.toc.caseStudy}</a>
        <a href="#documentation">{copy.projectPage.toc.documentation}</a>
        <a href="#video">{copy.projectPage.toc.video}</a>
        <a href="#resources">{copy.projectPage.toc.resources}</a>
      </div>

      <section className="section project-hero" id="overview">
        <div className="project-hero-grid">
          <div className="project-hero-main">
            <div className="section-header">
              <p className="kicker">{copy.projectPage.overview}</p>
              <h2>{project.title}</h2>
            </div>
            <p className="card-subtitle">{project.subtitle}</p>
            <p className="card-desc">{project.description}</p>
            <div className="card-meta">
              <p className="meta-label">{copy.projectPage.category}</p>
              <div className="meta-list">
                <span className="meta-item">{group.title}</span>
                {group.intro ? <span className="meta-item">{group.intro}</span> : null}
              </div>
            </div>
            <div className="card-actions">
              <a className="card-action primary" href={project.link} target="_blank" rel="noreferrer">
                {copy.projectPage.code}
              </a>
            </div>
          </div>
          <div className="project-hero-aside">
            <ProjectVisual type={project.visual} className="project-visual-large" />
            <div className="copy-card project-aside-card">
              <p className="meta-label">{copy.projectPage.stack}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-body" id="case-study">
        <div className="section-header">
          <p className="kicker">{copy.projectPage.caseStudy.title}</p>
          <h2>{copy.projectPage.caseStudy.title}</h2>
        </div>
        <div className="project-body-grid">
          {copy.projectPage.caseStudy.items.map((item) => (
            <div className="copy-card" key={item.key}>
              <p className="meta-label">{item.label}</p>
              <p className="card-desc">{copy.projectPage.caseStudy.placeholder}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="documentation">
        <div className="section-header">
          <p className="kicker">{copy.projectPage.documentation}</p>
          <h2>{copy.projectPage.documentation}</h2>
        </div>
        <div className="copy-grid">
          <div className="copy-card">
            <p className="card-desc">{copy.projectPage.comingSoon}</p>
          </div>
        </div>
      </section>

      <section className="section" id="video">
        <div className="section-header">
          <p className="kicker">{copy.projectPage.video}</p>
          <h2>{copy.projectPage.video}</h2>
        </div>
        <div className="copy-grid">
          <div className="copy-card">
            <VideoPlaceholder />
            <p className="card-desc">{copy.projectPage.comingSoon}</p>
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="section-header">
          <p className="kicker">{copy.projectPage.resources}</p>
          <h2>{copy.projectPage.resources}</h2>
        </div>
        <div className="copy-grid">
          <div className="copy-card">
            <p className="card-desc">{copy.projectPage.comingSoon}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="project-nav">
          {prevProject ? (
            <Link className="project-nav-card" href={`/projects/${prevProject.slug}?lang=${lang}`}>
              <span className="meta-label">{copy.projectPage.previous}</span>
              <span className="card-title">{prevProject.title}</span>
            </Link>
          ) : (
            <div className="project-nav-card empty" />
          )}
          {nextProject ? (
            <Link className="project-nav-card" href={`/projects/${nextProject.slug}?lang=${lang}`}>
              <span className="meta-label">{copy.projectPage.next}</span>
              <span className="card-title">{nextProject.title}</span>
            </Link>
          ) : (
            <div className="project-nav-card empty" />
          )}
        </div>
      </section>
    </main>
  );
}
