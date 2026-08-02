import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Search...",
  searchPlaceholder,
  noResultsText,
  id,
  invalid,
  ariaLabel,
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const inputRef = useRef(null);

  const activeSearchPlaceholder = searchPlaceholder || t.consultationForm?.searchSelectPlaceholder || "Search...";
  const activeNoResults = noResultsText || t.consultationForm?.noResultsFound || "No results";

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const filtered = query
    ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={`flex h-12 w-full items-center justify-between rounded-lg border bg-card px-4 text-start text-[15px] transition-colors focus-ring ${
          invalid ? "border-destructive" : "border-input hover:border-blue"
        }`}
      >
        <span className={selected ? "text-ink" : "text-muted-ink"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-muted-ink transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-30 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search className="h-4 w-4 text-muted-ink" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={activeSearchPlaceholder}
              className="h-10 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-muted-ink"
            />
          </div>
          <ul role="listbox" className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-[14px] text-muted-ink">{activeNoResults}</li>
            )}
            {filtered.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={o.value === value}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-start text-[14px] transition-colors hover:bg-muted ${
                    o.value === value ? "font-semibold text-navy" : "text-ink"
                  }`}
                >
                  {o.label}
                  {o.value === value && <Check className="h-4 w-4 text-success" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}