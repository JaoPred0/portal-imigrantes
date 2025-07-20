import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true, // animate only once when entering viewport
    });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      {/* Main block */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-center">
        {/* Social media */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex flex-wrap justify-center items-center space-x-4 mb-4 text-sm"
        >
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Instagram className="w-4 h-4" />
            <span>@portal_immigration</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Facebook className="w-4 h-4" />
            <span>@portal_immigration</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <Music2 className="w-4 h-4" />
            <span>@portal_immigration</span>
          </a>
        </div>

        {/* Contact email */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm font-semibold mb-6"
        >
          Contact us for partnerships:{" "}
          <a href="mailto:portalimigracao@gmail.com" className="hover:underline">
            portalimigracao@gmail.com
          </a>
        </p>

        {/* Centered menu */}
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm"
        >
          <li><a href="#about-us" className="hover:underline">ABOUT US</a></li>
          <li><a href="#documentation" className="hover:underline">DOCUMENTATION</a></li>
          <li><a href="#training" className="hover:underline">TRAINING</a></li>
          <li><a href="#jobs" className="hover:underline">JOBS</a></li>
          <li><a href="#housing" className="hover:underline">HOUSING & TRANSPORT</a></li>
        </ul>
      </div>

      {/* Bottom black bar */}
      <div className="w-full h-20 bg-black" />
    </footer>
  );
}
