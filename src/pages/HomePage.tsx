import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Heart, Users, BookOpen, Sparkles, Award, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import monicaImage from "../assets/monica2.jpg";
import backgroundImage from "../assets/background.jpeg";

export default function HomePage() {
  const navigate = useNavigate();
  const pillars = [
    {
      icon: BookOpen,
      title: "Educação",
      description: "Promovemos educação em sexualidade de qualidade, baseada em ciência e respeito."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acolhemos todas as identidades e orientações com respeito e dignidade."
    },
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Oferecemos espaço seguro para diálogo e apoio profissional."
    },
    {
      icon: Sparkles,
      title: "Sexualidade Saudável",
      description: "Incentivamos o desenvolvimento de uma sexualidade plena e consciente."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${backgroundImage}')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#fafafa] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              GRUPO CRESEX
            </h1>
            <p className="text-[#fafafa] text-xl max-w-2xl mb-8">
              Conectando profissionais da sexualidade em todo o Brasil
            </p>
            <motion.button
              className="bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contato")}
            >
              Entre em Contato
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Quem Somos</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollRevealCard delay={0}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-black mb-4">Nossa Missão</h3>
                <p className="text-[#666666]">
                  Promover a educação em sexualidade de qualidade, conectando profissionais qualificados 
                  e oferecendo recursos que transformam vidas através do conhecimento e do acolhimento.
                </p>
              </div>
            </ScrollRevealCard>

            <ScrollRevealCard delay={0.2}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full flex items-center justify-center mb-6">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-black mb-4">Nossa Visão</h3>
                <p className="text-[#666666]">
                  Ser referência nacional em educação em sexualidade, criando uma rede de profissionais 
                  comprometidos com a saúde sexual e o bem-estar integral das pessoas.
                </p>
              </div>
            </ScrollRevealCard>

            <ScrollRevealCard delay={0.4}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-black mb-4">Nossos Valores</h3>
                <p className="text-[#666666]">
                  Respeito, inclusão, ética profissional, evidência científica e compromisso 
                  com a diversidade humana em todas as suas formas.
                </p>
              </div>
            </ScrollRevealCard>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Nossos Pilares</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollRevealCard key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-[#fafafa] p-6 rounded-xl shadow-lg text-center"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.2)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-black mb-3">{pillar.title}</h3>
                  <p className="text-[#666666]">{pillar.description}</p>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* História e Atuação */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-black mb-6">Nossa História</h2>
                <p className="text-[#666666] mb-4">
                  O GRUPO CRESEX nasceu da visão de profissionais comprometidos em transformar 
                  a realidade da educação em sexualidade no Brasil. Fundado em 2017, o grupo rapidamente 
                  se expandiu, conectando especialistas de todo o país.
                </p>
                <p className="text-[#666666] mb-4">
                  Com presença nacional, desenvolvemos projetos que vão desde a formação profissional 
                  até ações sociais diretas, sempre pautados pela ética, ciência e respeito à diversidade.
                </p>
                <p className="text-[#666666]">
                  Hoje, somos uma referência em educação em sexualidade, eventos científicos e acolhimento 
                  de pessoas que buscam saúde sexual e bem-estar integral.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3MzMwNzQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Equipe do GRUPO CRESEX"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-xl -z-10"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fundadora Mônica Lima */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <ImageWithFallback
                  src={monicaImage}
                  alt="Mônica Lima"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-xl -z-10"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-[#fafafa] mb-6">Mônica Lima</h2>
                <h3 className="text-[#d4af37] mb-4">Fundadora do GRUPO CRESEX</h3>
                <div className="border-l-4 border-[#c71212] pl-6 mb-6">
                  <p className="text-[#fafafa] italic">
                    "A educação em sexualidade é um direito humano fundamental. Nosso compromisso 
                    é garantir que todas as pessoas tenham acesso a informação de qualidade 
                    e profissionais capacitados para orientá-las em sua jornada."
                  </p>
                </div>
                <p className="text-gray-400 mb-4">
                  Mônica Lima é referência nacional em educação em sexualidade e terapia sexual. 
                  Com mais de 15 anos de experiência, ela fundou o GRUPO CRESEX com a missão 
                  de unir profissionais e promover transformação social.
                </p>
                <motion.button
                  className="bg-[#c71212] text-[#fafafa] px-6 py-3 rounded-lg border-2 border-[#c71212]"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#d4af37"
                  }}
                  onClick={() => navigate("/NossaHistória")}
                >
                  Conheça Mais
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Banner ENASEX */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c71212]/90 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealTitle>
            <h2 className="text-[#fafafa] mb-4">ENASEX 2025</h2>
            <p className="text-[#d4af37] text-xl mb-6">
              Encontro Nacional de Profissionais da Sexualidade
            </p>
            <p className="text-[#fafafa] max-w-3xl mx-auto mb-8">
              O maior evento de educação em sexualidade do Brasil. Palestras, workshops e networking 
              com os principais especialistas do país.
            </p>
            <motion.button
              className="bg-[#fafafa] text-[#c71212] px-8 py-4 rounded-lg border-2 border-[#fafafa]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                backgroundColor: "#d4af37",
                color: "#000000"
              }}
              onClick={() => navigate("/enasex")}
            >
              Saiba Mais sobre o ENASEX
            </motion.button>
          </ScrollRevealTitle>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Nossos Serviços</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-[#666666] max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços para profissionais e comunidade
              </p>
            </div>
          </ScrollRevealTitle>

          <div className="text-center">
            <motion.button
              className="bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
              }}
              onClick={() => navigate("/servicos")}
            >
              Ver Todos os Serviços
            </motion.button>
          </div>
        </div>
      </section>

      {/* Projetos Sociais */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Projetos Sociais</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Transformamos vidas através de ações sociais voltadas ao acolhimento, 
                educação e inclusão
              </p>
            </div>
          </ScrollRevealTitle>

          <div className="text-center">
            <motion.button
              className="bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
              }}
              onClick={() => navigate("/projetos")}
            >
              Conheça Nossos Projetos
            </motion.button>
          </div>
        </div>
      </section>

      {/* Membro */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Torne-se Membro</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-[#666666] max-w-2xl mx-auto">
                Garanta todos os benefícios de ser um membro do GRUPO CRESEX
              </p>
            </div>
          </ScrollRevealTitle>

          <div className="text-center">
            <motion.button
              className="bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
              }}
              onClick={() => navigate("/servicos")}
              >
              Ver Todos os Serviços
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
