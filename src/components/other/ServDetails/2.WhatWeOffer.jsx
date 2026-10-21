import { Rocket, ThumbsUp, Users, Clock3 } from "lucide-react";
import Imag from "../../../assets/ServiceDetails/image.png";

const services = [
  { icon: Rocket, title: "Innovative Solutions", text: "Harness an innovative mindset to accelerate company growth and create meaningful solutions." },
  { icon: ThumbsUp, title: "Success Guarantee", text: "As a trusted partner, we plan for your goals first. Flexible and reliable solutions make your ideas happen." },
  { icon: Users, title: "Professional Team", text: "Partner with our technical specialists, product designers and skilled developers to build your concept." },
  { icon: Clock3, title: "On Time Service", text: "Quality delivery comes from a focused team, clear milestones and a dependable project workflow." },
];

export default function WhatWeOffer() {
  return (
    <section className="offer-section section-pad grid items-center gap-12 py-16 md:grid-cols-[0.92fr_1.08fr]">
      <div>
        <h2 className="font-extrabold text-[40px] leading-[130%] mb-7">What We<br className="hidden md:block" /> Offer</h2>
        <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon className="mb-3 text-violet-500" size={20} strokeWidth={3} />
              <h3 className="font-extrabold text-[20px]">{title}</h3><p className="leading-[160%]">{text}</p>
            </article>
          ))}
        </div>
      </div>
      <img src={Imag} />
    </section>
  );
}