import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Featured Projects
        </h1>

        <p className="mt-6 text-slate-600">
          Explore industry-specific solutions built for modern businesses.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {portfolioProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="
            rounded-[32px]
            border
            border-slate-200
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "
          >
            <p className="text-sm text-slate-500">
              {project.category}
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 text-slate-600">
              {project.description}
            </p>

            <div className="mt-8 font-medium">
              View Case Study →
            </div>
          </Link>
        ))}

      </div>

    </main>
  );
}