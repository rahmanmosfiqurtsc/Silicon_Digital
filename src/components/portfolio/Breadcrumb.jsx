import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400">
      <Home size={13} />
      <a href="#" className="hover:text-indigo-400">
        Homepage
      </a>
      <ChevronRight size={12} />
      <span className="text-indigo-400">Grid View</span>
    </div>
  );
}
