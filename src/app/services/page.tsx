import Link from "next/link";

const services = [
  {
    title: "Business Websites",
    description:
      "High-converting websites designed to generate enquiries, bookings, and trust.",
    href: "/services/websites",
  },
  {
    title: "Mobile Applications",
    description:
      "iOS & Android apps that improve engagement and streamline operations.",
    href: "/services/apps",
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, conversion-focused experiences.",
    href: "/services/redesign",
  },
  {
    title: "Custom Software",
    description:
      "Tailored systems to automate workflows and improve efficiency.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      
      {/* HEADER */}
      <div className="max-w-3xl">
        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
  OUR SERVICES
</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Services built to grow your business
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          We don’t just build websites or apps — we build systems that help
          businesses attract customers, increase revenue, and scale operations.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="
group
relative
overflow-hidden
rounded-[32px]
border
border-slate-200
bg-white/80
backdrop-blur-xl
p-8
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)]
"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-semibold">
              {service.title.charAt(0)}
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {service.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {service.description}
            </p>

            <div className="mt-6 text-sm font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
  Explore →
</div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-semibold">
          Not sure what you need?
        </h2>

        <p className="mt-4 text-white/70">
          Get a free estimate based on your business type and goals.
        </p>

        <Link
          href="/estimate"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-slate-900"
        >
          Get Estimate
        </Link>
      </div>

    </main>
  );
}