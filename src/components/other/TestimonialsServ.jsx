import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ImggT1 from '../../assets/Testi/image.jpg'

const testimonials = [
  {
    name: "Ralph Edwards",
    role: "Head of Marketing",
    quote:
      "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.",
  },
  {
    name: "Courtney Henry",
    role: "Product Manager",
    quote:
      "The team understood our goals from day one and turned our ideas into a practical product. Communication was clear, delivery was thoughtful, and the whole process felt collaborative.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  const change = (direction) =>
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section className="w-[1296px] pt-1 ">
      <h2 className="mb-7 text-2xl font-bold tracking-tight sm:text-3xl ">
        What Our Clients Say
      </h2>

      <div className="grid items-center gap-7 lg:grid-cols-[332px_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col gap-7">
          <img
            src={ImggT1}
            alt="Smiling client"
            className="h-[288px] w-full object-cover object-center sm:h-[320px]"
          />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => change(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:bg-indigo-50"
            ><ChevronLeft size={19} /></button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => change(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:bg-indigo-50"
            ><ChevronRight size={19} /></button>
          </div>
        </div>

        <article className="relative mt-2 rounded-lg border border-slate-200 bg-white px-6 pb-8 pt-12 text-slate-700 shadow-[0_0_0_3px_rgba(255,255,255,0.08)] sm:px-10 sm:pb-10 sm:pt-14">
          <div className="absolute -top-4 left-8 grid h-11 w-11 place-items-center rounded-lg bg-indigo-500 text-white shadow-lg">
            <Quote size={25} fill="currentColor" strokeWidth={1.5} />
          </div>
          <p className="text-sm leading-6 sm:text-[15px] sm:leading-[23px]">
            {testimonial.quote}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div>
              <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{testimonial.role}</p>
            </div>
            <div className="hidden h-12 border-l border-slate-200 sm:block" />
            <div className="flex items-center gap-2 font-bold text-slate-400">
              <span className="grid h-7 w-7 grid-cols-2 gap-0.5 rotate-12">
                <i className="rounded-full bg-slate-400" /><i className="rounded-full bg-slate-300" />
                <i className="rounded-full bg-slate-300" /><i className="rounded-full bg-slate-400" />
              </span>
              logoipsum
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}