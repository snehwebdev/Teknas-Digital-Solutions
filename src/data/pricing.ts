type PricingInput = {
  service: string;
  industry: string;
  pages: number;
  features: number;
  timeline: string;
};

export function calculateEstimate({
  service,
  industry,
  pages,
  features,
  timeline,
}: PricingInput) {
  let min = 0;
  let max = 0;

  // SERVICE BASE
  // Ranges reflect Indian freelancer/small-agency market (INR)
  // website:   simple brochure/business site
  // redesign:  existing site overhaul, typically more discovery work
  // app:       mobile or web app with backend (React Native / Flutter / Next.js)
  // software:  custom SaaS, ERP, CRM, or enterprise tooling

  switch (service) {
    case "website":
      min += 10000;
      max += 30000;
      break;

    case "redesign":
      min += 15000;
      max += 40000;
      break;

    case "app":
      min += 60000;
      max += 150000;
      break;

    case "software":
      min += 150000;
      max += 500000;
      break;

    default:
      min += 20000;
      max += 45000;
  }

  // PAGES
  // ₹800–₹2,000 per page — accounts for design, dev, content integration

  min += pages * 700;
  max += pages * 1500;

  // FEATURES
  // ₹2,500–₹6,000 per feature — integrations, custom components, APIs etc.

  min += features * 2000;
  max += features * 4500;

  // INDUSTRY COMPLEXITY
  // Healthcare: compliance considerations, appointment flows, doctor/service layouts
  // Real estate: property listings, filters, map integrations, lead capture
  // Medical agency: multi-location, team pages, specialisation pages, NABH/trust signals
  // E-commerce: product catalogue, cart, payment gateway (Razorpay/PayU), order mgmt
  // Education: LMS features, batch/course mgmt, student portals
  // Finance/BFSI: regulatory copy, calculators, lead forms, high trust design bar

  switch (industry) {
    case "healthcare":
      min += 5000;
      max += 12000;
      break;

    case "real-estate":
      min += 12000;
      max += 30000;
      break;

    case "medical_agency":
      min += 8000;
      max += 22000;
      break;

    case "ecommerce":
      min += 20000;
      max += 60000;
      break;

    case "education":
      min += 8000;
      max += 18000;
      break;

    case "finance":
      min += 18000;
      max += 45000;
      break;

    case "restaurant":
      min += 3000;
      max += 8000;
      break;

    case "logistics":
      min += 8000;
      max += 20000;
      break;

    // General / IT / startup — no surcharge

    default:
      break;
  }

  // TIMELINE
  // priority:  delivery in under 2 weeks — rush premium
  // standard:  3–6 weeks — default, no adjustment
  // flexible:  6+ weeks — small discount for relaxed scope management

  if (timeline === "priority") {
    min = Math.round(min * 1.3);
    max = Math.round(max * 1.4);
  }

  if (timeline === "flexible") {
    min = Math.round(min * 0.9);
    max = Math.round(max * 0.92);
  }

  return {
    min: Math.round(min),
    max: Math.round(max),
  };
}