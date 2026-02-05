import { renderToStaticMarkup } from "react-dom/server";
import RootLayout from "../app/layout";

function renderMarkup(children) {
  return renderToStaticMarkup(<RootLayout>{children}</RootLayout>);
}

describe("RootLayout", () => {
  it("renders the html element", () => {
    const markup = renderMarkup(<div>Child</div>);
    expect(markup.startsWith("<html")).toBe(true);
  });

  it("sets the html lang attribute to fr", () => {
    const markup = renderMarkup(<div>Child</div>);
    expect(markup).toContain("lang=\"fr\"");
  });

  it("wraps content in a body element", () => {
    const markup = renderMarkup(<div>Child</div>);
    expect(markup).toContain("<body>");
    expect(markup).toContain("</body>");
  });

  it("renders children inside the layout", () => {
    const markup = renderMarkup(<div>Inner content</div>);
    expect(markup).toContain("Inner content");
  });

  it("renders a single body element", () => {
    const markup = renderMarkup(<div>Child</div>);
    const bodyCount = markup.match(/<body>/g)?.length || 0;
    expect(bodyCount).toBe(1);
  });
});
