import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative mt-12 flex min-h-[250px] overflow-hidden rounded-md bg-[#f2f4ff] px-7 py-10 text-slate-900 sm:px-12 lg:min-h-[290px] lg:items-center"
    >
      <div className="relative z-[1] max-w-sm">
        <p className="mb-3 text-sm text-slate-500">Ready to get started?</p>
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          Take Your <span className="text-indigo-500">Business</span>
          <br />
          to the Next Level
        </h2>
        <a
          href="mailto:hello@example.com"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-xs font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-600"
        >
          Work with us <ArrowRight size={14} />
        </a>
      </div>
      <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-[52%] items-center justify-center rounded-l-[50%] bg-[#dfe2ff] sm:flex">
        <img
          src="/images/cta-illustration.png"
          alt=""
          className="relative z-[1] max-h-[90%] w-[80%] object-contain mix-blend-multiply"
        />
      </div>
    </section>
  );
}
