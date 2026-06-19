import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  description: string;

  challenges: string[];
  solutions: string[];

  includedFeatures: string[];
  additionalFeatures: string[];
};

export default function IndustryTemplate({
  title,
  subtitle,
  description,

  challenges,
  solutions,

  includedFeatures,
  additionalFeatures,
}: Props) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* HERO */}

      <div className="max-w-5xl">
        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          INDUSTRY SOLUTION
        </p>

        <h1 className="mt-4 text-5xl font-semibold text-slate-900">
          {title}
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          {subtitle}
        </p>

        <p className="mt-8 leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/estimate"
            className="
rounded-full
bg-blue-600
px-8
py-4
text-white
transition-all
duration-300
hover:scale-105
hover:bg-blue-700
"
          >
            Get Estimate
          </Link>

          <Link
            href="/contact"
            className="
rounded-full
border
border-slate-300
px-8
py-4
transition-all
duration-300
hover:bg-slate-100
"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* CHALLENGES */}

      <section className="mt-24">

        <h2 className="text-3xl font-semibold text-slate-900">
          Common Challenges
        </h2>

        <p className="mt-4 text-white/70">
          Problems businesses in this industry commonly face.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {challenges.map((item) => (
            <div
              key={item}
              className="
rounded-[24px]
border
border-red-100
bg-red-50/70
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* SOLUTIONS */}

      <section className="mt-24">

        <h2 className="text-3xl font-semibold text-slate-900">
          How Teknas Helps
        </h2>

        <p className="mt-4 text-white/70">
          Solutions designed specifically for your business.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {solutions.map((item) => (
            <div
              key={item}
              className="
rounded-[24px]
border
border-green-100
bg-green-50/70
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* INCLUDED */}

      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-slate-900">
          Included Features
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {includedFeatures.map((feature) => (
            <div
              key={feature}
              className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:border-blue-200
hover:shadow-lg
"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL */}

      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-slate-900">
          Advanced Features
        </h2>

        <p className="mt-3 text-slate-600">
          Popular upgrades businesses commonly request.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {additionalFeatures.map((feature) => (
            <div
              key={feature}
              className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:border-blue-200
hover:shadow-lg
"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
      {/* PROCESS */}

      <section className="mt-24">

        <h2 className="text-3xl font-semibold text-slate-900">
          Our Process
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
">
            <h3 className="font-semibold">
              1. Discovery
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Understanding your business goals and requirements.
            </p>
          </div>

          <div className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
">
            <h3 className="font-semibold">
              2. Design
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Creating a modern user experience.
            </p>
          </div>

          <div className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
">
            <h3 className="font-semibold">
              3. Development
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Building your platform using modern technologies.
            </p>
          </div>

          <div className="
rounded-[24px]
border
border-slate-200
bg-white/80
backdrop-blur
p-6
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
">
            <h3 className="font-semibold">
              4. Launch
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Testing, deployment and ongoing support.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24 rounded-[40px] bg-slate-900 p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-semibold">
          Ready To Build?
        </h2>

        <p className="mt-4 text-white/70">
          Get a custom estimate tailored to your business.
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
          Start Estimate
        </Link>
      </section>

    </main>
  );
}