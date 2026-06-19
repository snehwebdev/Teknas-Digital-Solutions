import Link from "next/link";

type OfferData = {
  title: string;
  benefits: string[];
  features: string[];
};

const data: Record<string, OfferData> = {
  healthcare: {
    title: "Healthcare Website Solution",
    benefits: [
      "Increase patient appointments through online booking",
      "Build instant trust with professional medical branding",
      "Reduce phone workload with automated enquiry system",
      "Improve local Search Engine visibility for clinics and doctors",
      "Enable 24/7 appointment requests",
      "Showcase doctors, services, and specializations clearly",
      "Reduce missed appointments with reminders",
      "Improve patient experience with easy navigation",
      "Strengthen credibility vs competitors without websites",
    ],
    features: [
      "Online appointment booking system",
      "Doctor & services listing",
      "WhatsApp integration for instant queries",
      "SEO optimized for local searches",
      "Mobile-first responsive design",
      "Secure contact forms",
    ],
  },

  "medical_agency": {
    title: "Medical Agency Website Solution",
    benefits: [
      "Attract hospitals and clinic partnership enquiries",
      "Build strong B2B credibility in medical industry",
      "Showcase services in structured corporate format",
      "Generate inbound leads without cold outreach",
      "Improve brand authority in healthcare sector",
      "Highlight past work and case studies effectively",
      "Increase trust with professional presentation",
      "Convert visitors into partnership discussions",
      "Position as a premium service provider",
    ],
    features: [
      "Corporate landing pages",
      "Service showcase sections",
      "Lead capture forms",
      "Portfolio/case studies section",
      "SEO optimized structure",
    ],
  },

  fitness: {
    title: "Fitness Website Solution",
    benefits: [
      "Increase gym memberships and trial signups",
      "Show transformation results to attract customers",
      "Enable online class and trainer bookings",
      "Improve local gym discovery on Google",
      "Build strong fitness brand identity",
      "Reduce dependency on walk-in customers",
      "Promote personal trainers effectively",
      "Increase retention with membership systems",
      "Show schedules and programs clearly",
    ],
    features: [
      "Membership plans section",
      "Trainer profiles",
      "Class schedule system",
      "Booking integration",
      "Before/after gallery",
    ],
  },

  others: {
    title: "Business Website Solution",
    benefits: [
      "Increase customer enquiries",
      "Build online credibility",
      "Improve brand trust instantly",
      "Generate leads 24/7",
    ],
    features: [
      "Custom landing pages",
      "Lead forms",
      "SEO optimization",
      "Mobile responsive design",
    ],
  },
};

export default async function OfferPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;

  const current =
    data[industry] ?? data.others;

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* TITLE */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          {current.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          A conversion-focused website system designed specifically for your
          industry to help you get more customers and enquiries.
        </p>
      </div>

      {/* BENEFITS */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Benefits You Get
        </h2>

        <div className="mt-6 grid gap-4">
          {current.benefits.slice(0, 10).map((b, i) => (
            <div
              key={i}
              className="flex gap-3 text-slate-700"
            >
              <span className="text-green-600 font-semibold">+</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          Real Impact: Without vs With Website
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">
            <h3 className="text-lg font-semibold text-red-600">
              Without Website
            </h3>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Relying only on word-of-mouth</li>
              <li>• Losing customers to competitors online</li>
              <li>• No 24/7 lead generation</li>
              <li>• Low trust for new customers</li>
              <li>• Hard to scale beyond local reach</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-green-100 bg-green-50 p-8">
            <h3 className="text-lg font-semibold text-green-700">
              With Teknas Digital Solutions Website
            </h3>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Continuous enquiry flow 24/7</li>
              <li>• Strong brand credibility instantly</li>
              <li>• Higher conversion from visitors</li>
              <li>• Automated booking & leads</li>
              <li>• Scalable online presence</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          What We Build For You
        </h2>

        <ul className="mt-6 space-y-4">
          {current.features.map((f, i) => (
            <li
              key={i}
              className="flex gap-3 text-slate-700"
            >
              <span className="text-slate-900 font-semibold">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <Link
          href="/estimate"
          className="inline-block rounded-full bg-slate-900 px-8 py-3 text-white"
        >
          Get Estimate for Your Website
        </Link>
      </section>

    </main>
  );
}