import CategoryFilter from "./CategoryFilter";

export default function PortfolioHeader({ activeCategory, onChange }) {
  return (
    <div className="mb-6 grid items-end gap-5 md:grid-cols-[1fr_1.45fr]">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">
          Grid View
        </h1>
      </div>
      <CategoryFilter activeCategory={activeCategory} onChange={onChange} />
    </div>
  );
}
