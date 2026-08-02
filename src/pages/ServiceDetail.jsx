import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building2, Utensils, Award, CreditCard, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEO from "@/components/seo/SEO";

const SERVICE_DATA = {
  "dubai-mainland-company-formation": {
    title: "Dubai Mainland Company Formation",
    eyebrow: "CORE EXPERTISE",
    desc: "Complete guidance for establishing a Dubai Mainland LLC, Civil Company, or Branch with 100% foreign ownership options and full local UAE market access.",
    highlights: [
      "Full access to trade across all 7 UAE Emirates and government tenders",
      "100% foreign ownership available for most commercial & professional activities",
      "No restriction on office premises location anywhere in Dubai",
      "Direct guidance based on former DED licensing procedure experience"
    ],
    details: [
      "Activity selection and alignment with official Dubai activity lists",
      "Trade name reservation and preliminary approval filings",
      "MOA and legal structure drafting and notarisation",
      "Ejari commercial lease registration and physical office compliance",
      "Mainland commercial licence issuance and MOHRE establishment card"
    ]
  },
  "cloud-kitchen-setup": {
    title: "Cloud Kitchen & Food-Business Setup",
    eyebrow: "SPECIALIST PLATFORM — CKS",
    desc: "Specialised setup support for delivery kitchens, food concepts, and virtual restaurant brands led by Ibrahim, Owner and CEO of Cloud Kitchen Setup (CKS).",
    highlights: [
      "Led by an active cloud kitchen business owner and CEO",
      "Integrated guidance covering Mainland licensing and kitchen operations",
      "Dubai Municipality Food Safety Department (DM-FSD) approval alignment",
      "Delivery platform readiness for Talabat, Deliveroo, Careem, and Noon"
    ],
    details: [
      "Shared vs standalone kitchen model feasibility",
      "Commercial food activity selection for Dubai Mainland",
      "Kitchen layout approval and extraction/ventilation criteria",
      "Civil Defence fire safety certification coordination",
      "Onboarding document preparation for food delivery platforms"
    ]
  },
  "restaurant-food-business-setup": {
    title: "Restaurant & Food Business Setup",
    eyebrow: "FOOD & BEVERAGE SPECIALIST",
    desc: "End-to-end licensing, premises Ejari, location verification, and municipal approvals for dine-in restaurants, cafés, and food outlets.",
    highlights: [
      "Mainland food trade licence issuance",
      "Dubai Municipality location and layout approvals",
      "Grease trap and hygiene compliance guidance",
      "Staff food handler health card processing"
    ],
    details: [
      "Initial premises inspection and layout approval",
      "DHA & Municipal food hygiene standards compliance",
      "Alcohol & outdoor seating permit coordination where applicable",
      "Commercial lease verification before signing Ejari"
    ]
  },
  "investor-visa": {
    title: "Investor & Partner Visas",
    eyebrow: "RESIDENCY & IMMIGRATION",
    desc: "Guidance on eligible residence, investor, partner, employment, and family visa procedures connected to your Dubai Mainland company.",
    highlights: [
      "3-year Mainland investor & partner residence visas",
      "MOHRE establishment card and quota allocation",
      "Dependent and family sponsorship processing",
      "Golden Visa eligibility assessment"
    ],
    details: [
      "Immigration file setup and entry permit issuance",
      "Medical fitness test and Emirates ID biometrics scheduling",
      "Residence visa stamping and status change coordination",
      "Family and employee visa sponsorship documentation"
    ]
  },
  "business-bank-account": {
    title: "Corporate Bank-Account Assistance",
    eyebrow: "BANKING & COMPLIANCE",
    desc: "Preparing compliant corporate banking files, documentation alignment, and introducing suitable UAE banking partners.",
    highlights: [
      "Structured application file preparation to meet bank KYC standards",
      "Introduction to suitable UAE commercial banks based on activity",
      "Guidance on business plan, invoices, and source of funds documentation",
      "Reducing common compliance rejections"
    ],
    details: [
      "Review of company trade licence, MOA, and Ejari",
      "Shareholder background & CV file structuring",
      "Bank meeting preparation and follow-up support",
      "Assistance with initial deposit criteria"
    ]
  }
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const { t, dir } = useLanguage();

  const data = SERVICE_DATA[serviceSlug] || SERVICE_DATA["dubai-mainland-company-formation"];

  return (
    <>
      <SEO
        title={`${data.title} | Ibrahim Setup`}
        description={data.desc}
        path={`/services/${serviceSlug}`}
      />
      <div className="bg-cream/30 py-16 lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">{data.eyebrow}</span>
            <h1 className="heading-xl mt-3 text-navy font-heading font-bold">
              {data.title}
            </h1>
            <p className="body-lg mt-6 text-muted-ink leading-relaxed">
              {data.desc}
            </p>

            <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-navy">
                Key Advantages &amp; Features
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-navy">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-navy">
                What Is Included
              </h2>
              <ul className="mt-6 space-y-3">
                {data.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-ink">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">
                      {i + 1}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/consultation"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-8 text-base font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
              >
                <span>Book Consultation for {data.title}</span>
                <ArrowRight className={`h-5 w-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
