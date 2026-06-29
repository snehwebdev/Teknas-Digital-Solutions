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
      border-white/30
      bg-white/80
      backdrop-blur-2xl
      shadow-[0_8px_30px_rgb(0,0,0,0.04)]
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-xl font-semibold tracking-tight"
        >
          <span className="text-blue-600">Teknas</span>{" "}
          Digital Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative"
              >
                <span
                  className={
                    active
                      ? "font-semibold text-slate-900"
                      : "text-slate-500 transition hover:text-blue-600"
                  }
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left transition-transform duration-300 ${
                    active
                      ? "scale-x-100 bg-slate-900"
                      : "scale-x-0 bg-slate-300"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/estimate"
            className="
            hidden
            md:inline-flex
            rounded-full
            bg-slate-900
            px-5
            py-2
            text-sm
            text-white
            transition-all
            duration-300
            hover:bg-blue-600
            hover:scale-105
            "
          >
            Get Estimate
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 md:hidden"
          >
            <span className="h-[2px] w-6 bg-slate-900"></span>
            <span className="h-[2px] w-6 bg-slate-900"></span>
            <span className="h-[2px] w-6 bg-slate-900"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          border-t
          border-slate-200
          bg-white
          shadow-xl
          "
        >
          <div className="flex flex-col px-6 py-6">

            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 border-b border-slate-100 ${
                    active
                      ? "font-semibold text-slate-900"
                      : "text-slate-600"
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
              mt-6
              rounded-full
              bg-slate-900
              px-6
              py-3
              text-center
              text-white
              transition
              hover:bg-blue-600
              "
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}