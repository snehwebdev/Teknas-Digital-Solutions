import Link from "next/link";
import { portfolioProjects as projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          FEATURED PROJECTS
        </p>

        <h1 className="mt-4 text-5xl font-semibold text-slate-900">
          Featured Projects
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Explore industry specific solutions designed
          for modern businesses.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Healthcare
  </div>

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Medical Agency
  </div>

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Education
  </div>

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Fitness
  </div>

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Real Estate
  </div>

  <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
    Mobile Apps
  </div>

</div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

  {[
    {
      name: "Healthcare",
      slug: "healthcare",
      description: "Hospitals, Clinics, Dentists & Healthcare Businesses",
      icon: "🏥",
      color:
        "from-blue-600 via-cyan-500 to-violet-600",
    },

    {
      name: "Medical Agency",
      slug: "medical-agency",
      description: "Pharmaceutical & Medical Distribution",
      icon: "💊",
      color:
        "from-cyan-500 via-sky-500 to-blue-600",
    },

    {
      name: "Education",
      slug: "education",
      description: "Schools, Coaching & Institutes",
      icon: "🎓",
      color:
        "from-violet-600 via-purple-500 to-fuchsia-500",
    },

    {
      name: "Fitness",
      slug: "fitness",
      description: "Gyms, Trainers & Wellness",
      icon: "🏋️",
      color:
        "from-orange-500 via-pink-500 to-red-500",
    },

    {
      name: "Real Estate",
      slug: "real-estate",
      description: "Builders & Property Consultants",
      icon: "🏢",
      color:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },

    {
      name: "Manufacturing",
      slug: "manufacturing",
      description: "Factories & Industrial Businesses",
      icon: "🏭",
      color:
        "from-slate-700 via-slate-800 to-slate-900",
    },
  ].map((industry) => {

    const count = projects.filter(
      (p) => p.category.toLowerCase() === industry.name.toLowerCase()
    ).length;

    return (

      <Link
        key={industry.slug}
        href={`/projects/category/${industry.slug}`}
        className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-slate-200
        bg-white/75
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]
        "
      >

        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${industry.color}`}
        />

        <div className="text-5xl">
          {industry.icon}
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          {industry.name}
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          {industry.description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            {count} Project{count !== 1 && "s"}
          </span>

          <span className="font-semibold text-blue-600 transition group-hover:translate-x-1">
            Explore →
          </span>

        </div>

      </Link>

    );

  })}

</div>
      <section className="mt-24">

  <div className="rounded-[40px] bg-slate-900 p-12 text-center text-white">

    <h2 className="text-3xl font-semibold">
      Ready To Build Your Own Project?
    </h2>

    <p className="mt-4 text-white/70">
      Get a custom estimate tailored to your business,
      industry and goals.
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