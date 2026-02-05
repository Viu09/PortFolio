/**
 * Project utilities shared between list and detail pages.
 */
export function findProject(copy, slug) {
  for (const group of copy.projects.groups) {
    const project = group.items.find((item) => item.slug === slug);
    if (project) {
      return { project, group };
    }
  }
  return null;
}

/**
 * Flatten all projects with group metadata for navigation.
 */
export function flattenProjects(copy) {
  return copy.projects.groups.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      groupTitle: group.title
    }))
  );
}
