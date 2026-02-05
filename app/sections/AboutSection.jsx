import SectionHeader from "../components/SectionHeader";

/**
 * About section.
 */
export default function AboutSection({ copy }) {
  return (
    <section className="section" id="about">
      <SectionHeader kicker={copy.about.kicker} title={copy.about.title} />
      <div className="copy-grid">
        <div className="copy-card">
          <p>{copy.about.body}</p>
        </div>
      </div>
    </section>
  );
}
