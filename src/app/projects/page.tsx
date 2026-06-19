import Link from "next/link";
import { projects } from "@/data/projects";

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

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="
group
rounded-[32px]
border
border-slate-200
bg-white/80
backdrop-blur
p-8
transition-all
duration-500
hover:-translate-y-2
hover:border-blue-200
hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)]
"
          >
            <p className="text-sm font-medium text-blue-600">
              {project.category}
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 text-slate-600">
              {project.description}
            </p>

            <div className="mt-8 font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
              View Project →
            </div>
          </Link>
        ))}
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