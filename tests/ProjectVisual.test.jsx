import { render } from "@testing-library/react";
import ProjectVisual from "../app/components/ProjectVisual";

describe("ProjectVisual", () => {
  it("renders the wrapper", () => {
    const { container } = render(<ProjectVisual type="terminal" />);
    expect(container.querySelector(".card-visual")).toBeInTheDocument();
  });

  it("renders a default visual when type is unknown", () => {
    const { container } = render(<ProjectVisual type="unknown" />);
    expect(container.querySelector(".project-illustration")).toBeInTheDocument();
  });

  it("renders a known visual when type exists", () => {
    const { container } = render(<ProjectVisual type="terminal" />);
    const svg = container.querySelector("svg.project-illustration");
    expect(svg).toBeInTheDocument();
  });

  it("applies the custom className", () => {
    const { container } = render(<ProjectVisual type="terminal" className="custom" />);
    expect(container.querySelector(".card-visual.custom")).toBeInTheDocument();
  });

  it("renders even when no type is provided", () => {
    const { container } = render(<ProjectVisual />);
    expect(container.querySelector(".project-illustration")).toBeInTheDocument();
  });
});
