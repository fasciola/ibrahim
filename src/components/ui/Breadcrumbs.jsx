import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Breadcrumbs({ items }) {
  const { t } = useLanguage();
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-ink">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-navy"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">{t.breadcrumbs?.home || "Home"}</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const label = item.labelKey && t.breadcrumbs?.[item.labelKey] ? t.breadcrumbs[item.labelKey] : item.label;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-border rtl:rotate-180" />
              {item.to ? (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-navy"
                >
                  {label}
                </Link>
              ) : (
                <span className="font-medium text-ink" aria-current="page">
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}