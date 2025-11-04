import { useEffect, useState } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8 text-white">
        <a href="#design" className="hover:text-gray-300 transition-colors">Design</a>
        <a href="#performance" className="hover:text-gray-300 transition-colors">Performance</a>
        <a href="#camera" className="hover:text-gray-300 transition-colors">Câmera</a>
        <a href="#colors" className="hover:text-gray-300 transition-colors">Cores</a>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
