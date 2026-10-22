export default function Pagination({ page, onChange }) {
  return (
    <nav
      aria-label="Portfolio pages"
      className="mt-10 flex items-center gap-1.5"
    >
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          aria-current={page === n ? "page" : undefined}
          className={`grid h-8 w-8 place-items-center rounded-md text-xs font-semibold transition ${page === n ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => onChange(page === 4 ? 1 : page + 1)}
        aria-label="Next page"
        className="grid h-8 w-8 place-items-center text-slate-400 hover:text-white"
      >
        ›
      </button>
    </nav>
  );
}
