import ProjectButton from "./ProjectButton.jsx";

export default function Hero() {
  return (
    <section className="hero-section grid gap-8 border-b border-slate-300/80 py-12 md:grid-cols-2 md:gap-14 md:py-14">
      <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl">
        Custom Software
        <br className="hidden md:block" /> Development
      </h1>
      <div className="max-w-md">
        <p className="mb-6 text-sm leading-6 text-slate-400">
          Id eget hendrerit sapien cras massa lectus lorem placerat. Quam dolor
          commodo fermentum bibendum dictumst. Risus pretium eget sit viverra
          eget. Sit neque adipiscing malesuada blandit justo, quam.
        </p>
        <ProjectButton />
      </div>
    </section>
  );
}
