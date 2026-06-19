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
  bg-white/60
  backdrop-blur-2xl
  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
  "
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
         <>
  <span className="text-blue-600">
    Teknas
  </span>{" "}
  Digital Solutions
</>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative"
              >
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100 bg-slate-900"
                      : "scale-x-0 bg-slate-300"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/estimate"
            className="
            rounded-full
            bg-slate-900
            px-5
            py-2
            text-sm
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
            hover:bg-blue-600
            "
          >
            Get Estimate
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="h-[2px] w-6 bg-slate-900"></span>
            <span className="h-[2px] w-6 bg-slate-900"></span>
            <span className="h-[2px] w-6 bg-slate-900"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col">
          
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-semibold">Menu</span>

            <button onClick={() => setOpen(false)} className="text-2xl">
              ✕
            </button>
          </div>

          <div className="flex flex-col p-6 gap-6 text-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-center text-white"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}