import { render } from "@testing-library/react";
import AmbientBackground from "../app/components/AmbientBackground";

describe("AmbientBackground", () => {
  it("renders the ambient container", () => {
    const { container } = render(<AmbientBackground />);
    expect(container.querySelector(".ambient")).toBeInTheDocument();
  });

  it("renders three orb elements", () => {
    const { container } = render(<AmbientBackground />);
    expect(container.querySelectorAll(".orb")).toHaveLength(3);
  });

  it("renders the grid layer", () => {
    const { container } = render(<AmbientBackground />);
    expect(container.querySelector(".grid")).toBeInTheDocument();
  });

  it("marks the background as aria-hidden", () => {
    const { container } = render(<AmbientBackground />);
    expect(container.querySelector(".ambient")).toHaveAttribute("aria-hidden", "true");
  });

  it("contains exactly four span layers", () => {
    const { container } = render(<AmbientBackground />);
    expect(container.querySelectorAll(".ambient span")).toHaveLength(4);
  });
});
