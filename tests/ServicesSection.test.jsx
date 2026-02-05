import { render, screen } from "@testing-library/react";
import { content } from "../app/content";
import ServicesSection from "../app/sections/ServicesSection";

describe("ServicesSection", () => {
  const copy = content.fr;

  it("renders the section id", () => {
    const { container } = render(<ServicesSection copy={copy} />);
    expect(container.querySelector("#services")).toBeInTheDocument();
  });

  it("renders the kicker and title", () => {
    render(<ServicesSection copy={copy} />);
    expect(screen.getByText(copy.services.kicker)).toBeInTheDocument();
    expect(screen.getByText(copy.services.title)).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    const { container } = render(<ServicesSection copy={copy} />);
    expect(container.querySelectorAll(".card")).toHaveLength(copy.services.items.length);
  });

  it("renders service titles", () => {
    render(<ServicesSection copy={copy} />);
    copy.services.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("renders service descriptions", () => {
    render(<ServicesSection copy={copy} />);
    copy.services.items.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});
