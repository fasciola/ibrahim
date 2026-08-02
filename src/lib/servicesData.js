import {
  Building2,
  Plane,
  Landmark,
  Scale,
  LifeBuoy,
  Zap,
} from "lucide-react";

export const SERVICE_CARDS = [
  {
    icon: Building2,
    title: "Business Setup",
    description:
      "Mainland, free-zone, and offshore company formation aligned with your activities, ownership needs, market strategy, and budget.",
    included: [
      "Mainland LLC Formation",
      "Free-Zone Registration",
      "Offshore Company Setup",
    ],
  },
  {
    icon: Plane,
    title: "Visa Services",
    description:
      "End-to-end guidance for eligible residency, investor, employment, partner, and family applications.",
    included: [
      "UAE Golden Visa Support",
      "Investor and Partner Visas",
      "Employment and Family Visas",
    ],
  },
  {
    icon: Landmark,
    title: "Bank Account & Taxes",
    description:
      "Corporate banking preparation together with corporate tax and VAT registration assistance.",
    included: [
      "Corporate Bank Account Support",
      "Corporate Tax Registration",
      "VAT Registration",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Consultation",
    description:
      "Practical assistance with company documents, agreements, trademark applications, and business structuring.",
    included: [
      "Ownership and Structuring Advice",
      "MOA and LSA Coordination",
      "Trademark Registration Support",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "Post-formation support that keeps your company records, renewals, and government requirements organized.",
    included: [
      "License Renewals",
      "PRO Services",
      "Office Space Solutions",
    ],
  },
  {
    icon: Zap,
    title: "Priority Setup Service",
    description:
      "Coordinated priority assistance for entrepreneurs working with demanding launch schedules.",
    included: [
      "Priority Application Coordination",
      "Dedicated Point of Contact",
      "Time-Sensitive Document Follow-Up",
    ],
  },
];

export const DETAILED_SERVICES = [
  {
    id: "mainland-formation",
    title: "Mainland Company Formation",
    category: "Business Setup",
    description:
      "Establish a Dubai or UAE mainland company with activities suited to the local market, supported by guidance on legal form, ownership, and approvals.",
    deliverables: [
      "Trade name reservation and initial approval",
      "Legal structure and ownership guidance",
      "License activity selection",
      "Local sponsor or service agent arrangement where relevant",
    ],
    suitableFor:
      "Businesses trading directly within the UAE market or bidding on government and local contracts.",
    note: "Mainland requirements depend on the activity and the relevant licensing authority.",
  },
  {
    id: "freezone-formation",
    title: "Free-Zone Company Formation",
    category: "Business Setup",
    description:
      "Set up in a UAE free zone tailored to your industry, with full foreign ownership and activity-appropriate facilities.",
    deliverables: [
      "Free-zone selection based on activity and budget",
      "License and facility coordination",
      "Share capital and structuring guidance",
      "Pre-approval and issuance support",
    ],
    suitableFor:
      "Investors seeking 100% foreign ownership, export-focused operations, or industry-specific ecosystems.",
    note: "Free-zone choice affects visa quotas, facilities, and permitted activities.",
  },
  {
    id: "offshore-formation",
    title: "Offshore Company Formation",
    category: "Business Setup",
    description:
      "Incorporate an offshore company for asset holding, international trade, or structured ownership purposes.",
    deliverables: [
      "Jurisdiction and structure advice",
      "Incorporation documentation",
      "Registered agent coordination",
      "Banking introduction support",
    ],
    suitableFor: "International investors needing a holding or trading structure outside the UAE mainland.",
    note: "Offshore companies cannot conduct business directly within the UAE market.",
  },
  {
    id: "trade-name-approval",
    title: "Trade Name & Initial Approval",
    category: "Business Setup",
    description:
      "Reserve a compliant trade name and secure initial approval to proceed with your licensing application.",
    deliverables: [
      "Trade name availability and compliance check",
      "Initial approval submission",
      "Activity and legal form confirmation",
    ],
    suitableFor: "Every new business formation requiring a registered trade name.",
    note: "Trade names must follow the naming guidelines of the relevant authority.",
  },
  {
    id: "commercial-professional-licensing",
    title: "Commercial & Professional Licensing",
    category: "Licensing",
    description:
      "Obtain or amend commercial and professional licenses aligned with your business activities.",
    deliverables: [
      "License application and renewal",
      "Activity amendments",
      "Approval coordination with external authorities",
    ],
    suitableFor: "Traders, consultants, freelancers, and professionals requiring a licensed activity.",
    note: "Regulated activities may require additional external approvals.",
  },
  {
    id: "investor-partner-visa",
    title: "Investor & Partner Visa Assistance",
    category: "Visas",
    description:
      "Coordinate investor and partner residency applications tied to company shareholding.",
    deliverables: [
      "Eligibility review",
      "Entry permit and status change coordination",
      "Medical and biometrics scheduling",
    ],
    suitableFor: "Company shareholders and partners seeking UAE residency.",
    note: "Visa eligibility depends on the licensing authority and company structure.",
  },
  {
    id: "employment-family-visa",
    title: "Employment & Family Visa Assistance",
    category: "Visas",
    description:
      "Support employment and dependent visa applications for staff and family members.",
    deliverables: [
      "Quota and category planning",
      "Application and renewal support",
      "Dependent and family visa coordination",
    ],
    suitableFor: "Companies hiring staff or sponsoring family members.",
    note: "Visa quotas depend on the license type and facility.",
  },
  {
    id: "golden-visa",
    title: "Golden Visa Eligibility Guidance",
    category: "Visas",
    description:
      "Guidance on UAE Golden Visa categories and eligibility for investors, entrepreneurs, and skilled professionals.",
    deliverables: [
      "Category eligibility assessment",
      "Documentation planning",
      "Application pathway guidance",
    ],
    suitableFor: "Eligible investors, entrepreneurs, and specialists seeking long-term residency.",
    note: "Golden Visa approval remains subject to the relevant immigration authority.",
  },
  {
    id: "corporate-banking",
    title: "Corporate Banking Application Support",
    category: "Banking",
    description:
      "Prepare corporate bank account applications and organize the supporting documentation banks typically request.",
    deliverables: [
      "Bank selection guidance",
      "Application and document preparation",
      "Compliance and KYC readiness review",
    ],
    suitableFor: "Newly formed companies and investors opening corporate accounts.",
    note: "Final account approval is at the discretion of the bank.",
  },
  {
    id: "corporate-tax",
    title: "Corporate Tax Registration",
    category: "Corporate Tax and VAT",
    description:
      "Assist with UAE corporate tax registration and compliance readiness.",
    deliverables: [
      "Tax registration support",
      "Record-keeping guidance",
      "Filing obligation overview",
    ],
    suitableFor: "Companies subject to UAE corporate tax regulations.",
    note: "Tax obligations depend on turnover, structure, and current regulations.",
  },
  {
    id: "vat-registration",
    title: "VAT Registration",
    category: "Corporate Tax and VAT",
    description:
      "Support VAT registration and help you understand ongoing filing requirements.",
    deliverables: [
      "Registration eligibility check",
      "Application support",
      "Filing cycle overview",
    ],
    suitableFor: "Businesses meeting the mandatory or voluntary VAT registration thresholds.",
    note: "VAT thresholds and obligations are set by the Federal Tax Authority.",
  },
  {
    id: "license-renewal-amendments",
    title: "License Renewal & Amendments",
    category: "Renewals and Ongoing Support",
    description:
      "Manage license renewals and amendments to keep your business compliant year after year.",
    deliverables: [
      "Renewal reminders and processing",
      "Activity and ownership amendments",
      "Approval coordination",
    ],
    suitableFor: "Existing companies approaching renewal or requiring changes.",
    note: "Late renewals may incur penalties set by the licensing authority.",
  },
  {
    id: "pro-government",
    title: "PRO & Government Transaction Support",
    category: "Renewals and Ongoing Support",
    description:
      "Handle government transactions and documentation through professional PRO services.",
    deliverables: [
      "Document processing and attestation",
      "Government portal submissions",
      "Follow-up on pending transactions",
    ],
    suitableFor: "Companies without a dedicated PRO or needing transactional support.",
    note: "Processing times depend on the relevant authority.",
  },
  {
    id: "moa-lsa",
    title: "MOA & LSA Document Coordination",
    category: "Legal",
    description:
      "Coordinate Memorandum of Association and Local Service Agent agreements.",
    deliverables: [
      "Document drafting and review coordination",
      "Notarization scheduling",
      "Amendment support",
    ],
    suitableFor: "New formations and partnerships updating ownership terms.",
    note: "Document formats must comply with the licensing authority's requirements.",
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration Assistance",
    category: "Legal",
    description:
      "Support trademark applications to help protect your brand in the UAE.",
    deliverables: [
      "Trademark search guidance",
      "Application preparation support",
      "Filing follow-up",
    ],
    suitableFor: "Businesses protecting brand names, logos, and identifiers.",
    note: "Trademark approval is granted by the UAE Ministry of Economy.",
  },
  {
    id: "office-workspace",
    title: "Office, Flexi-Desk & Workspace Guidance",
    category: "Renewals and Ongoing Support",
    description:
      "Advise on office, flexi-desk, and workspace solutions that meet licensing and visa requirements.",
    deliverables: [
      "Workspace requirement assessment",
      "Facility and free-zone option comparison",
      "Leasing coordination support",
    ],
    suitableFor: "Companies needing a registered address or visa-qualifying facility.",
    note: "Workspace choice affects visa quota and license type.",
  },
];

export const SERVICE_CATEGORIES = [
  "Getting Started",
  "Business Setup",
  "Licensing",
  "Visas",
  "Banking",
  "Corporate Tax and VAT",
  "Renewals and Ongoing Support",
  "Legal",
];