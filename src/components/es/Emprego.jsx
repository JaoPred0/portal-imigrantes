import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Share2 } from "lucide-react";

const services = [
  "Fast Food Restaurant",
  "Monarchy Fast Food",
  "Boby's Fast Food",
  "Fashion Market Retail Stores",
  "Wholesale Store",
];

export default function Employment() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const results = search
    ? services.filter((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      )
    : services;

  return (
    <div className="min-h-screen bg-[#1E3B12] text-white relative overflow-hidden">
      {/* Left background image with fade */}
      <div
        className="absolute top-0 left-0 h-full w-1/3 z-0"
        style={{
          backgroundImage: `url('/persona.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        {/* Title and audio button */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <span className="text-sm">Click to listen</span>
            <button>
              <img src="/play-icon.png" alt="play" className="h-5" />
            </button>
          </div>
          <h1 className="text-5xl font-extrabold" data-aos="zoom-in">
            Employment
          </h1>
          <p className="text-lg mt-3 text-white/90" data-aos="fade-up">
            Here you will find companies with open doors to offer opportunities to immigrants.
          </p>
        </motion.div>

        {/* Fixed text top right */}
        <div
          className="absolute top-16 right-8 text-right text-xs leading-tight font-semibold uppercase tracking-wider"
          data-aos="fade-left"
        >
          <p className="text-white">MAIN EMPLOYMENT AGENCIES</p>
          <a href="#" className="text-white text-sm italic underline">
            Click to learn more
          </a>
        </div>

        {/* Search input */}
        <motion.div
          className="max-w-md mx-auto mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          data-aos="fade-up"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Services"
            className="w-full py-3 px-12 rounded-md text-black text-lg shadow-lg border border-black bg-white"
          />
          <Search className="absolute left-4 top-3.5 text-black" size={20} />
          {search && (
            <X
              className="absolute right-4 top-3.5 text-black cursor-pointer"
              size={20}
              onClick={() => setSearch("")}
            />
          )}
        </motion.div>

        {/* Results */}
        <div
          className="max-w-xl mx-auto h-[300px] overflow-y-auto bg-white/10 rounded-md px-6 py-4 text-white shadow-md backdrop-blur"
          data-aos="fade-up"
        >
          <AnimatePresence>
            {search && (
              <motion.div
                key="term"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 flex items-center justify-between bg-white/20 px-4 py-2 rounded text-sm"
              >
                <span>You searched for: <strong>{search}</strong></span>
                <a
                  href="#"
                  className="text-blue-200 underline flex items-center gap-1"
                >
                  See more <ExternalLink size={14} />
                </a>
              </motion.div>
            )}

            {results.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="py-2 border-b border-white/20 last:border-none"
              >
                <a href="#" className="underline hover:text-yellow-300 transition font-medium">
                  {item}
                </a>
              </motion.div>
            ))}

            {results.length === 0 && (
              <motion.div
                key="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center mt-4 text-white/80"
              >
                No results found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Optional floating share button */}
        <div
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-xl"
          data-aos="zoom-in"
        >
          <Share2 size={22} />
        </div>
      </div>
    </div>
  );
}
