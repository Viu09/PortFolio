import SectionHeader from "../components/SectionHeader";

/**
 * Contact section with call-to-action links.
 */
export default function ContactSection({ copy, profile }) {
  return (
    <section className="section" id="contact">
      <SectionHeader kicker={copy.contact.kicker} title={copy.contact.title} />
      <div className="copy-grid">
        <div className="copy-card">
          <p>{copy.contact.body}</p>
        </div>
      </div>
      <div className="contact-links">
        <a className="button primary" href={`mailto:${profile.email}`}>Email</a>
        <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
