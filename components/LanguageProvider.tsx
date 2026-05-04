"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { en, es, ca } from "@/data/translations";
import type { Translation } from "@/data/translations";

type Language = "en" | "es" | "ca";

interface LanguageContextType {
  language: Language;
  t: Translation;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  t: en,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const translations: Record<Language, Translation> = { en, es, ca };

function getDefaultLanguage(): Language {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored && translations[stored]) return stored;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getDefaultLanguage);

  const changeLanguage = useCallback((lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
