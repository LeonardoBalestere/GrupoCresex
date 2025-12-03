import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Heart, Users, Shield, BookOpen, Home, MessageCircle, Sparkles, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ProjectsPage() {
  const projects = [
    {
      icon: Home,
      title: "Espaço Acolha",
      subtitle: "Acolhimento a vítimas de violência sexual",
      description: "Espaço seguro e acolhedor para vítimas de violência sexual, oferecendo atendimento psicológico, jurídico e social gratuito. Nossa equipe multidisciplinar trabalha para restaurar a dignidade e autonomia das vítimas.",
      impact: "Mais de 500 pessoas acolhidas desde 2021",
      color: "from-[#c71212] to-[#d4af37]"
    },
    {
      icon: Heart,
      title: "Banco Arco-Íris",
      subtitle: "Apoio à comunidade LGBTQIA+",
      description: "Rede de suporte para pessoas LGBTQIA+ que enfrentam discriminação, rejeição familiar ou dificuldades de acesso a serviços de saúde. Oferecemos orientação, acolhimento e direcionamento a profissionais especializados.",
      impact: "200+ atendimentos mensais em todo o Brasil",
      color: "from-[#d4af37] to-[#c71212]"
    },
    {
      icon: Shield,
      title: "Rodas de Conversa",
      subtitle: "Educação e prevenção em comunidades",
      description: "Promovemos rodas de conversa em escolas, comunidades e organizações sobre temas como consentimento, prevenção de ISTs, relacionamentos saudáveis e direitos sexuais e reprodutivos.",
      impact: "150 rodas realizadas em 2024",
      color: "from-[#c71212] to-[#333333]"
    },
    {
      icon: BookOpen,
      title: "Educação Inclusiva",
      subtitle: "Formação de educadores",
      description: "Capacitação gratuita de educadores da rede pública para abordagem de educação em sexualidade inclusiva e baseada em evidências. Fornecemos materiais didáticos e suporte continuado.",
      impact: "300 educadores capacitados em 2024",
      color: "from-[#333333] to-[#d4af37]"
    },
    {
      icon: Users,
      title: "Grupos de Apoio",
      subtitle: "Suporte emocional e social",
      description: "Grupos de apoio para diferentes públicos: jovens LGBTQIA+, mulheres vítimas de violência, pessoas com disfunções sexuais, entre outros. Espaços seguros de escuta e acolhimento.",
      impact: "8 grupos ativos com 120 participantes",
      color: "from-[#d4af37] to-[#c71212]"
    },
    {
      icon: MessageCircle,
      title: "Canal de Acolhimento",
      subtitle: "Atendimento 24/7",
      description: "Linha direta de WhatsApp para acolhimento emergencial de pessoas em situação de vulnerabilidade. Atendimento humanizado e direcionamento para rede de apoio.",
      impact: "Disponível 24 horas, 7 dias por semana",
      color: "from-[#c71212] to-[#d4af37]"
    }
  ];

  const achievements = [
    {
      number: "2.000+",
      label: "Vidas Transformadas",
      icon: Heart
    },
    {
      number: "50+",
      label: "Comunidades Atendidas",
      icon: Users
    },
    {
      number: "100%",
      label: "Gratuito",
      icon: Sparkles
    },
    {
      number: "4 Anos",
      label: "De Atuação Contínua",
      icon: Award
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwaW5nfGVufDF8fHx8MTczMzA3NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#fafafa] mb-6">Projetos Sociais</h1>
            <p className="text-[#d4af37] text-2xl mb-8">
              Transformando vidas através da ação social
            </p>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto">
              Desenvolvemos ações voltadas ao acolhimento, educação e inclusão de pessoas 
              em situação de vulnerabilidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-12">
              <h2 className="text-black mb-4">Nosso Compromisso Social</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-[#666666] text-lg mb-6">
                Acreditamos que a educação em sexualidade e o acolhimento são direitos fundamentais de todas as pessoas, 
                independentemente de sua condição socioeconômica. Por isso, desenvolvemos projetos sociais que 
                levam conhecimento, suporte e dignidade a quem mais precisa.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-[#666666] text-lg">
                Nossos projetos são realizados por profissionais voluntários comprometidos com a transformação 
                social e contam com parcerias estratégicas para maximizar o impacto positivo nas comunidades.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Nossos Projetos</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollRevealCard key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-[#fafafa] rounded-xl shadow-lg overflow-hidden h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.2)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center mb-6`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-black mb-2">{project.title}</h3>
                    <p className="text-[#c71212] mb-4">{project.subtitle}</p>
                    <p className="text-[#666666] mb-6">{project.description}</p>
                    <div className="bg-gradient-to-r from-[#c71212]/10 to-[#d4af37]/10 p-4 rounded-lg">
                      <p className="text-[#333333]">
                        <span className="font-semibold">Impacto:</span> {project.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Nosso Impacto</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollRevealCard key={index} delay={index * 0.15}>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100">
                  <div className="flex items-center justify-center mb-4">
                    <achievement.icon className="text-[#c71212]" size={40} />
                  </div>
                  <h2 className="text-black mb-2">{achievement.number}</h2>
                  <p className="text-[#666666]">{achievement.label}</p>
                </div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nfGVufDF8fHx8MTczMzA3NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Voluntários"
                className="rounded-xl shadow-2xl"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-[#fafafa] mb-6">Como Você Pode Ajudar</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#fafafa] mb-2">Seja Voluntário</h3>
                      <p className="text-gray-400">
                        Profissionais de diversas áreas podem contribuir com seu conhecimento e tempo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#fafafa] mb-2">Faça uma Doação</h3>
                      <p className="text-gray-400">
                        Contribuições financeiras nos ajudam a expandir nosso alcance e impacto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#fafafa] mb-2">Divulgue Nosso Trabalho</h3>
                      <p className="text-gray-400">
                        Compartilhe informações sobre nossos projetos e ajude-nos a alcançar mais pessoas.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  className="bg-[#d4af37] text-black px-8 py-4 rounded-lg mt-8 border-2 border-[#d4af37]"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#fafafa",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
                  }}
                  onClick={() => window.location.href = '/contato'}
                >
                  Quero Contribuir
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Parcerias e Apoio</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-[#666666] max-w-3xl mx-auto">
                Nossos projetos sociais são possíveis graças ao apoio de organizações, 
                empresas e profissionais que acreditam em nossa missão
              </p>
            </div>
          </ScrollRevealTitle>

          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#c71212]/5 to-[#d4af37]/5 p-12 rounded-xl text-center">
              <p className="text-[#666666] text-lg mb-6">
                Interessado em apoiar nossos projetos sociais ou estabelecer uma parceria?
              </p>
              <motion.button
                className="bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212]"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "#d4af37",
                  boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
                }}
                onClick={() => window.location.href = '/contato'}
              >
                Entre em Contato
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
