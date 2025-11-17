import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-blue-50 text-slate-800 flex flex-col">
      <Navbar query={query} setQuery={setQuery} onSearch={() => {}} />
      <Hero />
      <Gallery query={query} />
      <Footer />
    </div>
  );
}

export default App;
