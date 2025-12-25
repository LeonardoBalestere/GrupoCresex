import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "figma:asset/e8a1af6ffc99fdcaf7bcd74a6087b01f31a4bff7.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const quickLinks = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Fundadora", path: "/fundadora" },
    { label: "ENASEX", path: "/enasex" },
    { label: "Projetos", path: "/projetos" },
    { label: "Membros", path: "/membros" },
  ];

  return (
    <footer ref={ref} id="contato" className="bg-[#000000] text-[#fafafa] py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Logo do GRUPO CRESEX" className="w-12 h-12" />
              <span className="text-2xl">GRUPO CRESEX</span>
            </div>
            <p className="text-gray-400">
              Conectando profissionais da sexualidade para um futuro melhor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-[#c71212] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contato</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:contato@cresex.com.br"
                className="flex items-center gap-2 text-gray-400 border-2 border-transparent inline-flex transition-colors"
                whileHover={{ 
                  color: "#c71212",
                  borderColor: "#c71212",
                  scale: 1.05
                }}
                transition={{ duration: 0.4 }}
              >
                <Mail size={20} />
                contato@cresex.com.br
              </motion.a>
              <motion.a
                href="https://wa.me/553491494154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 border-2 border-transparent inline-flex transition-colors"
                whileHover={{ 
                  color: "#c71212",
                  borderColor: "#c71212",
                  scale: 1.05
                }}
                transition={{ duration: 0.4 }}
              >
                <MessageCircle size={20} />
                (34) 9 9149-4154
              </motion.a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/grupocresex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c71212] rounded-lg flex items-center justify-center border-2 border-transparent transition-colors"
                whileHover={{ 
                  scale: 1.15,
                  borderColor: "#d4af37",
                  boxShadow: "0 10px 30px rgba(199, 18, 18, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Instagram size={20} />
              </motion.a>
              {/* <motion.a
                href="https://linkedin.com/company/cresex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c71212] rounded-lg flex items-center justify-center border-2 border-transparent transition-colors"
                whileHover={{ 
                  scale: 1.15,
                  borderColor: "#d4af37",
                  boxShadow: "0 10px 30px rgba(199, 18, 18, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Linkedin size={20} />
              </motion.a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} GRUPO CRESEX - Grupo de Profissionais da Sexualidade. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}