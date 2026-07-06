import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Teknas Digital Solutions
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Building websites, mobile applications and custom software
              for growing businesses.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/917990425573"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-green-700"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/teknaslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-pink-700"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Services
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">
              <Link href="/services">Website Development</Link>
              <Link href="/services">Mobile Applications</Link>
              <Link href="/services">Website Redesign</Link>
              <Link href="/services">Custom Software</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">
              <Link href="/">Home</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/estimate">Estimate</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-slate-600">
              <p>Mehsana, Gujarat, India</p>

              <p>+91 79904 25573</p>

              <p>teknaslabs@gmail.com</p>

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=teknaslabs@gmail.com&tf=cm"
                className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm transition-all duration-300 hover:bg-slate-900 hover:text-white"
              >
                Send Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Teknas Digital Solutions. All rights reserved.
          </p>

          <p>
            Designed & Developed by Teknas Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}