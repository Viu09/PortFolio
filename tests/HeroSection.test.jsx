import { render, screen } from "@testing-library/react";
import { content, profile } from "../app/content";
import HeroSection from "../app/sections/HeroSection";

describe("HeroSection", () => {
  const copy = content.fr;

  it("renders the profile name and role", () => {
    render(<HeroSection profile={profile} copy={copy} />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(copy.profile.role)).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<HeroSection profile={profile} copy={copy} />);
    expect(screen.getByText(copy.profile.tagline)).toBeInTheDocument();
  });

  it("renders CTA links", () => {
    render(<HeroSection profile={profile} copy={copy} />);
    expect(screen.getByText(copy.hero.ctaPrimary).getAttribute("href")).toBe("#projects");
    expect(screen.getByText(copy.hero.ctaSecondary).getAttribute("href")).toBe("#contact");
  });

  it("renders all stats", () => {
    const { container } = render(<HeroSection profile={profile} copy={copy} />);
    expect(container.querySelectorAll(".stat")).toHaveLength(copy.panel.stats.length);
  });

  it("renders panel header texts", () => {
    render(<HeroSection profile={profile} copy={copy} />);
    expect(screen.getByText(copy.panel.title)).toBeInTheDocument();
    expect(screen.getByText(copy.panel.subtitle)).toBeInTheDocument();
  });
});
