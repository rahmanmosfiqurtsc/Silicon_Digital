const categories = [
  "All Works",
  "Web Design",
  "Graphic Design",
  "Branding",
  "UI / UX",
  "Motion Design",
];

export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex max-w-full gap-5 overflow-x-auto border-b border-slate-700/70 pb-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`shrink-0 whitespace-nowrap text-xs font-semibold transition ${activeCategory === category ? "text-indigo-400 after:absolute after:mt-[25px] after:block after:h-0.5 after:w-10 after:bg-indigo-500" : "text-slate-400 hover:text-white"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
