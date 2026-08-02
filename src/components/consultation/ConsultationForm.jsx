import { useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, Send, ShieldCheck } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { COUNTRIES } from "@/lib/countries";
import SearchableSelect from "@/components/consultation/SearchableSelect";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const DEFAULT_CONTACT_METHODS = [
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Phone Call", label: "Phone Call" },
  { value: "Email", label: "Email" },
];

const DEFAULT_SERVICES = [
  { value: "Mainland Company Formation", label: "Mainland Company Formation" },
  { value: "Free-Zone Company Formation", label: "Free-Zone Company Formation" },
  { value: "Offshore Company Formation", label: "Offshore Company Formation" },
  { value: "Visa Services", label: "Visa Services" },
  { value: "Golden Visa", label: "Golden Visa" },
  { value: "Corporate Bank Account Support", label: "Corporate Bank Account Support" },
  { value: "Corporate Tax or VAT", label: "Corporate Tax or VAT" },
  { value: "License Renewal", label: "License Renewal" },
  { value: "PRO Services", label: "PRO Services" },
  { value: "Legal or Business Consultation", label: "Legal or Business Consultation" },
  { value: "Not Sure Yet", label: "Not Sure Yet" },
];

const DEFAULT_TIMELINES = [
  { value: "As Soon as Possible", label: "As Soon as Possible" },
  { value: "Within 30 Days", label: "Within 30 Days" },
  { value: "Within 1-3 Months", label: "Within 1-3 Months" },
  { value: "More Than 3 Months", label: "More Than 3 Months" },
  { value: "Researching Options", label: "Researching Options" },
];

const DEFAULT_BUDGETS = [
  { value: "Under AED 10,000", label: "Under AED 10,000" },
  { value: "AED 10,000-20,000", label: "AED 10,000-20,000" },
  { value: "AED 20,000-40,000", label: "AED 20,000-40,000" },
  { value: "Above AED 40,000", label: "Above AED 40,000" },
  { value: "Not Sure Yet", label: "Not Sure Yet" },
  { value: "Prefer Not to Say", label: "Prefer Not to Say" },
];

const EMPTY = {
  full_name: "",
  email: "",
  phone_country_code: "+971",
  phone_number: "",
  country_of_residence: "",
  preferred_contact_method: "",
  service_required: "",
  business_activity: "",
  shareholder_count: "",
  visa_count: "",
  estimated_timeline: "",
  estimated_budget: "",
  message: "",
  privacy_consent: false,
  whatsapp_consent: false,
  website_field: "",
};

function genReference() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `IS-${new Date().getFullYear()}-${s}`;
}

const inputBase =
  "h-12 w-full rounded-lg border bg-card px-4 text-[15px] text-ink transition-colors placeholder:text-muted-ink focus-ring";

