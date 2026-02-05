"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_lang";
const STORAGE_SET_KEY = "portfolio_lang_set";

/**
 * Persisted language selection stored in sessionStorage.
 * Uses a guard flag to avoid overriding manual user choices.
 */
export function useLang(defaultLang = "fr", paramLang) {
  const isValid = (value) => value === "fr" || value === "en";
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      const isSet = window.sessionStorage.getItem(STORAGE_SET_KEY) === "1";
      if (isSet && isValid(stored)) return stored;
    }
    if (isValid(paramLang)) return paramLang;
    return defaultLang;
  });

  const setLang = (nextLang) => {
    setLangState(nextLang);
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(STORAGE_KEY, nextLang);
    window.sessionStorage.setItem(STORAGE_SET_KEY, "1");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isValid(paramLang)) return;
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    const isSet = window.sessionStorage.getItem(STORAGE_SET_KEY) === "1";
    if (!isSet && !isValid(stored)) {
      setLangState(paramLang);
      window.sessionStorage.setItem(STORAGE_KEY, paramLang);
      window.sessionStorage.setItem(STORAGE_SET_KEY, "1");
    }
  }, [paramLang]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = lang;
  }, [lang]);

  return { lang, setLang };
}
