import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio real do formulário
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@cresex.com.br",
      link: "mailto:contato@cresex.com.br",
      color: "from-[#c71212] to-[#d4af37]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(34) 9149-4154",
      link: "https://wa.me/553491494154",
      color: "from-[#c71212] to-[#333333]"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Belo Horizonte 451, sala 02, bairro Martins, Uberlândia - MG",
      link: null,
      color: "from-[#333333] to-[#d4af37]"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@cresex",
      link: "https://instagram.com/cresex"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "GRUPO CRESEX",
      link: "https://linkedin.com/company/cresex"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-[#fafafa] mb-6">Entre em Contato</h1>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto">
              Estamos aqui para responder suas dúvidas e ouvir suas sugestões
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Formas de Contato</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.15)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-black mb-3">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#c71212] hover:text-[#d4af37] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#666666]">{info.content}</p>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-12">
              <h2 className="text-[#fafafa] mb-4">Envie sua Mensagem</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-gray-400">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
              </p>
            </div>
          </ScrollRevealTitle>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-[#fafafa] p-8 rounded-xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#333333] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#333333] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-[#333333] mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212]"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#333333] mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212] bg-white"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações Gerais</option>
                    <option value="servicos">Serviços</option>
                    <option value="membros">Tornar-se Membro</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="projetos">Projetos Sociais</option>
                    <option value="enasex">ENASEX</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212] resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg flex items-center justify-center gap-2 border-2 border-[#c71212]"
                whileHover={{
                  scale: 1.02,
                  borderColor: "#d4af37",
                  boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Enviar Mensagem
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-12">
              <h2 className="text-black mb-4">Siga-nos nas Redes Sociais</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {socialMedia.map((social, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex items-center gap-6"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.15)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <social.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-black mb-1">{social.name}</h3>
                    <p className="text-[#c71212]">{social.handle}</p>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealTitle>
            <h2 className="text-[#fafafa] mb-6">Dúvidas Frequentes?</h2>
            <p className="text-gray-400 mb-8 text-xl">
              Antes de entrar em contato, confira nossa seção de perguntas frequentes. 
              Talvez sua dúvida já esteja respondida!
            </p>
            <motion.button
              className="bg-[#d4af37] text-black px-10 py-4 rounded-lg border-2 border-[#d4af37]"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fafafa",
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
              }}
              onClick={() => (window.location.href = "/")}
            >
              Ver FAQ
            </motion.button>
          </ScrollRevealTitle>
        </div>
      </section>
    </div>
  );
}
