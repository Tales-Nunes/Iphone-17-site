import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo ou nome do site */}
        <a href="#" className="text-xl font-semibold tracking-wide">
          iPhone 17
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#design" className="hover:text-gray-300 transition-colors">
            Design
          </a>
          <a href="#performance" className="hover:text-gray-300 transition-colors">
            Performance
          </a>
          <a href="#camera" className="hover:text-gray-300 transition-colors">
            Câmera
          </a>
          <a href="#colors" className="hover:text-gray-300 transition-colors">
            Cores
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
            Comprar
          </button>
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden flex flex-col items-center bg-black/90 backdrop-blur-md text-white space-y-6 py-8 transition-all duration-500 ${
          menuOpen
            ? "max-h-[400px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <a href="#design" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
          Design
        </a>
        <a href="#performance" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
          Performance
        </a>
        <a href="#camera" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
          Câmera
        </a>
        <a href="#colors" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
          Cores
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors"
        >
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
