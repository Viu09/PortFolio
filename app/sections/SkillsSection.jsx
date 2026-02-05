import SectionHeader from "../components/SectionHeader";
import SkillIcon from "../components/SkillIcon";

/**
 * Skills overview with grouped tags and icons.
 */
export default function SkillsSection({ copy }) {
  return (
    <section className="section" id="skills">
      <SectionHeader kicker={copy.skills.kicker} title={copy.skills.title} />
      <div className="copy-grid">
        <div className="copy-card">
          <p>{copy.skills.body}</p>
        </div>
      </div>
      <div className="skill-grid">
        {copy.skills.groups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => {
                const skill = typeof item === "string" ? { label: item, key: item } : item;
                const key = skill.key || skill.label.toLowerCase();
                return (
                  <span className="skill-pill" data-skill={key} key={`${key}-${skill.label}`}>
                    <span className="skill-icon">
                      <SkillIcon name={key} label={skill.label} />
                    </span>
                    <span>{skill.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
