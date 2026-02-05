import { render, screen, within } from "@testing-library/react";
import { content, profile } from "../app/content";
import Home from "../app/page";

describe("Home page", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("renders the navigation links", () => {
    const { container } = render(<Home />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    const navScope = within(nav);
    expect(navScope.getByText(content.fr.nav.about)).toBeInTheDocument();
    expect(navScope.getByText(content.fr.nav.projects)).toBeInTheDocument();
    expect(navScope.getByText(content.fr.nav.skills)).toBeInTheDocument();
    expect(navScope.getByText(content.fr.nav.contact)).toBeInTheDocument();
  });

  it("renders the hero title", () => {
    render(<Home />);
    const heroHeading = screen.getByRole("heading", { level: 1 });
    expect(heroHeading).toHaveTextContent(profile.name);
  });

  it("renders the about section content", () => {
    render(<Home />);
    expect(screen.getByText(content.fr.about.title)).toBeInTheDocument();
  });

  it("renders at least one project title", () => {
    render(<Home />);
    const firstProject = content.fr.projects.groups[0].items[0];
    expect(screen.getByText(firstProject.title)).toBeInTheDocument();
  });

  it("renders the contact email link", () => {
    render(<Home />);
    const emailLink = screen.getByText("Email");
    expect(emailLink.getAttribute("href")).toBe(`mailto:${profile.email}`);
  });
});
