import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IdCard,
  User,
  HeartPulse,
  ClipboardCheck,
  BadgeCheck,
  Volume2,
} from "lucide-react";

export default function DocumentationSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const docs = [
    {
      title: "Cadastro de Pessoa Física (CPF)",
      icon: <IdCard className="w-12 h-12 mx-auto mb-2" />,
    },
    {
      title: "Registro Geral (RG)",
      icon: <User className="w-12 h-12 mx-auto mb-2" />,
    },
    {
      title: "Sistema Único de Saúde (SUS)",
      icon: <HeartPulse className="w-12 h-12 mx-auto mb-2" />,
    },
    {
      title: "Revalidação de Documento",
      icon: <ClipboardCheck className="w-12 h-12 mx-auto mb-2" />,
    },
    {
      title: "Revalidação de Certificado",
      icon: <BadgeCheck className="w-12 h-12 mx-auto mb-2" />,
    },
  ];

  return (
    <section className="relative bg-green-500 text-white py-20 px-6 overflow-hidden">
      {/* Imagem de fundo à esquerda com fade-out */}
      <div
        className="absolute top-0 left-0 h-full w-1/3 z-0"
        style={{
          backgroundImage: `url('/documentacao-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto text-center" data-aos="fade-up">
        {/* Header */}
        <div className="flex items-center justify-end text-white/80 mb-2" data-aos="fade-left">
          <Volume2 className="w-5 h-5 mr-1" />
          <span className="text-sm">Haga clic para escuchar</span>
        </div>

        {/* Título com animação */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-4"
        >
          Documentação
        </motion.h2>

        {/* Subtítulo com animação */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12"
        >
          Aqui você encontra orientações sobre onde e como você conseguirá a sua
          documentação em nossa cidade.
        </motion.p>

        {/* Cards com animação em sequência e AOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
              className="bg-green-700 hover:bg-green-800 transition-colors rounded-lg shadow-lg p-6 w-full max-w-xs text-center"
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            >
              {doc.icon}
              <p className="text-md font-medium">{doc.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
