import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects as projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const industryMap: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  healthcare: {
    title: "Healthcare Projects",
    description:
      "Healthcare websites, hospitals, dental clinics and medical solutions built by Teknas Digital Solutions.",
  },

  "medical-agency": {
    title: "Medical Agency Projects",
    description:
      "Distribution portals, pharmaceutical websites and medical agency solutions.",
  },

  education: {
    title: "Education Projects",
    description:
      "School, coaching institute and education platform projects.",
  },

  fitness: {
    title: "Fitness Projects",
    description:
      "Gym websites and fitness business solutions.",
  },

  "real-estate": {
    title: "Real Estate Projects",
    description:
      "Property showcase websites and real estate lead generation platforms.",
  },

  manufacturing: {
    title: "Manufacturing Projects",
    description:
      "Industrial company websites and manufacturing solutions.",
  },
};

export default async function IndustryProjects({
  params,
}: Props) {
  const { slug } = await params;

  const industry = industryMap[slug];

  if (!industry) notFound();

  const filteredProjects = projects.filter((project) => {
    const category = project.category
      .toLowerCase()
      .replace(/\s+/g, "-");

    return category === slug;
  });

  return (
    <main className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-3xl">

          <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Industry Portfolio
          </span>

          <h1 className="mt-6 text-5xl font-black text-slate-900">
            {industry.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {industry.description}
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.length === 0 ? (

            <div className="rounded-[30px] border border-dashed border-slate-300 bg-white/70 p-12 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Coming Soon
              </h3>

              <p className="mt-4 text-slate-600">
                Projects for this industry will be added shortly.
              </p>
            </div>

          ) : (

            filteredProjects.map((project) => (

              <Link
  key={project.slug}
  href={`/projects/${project.slug}`}
  className="
  group
  overflow-hidden
  rounded-[34px]
  border
  border-white/40
  bg-white/80
  backdrop-blur-xl
  shadow-[0_15px_50px_rgba(15,23,42,.06)]
  transition-all
  duration-500
  hover:-translate-y-3
  hover:border-cyan-200
  hover:shadow-[0_30px_80px_rgba(37,99,235,.18)]
  "
>

  {/* Screenshot */}

  <div className="relative h-60 overflow-hidden">

    <img
      src={project.image}
      alt={project.title}
      className="
      h-full
      w-full
      object-cover
      transition
      duration-700
      group-hover:scale-110
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

    <span
      className="
      absolute
      left-5
      top-5
      rounded-full
      bg-white/90
      px-4
      py-2
      text-xs
      font-semibold
      text-slate-900
      backdrop-blur
      "
    >
      {project.category}
    </span>

  </div>

  {/* Content */}

  <div className="p-8">

    <div className="flex items-center gap-4">

      <img
        src={project.logo}
        alt={project.client}
        className="
        h-14
        w-14
        rounded-2xl
        border
        border-slate-200
        bg-white
        object-contain
        p-2
        "
      />

      <div>

        <h2 className="text-2xl font-bold text-slate-900">
          {project.title}
        </h2>

        <p className="text-sm text-slate-500">
          {project.client}
        </p>

      </div>

    </div>

    <p className="mt-6 leading-7 text-slate-600">
      {project.shortDescription}
    </p>

    <div className="mt-8 flex items-center justify-between">

      <div className="flex gap-2">

        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          {project.timeline}
        </span>

        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
          {project.year}
        </span>

      </div>

      <span
        className="
        font-semibold
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-violet-600
        bg-clip-text
        text-transparent
        transition
        group-hover:translate-x-1
        "
      >
        View Case Study →
      </span>

    </div>

  </div>

</Link>

            ))

          )}

        </div>

      </section>

    </main>
  );
}