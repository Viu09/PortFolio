import { render, screen } from "@testing-library/react";
import { content, profile } from "../app/content";
import ContactSection from "../app/sections/ContactSection";

describe("ContactSection", () => {
  const copy = content.fr;

  it("renders the section id", () => {
    const { container } = render(<ContactSection copy={copy} profile={profile} />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("renders the kicker and title", () => {
    render(<ContactSection copy={copy} profile={profile} />);
    expect(screen.getByText(copy.contact.kicker)).toBeInTheDocument();
    expect(screen.getByText(copy.contact.title)).toBeInTheDocument();
  });

  it("renders the body", () => {
    render(<ContactSection copy={copy} profile={profile} />);
    expect(screen.getByText(copy.contact.body)).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<ContactSection copy={copy} profile={profile} />);
    const emailLink = screen.getByText("Email");
    expect(emailLink.getAttribute("href")).toBe(`mailto:${profile.email}`);
  });

  it("renders GitHub and LinkedIn links", () => {
    render(<ContactSection copy={copy} profile={profile} />);
    expect(screen.getByText("GitHub").getAttribute("href")).toBe(profile.github);
    expect(screen.getByText("LinkedIn").getAttribute("href")).toBe(profile.linkedin);
  });
});
