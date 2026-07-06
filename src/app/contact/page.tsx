export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* Hero */}

      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold text-slate-900">
          Let's Build Something Great
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Whether you need a website, mobile app or custom software,
          we'd love to hear about your project.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <div className="rounded-[32px] border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold">
            WhatsApp
          </h2>

          <p className="mt-4 text-slate-600">
            Fastest way to reach us.
          </p>

          <p className="mt-6 font-medium">
            +91 79904 25573
          </p>

          <a
            href="https://wa.me/917990425573?text=Hi%20Teknas%20Digital Solutions,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white transition-all duration-300 hover:bg-slate-800"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="rounded-[32px] border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold">
            Email
          </h2>

          <p className="mt-4 text-slate-600">
            Send detailed project requirements.
          </p>

          <p className="mt-6 font-medium break-all">
            TeknasDigitalSolutions@gmail.com
          </p>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=teknaslabs@gmail.com&tf=cm"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-6 py-3 transition-all duration-300 hover:bg-slate-100"
          >
            Send Email
          </a>
        </div>

        <div className="rounded-[32px] border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold">
            Instagram
          </h2>

          <p className="mt-4 text-slate-600">
            Follow our latest updates and projects.
          </p>

          <p className="mt-6 font-medium">
            @TeknasDigitalSolutions
          </p>

          <a
            href="https://instagram.com/teknaslabs"
            target="_blank"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-6 py-3 transition-all duration-300 hover:bg-slate-100"
          >
            Visit Instagram
          </a>
        </div>

      </div>

      {/* Contact Form */}

      {/* Final CTA */}

      <div className="mt-20 rounded-[32px] border border-slate-200 p-10 text-center">

        <h2 className="text-3xl font-semibold">
          Not Sure Where To Start?
        </h2>

        <p className="mt-4 text-slate-600">
          Use our estimator to get a rough project budget in minutes.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a
            href="/estimate"
            className="rounded-full bg-slate-900 px-8 py-3 text-white transition-all duration-300 hover:bg-slate-800"
          >
            Get Estimate
          </a>

          <a
            href="https://wa.me/917990425573"
            target="_blank"
            className="rounded-full border border-slate-300 px-8 py-3 transition-all duration-300 hover:bg-slate-100"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </main>
  );
}