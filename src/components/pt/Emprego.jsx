import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Share2 } from "lucide-react";

const servicos = [
  "Fast Food Restaurante",
  "Fast Food da Monarquia",
  "Fast Food do Boby",
  "Lojas varejista do mercado de moda",
  "Loja de Atacarejo",
];

export default function Emprego() {
  const [busca, setBusca] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const resultados = busca
    ? servicos.filter((s) =>
        s.toLowerCase().includes(busca.toLowerCase())
      )
    : servicos;

  return (
    <div className="min-h-screen bg-[#1E3B12] text-white relative overflow-hidden">
      {/* Imagem de fundo à esquerda com fade */}
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

      {/* Conteúdo principal */}
      <div className="relative z-10 px-6 py-12">
        {/* Título e botão de áudio */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <span className="text-sm">Haga clic para escuchar</span>
            <button>
              <img src="/play-icon.png" alt="play" className="h-5" />
            </button>
          </div>
          <h1 className="text-5xl font-extrabold" data-aos="zoom-in">
            Emprego
          </h1>
          <p className="text-lg mt-3 text-white/90" data-aos="fade-up">
            Aqui você encontra empresas que têm portas abertas para dar oportunidade aos imigrantes.
          </p>
        </motion.div>

        {/* Texto fixo no topo direito */}
        <div
          className="absolute top-16 right-8 text-right text-xs leading-tight font-semibold uppercase tracking-wider"
          data-aos="fade-left"
        >
          <p className="text-white">PRINCIPAIS AGÊNCIAS DE EMPREGO</p>
          <a href="#" className="text-white text-sm italic underline">
            Clique para saber mais
          </a>
        </div>

        {/* Campo de busca */}
        <motion.div
          className="max-w-md mx-auto mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          data-aos="fade-up"
        >
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Serviços"
            className="w-full py-3 px-12 rounded-md text-black text-lg shadow-lg border border-black bg-white"
          />
          <Search className="absolute left-4 top-3.5 text-black" size={20} />
          {busca && (
            <X
              className="absolute right-4 top-3.5 text-black cursor-pointer"
              size={20}
              onClick={() => setBusca("")}
            />
          )}
        </motion.div>

        {/* Resultados */}
        <div
          className="max-w-xl mx-auto h-[300px] overflow-y-auto bg-white/10 rounded-md px-6 py-4 text-white shadow-md backdrop-blur"
          data-aos="fade-up"
        >
          <AnimatePresence>
            {busca && (
              <motion.div
                key="termo"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 flex items-center justify-between bg-white/20 px-4 py-2 rounded text-sm"
              >
                <span>Você pesquisou: <strong>{busca}</strong></span>
                <a
                  href="#"
                  className="text-blue-200 underline flex items-center gap-1"
                >
                  Ver mais <ExternalLink size={14} />
                </a>
              </motion.div>
            )}

            {resultados.map((item, idx) => (
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

            {resultados.length === 0 && (
              <motion.div
                key="nenhum"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center mt-4 text-white/80"
              >
                Nenhum resultado encontrado.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botão flutuante de compartilhar (opcional) */}
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