export default function ConsultationForm({ sourcePage = "Consultation Page" }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const cf = t.consultationForm || {};
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const renderTime = useRef(Date.now());

  const contactMethods = cf.methods || DEFAULT_CONTACT_METHODS;
  const servicesList = cf.services || DEFAULT_SERVICES;
  const timelinesList = cf.timelines || DEFAULT_TIMELINES;
  const budgetsList = cf.budgets || DEFAULT_BUDGETS;

  const countryOptions = useMemo(
    () => COUNTRIES.map((c) => ({ value: c.name, label: c.name })),
    []
  );
  const dialOptions = useMemo(() => COUNTRIES, []);

  const set = (field, value) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const err = cf.errors || {};
    const e = {};
    if (!values.full_name.trim() || values.full_name.trim().length < 2)
      e.full_name = err.fullNameRequired || "Please enter your full name (at least 2 characters).";
    if (!values.email.trim()) e.email = err.emailRequired || "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = err.emailInvalid || "Please enter a valid email address.";
    if (!values.phone_number.trim())
      e.phone_number = err.phoneRequired || "Phone number is required.";
    else if (!/^[0-9\s\-()]{6,}$/.test(values.phone_number))
      e.phone_number = err.phoneInvalid || "Please enter a valid phone number.";
    if (!values.country_of_residence)
      e.country_of_residence = err.countryRequired || "Please select your country of residence.";
    if (!values.preferred_contact_method)
      e.preferred_contact_method = err.contactMethodRequired || "Please choose a preferred contact method.";
    if (!values.service_required)
      e.service_required = err.serviceRequired || "Please select a service.";
    if (values.shareholder_count !== "" && (isNaN(values.shareholder_count) || Number(values.shareholder_count) < 1))
      e.shareholder_count = "Must be at least 1.";
    if (values.visa_count !== "" && (isNaN(values.visa_count) || Number(values.visa_count) < 0))
      e.visa_count = "Must be 0 or more.";
    if (values.message.length > 1500)
      e.message = "Message must be 1,500 characters or fewer.";
    if (!values.privacy_consent)
      e.privacy_consent = err.privacyRequired || "Please accept the privacy policy to continue.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setGeneralError("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.querySelector("[aria-invalid='true'], [data-invalid='true']");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (values.website_field.trim() !== "") {
      navigate("/thank-you", { state: { reference: "IS-" } });
      return;
    }
    if (Date.now() - renderTime.current < 3000) {
      setGeneralError("Form submitted too quickly. Please try again.");
      return;
    }

    setSubmitting(true);
    const refNum = genReference();
    try {
      await base44.entities.ConsultationInquiry.create({
        reference_number: refNum,
        full_name: values.full_name.trim(),
        email: values.email.trim().toLowerCase(),
        phone_country_code: values.phone_country_code,
        phone_number: values.phone_number.trim(),
        country_of_residence: values.country_of_residence,
        preferred_contact_method: values.preferred_contact_method,
        service_required: values.service_required,
        business_activity: values.business_activity.trim() || undefined,
        shareholder_count: values.shareholder_count ? Number(values.shareholder_count) : undefined,
        visa_count: values.visa_count ? Number(values.visa_count) : 0,
        estimated_timeline: values.estimated_timeline || undefined,
        estimated_budget: values.estimated_budget || undefined,
        message: values.message.trim() || undefined,
        privacy_consent: values.privacy_consent,
        whatsapp_consent: values.whatsapp_consent,
        status: "New",
        source_page: sourcePage,
      });
      navigate("/thank-you", { state: { reference: refNum } });
    } catch (err) {
      setGeneralError(
        err?.message || "Failed to submit request. Please try again or contact us directly."
      );
      setSubmitting(false);
    }
  };

  const fieldClass = (field) =>
    `${inputBase} ${errors[field] ? "border-destructive" : "border-input hover:border-blue"}`;
  const labelClass = "mb-1.5 block text-[14px] font-medium text-ink";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website_field}
            onChange={(e) => set("website_field", e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className={labelClass}>
            {cf.fullName || "Full Name"} <span className="text-destructive">*</span>
          </label>
          <input
            id="full_name"
            type="text"
            autoComplete="name"
            value={values.full_name}
            onChange={(e) => set("full_name", e.target.value)}
            aria-invalid={!!errors.full_name}
            className={fieldClass("full_name")}
            placeholder={cf.fullNamePlaceholder || "Your full name"}
          />
          {errors.full_name && <p className="mt-1.5 text-[13px] text-destructive">{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {cf.email || "Email Address"} <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={fieldClass("email")}
            placeholder={cf.emailPlaceholder || "you@example.com"}
          />
          {errors.email && <p className="mt-1.5 text-[13px] text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
        <div>
          <label htmlFor="phone_country_code" className={labelClass}>
            Code <span className="text-destructive">*</span>
          </label>
          <select
            id="phone_country_code"
            value={values.phone_country_code}
            onChange={(e) => set("phone_country_code", e.target.value)}
            className={`${fieldClass("phone_country_code")} pr-8 rtl:pl-8 rtl:pr-4`}
          >
            {dialOptions.map((c) => (
              <option key={c.code} value={c.dial}>
                {c.code} {c.dial}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="phone_number" className={labelClass}>
            {cf.phone || "Phone Number"} <span className="text-destructive">*</span>
          </label>
          <input
            id="phone_number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone_number}
            onChange={(e) => set("phone_number", e.target.value)}
            aria-invalid={!!errors.phone_number}
            className={fieldClass("phone_number")}
            placeholder={cf.phonePlaceholder || "5XX XXX XXX"}
          />
          {errors.phone_number && <p className="mt-1.5 text-[13px] text-destructive">{errors.phone_number}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="country_of_residence" className={labelClass}>
          {cf.countryOfResidence || "Current Country of Residence"} <span className="text-destructive">*</span>
        </label>
        <SearchableSelect
          id="country_of_residence"
          options={countryOptions}
          value={values.country_of_residence}
          onChange={(v) => set("country_of_residence", v)}
          placeholder={cf.selectCountry || "Select your country"}
          invalid={!!errors.country_of_residence}
          ariaLabel="Country of residence"
        />
        {errors.country_of_residence && (
          <p className="mt-1.5 text-[13px] text-destructive">{errors.country_of_residence}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            {cf.preferredContactMethod || "Preferred Contact Method"} <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {contactMethods.map((m) => {
              const val = typeof m === "string" ? m : m.value;
              const lbl = typeof m === "string" ? m : m.label;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => set("preferred_contact_method", val)}
                  aria-pressed={values.preferred_contact_method === val}
                  className={`h-12 rounded-lg border text-[13px] font-medium transition-colors focus-ring sm:text-[14px] ${
                    values.preferred_contact_method === val
                      ? "border-gold bg-gold/10 text-navy font-semibold"
                      : errors.preferred_contact_method
                      ? "border-destructive text-muted-ink"
                      : "border-input text-muted-ink hover:border-blue"
                  }`}
                >
                  {lbl}
                </button>
              );
            })}
          </div>
          {errors.preferred_contact_method && (
            <p className="mt-1.5 text-[13px] text-destructive">{errors.preferred_contact_method}</p>
          )}
        </div>
        <div>
          <label htmlFor="service_required" className={labelClass}>
            {cf.serviceRequired || "Service Required"} <span className="text-destructive">*</span>
          </label>
          <select
            id="service_required"
            value={values.service_required}
            onChange={(e) => set("service_required", e.target.value)}
            aria-invalid={!!errors.service_required}
            className={`${fieldClass("service_required")} pr-8 rtl:pl-8 rtl:pr-4`}
          >
            <option value="">{cf.selectService || "Select a service"}</option>
            {servicesList.map((s) => {
              const val = typeof s === "string" ? s : s.value;
              const lbl = typeof s === "string" ? s : s.label;
              return <option key={val} value={val}>{lbl}</option>;
            })}
          </select>
          {errors.service_required && (
            <p className="mt-1.5 text-[13px] text-destructive">{errors.service_required}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="business_activity" className={labelClass}>
            {cf.businessActivity || "Business Activity or Industry"}
          </label>
          <input
            id="business_activity"
            type="text"
            value={values.business_activity}
            onChange={(e) => set("business_activity", e.target.value)}
            className={`${fieldClass("business_activity")}`}
            placeholder={cf.businessActivityPlaceholder || "e.g. E-commerce, Consulting"}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="shareholder_count" className={labelClass}>
              {cf.shareholders || "Shareholders"}
            </label>
            <input
              id="shareholder_count"
              type="number"
              min={1}
              inputMode="numeric"
              value={values.shareholder_count}
              onChange={(e) => set("shareholder_count", e.target.value)}
              className={fieldClass("shareholder_count")}
              placeholder={cf.shareholdersPlaceholder || "1"}
            />
            {errors.shareholder_count && (
              <p className="mt-1.5 text-[13px] text-destructive">{errors.shareholder_count}</p>
            )}
          </div>
          <div>
            <label htmlFor="visa_count" className={labelClass}>
              {cf.visas || "Visas Needed"}
            </label>
            <input
              id="visa_count"
              type="number"
              min={0}
              inputMode="numeric"
              value={values.visa_count}
              onChange={(e) => set("visa_count", e.target.value)}
              className={fieldClass("visa_count")}
              placeholder={cf.visasPlaceholder || "0"}
            />
            {errors.visa_count && (
              <p className="mt-1.5 text-[13px] text-destructive">{errors.visa_count}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="estimated_timeline" className={labelClass}>
            {cf.timeline || "Estimated Setup Timeline"}
          </label>
          <select
            id="estimated_timeline"
            value={values.estimated_timeline}
            onChange={(e) => set("estimated_timeline", e.target.value)}
            className={`${fieldClass("estimated_timeline")} pr-8 rtl:pl-8 rtl:pr-4`}
          >
            <option value="">{cf.selectTimeline || "Select timeline"}</option>
            {timelinesList.map((tItem) => {
              const val = typeof tItem === "string" ? tItem : tItem.value;
              const lbl = typeof tItem === "string" ? tItem : tItem.label;
              return <option key={val} value={val}>{lbl}</option>;
            })}
          </select>
        </div>
        <div>
          <label htmlFor="estimated_budget" className={labelClass}>
            {cf.budget || "Estimated Budget"}
          </label>
          <select
            id="estimated_budget"
            value={values.estimated_budget}
            onChange={(e) => set("estimated_budget", e.target.value)}
            className={`${fieldClass("estimated_budget")} pr-8 rtl:pl-8 rtl:pr-4`}
          >
            <option value="">{cf.selectBudget || "Select budget"}</option>
            {budgetsList.map((bItem) => {
              const val = typeof bItem === "string" ? bItem : bItem.value;
              const lbl = typeof bItem === "string" ? bItem : bItem.label;
              return <option key={val} value={val}>{lbl}</option>;
            })}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {cf.message || "Message"}
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1500}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`w-full rounded-lg border bg-card px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-muted-ink focus-ring ${
            errors.message ? "border-destructive" : "border-input hover:border-blue"
          }`}
          placeholder={cf.messagePlaceholder || "Tell Ibrahim about your business goals, questions, or specific requirements."}
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.message ? (
            <p className="text-[13px] text-destructive">{errors.message}</p>
          ) : (
            <span />
          )}
          <span className="text-[13px] text-muted-ink">
            {values.message.length}/1500
          </span>
        </div>
      </div>

      <div className="space-y-3 rounded-lg border border-border bg-muted/50 p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={values.privacy_consent}
            onChange={(e) => set("privacy_consent", e.target.checked)}
            aria-invalid={!!errors.privacy_consent}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-input text-blue focus-ring"
          />
          <span className="text-[14px] leading-relaxed text-ink">
            {cf.privacyConsent || "I agree that Ibrahim Setup may contact me regarding my inquiry."}{" "}
            <Link to="/privacy-policy" className="font-medium text-blue underline hover:text-navy" target="_blank">
              {t.footer?.privacyPolicy || "Privacy Policy"}
            </Link>
            . <span className="text-destructive">*</span>
          </span>
        </label>
        {errors.privacy_consent && (
          <p className="text-[13px] text-destructive">{errors.privacy_consent}</p>
        )}
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={values.whatsapp_consent}
            onChange={(e) => set("whatsapp_consent", e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-input text-[#25D366] focus-ring"
          />
          <span className="text-[14px] leading-relaxed text-ink">
            {cf.whatsappConsent || "I agree to receive a response through WhatsApp."}
          </span>
        </label>
      </div>

      {generalError && (
        <div
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-[14px] text-destructive"
        >
          {generalError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-7 text-[16px] font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 focus-ring sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {cf.submitting || "Submitting..."}
          </>
        ) : (
          <>
            <Send className="h-5 w-5 rtl:rotate-180" />
            {cf.submit || "Request My Free Consultation"}
          </>
        )}
      </button>

      <p className="flex items-center gap-2 text-[13px] text-muted-ink">
        <ShieldCheck className="h-4 w-4 text-success" />
        {cf.secureNotice || "Your information is stored securely and never shared publicly."}
      </p>
    </form>
  );
}