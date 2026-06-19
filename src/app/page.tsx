
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl float-animation" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl float-animation" />
        <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Trusted Digital Solutions For Growing Businesses
              </p>
              <h1 className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-slate-900 md:text-7xl">
                Websites,
                <span className="text-blue-600">
                  {" "}Mobile Apps{" "}
                </span>
                & Software
                Built To Grow Your Business.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
                We build modern digital experiences that help businesses
                attract customers, automate operations and scale faster.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/estimate"
                  className="
                  rounded-full
                  bg-slate-900
                  px-8
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-slate-800
                  hover:shadow-xl
                  "
                >
                  Get Free Estimate
                </Link>
                <Link
                  href="/projects"
                  className="
                  rounded-full
                  border
                  border-slate-300
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:bg-slate-100
                  hover:scale-105
                  "
                >
                  View Projects
                </Link>
              </div>
              <div className="mt-16 flex flex-wrap gap-4">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  ✓ Fully Custom Development
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  ✓ Mobile Responsive
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  ✓ SEO Friendly Structure
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  ✓ Fast Loading Performance
                </div>
              </div>
                  </div>
              </Reveal>
              {/* HERO VISUAL */}
              <Reveal>
                <div className="relative hidden lg:block">
                  <div
                    className="
                    rounded-[40px]
                    border
                    border-slate-200
                    bg-white/80
                    backdrop-blur-xl
                    p-8
                    shadow-2xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mt-8">
                      <div className="rounded-2xl bg-slate-100 p-5">
                        <div className="text-sm text-slate-500">
                          Monthly Growth
                        </div>
                        <div className="mt-2 text-4xl font-bold text-slate-900">
                          +142%
                        </div>
                      </div>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border p-5">
                          <div className="text-sm text-slate-500">
                            Leads Generated
                          </div>
                          <div className="mt-2 text-3xl font-semibold">
                            1.2K+
                          </div>
                        </div>
                        <div className="rounded-2xl border p-5">
                          <div className="text-sm text-slate-500">
                            Conversion Rate
                          </div>
                          <div className="mt-2 text-3xl font-semibold">
                            8.4%
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 rounded-2xl border bg-white p-5">
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-500">
      Project Workflow
    </span>

    <span className="text-sm text-green-600">
      Active
    </span>
  </div>

  <div className="mt-6 space-y-4">

    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Discovery</span>
        <span>100%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 w-full rounded-full bg-blue-600" />
      </div>
    </div>

    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Design</span>
        <span>80%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 w-4/5 rounded-full bg-blue-600" />
      </div>
    </div>

    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Development</span>
        <span>60%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 w-3/5 rounded-full bg-blue-600" />
      </div>
    </div>

  </div>
