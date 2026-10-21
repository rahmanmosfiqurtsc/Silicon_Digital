import { Check } from "lucide-react";
import PhoneMockup from '../../../assets/ServiceDetails/image-2.png'

const benefits = ["Quality custom features and connectivity", "Optimized interface design for mobile users", "Reliable, scalable and maintainable solutions"];

export default function ProductDevelopment() {
  return (
    <section className="product-section grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16">
      <div className="max-w-lg">
        <h2 className="font-extrabold text-[40px] leading-[130%] mb-4">Product development with the best experience</h2>
        <p className="mb-5 text-sm leading-6 text-slate-400">We create dynamic, complex web and mobile solutions for every business need. When you get your quality software and product service, every detail matters. Our team brings ideas to life with thoughtful design and dependable technology.</p>
        <ul className="space-y-3">{benefits.map(item => <li key={item} className="flex items-start gap-2 text-xs text-slate-400"><Check size={14} className="shrink-0 text-violet-500" strokeWidth={3}/>{item}</li>)}</ul>
      </div>
      <div>
        <img src={PhoneMockup} alt=""/>
      </div>
    </section>
  );
}