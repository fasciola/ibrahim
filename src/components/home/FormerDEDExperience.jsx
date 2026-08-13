import { Landmark, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const spring = { type: "spring", stiffness: 400, damping: 28 };

export default function FormerDEDExperience() {
  const { t } = useLanguage();
  const f = t.formerDED;

  return (
    <section className="border-y border-border bg-white py-20 lg:py-28">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B5964]">
            <Award className="h-4 w-4" /> Previous DED Experience
          </div>
          <h2 className="heading-lg mt-4 max-w-2xl text-navy">Practical Licensing Insight from Real Experience</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-ink sm:text-base">
            Ibrahim’s previous work within Dubai’s economic licensing environment gives clients practical insight into activities, documentation and approval requirements.
          </p>
          <p className="mt-4 max-w-xl text-xs leading-5 text-muted-ink/80">
            Independent consultancy. Government approvals remain subject to the relevant authority’s requirements.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={spring}
          className="rounded-[24px] border border-slate-200 bg-[#F8FAF9] p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_18px_50px_rgba(15,23,42,0.06)]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0B5964] shadow-sm">
            <Landmark className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-lg font-bold text-navy">
            {f?.logoBadgeText || "Previous professional experience within Dubai’s economic department"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-ink">
            Licensing knowledge applied to clearer, more confident setup decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
