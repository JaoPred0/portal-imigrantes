import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import brasilMap from "/public/mapa-brasil.png"; // Verifique se está certo ou troque por: "/mapa-brasil.png"

export default function HeroWrapper() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-green-900 text-white w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="flex items-center justify-center md:justify-start space-x-2 text-white/80">
            <Volume2 className="w-5 h-5" />
            <span className="text-sm">Haga clic para escuchar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            O que é o <br />
            <span className="text-white">Portal Inmigra Acción?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            Estamos ajudando, acolhendo e direcionando <br className="hidden sm:block" />
            para um melhor caminho e integridade na nossa cidade.
          </p>
        </motion.div>

        {/* Imagem à direita */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={brasilMap}
            alt="Mapa com bandeira do Brasil"
            className="w-[250px] sm:w-[300px] md:w-[500px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
