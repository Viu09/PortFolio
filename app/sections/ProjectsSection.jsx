import ProjectVisual from "../components/ProjectVisual";
import SectionHeader from "../components/SectionHeader";

function ProjectCard({ project, labels, actions, lang }) {
  return (
    <article className="card project-card" data-visual={project.visual}>
      <div className="card-main">
        <div className="card-head">
          <h4 className="card-title">{project.title}</h4>
        </div>
        <p className="card-subtitle">{project.subtitle}</p>
        <p className="card-desc">{project.description}</p>
        <div className="card-meta">
          <p className="meta-label">{labels.focus}</p>
          <div className="meta-list">
            {project.focus.map((item) => (
              <span className="meta-item" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="tags">
          {project.stack.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-actions">
          <a className="card-action primary" href={`/projects/${project.slug}?lang=${lang}`}>
            {actions.viewProject}
          </a>
          <a className="card-action ghost" href={project.link} target="_blank" rel="noreferrer">
            {actions.viewCode}
          </a>
        </div>
      </div>
      <ProjectVisual type={project.visual} />
    </article>
  );
}

function ProjectGroup({ group, labels, actions, lang }) {
  return (
    <div className="project-group">
      <div className="group-header">
        <h3 className="group-title">{group.title}</h3>
        {group.intro ? <p>{group.intro}</p> : null}
      </div>
      <div className="cards">
        {group.items.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={labels}
            actions={actions}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Projects list grouped by language or category.
 */
export default function ProjectsSection({ copy, lang }) {
  return (
    <section className="section" id="projects">
      <SectionHeader kicker={copy.projects.kicker} title={copy.projects.title} />
      {copy.projects.groups.map((group) => (
        <ProjectGroup
          key={group.title}
          group={group}
          labels={copy.projects.labels}
          actions={{
            viewProject: copy.projects.viewProject,
            viewCode: copy.projects.view
          }}
          lang={lang}
        />
      ))}
    </section>
  );
}
