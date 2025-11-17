export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          Made with calm vibes. Photos from Unsplash demo links.
        </p>
        <p>
          © {new Date().getFullYear()} Waterpaper
        </p>
      </div>
    </footer>
  );
}
