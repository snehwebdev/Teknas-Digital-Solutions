import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">

      <div className="max-w-xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-semibold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="
            rounded-full
            bg-slate-900
            px-8
            py-4
            text-white
            transition-all
            duration-300
            hover:scale-105
            "
          >
            Back Home
          </Link>

          <Link
            href="/estimate"
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
            Get Estimate
          </Link>

        </div>

      </div>

    </main>
  );
}