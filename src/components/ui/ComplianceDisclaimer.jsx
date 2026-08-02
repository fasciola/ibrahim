import { ShieldCheck, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ComplianceDisclaimer() {
  const { t } = useLanguage();
  const c = t.complianceDisclaimerBanner;

  return (
    <section className="bg-navy py-12 text-white border-t border-gold/30">
      <div className="container-wide">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
            <Info className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading text-base font-bold text-white">
              {c?.title || "Transparent & Independent Business Setup Guidance"}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {c?.p1 || "Ibrahim Setup is an independent business consultancy. We provide practical guidance for Dubai Mainland company formation, licensing, and cloud kitchen setups."}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {c?.p2 || "We do not claim official government partnership, DED endorsement, or guaranteed approvals. All licence approvals, visa grants, and bank account openings remain strictly subject to authority decisions."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
