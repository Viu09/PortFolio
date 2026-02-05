import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import NavBar from "../app/components/NavBar";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

describe("NavBar", () => {
  it("renders the profile name", () => {
    render(
      <NavBar
        profileName="Jane Doe"
        navItems={navItems}
        activeSection="about"
        onSectionChange={() => {}}
        lang="fr"
        onLangChange={() => {}}
      />
    );

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("renders all nav items", () => {
    render(
      <NavBar
        profileName="Jane Doe"
        navItems={navItems}
        activeSection="about"
        onSectionChange={() => {}}
        lang="fr"
        onLangChange={() => {}}
      />
    );

    navItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("highlights the active section", () => {
    const { container } = render(
      <NavBar
        profileName="Jane Doe"
        navItems={navItems}
        activeSection="projects"
        onSectionChange={() => {}}
        lang="fr"
        onLangChange={() => {}}
      />
    );

    const active = container.querySelector(".nav-links a.active");
    expect(active?.textContent).toBe("Projects");
  });

  it("calls onSectionChange when a nav item is clicked", async () => {
    const onSectionChange = vi.fn();
    const user = userEvent.setup();

    render(
      <NavBar
        profileName="Jane Doe"
        navItems={navItems}
        activeSection="about"
        onSectionChange={onSectionChange}
        lang="fr"
        onLangChange={() => {}}
      />
    );

    await user.click(screen.getByText("Skills"));
    expect(onSectionChange).toHaveBeenCalledWith("skills");
  });

  it("renders the language toggle", () => {
    render(
      <NavBar
        profileName="Jane Doe"
        navItems={navItems}
        activeSection="about"
        onSectionChange={() => {}}
        lang="fr"
        onLangChange={() => {}}
      />
    );

    expect(screen.getByRole("switch")).toBeInTheDocument();
  });
});
