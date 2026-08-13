import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FileText, CheckCircle2, Scale, Building, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const spring = { type: "spring", stiffness: 400, damping: 28 };
const icons = [Briefcase, FileText, CheckCircle2, Scale, Building, ShieldCheck];

export default function MainlandExpertiseSection() {
  const { t, dir } = useLanguage();
  const m = t.mainlandExpertise;
  const cards = m?.cards?.slice(0, 6) || [];

  return (
    <section className="bg-[#F7FAF9] py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Dubai Mainland Expertise</span>
          <h2 className="heading-lg mt-3 text-navy">
            Dubai Mainland Setup, Made Clear
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted-ink sm:text-base">
            Ibrahim helps you choose the right activity, structure and approvals before you commit time or money.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                transition={spring}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-ink">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services/dubai-mainland-company-formation"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-secondary"
          >
            Explore Dubai Mainland Setup
            <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
