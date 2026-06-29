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
    min += 6000;
    max += 15000;
    break;

  case "redesign":
    min += 8000;
    max += 18000;
    break;

  case "app":
    min += 35000;
    max += 80000;
    break;

  case "software":
    min += 60000;
    max += 180000;
    break;

  default:
    min += 7000;
    max += 16000;
}

  // PAGES
  // ₹800–₹2,000 per page — accounts for design, dev, content integration

  min += pages * 250;
  max += pages * 600;

  // FEATURES
  // ₹2,500–₹6,000 per feature — integrations, custom components, APIs etc.

  min += features * 1000;
  max += features * 2500;

  // INDUSTRY COMPLEXITY
  // Healthcare: compliance considerations, appointment flows, doctor/service layouts
  // Real estate: property listings, filters, map integrations, lead capture
  // Medical agency: multi-location, team pages, specialisation pages, NABH/trust signals
  // E-commerce: product catalogue, cart, payment gateway (Razorpay/PayU), order mgmt
  // Education: LMS features, batch/course mgmt, student portals
  // Finance/BFSI: regulatory copy, calculators, lead forms, high trust design bar

  switch (industry) {
  case "healthcare":
    min += 1500;
    max += 4000;
    break;

  case "real-estate":
    min += 3000;
    max += 9000;
    break;

  case "medical_agency":
    min += 2500;
    max += 6000;
    break;

  case "ecommerce":
    min += 8000;
    max += 20000;
    break;

  case "education":
    min += 2500;
    max += 6000;
    break;

  case "finance":
    min += 4000;
    max += 10000;
    break;

  case "restaurant":
    min += 1000;
    max += 3000;
    break;

  case "logistics":
    min += 2500;
    max += 7000;
    break;

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