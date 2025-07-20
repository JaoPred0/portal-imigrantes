import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search, Share2, X } from "lucide-react";

export default function Training() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#4C8B41] text-white relative overflow-hidden">
      {/* Fondo con imagen a la izquierda + degradado */}
      <div
        className="absolute top-0 left-0 h-full w-1/3 z-0"
        style={{
          backgroundImage: `url('/bg-principal.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 px-4 md:px-10 py-8">
        {/* Título y audio */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-base md:text-lg font-medium">Haz clic para escuchar</span>
            <button>
              <img src="/play-icon.png" alt="play" className="h-6" />
            </button>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Capacitación</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-white/90">
            La educación es fundamental. Aquí listamos instituciones y cursos gratuitos,
            presenciales y/o en línea, preparados para recibirte.
          </p>
        </motion.div>

        {/* Campo de búsqueda */}
        <motion.div
          className="max-w-xl mx-auto relative mb-14 bg-amber-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          data-aos="fade-up"
        >
          <input
            type="text"
            defaultValue="Online"
            className="w-full py-3 px-12 rounded-md text-black text-lg border border-black shadow-lg"
          />
          <Search className="absolute left-4 top-3.5 text-black" size={22} />
          <X className="absolute right-4 top-3.5 text-black cursor-pointer" size={22} />
        </motion.div>

        {/* Imagen e Instituciones */}
        <div className="flex flex-col md:flex-row justify-center gap-12 px-4">
          {/* Imagen de tarjetas */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            data-aos="zoom-in-up"
          >
            <img
              src="/cursos.png"
              alt="Cursos de capacitación"
              className="rounded-lg shadow-2xl w-full max-w-3xl"
            />
          </motion.div>

          {/* Lista de instituciones */}
          <motion.div
            className="text-base text-right max-w-md"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            data-aos="fade-left"
          >
            <h2 className="font-bold text-xl mb-1">PRINCIPALES INSTITUCIONES DE LA CIUDAD</h2>
            <p className="italic text-white/80 mb-3">Haz clic para saber más</p>
            <ul className="space-y-2 text-blue-200 underline text-base">
              <li><a href="#">Centro de Reacondicionamiento de Computadoras (CRC) - IFMS Dourados</a></li>
              <li><a href="#">Instituto Federal de Mato Grosso do Sul (IFMS)</a></li>
              <li><a href="#">Universidad Federal de Grande Dourados (UFGD)</a></li>
              <li><a href="#">Universidad Estatal de Mato Grosso do Sul (UEMS)</a></li>
              <li><a href="#">Sebrae</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Botón flotante para compartir */}
        <motion.div
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          data-aos="zoom-in"
        >
          <Share2 size={22} />
        </motion.div>
      </div>
    </div>
  );
}
