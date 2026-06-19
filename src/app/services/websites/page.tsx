import Link from "next/link";

const industries = [
  {
    name: "Healthcare & Clinics",
    href: "/offer/websites/healthcare",
  },
  {
    name: "Medical Agencies",
    href: "/offer/websites/medical_agency",
  },
  {
    name: "Gyms & Fitness",
    href: "/offer/websites/fitness",
  },
  {
    name: "Restaurants & Cafes",
    href: "/offer/websites/restaurants",
  },
  {
    name: "Real Estate",
    href: "/offer/websites/real-estate",
  },
  {
    name: "Education & Coaching",
    href: "/offer/websites/education",
  },
  {
    name: "Other Businesses",
    href: "/offer/websites/others",
  },
];

export default function WebsitesServicePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* HEADER */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Business Websites That Actually Bring Customers
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          We don’t build “just websites”. We build conversion systems that
          turn visitors into enquiries, bookings, and paying customers.
        </p>
      </div>

      {/* INDUSTRY SELECTION */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          What industry is your business in?
        </h2>

        <p className="mt-3 text-slate-600">
          We tailor design, features, and structure based on your industry.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-3xl border border-black/5 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-slate-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                View tailored solution →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 rounded-3xl bg-slate-900 p-12 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Not sure what you need?
        </h2>

        <p className="mt-4 text-white/70">
          Get a custom estimate and we’ll guide you.
        </p>

        <Link
          href="/estimate"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-slate-900"
        >
          Get Estimate
        </Link>
      </section>

    </main>
  );
}