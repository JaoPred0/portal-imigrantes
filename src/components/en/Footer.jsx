import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true, // animar solo una vez al entrar en la vista
    });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      {/* Bloque principal */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-center">
        {/* Redes sociales */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex flex-wrap justify-center items-center space-x-4 mb-4 text-sm"
        >
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Instagram className="w-4 h-4" />
            <span>@portal_inmigracion</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Facebook className="w-4 h-4" />
            <span>@portal_inmigracion</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Music2 className="w-4 h-4" />
            <span>@portal_inmigracion</span>
          </a>
        </div>

        {/* Correo de contacto */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm font-semibold mb-6"
        >
          Contáctanos para colaboraciones:{" "}
          <a href="mailto:portalimigracao@gmail.com" className="hover:underline">
            portalimigracao@gmail.com
          </a>
        </p>

        {/* Menú centrado */}
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm"
        >
          <li><a href="#about-us" className="hover:underline">SOBRE NOSOTROS</a></li>
          <li><a href="#documentation" className="hover:underline">DOCUMENTACIÓN</a></li>
          <li><a href="#training" className="hover:underline">CAPACITACIÓN</a></li>
          <li><a href="#jobs" className="hover:underline">EMPLEOS</a></li>
          <li><a href="#housing" className="hover:underline">VIVIENDA Y TRANSPORTE</a></li>
        </ul>
      </div>

      {/* Barra negra inferior */}
      <div className="w-full h-20 bg-black" />
    </footer>
  );
}
