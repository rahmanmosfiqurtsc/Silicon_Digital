import ProjectButton from "./ProjectButton.jsx";

export default function CallToAction() {
  return (
    <div id="contact" className="cta-section px-5 py-16 text-center">
      <p className="mb-3 text-sm text-slate-400">Ready to get started?</p>
      <h2 className="mb-7 text-2xl font-extrabold sm:text-3xl">Launch Your Project with Us</h2>
      <ProjectButton>Work with us</ProjectButton>
    </div>
  );
}