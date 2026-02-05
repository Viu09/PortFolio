import { render } from "@testing-library/react";
import SectionHeader from "../app/components/SectionHeader";

describe("SectionHeader", () => {
  it("renders the title", () => {
    const { getByText } = render(<SectionHeader title="Title" kicker="Kicker" />);
    expect(getByText("Title")).toBeInTheDocument();
  });

  it("renders the kicker when provided", () => {
    const { getByText } = render(<SectionHeader title="Title" kicker="Kicker" />);
    expect(getByText("Kicker")).toBeInTheDocument();
  });

  it("does not render a kicker when omitted", () => {
    const { container } = render(<SectionHeader title="Title" />);
    expect(container.querySelector(".kicker")).not.toBeInTheDocument();
  });

  it("does not render a kicker when empty", () => {
    const { container } = render(<SectionHeader title="Title" kicker="" />);
    expect(container.querySelector(".kicker")).not.toBeInTheDocument();
  });

  it("wraps content in the section-header container", () => {
    const { container } = render(<SectionHeader title="Title" kicker="Kicker" />);
    expect(container.querySelector(".section-header")).toBeInTheDocument();
  });
});
