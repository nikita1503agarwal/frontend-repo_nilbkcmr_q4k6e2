import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-800">
            Ocean-inspired wallpapers
          </h1>
          <p className="mt-3 md:mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Curated, crisp, and calming backgrounds shaped by water, light, and motion.
          </p>
        </motion.div>
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-7ef03864b0a4?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200/70"
            >
              <img src={src} alt="ocean" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
