import { useEffect, useMemo, useState } from "react";
import { Heart, Download, Image as ImageIcon } from "lucide-react";

const demoWallpapers = [
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    author: "Sebastian",
    color: "blue",
    tags: ["ocean", "wave", "blue"],
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop",
    author: "Matteo",
    color: "cyan",
    tags: ["sea", "foam", "calm"],
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
    author: "Alex",
    color: "teal",
    tags: ["reef", "turquoise", "sunlight"],
  },
  {
    id: 4,
    url:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop",
    author: "Annie",
    color: "indigo",
    tags: ["lake", "mist", "mountain"],
  },
  {
    id: 5,
    url:
      "https://images.unsplash.com/photo-1544551763-7ef03864b0a4?q=80&w=1600&auto=format&fit=crop",
    author: "Kaur",
    color: "purple",
    tags: ["ice", "arctic", "blue"],
  },
  {
    id: 6,
    url:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    author: "Paul",
    color: "blue",
    tags: ["coast", "cliffs", "emerald"],
  },
];

function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
        active
          ? "bg-blue-50 text-blue-700 border-blue-200"
          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

export default function Gallery({ query }) {
  const [activeTag, setActiveTag] = useState("all");
  const tags = useMemo(() => {
    const t = new Set(["all"]);
    demoWallpapers.forEach((w) => w.tags.forEach((x) => t.add(x)));
    return Array.from(t);
  }, []);

  const filtered = useMemo(() => {
    return demoWallpapers.filter((w) => {
      const matchesQuery = query
        ? w.tags.join(" ").toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesTag = activeTag === "all" ? true : w.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  useEffect(() => {
    setActiveTag("all");
  }, [query]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {tags.map((t) => (
          <Tag
            key={t}
            label={t}
            active={t === activeTag}
            onClick={() => setActiveTag(t)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.map((w) => (
          <figure
            key={w.id}
            className="group relative rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white"
          >
            <img
              src={w.url}
              alt="wallpaper"
              className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-xs text-white/90 bg-gradient-to-t from-black/50 to-transparent">
              <span>@{w.author}</span>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button title="Like" className="p-1 rounded bg-white/90 text-rose-600 hover:bg-white">
                  <Heart size={16} />
                </button>
                <a
                  href={w.url}
                  download
                  title="Download"
                  className="p-1 rounded bg-white/90 text-slate-700 hover:bg-white"
                >
                  <Download size={16} />
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-slate-500">
          <ImageIcon className="mx-auto mb-2" />
          <p>No wallpapers match your search.</p>
        </div>
      )}
    </section>
  );
}
