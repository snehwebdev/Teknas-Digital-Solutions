import Link from "next/link";
import Reveal from "@/components/animations/Reveal";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* HERO */}

      <Reveal>
        <section className="max-w-4xl">

          <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-blue-600">
            ABOUT TEKNAS Digital Solutions
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Building Digital Solutions That Help Businesses Grow
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-600">
            Teknas Digital Solutions helps businesses build modern websites,
            mobile applications and software solutions that
            improve customer experience, automate operations
            and support long-term growth.
          </p>

        </section>
      </Reveal>

      {/* MISSION */}

      <Reveal>
        <section className="mt-24">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] border border-slate-200 bg-white/70 p-10 backdrop-blur">
              <h2 className="text-3xl font-semibold">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                To help businesses leverage technology through
                modern digital solutions that generate measurable
                business value instead of simply looking attractive.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white/70 p-10 backdrop-blur">
              <h2 className="text-3xl font-semibold">
                Our Vision
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                To become a trusted technology partner for
                growing businesses by delivering scalable,
                user-focused and business-driven digital products.
              </p>
            </div>

          </div>

        </section>
      </Reveal>

      {/* WHY US */}

      <Reveal>
        <section className="mt-24">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
              WHY CHOOSE US
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              What Makes Teknas Different
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">
                Business Focused
              </h3>

              <p className="mt-4 text-slate-600">
                Every decision is made with business growth,
                lead generation and user experience in mind.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">
                Custom Solutions
              </h3>

              <p className="mt-4 text-slate-600">
                We build tailored systems instead of relying
                on generic templates and shortcuts.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">
                Long-Term Support
              </h3>

              <p className="mt-4 text-slate-600">
                We stay available after launch for updates,
                improvements and future growth.
              </p>
            </div>

          </div>

        </section>
      </Reveal>

      {/* SERVICES */}

      <Reveal>
        <section className="mt-24">

          <h2 className="text-4xl font-semibold text-center">
            What We Build
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 p-8">
              Websites
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              Mobile Applications
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              Website Redesigns
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              Custom Software Solutions
            </div>

          </div>

        </section>
      </Reveal>

      {/* CTA */}

      <Reveal>
        <section className="mt-24">

          <div className="rounded-[40px] bg-slate-900 p-14 text-center text-white">

            <h2 className="text-4xl font-semibold">
              Ready To Build Something Great?
            </h2>

            <p className="mt-4 text-white/70">
              Get a tailored estimate based on your
              requirements and business goals.
            </p>

            <Link
              href="/estimate"
              className="
              mt-8
              inline-flex
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
      </Reveal>

    </main>
  );
}