import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import logo from "figma:asset/e8a1af6ffc99fdcaf7bcd74a6087b01f31a4bff7.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsEventsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Projetos", path: "/projetos" },
    { label: "Associar", path: "/membros" },
    { label: "Profissionais", path: "/profissionais" },
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
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
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

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: menuItems.length * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setIsEventsOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-black hover:text-[#c71212] transition-colors border-b-2 ${
                  location.pathname === "/enasex" ? "border-[#c71212]" : "border-transparent"
                }`}
              >
                Eventos
                <ChevronDown size={16} className={isEventsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              <AnimatePresence>
                {isEventsOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/enasex"
                      onClick={() => setIsEventsOpen(false)}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-[#fafafa] hover:text-[#c71212] transition-colors ${
                        location.pathname === "/enasex" ? "text-[#c71212]" : ""
                      }`}
                    >
                      Enasex
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden text-black"
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

              <button
                type="button"
                onClick={() => setIsEventsOpen((prev) => !prev)}
                className={`w-full py-2 text-left flex items-center justify-between text-black hover:text-[#c71212] transition-colors ${
                  location.pathname === "/enasex" ? "text-[#c71212]" : ""
                }`}
              >
                Eventos
                <ChevronDown size={16} className={isEventsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              {isEventsOpen && (
                <Link
                  to="/enasex"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block pl-4 py-2 text-black hover:text-[#c71212] transition-colors ${
                    location.pathname === "/enasex" ? "text-[#c71212]" : ""
                  }`}
                >
                  Enasex
                </Link>
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}