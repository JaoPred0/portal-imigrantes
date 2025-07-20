import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen flex items-start justify-center px-6 py-12 bg-white">
      <div
        className="w-full max-w-md"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-extrabold mb-6" data-aos="fade-up">CONTÁCTANOS</h1>

        <form className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="block text-sm mb-1">Tu Nombre (obligatorio)</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block text-sm mb-1">Contacto (obligatorio)</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <label className="block text-sm mb-1">Asunto</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <label className="block text-sm mb-1">Tu Mensaje</label>
            <textarea
              className="w-full border border-gray-300 px-3 py-2 h-40 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Enviar
          </motion.button>
        </form>
      </div>
    </section>
  );
}
