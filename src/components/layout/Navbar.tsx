"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/40
      bg-white/70
      backdrop-blur-2xl
      shadow-[0_12px_40px_rgba(15,23,42,0.06)]
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-violet-600
            text-lg
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:scale-105
            "
          >
            T
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight">
              <span className="text-slate-900">Teknas</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                Digital
              </span>
            </h1>

            <p className="mt-1 text-xs tracking-wide text-slate-500">
              Solutions
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-2 text-sm font-medium"
              >
                <span
                  className={
                    active
                      ? "text-slate-900"
                      : "text-slate-500 transition duration-300 hover:text-blue-600"
                  }
                >
                  {item.name}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">
          <Link
            href="/estimate"
            className="
            hidden
            md:inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-violet-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_12px_30px_rgba(37,99,235,.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_20px_45px_rgba(37,99,235,.45)]
            "
          >
            Get Estimate
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            p-3
            shadow-sm
            transition
            hover:border-blue-300
            md:hidden
            "
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 rounded bg-slate-800" />
              <span className="block h-0.5 w-6 rounded bg-slate-800" />
              <span className="block h-0.5 w-6 rounded bg-slate-800" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile */}

      {open && (
        <div
          className="
          border-t
          border-slate-100
          bg-white
          shadow-2xl
          md:hidden
          "
        >
          <div className="flex flex-col gap-2 px-6 py-6">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-4 transition ${
                    active
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 font-semibold text-blue-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="
              mt-4
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-violet-600
              px-6
              py-4
              text-center
              font-semibold
              text-white
              shadow-lg
              "
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}