import Link from "next/link";
import { industryContent } from "@/data/industryContent";

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <div className="max-w-3xl">
        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          INDUSTRIES WE SERVE
        </p>

        <h1 className="mt-4 text-5xl font-semibold text-slate-900">
          Solutions Built For Your Industry
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Every industry has different requirements. Explore
          solutions specifically designed for your business.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {industryContent.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
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
              {industry.title.charAt(0)}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              {industry.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {industry.description}
            </p>

            <div className="mt-8 text-sm font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
              Explore →
            </div>
          </Link>
        ))}

      </div>
      <section className="mt-24">

        <div className="rounded-[40px] bg-slate-900 p-12 text-center text-white">

          <h2 className="text-3xl font-semibold">
            Not Sure Which Solution Fits Your Business?
          </h2>

          <p className="mt-4 text-white/70">
            Get a tailored estimate based on your industry,
            goals and required features.
          </p>

          <Link
            href="/estimate"
            className="
            mt-8
            inline-block
            rounded-full
            bg-white
            px-8
            py-4
            font-medium
            text-slate-900
            transition-all
            duration-300
            hover:scale-105
            "
          >
            Get Free Estimate
          </Link>

        </div>

      </section>

    </main>
  );
}