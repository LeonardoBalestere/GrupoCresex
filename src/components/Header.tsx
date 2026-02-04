import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import logo from "figma:asset/e8a1af6ffc99fdcaf7bcd74a6087b01f31a4bff7.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "ENASEX", path: "/enasex" },
    { label: "Projetos", path: "/projetos" },
    { label: "Associar", path: "/membros" },
    { label: "Profissionais", path: "/profissionais" },
    { label: "Saiba Mais", path: "/NossaHistória" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="bg-[#fafafa] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo do GRUPO CRESEX " className="w-12 h-12" />
              <span className="text-2xl text-black">GRUPO CRESEX</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-black hover:text-[#c71212] transition-colors border-b-2 ${
                    location.pathname === item.path ? 'border-[#c71212]' : 'border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-black hover:text-[#c71212] transition-colors ${
                    location.pathname === item.path ? 'text-[#c71212]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}