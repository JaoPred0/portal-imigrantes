import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true, // anima apenas uma vez ao entrar na viewport
    });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      {/* Bloco principal */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-center">
        {/* Redes sociais */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex flex-wrap justify-center items-center space-x-4 mb-4 text-sm"
        >
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Instagram className="w-4 h-4" />
            <span>@portal_imigracao</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Facebook className="w-4 h-4" />
            <span>@portal_imigracao</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Music2 className="w-4 h-4" />
            <span>@portal_imigracao</span>
          </a>
        </div>

        {/* E-mail de contato */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm font-semibold mb-6"
        >
          Entre em contato para parcerias:{" "}
          <a href="mailto:portalimigracao@gmail.com" className="hover:underline">
            portalimigracao@gmail.com
          </a>
        </p>

        {/* Menu centralizado */}
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm"
        >
          <li><a href="#quem-somos" className="hover:underline">QUEM SOMOS</a></li>
          <li><a href="#documentacao" className="hover:underline">DOCUMENTAÇÃO</a></li>
          <li><a href="#capacitacao" className="hover:underline">CAPACITAÇÃO</a></li>
          <li><a href="#emprego" className="hover:underline">EMPREGO</a></li>
          <li><a href="#moradia" className="hover:underline">MORADIA E TRANSPORTE</a></li>
        </ul>
      </div>

      {/* Faixa preta inferior */}
      <div className="w-full h-20 bg-black" />
    </footer>
  );
}
