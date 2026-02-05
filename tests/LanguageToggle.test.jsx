import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LanguageToggle from "../app/components/LanguageToggle";

describe("LanguageToggle", () => {
  it("renders a switch control", () => {
    render(<LanguageToggle lang="fr" onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("calls onChange with en when current is fr", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<LanguageToggle lang="fr" onChange={onChange} />);
    await user.click(screen.getByRole("switch"));

    expect(onChange).toHaveBeenCalledWith("en");
  });

  it("calls onChange with fr when current is en", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<LanguageToggle lang="en" onChange={onChange} />);
    await user.click(screen.getByRole("switch"));

    expect(onChange).toHaveBeenCalledWith("fr");
  });

  it("applies the correct mode class", () => {
    const { container, rerender } = render(<LanguageToggle lang="fr" onChange={() => {}} />);
    expect(container.querySelector(".lang-toggle")).toHaveClass("is-fr");

    rerender(<LanguageToggle lang="en" onChange={() => {}} />);
    expect(container.querySelector(".lang-toggle")).toHaveClass("is-en");
  });

  it("marks the active flag", () => {
    const { container, rerender } = render(<LanguageToggle lang="fr" onChange={() => {}} />);
    expect(container.querySelectorAll(".flag-slot.active")).toHaveLength(1);
    expect(container.querySelectorAll(".flag-slot")[0]).toHaveClass("active");

    rerender(<LanguageToggle lang="en" onChange={() => {}} />);
    expect(container.querySelectorAll(".flag-slot.active")).toHaveLength(1);
    expect(container.querySelectorAll(".flag-slot")[1]).toHaveClass("active");
  });
});
