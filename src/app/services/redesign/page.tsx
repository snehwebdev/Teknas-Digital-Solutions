import Link from "next/link";

export default function RedesignPage() {
  return (
    <main className="relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
          Website Redesign
        </span>

        <h1 className="mt-6 text-5xl font-black text-slate-900">
          Turn An
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            {" "}Outdated Website
          </span>
          <br />
          Into A Premium Brand Experience
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          If your website looks old, loads slowly or isn't generating enquiries,
          we'll completely redesign it with modern UI, better performance,
          stronger branding and improved conversions.
        </p>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 md:grid-cols-2">

          {[
            "Modern Premium Design",
            "Mobile Responsive Layout",
            "SEO Improvements",
            "Performance Optimization",
            "Better User Experience",
            "Higher Conversion Rate",
          ].map((item) => (

            <div
              key={item}
              className="rounded-[32px] border border-white/70 bg-white/80 p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                {item}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Upgrade your existing website using modern UI/UX principles and the latest technologies.
              </p>

            </div>

          ))}

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-[40px] border border-white/70 bg-white/80 p-14 text-center backdrop-blur-xl shadow-2xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Ready For A Complete Website Makeover?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We'll redesign your existing website into a premium digital experience that reflects your brand.
          </p>

          <Link
            href="/estimate"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
          >
            Request Free Estimate →
          </Link>

        </div>

      </section>

    </main>
  );
}