import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [showLangs, setShowLangs] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLangs(false);
      }
    };
    if (showLangs) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLangs]);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm relative z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Procurar"
          className="pl-4 pr-8 py-2 rounded-full bg-green-200 text-sm text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <Search
          size={18}
          className="absolute right-2 top-2.5 text-green-800 pointer-events-none"
        />
      </motion.div>

      <motion.div
        ref={dropdownRef}
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span
          onClick={() => setShowLangs(!showLangs)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") setShowLangs(!showLangs); }}
          className="flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded-md text-sm hover:bg-green-700 transition-colors cursor-pointer select-none"
        >
          🌐 Linguagem <ChevronDown size={16} />
        </span>

        <AnimatePresence>
          {showLangs && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 bg-green-800 text-white rounded-md w-36 shadow-lg overflow-hidden"
            >
              <Link
                to="/"
                className="block w-full text-left px-4 py-2 hover:bg-green-700 transition cursor-pointer select-none"
              >
                🇧🇷 Português
              </Link>
              <Link
                to="/en"
                className="block w-full text-left px-4 py-2 hover:bg-green-700 transition cursor-pointer select-none"
              >
                🇺🇸 English
              </Link>
              <Link
                to="/es"
                className="block w-full text-left px-4 py-2 hover:bg-green-700 transition cursor-pointer select-none"
              >
                🇪🇸 Español
                
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
