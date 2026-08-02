import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "fr", label: "Français", short: "FR" },
];

export default function LanguageSwitcher({ className = "", onAfterChange }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-navy/15 bg-card/80 px-3 text-[13px] font-semibold text-navy transition-colors hover:border-gold hover:bg-card focus-ring"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4 text-gold" />
        {current.short}
      </button>
      {open && (
        <div className="absolute end-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
                onAfterChange?.();
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-[14px] font-medium transition-colors hover:bg-navy/5 ${
                lang.code === locale ? "text-navy" : "text-muted-ink"
              }`}
            >
              {lang.label}
              {lang.code === locale && <Check className="h-4 w-4 text-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}