import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { content } from "../app/content";
import { useParams, useSearchParams } from "next/navigation";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock("next/navigation", () => ({
  useParams: vi.fn(),
  useSearchParams: vi.fn()
}));

const mockUseParams = vi.mocked(useParams);
const mockUseSearchParams = vi.mocked(useSearchParams);

function setRoute(slug, lang = "fr") {
  mockUseParams.mockReturnValue({ slug });
  mockUseSearchParams.mockReturnValue({
    get: (key) => (key === "lang" ? lang : null)
  });
}

describe("ProjectPage", () => {
  let ProjectPage;

  beforeAll(async () => {
    ProjectPage = (await import("../app/projects/[slug]/page")).default;
  });

  beforeEach(() => {
    sessionStorage.clear();
  });

  it("renders the not-found state when slug is unknown", () => {
    setRoute("unknown-project", "fr");
    render(<ProjectPage />);
    expect(screen.getByText(content.fr.projectPage.notFoundTitle)).toBeInTheDocument();
  });

  it("renders the project title for a valid slug", () => {
    const project = content.fr.projects.groups[0].items[0];
    setRoute(project.slug, "fr");
    render(<ProjectPage />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });

  it("renders the back link", () => {
    const project = content.fr.projects.groups[0].items[0];
    setRoute(project.slug, "fr");
    render(<ProjectPage />);
    const backLink = screen.getByText(content.fr.projectPage.back).closest("a");
    expect(backLink?.getAttribute("href")).toBe("/#projects");
  });

  it("renders stack tags for the project", () => {
    const project = content.fr.projects.groups[0].items[0];
    setRoute(project.slug, "fr");
    const { container } = render(<ProjectPage />);
    const aside = container.querySelector(".project-hero-aside");
    expect(aside).toBeInTheDocument();
    expect(aside?.textContent).toContain(project.stack[0]);
  });

  it("renders the video placeholder section", () => {
    const project = content.fr.projects.groups[0].items[0];
    setRoute(project.slug, "fr");
    const { container } = render(<ProjectPage />);
    expect(container.querySelector(".video-placeholder")).toBeInTheDocument();
  });
});
