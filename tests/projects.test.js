import { content } from "../app/content";
import { findProject, flattenProjects } from "../app/lib/projects";

describe("findProject", () => {
  it("finds a project by slug", () => {
    const project = flattenProjects(content.fr)[0];
    const result = findProject(content.fr, project.slug);

    expect(result).not.toBeNull();
    expect(result.project.slug).toBe(project.slug);
  });

  it("returns null for an unknown slug", () => {
    const result = findProject(content.fr, "does-not-exist");
    expect(result).toBeNull();
  });

  it("returns the correct group", () => {
    const project = flattenProjects(content.fr)[0];
    const result = findProject(content.fr, project.slug);

    expect(result.group.title).toBeDefined();
    expect(result.group.items.find((item) => item.slug === project.slug)).toBeTruthy();
  });

  it("works with English content", () => {
    const project = flattenProjects(content.en)[0];
    const result = findProject(content.en, project.slug);

    expect(result).not.toBeNull();
    expect(result.project.title).toBe(project.title);
  });

  it("finds a project in later groups", () => {
    const projects = flattenProjects(content.fr);
    const lastProject = projects[projects.length - 1];
    const result = findProject(content.fr, lastProject.slug);

    expect(result).not.toBeNull();
    expect(result.project.slug).toBe(lastProject.slug);
  });
});

describe("flattenProjects", () => {
  it("returns the total number of projects", () => {
    const total = content.fr.projects.groups.reduce(
      (count, group) => count + group.items.length,
      0
    );
    expect(flattenProjects(content.fr)).toHaveLength(total);
  });

  it("adds the groupTitle to each project", () => {
    const flattened = flattenProjects(content.fr);
    expect(flattened[0].groupTitle).toBeDefined();
  });

  it("preserves the original ordering", () => {
    const firstGroup = content.fr.projects.groups[0];
    const flattened = flattenProjects(content.fr);
    expect(flattened[0].slug).toBe(firstGroup.items[0].slug);
  });

  it("returns new objects instead of original references", () => {
    const firstGroup = content.fr.projects.groups[0];
    const flattened = flattenProjects(content.fr);
    expect(flattened[0]).not.toBe(firstGroup.items[0]);
  });

  it("ensures project slugs are unique", () => {
    const slugs = flattenProjects(content.fr).map((item) => item.slug);
    const unique = new Set(slugs);

    expect(unique.size).toBe(slugs.length);
  });
});
