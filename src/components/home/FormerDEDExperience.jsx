import { Landmark, ShieldAlert, Award } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FormerDEDExperience() {
  const { t } = useLanguage();
  const f = t.formerDED;

  // Display only after written permission and approved brand asset are confirmed.
  const showDetLogo = import.meta.env.VITE_SHOW_DET_LOGO === "true";

  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold">
              <Award className="h-4 w-4" />
              <span>{f?.heading || "Practical Insight from Previous DED Experience"}</span>
            </div>
            <h2 className="heading-lg mt-4 text-navy font-heading font-bold">
              {f?.heading}
            </h2>
            <p className="body-lg mt-5 text-muted-ink leading-relaxed">
              {f?.p1}
            </p>
            <p className="body-lg mt-4 text-muted-ink leading-relaxed">
              {f?.p2}
            </p>

            <div className="mt-8 rounded-xl border border-navy/10 bg-cream/50 p-4 text-xs text-muted-ink flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed">{f?.disclaimer}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-border bg-background p-8 text-center shadow-lg">
              {showDetLogo ? (
                // Display only after written permission and approved brand asset are confirmed.
                <img
                  src="/images/brand/det-logo-authorized.svg"
                  alt="Dubai Department of Economy and Tourism logo"
                  className="mx-auto h-20 w-auto object-contain"
                />
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-navy/10 text-navy">
                  <Landmark className="h-10 w-10 text-gold" />
                </div>
              )}

              <h3 className="mt-6 text-base font-bold text-navy font-heading">
                {f?.logoBadgeText || "Previous professional experience within Dubai’s economic department"}
              </h3>
              <p className="mt-2 text-xs text-muted-ink leading-relaxed">
                Practical licensing procedure knowledge applied to independent business setup consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
