import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Stethoscope, BookOpen, Mic, Calendar, Heart, Briefcase, Store, House } from "lucide-react";


export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "Clínica Pop",
      description: "Atendimento clínico acessível em terapia sexual e aconselhamento. Profissionais qualificados prontos para te acolher.",
      action: "Agendar Consulta",
      color: "from-[#c71212] to-[#d4af37]"
    },
    {
      icon: BookOpen,
      title: "Editora GRUPO CRESEX",
      description: "Publicações especializadas em sexualidade, educação sexual e saúde. Conteúdo científico e acessível.",
      action: "Ver Publicações",
      color: "from-[#d4af37] to-[#c71212]"
    },
    {
      icon: Briefcase,
      title: "Cursos e Capacitações",
      description: "Formação continuada para profissionais da saúde, educação e áreas afins. Certificação reconhecida nacionalmente.",
      action: "Ver Cursos",
      color: "from-[#c71212] to-[#333333]"
    },
    {
      icon: Mic,
      title: "Podcast GRUPO CRESEX",
      description: "Conversas francas sobre sexualidade, relacionamentos e saúde sexual com especialistas renomados.",
      action: "Ouvir Podcast",
      color: "from-[#333333] to-[#c71212]"
    },
    {
      icon: Calendar,
      title: "Eventos e Workshops",
      description: "Palestras, workshops e eventos que promovem educação sexual e networking entre profissionais.",
      action: "Ver Agenda",
      color: "from-[#d4af37] to-[#333333]"
    },
    {
      icon: Heart,
      title: "Banco Arco-Íris",
      description: "Rede de apoio e recursos para a comunidade LGBTQIA+. Orientação, acolhimento e direcionamento profissional.",
      action: "Saiba Mais",
      color: "from-[#c71212] to-[#d4af37]"
    },
    {
      icon: Store,
      title: "Casa de Lilith",
      description: "Sex shop com curadoria de produtos eróticos e sensuais para todos os gêneros e orientações. Promovendo o prazer e a saúde sexual com discrição e informação.",
      action: "Ir para a Loja",
      color: "from-[#333333] to-[#d4af37]"
    },
    {
      icon: House,
      title: "Espaço Acolha",
      description: "Espaço de acolhimento para vítimas de violência sexual. Atendimento humanizado e multiprofissional.",
      action: "Conhecer Projeto",
      color: "from-[#333333] to-[#d4af37]"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlcnZpY2VzfGVufDF8fHx8MTczMzA3NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080')` 
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
            <h1 className="text-[#fafafa] mb-6">Nossos Serviços</h1>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto">
              Oferecemos soluções completas em educação sexual, saúde e acolhimento 
              para profissionais e comunidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollRevealCard key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-[#fafafa] rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.15)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                      <service.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-black mb-4">{service.title}</h3>
                    <p className="text-[#666666] mb-6 flex-1">{service.description}</p>
                    <motion.button
                      className="bg-[#c71212] text-[#fafafa] px-6 py-3 rounded-lg w-full border-2 border-transparent"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: "#d4af37"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.action}
                    </motion.button>
                  </div>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Information */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Por que escolher o GRUPO CRESEX?</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#fafafa]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Profissionais Qualificados</h3>
                    <p className="text-gray-400">
                      Nossa equipe é formada por especialistas com formação reconhecida e anos de experiência.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#fafafa]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Abordagem Científica</h3>
                    <p className="text-gray-400">
                      Todos os nossos serviços são baseados em evidências científicas e práticas atualizadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c71212] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#fafafa]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Acolhimento e Respeito</h3>
                    <p className="text-gray-400">
                      Oferecemos um ambiente seguro, livre de julgamentos e respeitoso à diversidade.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black">★</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Rede Nacional</h3>
                    <p className="text-gray-400">
                      Presença em todo o Brasil, conectando profissionais e facilitando o acesso aos serviços.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black">★</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Preços Acessíveis</h3>
                    <p className="text-gray-400">
                      Acreditamos que educação sexual de qualidade deve ser acessível a todos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black">★</span>
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] mb-2">Compromisso Social</h3>
                    <p className="text-gray-400">
                      Desenvolvemos projetos sociais que transformam vidas e promovem inclusão.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealTitle>
            <h2 className="text-black mb-6">Pronto para começar?</h2>
            <p className="text-[#666666] mb-8 text-xl">
              Entre em contato conosco e descubra como podemos ajudá-lo
            </p>
            <motion.button
              className="bg-[#c71212] text-[#fafafa] px-10 py-4 rounded-lg border-2 border-[#c71212]"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#d4af37",
                boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)"
              }}
              onClick={() => window.location.href = '/contato'}
            >
              Entrar em Contato
            </motion.button>
          </ScrollRevealTitle>
        </div>
      </section>
    </div>
  );
}
