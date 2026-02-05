import { render, screen } from "@testing-library/react";
import { content } from "../app/content";
import SkillsSection from "../app/sections/SkillsSection";

function countSkills(copy) {
  return copy.skills.groups.reduce((sum, group) => sum + group.items.length, 0);
}

describe("SkillsSection", () => {
  const copy = content.fr;

  it("renders the section id", () => {
    const { container } = render(<SkillsSection copy={copy} />);
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });

  it("renders all group titles", () => {
    render(<SkillsSection copy={copy} />);
    copy.skills.groups.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    });
  });

  it("renders the skills description", () => {
    render(<SkillsSection copy={copy} />);
    expect(screen.getByText(copy.skills.body)).toBeInTheDocument();
  });

  it("renders one pill per skill", () => {
    const { container } = render(<SkillsSection copy={copy} />);
    expect(container.querySelectorAll(".skill-pill")).toHaveLength(countSkills(copy));
  });

  it("renders skill icons", () => {
    const { container } = render(<SkillsSection copy={copy} />);
    expect(container.querySelectorAll(".skill-icon").length).toBeGreaterThan(0);
  });
});
