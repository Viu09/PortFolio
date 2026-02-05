import { act, renderHook } from "@testing-library/react";
import { useLang } from "../app/hooks/useLang";

describe("useLang", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("defaults to the provided language when param is invalid", () => {
    const { result } = renderHook(() => useLang("fr", "de"));
    expect(result.current.lang).toBe("fr");
  });

  it("uses the param language when storage is not set", () => {
    const { result } = renderHook(() => useLang("fr", "en"));
    expect(result.current.lang).toBe("en");
  });

  it("respects the stored language even when param differs", () => {
    sessionStorage.setItem("portfolio_lang", "en");
    sessionStorage.setItem("portfolio_lang_set", "1");

    const { result } = renderHook(() => useLang("fr", "fr"));
    expect(result.current.lang).toBe("en");
  });

  it("persists the selection in sessionStorage", () => {
    const { result } = renderHook(() => useLang("fr"));
    act(() => {
      result.current.setLang("en");
    });

    expect(sessionStorage.getItem("portfolio_lang")).toBe("en");
    expect(sessionStorage.getItem("portfolio_lang_set")).toBe("1");
  });

  it("updates the document lang attribute", () => {
    const { result } = renderHook(() => useLang("fr"));
    act(() => {
      result.current.setLang("en");
    });

    expect(document.documentElement.lang).toBe("en");
  });
});
