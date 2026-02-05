import { render } from "@testing-library/react";
import SkillIcon from "../app/components/SkillIcon";

describe("SkillIcon", () => {
  it("renders an SVG for known skills", () => {
    const { container } = render(<SkillIcon name="react" label="React" />);
    expect(container.querySelector(".skill-svg")).toBeInTheDocument();
  });

  it("renders a fallback text for unknown skills", () => {
    const { container } = render(<SkillIcon name="rust" label="Rust" />);
    expect(container.querySelector(".skill-text")).toBeInTheDocument();
  });

  it("uses the label for fallback initials", () => {
    const { container } = render(<SkillIcon name="unknown" label="Go" />);
    expect(container.querySelector(".skill-text")?.textContent).toBe("GO");
  });

  it("uses the name when label is missing", () => {
    const { container } = render(<SkillIcon name="ruby" />);
    expect(container.querySelector(".skill-text")?.textContent).toBe("RU");
  });

  it("renders a question mark when no data is provided", () => {
    const { container } = render(<SkillIcon />);
    expect(container.querySelector(".skill-text")?.textContent).toBe("?");
  });
});
