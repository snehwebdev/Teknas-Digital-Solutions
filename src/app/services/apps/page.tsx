import Link from "next/link";

export const metadata = {
  title: "Mobile App Development | Teknas Digital Solutions",
  description:
    "Custom Android & iOS mobile application development for businesses.",
};

export default function AppsPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-24 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="max-w-3xl">

          <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            MOBILE APPLICATION DEVELOPMENT
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
            Android & iOS Apps
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              Built For Business Growth
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            We build premium mobile applications that help businesses
            increase customer engagement, automate services and deliver
            seamless digital experiences.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/estimate"
              className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Get Free Estimate
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300"
            >
              View Projects
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Android Apps",
              desc: "Native and cross-platform Android applications.",
            },
            {
              title: "iOS Apps",
              desc: "Beautiful applications for Apple devices.",
            },
            {
              title: "Admin Dashboard",
              desc: "Manage users, content and reports easily.",
            },
            {
              title: "API Integration",
              desc: "Payment gateways, WhatsApp, maps and more.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[30px] border border-white/70 bg-white/80 p-8 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Process */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Development Process
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Every mobile application is planned carefully to ensure
            scalability, performance and long-term success.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {[
            "Planning",
            "UI / UX",
            "Development",
            "Launch",
          ].map((step, index) => (

            <div
              key={step}
              className="rounded-[28px] border border-slate-200 bg-white/80 p-8 text-center backdrop-blur"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-2xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-[40px] border border-white/70 bg-white/80 p-14 text-center backdrop-blur-xl shadow-2xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Let's Build Your Mobile App
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Whether you're launching a startup or digitizing an existing
            business, we'll build an application that delivers results.
          </p>

          <Link
            href="/estimate"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1"
          >
            Start Your Project →
          </Link>

        </div>

      </section>

    </main>
  );
}