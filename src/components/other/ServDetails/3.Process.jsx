const steps = [
  ["Identifying the problem", "Map out the challenge and understand the goals, needs and opportunities for improvement."],
  ["Conducting a research", "We explore the market, study the requirements and define the most effective approach."],
  ["Creating low-fidelity prototypes", "Plan the user journey with simple wireframes and prototypes before detailed design."],
  ["Building an MVP version", "Develop a focused first version, test it with users and refine the product."],
];

export default function Process() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="font-extrabold text-[40px] leading-[130%] mb-8">How We Work?</h2>
      <div className="process-grid">
        {steps.map(([title, text], index) => (
          <article className="process-step" key={title}>
            <div className="step-number">{index + 1}</div>
            <h3 className="font-extrabold text-[20px]">{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}