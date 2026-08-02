import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SEO from "@/components/seo/SEO";
import JsonLd, { faqPageSchema } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/ui/CTABanner";
import { FAQS, FAQ_CATEGORIES } from "@/lib/faqData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const { t } = useLanguage();
  const fp = t.faqPage || {};

  const activeFaqs = t.faqs && t.faqs.length > 0 ? t.faqs : FAQS;

  const filtered = useMemo(() => {
    return activeFaqs.filter((f) => {
      const matchCat = category === "All" || !f.category || f.category === category;
      const q = query.toLowerCase();
      const matchQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category, activeFaqs]);

  return (
    <>
      <SEO
        title="UAE Company Formation FAQs | Ibrahim Setup"
        description="Answers to common questions on UAE company formation: mainland vs free zone, trade licence costs and timelines, 100% foreign ownership, residence visas, corporate banking, corporate tax, and VAT."
        path="/faq"
      />
      <JsonLd id="faq-page" data={faqPageSchema(activeFaqs)} />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "faq", label: "FAQ" }]} />
          <div className="max-w-3xl pb-12">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {fp.eyebrow || "FAQ"}
            </span>
            <h1 className="heading-lg mt-4 text-balance">
              {fp.title || "UAE Company Formation, Answered"}
            </h1>
            <p className="body-lg mt-5">
              {fp.intro || "Clear answers to the questions entrepreneurs and investors ask most about company formation in the UAE — choosing between mainland and free zone, what a trade licence costs, how long registration takes, and what happens after your licence is issued."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <div className="relative mb-6">
            <Search className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 h-4 w-4 -translate-y-1/2 text-muted-ink" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={fp.searchPlaceholder || "Search questions..."}
              aria-label="Search FAQs"
              className="h-12 w-full rounded-full border border-input bg-card pl-11 pr-4 rtl:pr-11 rtl:pl-4 text-[15px] text-ink transition-colors placeholder:text-muted-ink focus-ring hover:border-blue"
            />
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", ...FAQ_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors focus-ring ${
                  category === c
                    ? "bg-navy text-white"
                    : "border border-border bg-card text-muted-ink hover:border-blue"
                }`}
              >
                {c === "All" ? (fp.allCategories || "All") : c}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="space-y-3">
              <FAQAccordion items={filtered} />
            </div>
          ) : (
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <p className="text-[15px] text-muted-ink">
                  {fp.noMatch || "No questions match your search. Try a different term, or "}
                  <a href="/consultation" className="font-medium text-blue hover:text-navy">
                    {fp.requestConsultationLink || "request a consultation"}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTABanner
        title={fp.stillQuestionsTitle || "Still Have Questions?"}
        text={fp.stillQuestionsText || "Book a free consultation and Ibrahim will answer your specific questions directly."}
        primaryLabel={fp.askDirectly || "Ask Ibrahim Directly"}
      />
    </>
  );
}