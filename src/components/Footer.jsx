function Footer() {
  const sections = [
    {
      title: "Comprar e Saber Mais",
      links: ["iPhone 17 Pro", "iPhone 17 Pro Max", "Comparar Modelos", "Acessórios"],
    },
    {
      title: "Especificações",
      links: ["Características técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks = ["Política de Privacidade", "Termos de Uso", "Vendas"];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Seções principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white text-lg">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              Copyright © 2025 Apple Inc. Todos os direitos reservados
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              {buttonLinks.map((link, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Site criado para fins educacionais — Tales Nunes de Siqueira
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
