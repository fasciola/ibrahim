import { Link } from "react-router-dom";
import { ArrowRight, SearchCheck, FileCheck2, ShieldCheck, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const phases = [
  {
    icon: SearchCheck,
    num: "01",
    title: "Define the Setup",
    desc: "Choose the right activity, ownership structure and licence path.",
  },
  {
    icon: FileCheck2,
    num: "02",
    title: "Prepare & Apply",
    desc: "Trade name, initial approval and required company documents.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Complete Approvals",
    desc: "Coordinate premises and external approvals where required.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Licence & Launch",
    desc: "Complete issuance, visas and the next steps to start operating.",
  },
];

export default function SetupProcess() {
  const { t, dir } = useLanguage();

  return (
    <section className="border-t border-border bg-[#F8FAF9] py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Simple Process</span>
          <h2 className="heading-lg mt-3 text-navy">Your Setup Journey in Four Clear Phases</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-ink sm:text-base">
            Clear decisions first. Paperwork second. No unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {phases.map(({ icon: Icon, num, title, desc }) => (
            <div key={num} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_12px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold tracking-[0.14em] text-slate-400">{num}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-ink">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/consultation"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-secondary"
          >
            <span>{t.hero?.bookConsultation || "Book Consultation"}</span>
            <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
