import SectionHeader from "../components/SectionHeader";

/**
 * Services / offerings section.
 */
export default function ServicesSection({ copy }) {
  return (
    <section className="section" id="services">
      <SectionHeader kicker={copy.services.kicker} title={copy.services.title} />
      <div className="cards">
        {copy.services.items.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <div className="card-desc">
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
