import { portfolioProjects as projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-blue-600">
  {project.category}
</p>

      <h1 className="mt-4 text-5xl font-semibold">
        {project.title}
      </h1>

      <div className="mt-12 grid gap-4 md:grid-cols-3">

  <div className="rounded-[24px] border border-slate-200 bg-white/80 p-6">
    <p className="text-sm text-slate-500">
      Timeline
    </p>

    <p className="mt-2 text-xl font-semibold">
      {project.timeline}
    </p>
  </div>

  <div className="rounded-[24px] border border-slate-200 bg-white/80 p-6">
    <p className="text-sm text-slate-500">
      Features
    </p>

    <p className="mt-2 text-xl font-semibold">
      {project.features.length}
    </p>
  </div>

  <div className="rounded-[24px] border border-slate-200 bg-white/80 p-6">
    <p className="text-sm text-slate-500">
      Technologies
    </p>

    <p className="mt-2 text-xl font-semibold">
      {project.tech.length}
    </p>
  </div>

</div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        <div className="
rounded-[32px]
border
border-slate-200
bg-white/80
backdrop-blur
p-8
transition-all
duration-300
hover:shadow-xl
">
          <h2 className="text-2xl font-semibold">
            Key Features
          </h2>

          <div className="mt-6 space-y-3">
            {project.features.map((feature) => (
              <div key={feature}>
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="
rounded-[32px]
border
border-slate-200
bg-white/80
backdrop-blur
p-8
transition-all
duration-300
hover:shadow-xl
">
          <h2 className="text-2xl font-semibold">
            Project Details
          </h2>

          <div className="mt-6 space-y-3">
            <p>
              <strong>Timeline:</strong>{" "}
              {project.timeline}
            </p>

            <p>
              <strong>Tech Stack:</strong>
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
rounded-full
border
border-blue-100
bg-blue-50
px-3
py-1
text-sm
text-blue-700
"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
      <section className="mt-20">

  <h2 className="text-3xl font-semibold text-slate-900">
    Project Outcome
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
    This project was designed to improve user experience,
    strengthen brand credibility and create a scalable
    foundation for future growth.
  </p>

</section>

      <div className="mt-20 rounded-[40px] bg-slate-900 p-12 text-center text-white shadow-2xl">

        <h2 className="text-3xl font-semibold">
          Want Something Similar?
        </h2>

        <p className="mt-4 text-white/70">
          Use our estimator to get a rough project
          estimate tailored to your business.
        </p>

        <a
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
          Get Estimate →
        </a>

      </div>

    </main>
  );
}