import { render, screen } from "@testing-library/react";
import { content } from "../app/content";
import ProjectsSection from "../app/sections/ProjectsSection";

function countProjects(copy) {
  return copy.projects.groups.reduce((sum, group) => sum + group.items.length, 0);
}

describe("ProjectsSection", () => {
  const copy = content.fr;

  it("renders the section id", () => {
    const { container } = render(<ProjectsSection copy={copy} lang="fr" />);
    expect(container.querySelector("#projects")).toBeInTheDocument();
  });

  it("renders all group titles", () => {
    const { container } = render(<ProjectsSection copy={copy} lang="fr" />);
    const titles = Array.from(container.querySelectorAll(".group-title")).map((el) => el.textContent);
    expect(titles).toEqual(copy.projects.groups.map((group) => group.title));
  });

  it("renders a card for each project", () => {
    const { container } = render(<ProjectsSection copy={copy} lang="fr" />);
    expect(container.querySelectorAll(".project-card")).toHaveLength(countProjects(copy));
  });

  it("builds the project link with lang param", () => {
    render(<ProjectsSection copy={copy} lang="fr" />);
    const firstProject = copy.projects.groups[0].items[0];
    const link = screen.getAllByText(copy.projects.viewProject)[0].closest("a");
    expect(link?.getAttribute("href")).toBe(`/projects/${firstProject.slug}?lang=fr`);
  });

  it("renders a visual for each project", () => {
    const { container } = render(<ProjectsSection copy={copy} lang="fr" />);
    expect(container.querySelectorAll(".card-visual")).toHaveLength(countProjects(copy));
  });
});
