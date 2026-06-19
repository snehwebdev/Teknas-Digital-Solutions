"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TekBot() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl text-white shadow-xl transition hover:scale-105"
      >
        🤖
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          {/* Header */}

          <div className="bg-slate-900 p-5 text-white">
            <h3 className="font-semibold text-white">
              TekBot
            </h3>

            <p className="mt-1 text-sm text-slate-200">
              How can I help you?
            </p>
          </div>

          {/* Options */}

          <div className="space-y-3 p-5">

            <button
              onClick={() => router.push("/estimate")}
              className="w-full rounded-xl border border-slate-200 p-3 text-left font-medium text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg"
            >
              💰 Get Project Estimate
            </button>

            <button
              onClick={() => router.push("/industries")}
              className="w-full rounded-xl border border-slate-200 p-3 text-left font-medium text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg"
            >
              🏢 Explore Industries
            </button>

            <button
              onClick={() => router.push("/services")}
              className="w-full rounded-xl border border-slate-200 p-3 text-left font-medium text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg"
            >
              ⚙️ Our Services
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="w-full rounded-xl border border-slate-200 p-3 text-left font-medium text-slate-900 transition hover:bg-slate-50"
            >
              📞 Contact Team
            </button>

          </div>

        </div>
      )}
    </>
  );
}