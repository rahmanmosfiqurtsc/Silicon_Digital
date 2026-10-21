import { Activity, BarChart3, MessageCircleMore, Timer } from "lucide-react";

const features = [
  { icon: Timer, title: "Build a functional prototype", detail: "in 24 hrs" },
  { icon: Activity, title: "Create an MVP within two", detail: "weeks" },
  { icon: BarChart3, title: "Kickstart software", detail: "development" },
  { icon: MessageCircleMore, title: "Get 24/7 tech & business", detail: "support" },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1296px] py-16 text-center sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Us?</h2>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-[#9397AD] sm:text-base">
        We personalize how we work to fit your project needs. Our approach helps augment innovation.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, detail }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center px-4 ${
              index > 0 ? "lg:border-l lg:border-slate-400" : ""
            }`}
          >
            <div className="grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-indigo-400 shadow-[0_0_0_4px_rgba(255,255,255,0.08)]">
              <Icon size={25} strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 max-w-[240px] text-base font-bold leading-5 ">
              {title}<br />{detail}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}