import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Disclaimer({ className = "", light = false }) {
  const { t } = useLanguage();
  return (
    <p
      className={`text-[13px] leading-relaxed ${
        light ? "text-white/55" : "text-muted-ink/80"
      } ${className}`}
    >
      {t.disclaimer}
    </p>
  );
}