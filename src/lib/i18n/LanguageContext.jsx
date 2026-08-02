import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { en } from "./en";
import { ar } from "./ar";
import { fr } from "./fr";

const translations = { en, ar, fr };
const STORAGE_KEY = "ibrahim-setup-locale";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  const t = translations[locale] || translations.en;
  const dir = t.dir;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, dir]);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { locale: "en", setLocale: () => {}, t: en, dir: "ltr" };
  }
  return ctx;
}