</div>
                    </div>
                  </div>
                  {/* FLOATING CARD */}
                  <div
                    className="
                    absolute
                    -right-6
                    -bottom-8
                    rounded-3xl
                    border
                    border-white
                    bg-white
                    p-5
                    shadow-xl
                    "
                  >
                    <div className="text-sm text-slate-500">
                      Active Project
                    </div>
                    <div className="mt-2 font-semibold">
                      Business Website
                    </div>
                    <div className="mt-2 text-green-600">
                      ● In Progress
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          </section>
      {/* SERVICES */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-semibold text-slate-900">
            How We Help Businesses Grow
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Purpose-built digital products designed to help businesses
            attract customers, improve operations and scale faster.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Business Websites",
              "Mobile Applications",
              "Website Redesign",
              "Custom Software",
            ].map((item) => (
              <div
                key={item}
                className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                p-8
                backdrop-blur
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-2xl
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 font-semibold text-blue-600">
                  {item.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item}
                </h3>
                <p className="mt-3 text-slate-600">
                  Built to increase conversions and improve business efficiency.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <div className="mx-auto max-w-7xl px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</div>
      {/* WHY TEKNAS */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
              WHY TEKNAS Digital Solutions
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">
              More Than Just Development
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We focus on business growth, user experience and conversion,
              not just delivering code.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">
                Business First
              </h3>
              <p className="mt-3 text-slate-600">
                Every project is designed around helping your business
                generate more leads and customers.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">
                Custom Solutions
              </h3>
              <p className="mt-3 text-slate-600">
                No templates. Every website and application is tailored
                to your goals.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">
                Long-Term Support
              </h3>
              <p className="mt-3 text-slate-600">
                We help you after launch with updates,
                improvements and scaling.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      <div className="mx-auto max-w-7xl px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</div>
      {/* PROCESS SECTION */}
<Reveal>
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
      OUR PROCESS
    </p>
    <h2 className="mt-4 text-4xl font-semibold text-slate-900">
      A Clear Path From Idea To Launch
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      Every project follows a structured process designed
      to reduce confusion, improve communication and
      deliver better results.
    </p>
  </div>
  <div className="mt-16 grid gap-6 md:grid-cols-4">
    <div className="
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
    ">
      <div className="text-4xl font-bold text-blue-600">
        01
      </div>
      <h3 className="mt-6 text-xl font-semibold">
        Discovery
      </h3>
      <p className="mt-3 text-slate-600">
        We understand your business, goals,
        audience and requirements.
      </p>
    </div>
    <div className="
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
    ">
      <div className="text-4xl font-bold text-blue-600">
        02
      </div>
      <h3 className="mt-6 text-xl font-semibold">
        Strategy & Design
      </h3>
      <p className="mt-3 text-slate-600">
        We create structure, user flows and
        visual direction for the project.
      </p>
    </div>
    <div className="
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
    ">
      <div className="text-4xl font-bold text-blue-600">
        03
      </div>
      <h3 className="mt-6 text-xl font-semibold">
        Development
      </h3>
      <p className="mt-3 text-slate-600">
        Modern technologies are used to build
        fast, scalable and reliable solutions.
      </p>
    </div>
    <div className="
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
    ">
      <div className="text-4xl font-bold text-blue-600">
        04
      </div>
      <h3 className="mt-6 text-xl font-semibold">
        Launch & Growth
      </h3>
      <p className="mt-3 text-slate-600">
        Testing, deployment and continued
        support after launch.
      </p>
    </div>
  </div>
</section>
</Reveal>
<div className="mx-auto max-w-7xl px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</div>
{/* INDUSTRIES SECTION */}
<Reveal>
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
      INDUSTRIES WE SERVE
    </p>
    <h2 className="mt-4 text-4xl font-semibold text-slate-900">
      Solutions Tailored To Your Industry
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      Every industry has different challenges.
      We build digital solutions specifically
      designed around your business model.
    </p>
  </div>
  <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <Link
      href="/industries/healthcare"
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        Healthcare & Clinics
      </h3>
      <p className="mt-3 text-slate-600">
        Patient-focused websites, appointment
        systems and healthcare solutions.
      </p>
      <div className="mt-6 text-blue-600 font-medium">
        Explore →
      </div>
    </Link>
    <Link
      href="/industries/medical-agency"
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        Medical Agencies
      </h3>
      <p className="mt-3 text-slate-600">
        Product catalogues, distributor
        management and lead generation.
      </p>
      <div className="mt-6 text-blue-600 font-medium">
        Explore →
      </div>
    </Link>
    <Link
      href="/industries/real-estate"
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        Real Estate
      </h3>
      <p className="mt-3 text-slate-600">
        Property showcases, enquiry systems
        and lead generation funnels.
      </p>
      <div className="mt-6 text-blue-600 font-medium">
        Explore →
      </div>
    </Link>
    <Link
      href="/industries/education"
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        Education
      </h3>
      <p className="mt-3 text-slate-600">
        Course websites, admission funnels
        and student engagement systems.
      </p>
      <div className="mt-6 text-blue-600 font-medium">
        Explore →
      </div>
    </Link>
    <Link
      href="/industries/logistics"
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white/70
      backdrop-blur
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        Logistics
      </h3>
      <p className="mt-3 text-slate-600">
        Tracking systems, operational tools
        and workflow automation.
      </p>
      <div className="mt-6 text-blue-600 font-medium">
        Explore →
      </div>
    </Link>
    <Link
      href="/industries"
      className="
      group
      rounded-3xl
      border
      border-blue-200
      bg-blue-50
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold text-blue-700">
        View All Industries
      </h3>
      <p className="mt-3 text-slate-600">
        Explore every industry-specific
        solution we offer.
      </p>
      <div className="mt-6 text-blue-700 font-medium">
        Browse →
      </div>
    </Link>
  </div>
</section>
</Reveal>
<Reveal>
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
      BUILT FOR RESULTS
    </p>
    <h2 className="mt-4 text-4xl font-semibold text-slate-900">
      What Businesses Actually Need
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      We focus on measurable business outcomes,
      not just beautiful designs.
    </p>
  </div>
  <div className="mt-16 grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl">📈</div>
      <h3 className="mt-4 text-xl font-semibold">
        More Leads
      </h3>
      <p className="mt-3 text-slate-600">
        Websites designed to convert visitors
        into enquiries and customers.
      </p>
    </div>
    <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl">⚙️</div>
      <h3 className="mt-4 text-xl font-semibold">
        Better Operations
      </h3>
      <p className="mt-3 text-slate-600">
        Automations and software that reduce
        manual work and improve efficiency.
      </p>
    </div>
    <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl">🚀</div>
      <h3 className="mt-4 text-xl font-semibold">
        Future Ready
      </h3>
      <p className="mt-3 text-slate-600">
        Scalable technology built for long-term
        business growth.
      </p>
    </div>
  </div>
</section>
</Reveal>
      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="rounded-[40px] bg-slate-900 p-14 text-white shadow-2xl">
            <h2 className="text-4xl font-semibold">
              Ready To Build Something Exceptional?
            </h2>
            <p className="mt-4 text-white/70">
              Tell us about your project and receive a tailored estimate.
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
              hover:shadow-2xl
              "
            >
              Get Free Estimate →
            </Link>
          </div>
        </section>
      </Reveal>

    </main>
  );
}
