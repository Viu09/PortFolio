/**
 * Top hero section with introduction and quick stats.
 */
export default function HeroSection({ profile, copy }) {
  return (
    <header className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="hero-title">
            {profile.name}
            <span>{copy.profile.role}</span>
          </h1>
          <p className="hero-tagline">{copy.profile.tagline}</p>
          <div className="cta">
            <a className="button primary" href="#projects">{copy.hero.ctaPrimary}</a>
            <a className="button ghost" href="#contact">{copy.hero.ctaSecondary}</a>
          </div>
          <div className="hero-notes">
            <p>{copy.profile.focus}</p>
            <p>{copy.profile.availability}</p>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <div className="panel-header">
              <p className="panel-title">{copy.panel.title}</p>
              <p className="panel-subtitle">{copy.panel.subtitle}</p>
            </div>
            <div className="stats">
              {copy.panel.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="panel-body">
              <p>{copy.panel.body}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
