import { render, screen } from "@testing-library/react";
import { content } from "../app/content";
import AboutSection from "../app/sections/AboutSection";

describe("AboutSection", () => {
  const copy = content.fr;

  it("renders the section id", () => {
    const { container } = render(<AboutSection copy={copy} />);
    expect(container.querySelector("#about")).toBeInTheDocument();
  });

  it("renders the kicker", () => {
    render(<AboutSection copy={copy} />);
    expect(screen.getByText(copy.about.kicker)).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<AboutSection copy={copy} />);
    expect(screen.getByText(copy.about.title)).toBeInTheDocument();
  });

  it("renders the body text", () => {
    render(<AboutSection copy={copy} />);
    expect(screen.getByText(copy.about.body)).toBeInTheDocument();
  });

  it("wraps content in a copy card", () => {
    const { container } = render(<AboutSection copy={copy} />);
    expect(container.querySelector(".copy-card")).toBeInTheDocument();
  });
});
