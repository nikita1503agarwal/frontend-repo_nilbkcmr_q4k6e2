import { Search, Sparkles } from "lucide-react";

export default function Navbar({ query, setQuery, onSearch }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 grid place-items-center text-white shadow-sm">
            <Sparkles size={18} />
          </div>
          <span className="text-slate-800 font-bold text-lg tracking-tight">Waterpaper</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch?.();
          }}
          className="ml-auto flex-1 max-w-lg"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search wallpapers: waves, ocean, blue..."
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-200 bg-white/70 focus:bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
