import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 md:px-0 overflow-hidden bg-white">
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full px-6 py-16 gap-10 z-10">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight font-bold">
            <span>{"Portal"}</span>{" "}
            <span className="font-extrabold">{"Inmigra Acción"}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl whitespace-pre-line text-gray-700">
            {"Changing Lives, Building Dreams."}
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-900 text-white px-6 py-3 text-base sm:text-lg font-bold rounded shadow-md hover:bg-green-800 transition"
          >
            {"Learn More About Us"}
          </motion.button>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
          data-aos="fade-left"
        >
          <div className="flex items-center justify-center w-full">
            <img
              src="/img1.png"
              alt="Inmigra Acción Logo"
              className="max-h-[500px] w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Footer with animated silhouettes */}
      {/* Mobile version */}
      <motion.div className="absolute bottom-10 w-full h-20 bg-black overflow-hidden z-10 md:hidden">
        <motion.div
          animate={{ backgroundPositionX: ["0%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="w-full h-full bg-repeat-x"
          style={{
            backgroundImage: "url('/silhueta.png')",
            backgroundSize: "auto 100%",
          }}
        />
      </motion.div>

      {/* Desktop version */}
      <motion.div className="absolute bottom-0 w-full h-24 bg-black overflow-hidden z-10 hidden md:block">
        <motion.div
          animate={{ backgroundPositionX: ["0%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="w-full h-full bg-repeat-x"
          style={{
            backgroundImage: "url('/silhueta.png')",
            backgroundSize: "auto 100%",
          }}
        />
      </motion.div>
    </section>
  );
}
