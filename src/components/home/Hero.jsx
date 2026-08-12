import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Utensils } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;

  return (
    <section className="ds-hero">
      <div className="container-wide ds-hero__inner">
        <div className="ds-hero__copy">
          <span className="ds-kicker">
            <span className="ds-kicker__dot" />
            {h?.eyebrow || "DUBAI MAINLAND BUSINESS SETUP SPECIALIST"}
          </span>

          <h1 className="ds-hero__title">
            {h?.title || "Set Up Your Business in Dubai With Practical, First-Hand Guidance"}
          </h1>

          <p className="ds-hero__description">
            {h?.description}
          </p>

          <div className="ds-hero__actions">
            <Link to="/consultation" className="ds-btn ds-btn--primary">
              <span>{h?.bookConsultation || "Book Consultation"}</span>
              <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>
            <Link to="/services" className="ds-btn ds-btn--ghost">
              Explore Services
            </Link>
          </div>

          <div className="ds-trust-row">
            <span><Award className="h-4 w-4" /> Former DED Experience</span>
            <span><Building2 className="h-4 w-4" /> Dubai Mainland Specialist</span>
            <span><Utensils className="h-4 w-4" /> Cloud Kitchen Setup CEO</span>
          </div>
        </div>

        <div className="ds-lead-card">
          <div className="ds-lead-card__topline">PERSONAL BUSINESS SETUP SUPPORT</div>
          <h2>Ready to start your business?</h2>
          <p>Speak directly with Ibrahim and get clear guidance on the right setup, approvals and next steps.</p>
          <div className="ds-lead-card__grid">
            <div className="ds-field">Dubai Mainland</div>
            <div className="ds-field">Company Formation</div>
            <div className="ds-field">Cloud Kitchen Setup</div>
            <div className="ds-field">Approvals & Licensing</div>
          </div>
          <Link to="/consultation" className="ds-btn ds-btn--card">
            Book a Consultation
            <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
