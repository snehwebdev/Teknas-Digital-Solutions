import Link from "next/link";
import {
  Database,
  LayoutDashboard,
  Boxes,
  Workflow,
  Users,
  Cpu,
} from "lucide-react";

const softwareServices = [
  {
    title: "CRM Systems",
    icon: Users,
  },
  {
    title: "ERP Software",
    icon: Database,
  },
  {
    title: "Inventory Management",
    icon: Boxes,
  },
  {
    title: "Employee Portals",
    icon: Cpu,
  },
  {
    title: "Admin Dashboards",
    icon: LayoutDashboard,
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
  },
];

export default function SoftwarePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
          Custom Software Development
        </span>

        <h1 className="mt-6 text-5xl font-black text-slate-900">
          Software That
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            {" "}Automates Your Business
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          We build CRMs, ERP systems, dashboards, inventory software,
          workflow automation platforms and custom business applications
          designed around your exact business process.
        </p>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {softwareServices.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border
                  border-white/70
                  bg-white/80
                  p-8
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-violet-600
                    text-white
                    shadow-lg
                  "
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Fully custom software tailored specifically to your business
                  operations, workflow and future growth.
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[40px] border border-white/70 bg-white/80 p-14 text-center backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl font-bold text-slate-900">
            Ready To Build Your Software?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Let's discuss your workflow and build software that saves time,
            increases efficiency and scales with your business.
          </p>

          <Link
            href="/estimate"
            className="
              mt-10
              inline-flex
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-violet-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              transition
              duration-300
              hover:scale-105
            "
          >
            Get Free Estimate →
          </Link>
        </div>
      </section>
    </main>
  );
}