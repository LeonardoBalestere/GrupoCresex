import { Mail, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cresex-logo.svg";
import { Container } from "./layout/container";
import Flex from "./ui/Flex";
import Text from "./ui/Text";

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
        style={{ y, opacity }}
        className="relative z-10 w-full"
      >
        <Container className="overflow-hidden">
          <Flex direction="col" gap={8} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
              {/* Brand */}
              <Flex direction="col" gap={4} className="w-full">
                <Flex align="center" gap={3} className="w-full">
                  <img src={logo} alt="Logo do GRUPO CRESEX" className="w-12 h-12" />
                </Flex>
                <Text variant="body" className="text-gray-400">
                  Conectando profissionais da sexualidade para um futuro melhor.
                </Text>
              </Flex>

              {/* Quick Links */}
              <Flex direction="col" gap={4} className="w-full">
                <Text as="h3" variant="h3" className="text-[#fafafa]">Links Rápidos</Text>
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
              </Flex>

              {/* Contact */}
              <Flex direction="col" gap={4} className="w-full">
                <Text as="h3" variant="h3" className="text-[#fafafa]">Contato</Text>
                <Flex direction="col" gap={3} className="w-full">
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
                </Flex>
              </Flex>

              {/* Social Media */}
              <Flex direction="col" gap={4} className="w-full">
                <Text as="h3" variant="h3" className="text-[#fafafa]">Redes Sociais</Text>
                <Flex gap={4} className="w-full">
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
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </motion.a>
                </Flex>
              </Flex>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 text-center w-full">
              <Text variant="body" className="text-gray-400">
                © {currentYear}. Todos os direitos reservados.
              </Text>
            </div>
          </Flex>
        </Container>
      </motion.div>
    </footer>
  );
}