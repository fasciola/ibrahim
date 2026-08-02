export const SITE = {
  brand: "Ibrahim Setup",
  role: "UAE Business Setup Expert",
  domain: "ibrahimsetup.com",
  baseUrl: "https://ibrahimsetup.com",
  location: "Dubai, United Arab Emirates",
  phoneDisplay: "+971 56 896 4089",
  phoneTel: "+971568964089",
  email: "contact@ibrahimsetup.com",
  whatsappNumber: "971568964089",
  whatsappMessage:
    "Hello Ibrahim, I would like to learn more about setting up a business in the UAE.",
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message || SITE.whatsappMessage
  )}`;

export const consultationWhatsappLink = () =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hello Ibrahim, I would like a free consultation about setting up a business in the UAE."
  )}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Companies Founded" },
  { value: 100, suffix: "%", label: "Commitment to Client Service" },
  { value: 24, suffix: "h", label: "Average Response Time" },
];

export const EXPERTISE_TAGS = [
  "Company Formation",
  "Free Zone",
  "Mainland",
  "Dubai DET",
  "Professional Licensing",
];

export const ABOUT_TAGS = [
  "Mainland Formation",
  "Free-Zone Setup",
  "Investor Visas",
  "Corporate Banking Support",
  "Corporate Tax",
  "Government Procedures",
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consultation & Planning",
    description:
      "Understand your business model, target market, ownership requirements, budget, visa needs, and preferred timeline.",
  },
  {
    num: "02",
    title: "Business Setup & Licensing",
    description:
      "Select the appropriate jurisdiction, legal form, activities, trade name, approvals, and license structure.",
  },
  {
    num: "03",
    title: "Visa Services",
    description:
      "Coordinate investor, partner, employee, dependent, and eligible long-term residence applications.",
  },
  {
    num: "04",
    title: "Banking & Tax Support",
    description:
      "Assist with corporate bank account preparation, corporate tax registration, and VAT registration when applicable.",
  },
  {
    num: "05",
    title: "Ongoing Support",
    description:
      "Support license renewals, amendments, PRO services, compliance requirements, and operational changes.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "It was great to work with you. I really appreciate your kind support, professional knowledge, prompt responses, and action at all times.",
    name: "Client testimonial",
    source: "Via WhatsApp",
    rating: 5,
  },
  {
    quote:
      "Thank you for the high level of professionalism displayed during our discussions. Receiving the documents for my incorporated company was an excellent experience.",
    name: "Vaughn",
    source: "Via Email",
    rating: 5,
  },
  {
    quote:
      "Ibrahim was an amazing help from the start. He answered all my questions and helped complete the required processes within 24 hours.",
    name: "George M. J.",
    source: "Via Google Review",
    rating: 5,
  },
];

export const DISCLAIMER =
  "Ibrahim Setup is an independent business consultancy and is not a UAE government entity. Government approvals, banking decisions, visa eligibility, processing times, and fees remain subject to the relevant authorities and institutions.";