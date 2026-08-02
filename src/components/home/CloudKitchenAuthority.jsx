import { Link } from "react-router-dom";
import { Utensils, ExternalLink, ArrowRight, Flame, Store, ShieldCheck, Truck, Layout, ChefHat, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CloudKitchenAuthority() {
  const { t, dir } = useLanguage();
  const c = t.cloudKitchen;

  const cardIcons = [
    Utensils,
    ChefHat,
    Store,
    Layout,
    ShieldCheck,
    Flame,
    Truck,
    Sparkles,
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-navy to-navy-secondary text-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold">
              <ChefHat className="h-4 w-4" />
              <span>{c?.subtitle || "Built from real operational experience, not theory"}</span>
            </div>
            <h2 className="heading-lg mt-4 text-white font-heading font-bold">
              {c?.heading || "Specialist Cloud Kitchen and Food-Business Setup"}
            </h2>
            <p className="body-lg mt-4 text-slate-300 leading-relaxed max-w-2xl">
              {c?.p1}
            </p>
            <p className="body-lg mt-3 text-slate-300 leading-relaxed max-w-2xl">
              {c?.p2}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md w-full max-w-sm">
              <img
                src="/images/brand/cks-logo.svg"
                alt="Cloud Kitchen Setup logo"
                className="mx-auto h-16 w-auto object-contain"
              />
              <span className="mt-4 block text-xs font-medium uppercase tracking-wider text-gold">
                {c?.ledBy || "Founded and led by Ibrahim"}
              </span>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={c?.cksUrl || "https://cloudkitchensetup.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
                >
                  <span>{c?.visitCKS || "Visit Cloud Kitchen Setup"}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/consultation"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <span>{c?.bookConsultation || "Book a Cloud Kitchen Consultation"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c?.cards?.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-gold/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
