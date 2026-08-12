import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Utensils } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(32,220,163,0.14),transparent_28rem)]" aria-hidden="true" />

      <div className="container-wide relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-navy shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-100" />
            {h?.eyebrow || "DUBAI MAINLAND BUSINESS SETUP SPECIALIST"}
          </span>

          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            {h?.title || "Set Up Your Business in Dubai With Practical, First-Hand Guidance"}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-ink sm:text-lg">
            {h?.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/consultation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(11,89,100,0.18)] transition hover:-translate-y-0.5 hover:bg-navy-secondary"
            >
              <span>{h?.bookConsultation || "Book Consultation"}</span>
              <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>

            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-7 flex flex-col gap-3 text-sm font-semibold text-navy sm:flex-row sm:flex-wrap sm:gap-x-6">
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-emerald-500" /> Former DED Experience</span>
            <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-emerald-500" /> Dubai Mainland Specialist</span>
            <span className="inline-flex items-center gap-2"><Utensils className="h-4 w-4 text-emerald-500" /> Cloud Kitchen Setup CEO</span>
          </div>
        </div>

        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_24px_70px_rgba(22,47,55,0.10)] sm:p-7">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-navy">PERSONAL BUSINESS SETUP SUPPORT</div>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-ink sm:text-3xl">Ready to start your business?</h2>
          <p className="mt-3 text-sm leading-6 text-muted-ink sm:text-base">Speak directly with Ibrahim and get clear guidance on the right setup, approvals and next steps.</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {["Dubai Mainland", "Company Formation", "Cloud Kitchen Setup", "Approvals & Licensing"].map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
                {item}
              </div>
            ))}
          </div>

          <Link
            to="/consultation"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(11,89,100,0.16)] transition hover:-translate-y-0.5 hover:bg-navy-secondary"
          >
            Book a Consultation
            <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
