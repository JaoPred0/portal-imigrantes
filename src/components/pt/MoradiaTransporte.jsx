import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MoradiaTransporte() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#1E3B12] text-white relative overflow-hidden flex flex-col items-center justify-center px-4 py-12 gap-12">
      
      {/* Imagem da casa à esquerda (oculta em telas pequenas) */}
      <div
        className="hidden md:block absolute left-0 top-0 h-full md:w-1/3 z-0"
        style={{
          backgroundImage: `url('/casa.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Imagem do ônibus à direita (oculta em telas pequenas) */}
      <div
        className="hidden md:block absolute right-0 top-0 h-full md:w-1/3 z-0"
        style={{
          backgroundImage: `url('/onibus.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          WebkitMaskImage: "linear-gradient(to left, black 60%, transparent)",
          maskImage: "linear-gradient(to left, black 60%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-xl">
        
        {/* Seção Moradia */}
        <div className="text-center w-full" data-aos="fade-up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <h2 className="text-2xl md:text-4xl font-extrabold">MORADIA</h2>
            <span className="text-xs md:text-sm">Haga clic para escuchar</span>
            <button>
              <img src="/play-icon.png" alt="play" className="h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4">
            <a
              href="#"
              className="bg-white/10 text-white px-4 py-2 rounded w-full text-left font-semibold underline text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Casa da Acolhida
            </a>
          </div>
        </div>

        {/* Seção Transporte */}
        <div className="text-center w-full" data-aos="fade-up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <h2 className="text-2xl md:text-4xl font-extrabold">TRANSPORTE</h2>
            <span className="text-xs md:text-sm">Haga clic para escuchar</span>
            <button>
              <img src="/play-icon.png" alt="play" className="h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4">
            <a
              href="#"
              className="bg-white/10 text-white px-4 py-2 rounded w-full text-left font-semibold underline text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Linhas e Horários
            </a>
            <a
              href="#"
              className="bg-white/10 text-white px-4 py-2 rounded w-full text-left font-semibold underline text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Endereço do Terminal do Transbordo
            </a>
          </div>
        </div>
      </div>

      {/* Botão flutuante de compartilhar */}
      <motion.div
        className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-xl z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        data-aos="zoom-in"
      >
        <Share2 size={22} />
      </motion.div>
    </div>
  );
}
