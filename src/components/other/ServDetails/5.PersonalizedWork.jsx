import TaskMockup from "../../../assets/ServiceDetails/image-1.png";
import ProjectButton from "./ProjectButton.jsx";

export default function PersonalizedWork() {
  return (
    <section className="personalized-section grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16">
      <div>
        <img src={TaskMockup} alt=""></img>
      </div>
      <div className="max-w-[564px]">
        <h2 className="font-extrabold text-[40px] leading-[130%]">
          We personalize how we work to fit your project needs
        </h2>
        <p className="mb-6 text-sm leading-6 text-slate-400">
          Meet our skillful and dedicated team, committed to making your project
          run smoothly and delivering a product that fits your needs.
        </p>
        <ProjectButton />
      </div>
    </section>
  );
}
