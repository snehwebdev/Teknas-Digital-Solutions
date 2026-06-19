import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on pages, features and project complexity. You can use our estimator to get a rough cost instantly.",
  },
  {
    question: "How long does development take?",
    answer:
      "Most business websites take 2–6 weeks. Applications and software projects may require more time depending on complexity.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Yes. We can help with hosting, deployment and ongoing maintenance.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your design, improve performance and increase conversions.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every project is designed to work across mobile, tablet and desktop devices.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer post-launch support, updates and future improvements.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <Reveal>
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
            FAQ
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-slate-600">
            Answers to common questions about our services,
            development process and pricing.
          </p>

        </div>
      </Reveal>

      <div className="mt-16 space-y-6">

        {faqs.map((faq) => (
          <Reveal key={faq.question}>
            <div className="rounded-3xl border border-slate-200 p-8">

              <h2 className="text-xl font-semibold">
                {faq.question}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>

            </div>
          </Reveal>
        ))}

      </div>

      <Reveal>
        <div className="mt-20 rounded-[40px] bg-slate-900 p-12 text-center text-white">

          <h2 className="text-3xl font-semibold">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-white/70">
            Contact us directly or use our project estimator.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/estimate"
              className="rounded-full bg-white px-8 py-4 text-slate-900"
            >
              Get Estimate
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </Reveal>

    </main>
  );
}