
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
export default function HomePage() {
  return (
   <main className="relative overflow-hidden bg-[#F8FBFF]">
    <div className="opacity-15">
    
</div>

  {/* Background Glow */}
  <div className="absolute left-[-220px] top-[-160px] h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[170px]" />

<div className="absolute right-[-220px] top-[120px] h-[650px] w-[650px] rounded-full bg-violet-500/15 blur-[180px]" />

<div className="absolute left-1/2 top-[40%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

  {/* Everything else here */}

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#60a5fa20,transparent_35%),radial-gradient(circle_at_bottom_right,#8b5cf620,transparent_40%)]" />

<div className="absolute left-[-220px] top-[-160px] h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[170px]" />

<div className="absolute right-[-220px] top-[120px] h-[650px] w-[650px] rounded-full bg-violet-500/15 blur-[180px]" />

<div className="absolute left-1/2 top-[40%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-36 lg:py-44">
        <div className="grid items-center gap-16 lg:grid-cols-2">
        {/*Hero*/}
          {/* Hero */}

<Reveal>
  <div className="max-w-3xl">

    {/* Badge */}

    <div
  className="
  inline-flex
  items-center
  gap-3
  rounded-full
  border
  border-blue-100/70
  bg-white/65
  backdrop-blur-xl
  px-6
  py-3
  shadow-[0_15px_40px_rgba(59,130,246,.08)]
  "
>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb]
via-[#06b6d4]
to-[#7c3aed] text-white shadow-[0_10px_35px_rgba(15,23,42,.08)]">
        ✨
      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
          Teknas Digital Solutions
        </p>

        <p className="text-sm font-semibold text-slate-700">
          Building modern digital products
        </p>

      </div>

    </div>

    {/* Heading */}

    <h1 className="
mt-16
text-6xl
font-black
leading-[0.95]
tracking-[-0.04em]
text-slate-900
md:text-8xl
">

      We Build

      <br />

      <span className="bg-gradient-to-r from-[#2563eb]
via-[#06b6d4]
to-[#7c3aed] bg-clip-text text-transparent">

        Websites,

      </span>

      <br />

      Mobile Apps

      <br />

      & Software

    </h1>

    {/* Description */}

    <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

      Premium websites and custom software engineered to generate
      more leads, improve customer experience and accelerate business
      growth.

    </p>

    {/* Buttons */}

    <div className="mt-16 flex flex-wrap gap-5">

      <Link
        href="/estimate"
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-violet-600
        px-10
        py-5
        text-lg
        font-bold
        text-white
        shadow-[0_20px_50px_rgba(59,130,246,.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        "
      >
        Get Free Estimate

        <span className="transition group-hover:translate-x-1">
          →
        </span>

      </Link>

      <Link
        href="/projects"
        className="
        rounded-full
        border
        border-slate-200
        bg-white/65 backdrop-blur-xl
        px-10
        py-5
        text-lg
        font-bold
        text-slate-700
        shadow-md
        transition-all
        duration-300
        hover:border-blue-300
        hover:text-blue-600
        hover:shadow-xl
        "
      >
        View Portfolio
      </Link>

    </div>

    {/* Trust */}

    <div className="mt-16 flex flex-wrap gap-8">

      <div>

        <p className="text-5xl font-black text-slate-900">
          50+
        </p>

        <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
          Successful Projects
        </p>

      </div>

      <div>

        <p className="text-5xl font-black text-slate-900">
          98%
        </p>

        <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
          Client Satisfaction
        </p>

      </div>

      <div>

        <p className="text-5xl font-black text-slate-900">
          24×7
        </p>

        <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
          Support
        </p>

      </div>

    </div>

    {/* Features */}

    <div className="mt-16 flex flex-wrap gap-3">

      {[
        "⚡ Fast Delivery",
        "🎯 Conversion Focused",
        "📱 Mobile First",
        "🔍 SEO Ready",
      ].map((item) => (

        <div
          key={item}
          className="
          rounded-full
          border
          border-white
          bg-white/65 backdrop-blur-xl
          px-5
          py-3
          text-sm
          font-medium
          shadow-[0_10px_35px_rgba(15,23,42,.08)]
          backdrop-blur-xl
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >
          {item}
        </div>

      ))}

    </div>

  </div>
</Reveal>
              {/* HERO VISUAL */}
              <Reveal>
  <div className="relative hidden lg:block">

    {/* Background Glow */}
    <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />
    <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-violet-300/20 blur-[120px]" />

    {/* Main Dashboard */}
    <div
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-white/40
      bg-white/65
      backdrop-blur-2xl
      p-8
      shadow-[0_30px_80px_rgba(15,23,42,0.12)]
      "
    >

      {/* Window Controls */}

      <div className="flex items-center gap-2">

        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-auto rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
          Live Dashboard
        </div>

      </div>

      {/* Growth Card */}

      <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-7 text-white shadow-xl">

        <p className="text-sm text-white/80">
          Monthly Growth
        </p>

        <div className="mt-2 flex items-end justify-between">

          <h2 className="text-5xl font-black">
            +142%
          </h2>

          <div className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
            ↑ 18% this month
          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-2 gap-5">

        <div className="rounded-3xl border border-slate-100 bg-white/65 backdrop-blur-xl p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Leads Generated
          </p>

          <h3 className="mt-3 text-5xl font-bold text-slate-900">
            1.2K+
          </h3>

          <p className="mt-3 text-sm text-emerald-600">
            ▲ +34%
          </p>

        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/65 backdrop-blur-xl p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Conversion Rate
          </p>

          <h3 className="mt-3 text-5xl font-bold text-slate-900">
            8.4%
          </h3>

          <p className="mt-3 text-sm text-emerald-600">
            ▲ +12%
          </p>

        </div>

      </div>

      {/* Workflow */}

      <div className="mt-7 rounded-3xl border border-slate-100 bg-white/65 backdrop-blur-xl p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <p className="font-semibold text-slate-900">
            Project Progress
          </p>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Active
          </span>

        </div>

        <div className="mt-7 space-y-5">

          {[
            ["Discovery", "100%", "100%"],
            ["UI / UX", "85%", "85%"],
            ["Development", "65%", "65%"],
          ].map(([label, value, width]) => (

            <div key={label}>

              <div className="mb-2 flex justify-between text-sm">

                <span>{label}</span>

                <span>{value}</span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2563eb]
via-[#06b6d4]
to-[#7c3aed]"
                  style={{ width }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* Floating Card */}

    <div
      className="
      absolute
      -right-10
      bottom-8
      rounded-3xl
      border
      border-white/50
      bg-white/90
      p-6
      shadow-2xl
      backdrop-blur-xl
      "
    >

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

          🚀

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Current Project
          </p>

          <h4 className="font-semibold text-slate-900">
            Business Website
          </h4>

        </div>

      </div>

      <div className="mt-5 flex items-center gap-2">

        <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

        <span className="font-medium text-emerald-600">
          In Progress
        </span>

      </div>

    </div>

  </div>
</Reveal>
            </div>
          </div>
          </section>
      {/* SERVICES */}
      <Reveal>
<section className="relative overflow-hidden mx-auto px-6 py-20">
{/* Grid Pattern */}

<div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>
    {/* Background Glow */}

    <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-cyan-200/40 blur-[160px]" />

    <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-violet-200/35 blur-[170px]" />

    <div className="relative mx-auto max-w-7xl px-6">

      <div className="mx-auto max-w-3xl text-center">

        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
          OUR SERVICES
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">

          Digital Solutions

          <br />

          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">

            Built For Growth

          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">

          Everything your business needs to establish a premium online
          presence, generate quality leads and automate daily operations.

        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
  {[
    {
      title: "Business Websites",
      icon: "🌐",
      href: "/services/websites",
      desc: "Modern high-converting business websites that build trust and generate more enquiries.",
    },
    {
      title: "Mobile Applications",
      icon: "📱",
      href: "/services/apps",
      desc: "Beautiful Android & iOS applications designed for seamless customer experiences.",
    },
    {
      title: "Website Redesign",
      icon: "✨",
      href: "/services/redesign",
      desc: "Transform outdated websites into premium, fast and conversion-focused experiences.",
    },
    {
      title: "Custom Software",
      icon: "⚙️",
      href: "/services/software",
      desc: "Custom dashboards, CRM systems and automation software built around your workflow.",
    },
  ].map((service) => (
    <Link
      key={service.title}
      href={service.href}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/70
      bg-white/80
      p-9
      backdrop-blur-xl
      shadow-[0_15px_50px_rgba(15,23,42,.08)]
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-200
      hover:shadow-[0_25px_70px_rgba(59,130,246,.18)]
      "
    >
      {/* Glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-200/30 to-violet-200/30 blur-3xl transition duration-500 group-hover:scale-150" />

      {/* Icon */}
      <div
        className="
        mb-8
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-violet-600
        text-3xl
        shadow-lg
        transition
        duration-300
        group-hover:rotate-6
        group-hover:scale-110
        "
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-5 leading-8 text-slate-600">
        {service.desc}
      </p>

      {/* CTA */}
      <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
        Learn More
        <span>→</span>
      </div>
    </Link>
  ))}
</div>

    </div>

  </section>
</Reveal>

<div className="mx-auto max-w-7xl px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</div>
{/* WHY TEKNAS */}
<Reveal>
  <section className="relative overflow-hidden py-32">
    <div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>

    {/* Background Glow */}

    <div className="absolute left-[-180px] top-10 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[160px]" />

    <div className="absolute right-[-180px] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[170px]" />

    <div className="relative mx-auto max-w-7xl px-6">

      <div className="mx-auto max-w-3xl text-center">

        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
          WHY CHOOSE TEKNAS
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">

          More Than

          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">

            {" "}Just Development

          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">

          We don't just build websites and software.
          We build digital systems that help businesses grow,
          attract customers and scale confidently.

        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">

        {[
          {
            icon: "📈",
            title: "Business First",
            desc: "Every decision is focused on generating more leads, increasing conversions and helping your business grow."
          },
          {
            icon: "💎",
            title: "Fully Custom",
            desc: "No templates. Every website, app and software solution is designed specifically for your business."
          },
          {
            icon: "🤝",
            title: "Long-Term Partner",
            desc: "Launch is just the beginning. We continue supporting, improving and scaling your digital products."
          }
        ].map((item) => (

          <div
            key={item.title}
            className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/70
            bg-white/80
            p-9
            backdrop-blur-xl
            shadow-[0_15px_50px_rgba(15,23,42,.08)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-blue-200
            hover:shadow-[0_25px_70px_rgba(59,130,246,.18)]
            "
          >

            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-200/30 to-violet-200/30 blur-3xl transition duration-500 group-hover:scale-150" />

            <div
              className="
              mb-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-violet-600
              text-3xl
              shadow-lg
              transition
              duration-300
              group-hover:rotate-6
              group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900">

              {item.title}

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              {item.desc}

            </p>

          </div>

        ))}

      </div>

    </div>

  </section>
</Reveal>

<div className="mx-auto max-w-7xl px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</div>
{/* PROCESS SECTION */}
<Reveal>
<section className="relative overflow-hidden py-28">
<div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#081224] via-[#0b172d] to-[#101f3d]" />
  <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
  <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
        OUR PROCESS
      </span>

      <h2 className="mt-6 text-5xl font-black text-white">
        From Idea To
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          {" "}Business Growth
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        We don't just build software. We follow a proven process that
        transforms your idea into a scalable digital product.
      </p>

    </div>

    <div className="relative mt-24">

      {/* Desktop Timeline */}
      <div className="absolute left-0 right-0 top-14 hidden h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 lg:block" />

      <div className="grid gap-8 lg:grid-cols-4">

        {[
          {
            no: "01",
            title: "Discovery",
            text: "Understanding your business, customers, goals and challenges."
          },
          {
            no: "02",
            title: "Planning & Design",
            text: "Creating UI, user journeys, wireframes and project strategy."
          },
          {
            no: "03",
            title: "Development",
            text: "Building a fast, scalable and SEO-optimized digital product."
          },
          {
            no: "04",
            title: "Launch & Scale",
            text: "Deployment, optimization, analytics and long-term support."
          }
        ].map((step) => (

          <div
            key={step.no}
            className="
            relative
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-cyan-400/50
            hover:bg-white/10
            hover:shadow-[0_25px_70px_rgba(34,211,238,0.20)]
            "
          >

            <div
              className="
              mx-auto
              mb-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-violet-600
              text-2xl
              font-black
              text-white
              shadow-[0_10px_35px_rgba(34,211,238,.45)]
              "
            >
              {step.no}
            </div>

            <h3 className="text-2xl font-bold text-white">
              {step.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
</Reveal>
{/* ================= INDUSTRIES ================= */}

<Reveal>
<section className="relative overflow-hidden py-28">
  <div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>
  <div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>

  <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-[130px]" />
  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-300/20 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-700">
        INDUSTRIES WE SERVE
      </span>

      <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
        Built Around
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
          {" "}Your Industry
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Every business works differently. We build digital products that solve
        the exact challenges of your industry instead of using generic
        templates.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title:"Healthcare",
          desc:"Appointment booking, doctors, patient trust & SEO.",
          icon:"🏥",
          href:"/industries/healthcare"
        },
        {
          title:"Medical Agencies",
          desc:"Catalogues, distributors & enquiry generation.",
          icon:"💊",
          href:"/industries/medical-agency"
        },
        {
          title:"Real Estate",
          desc:"Property showcase with lead generation.",
          icon:"🏢",
          href:"/industries/real-estate"
        },
        {
          title:"Education",
          desc:"Admissions, courses & student engagement.",
          icon:"🎓",
          href:"/industries/education"
        },
        {
          title:"Logistics",
          desc:"Tracking, automation & workflow management.",
          icon:"🚚",
          href:"/industries/logistics"
        },
        {
          title:"Explore More",
          desc:"See every industry we specialize in.",
          icon:"✨",
          href:"/industries"
        },
      ].map((industry)=>(
        <Link
          key={industry.title}
          href={industry.href}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/70
            bg-white/80
            p-9
            backdrop-blur-xl
            shadow-[0_15px_50px_rgba(15,23,42,.08)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-blue-200
            hover:shadow-[0_25px_70px_rgba(59,130,246,.18)]
            "
        >

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-violet-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-3xl shadow-xl">
              {industry.icon}
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              {industry.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {industry.desc}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">
              Explore
              <span className="transition group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>

        </Link>
      ))}

    </div>

  </div>

</section>
</Reveal>

{/* ================= RESULTS ================= */}

<Reveal>
<section className="py-28">
  <div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>

<div className="mx-auto max-w-7xl px-6">

<div className="rounded-[40px] border border-white/60 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-14 shadow-[0_40px_80px_rgba(0,0,0,.25)]">

<div className="text-center">

<span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-300">
BUILT FOR RESULTS
</span>

<h2 className="mt-6 text-5xl font-black text-white">
Technology That
<span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
{" "}Grows Businesses
</span>
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
Every project is designed to increase revenue, automate work and create
long-term business value.
</p>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-3">

{[
{
icon:"📈",
title:"Generate More Leads",
text:"Conversion-focused design built to bring more enquiries."
},
{
icon:"⚙️",
title:"Save Time",
text:"Automation reduces repetitive manual work."
},
{
icon:"🚀",
title:"Scale Faster",
text:"Modern technology that grows with your business."
},
].map((item)=>(
<div
key={item.title}
className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur
transition
duration-500
hover:-translate-y-2
hover:bg-white/10
"
>

<div className="text-5xl">
{item.icon}
</div>

<h3 className="mt-6 text-2xl font-bold text-white">
{item.title}
</h3>

<p className="mt-4 leading-7 text-slate-300">
{item.text}
</p>

</div>
))}

</div>

</div>

</div>

</section>
</Reveal>
{/* FINAL CTA */}
<Reveal>
  <section className="relative overflow-hidden py-28">
<div
  className="
  absolute
  inset-0
  opacity-[0.035]
  pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>
    {/* Background Glow */}
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[180px]" />
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-[170px]" />

    <div className="relative mx-auto max-w-6xl px-6">

      <div
        className="
        overflow-hidden
        rounded-[42px]
        border
        border-white/40
        bg-gradient-to-br
        from-slate-900
        via-[#0f172a]
        to-[#111827]
        p-14
        shadow-[0_35px_80px_rgba(15,23,42,.35)]
        "
      >

        {/* Badge */}

        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur">

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            🚀
          </span>

          <span className="text-sm font-semibold text-cyan-200">
            Let's Build Something Amazing
          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">

          Ready To Build

          <br />

          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            Your Next Digital Product?
          </span>

        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you're starting from scratch or upgrading an existing
          business, we'll help you create a modern digital experience
          that looks premium, performs fast and helps your business grow.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="/estimate"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-violet-600
            px-9
            py-4
            text-lg
            font-semibold
            text-white
            shadow-[0_15px_45px_rgba(59,130,246,.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            "
          >
            Get Free Estimate →

          </Link>

          <Link
            href="/contact"
            className="
            rounded-full
            border
            border-white/15
            bg-white/10
            px-9
            py-4
            bg-gradient-to-r
            from-white
            to-gray-300
            text-lg
            font-bold
            backdrop-blur
            transition-all
            duration-300
            hover:bg-white/20
            hover:-translate-y-1
            "
          >
           <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Book A Free Demo
          </span>
          </Link>

        </div>

        {/* Trust Points */}

        <div className="mt-14 flex flex-wrap gap-4">

          {[
            "✓ Free Consultation",
            "✓ Custom Built Solutions",
            "✓ Transparent Pricing",
            "✓ SEO Optimized",
            "✓ Mobile Responsive",
            "✓ Ongoing Support",
          ].map((item) => (

            <div
              key={item}
              className="
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-3
              text-sm
              font-medium
              text-white
              backdrop-blur
              "
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>

  </section>
</Reveal>
    </main>
  );
}
