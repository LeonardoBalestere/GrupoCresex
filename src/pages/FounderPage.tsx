import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Award, BookOpen, Users, Globe, Heart, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import monica2Img from "../assets/monica2.jpg";

export default function FounderPage() {
  const achievements = [
    {
      icon: Award,
      title: "20+ Anos de Experiência",
      description: "Dedicação à educação em sexualidade e terapia"
    },
    {
      icon: BookOpen,
      title: "Autora Reconhecida",
      description: "Publicações em revistas e livros especializados"
    },
    {
      icon: Users,
      title: "Formação de Profissionais",
      description: "Mais de 1000 profissionais capacitados"
    },
    {
      icon: Globe,
      title: "Presença Nacional",
      description: "Palestras e workshops em todo o Brasil"
    }
  ];

  const quotes = [
    {
      text: "A educação em sexualidade é libertadora. Ela nos permite viver nossa sexualidade com plenitude, consciência e respeito.",
      context: "Palestra no ENASEX 2023"
    },
    {
      text: "Nosso papel como profissionais da sexualidade vai além da técnica: é sobre acolher, escutar e transformar vidas.",
      context: "Entrevista à Revista Saúde Sexual"
    },
    {
      text: "O GRUPO CRESEX nasceu do sonho de criar uma rede solidária de profissionais comprometidos com a mudança social.",
      context: "Lançamento do GRUPO CRESEX, 2017"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block px-4 py-2 bg-[#c71212] rounded-full mb-6">
                <span className="text-[#fafafa]">Fundadora do GRUPO CRESEX</span>
              </div>
              <h1 className="text-[#fafafa] mb-6">Mônica Lima</h1>
              <p className="text-[#d4af37] text-xl mb-4">
                Sexóloga, Terapeuta Sexual e Educadora
              </p>
              <p className="text-[#fafafa] text-lg">
                Referência nacional em educação em sexualidade, com mais de 20 anos transformando 
                vidas através do conhecimento, acolhimento e respeito à diversidade humana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <ImageWithFallback
                src={monica2Img}
                alt="Mônica Lima"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover"
                style={{ display: 'block' }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Trajetória</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="max-w-4xl mx-auto space-y-6 text-[#666666]">
            <ScrollReveal>
              <p>
                Mônica Lima iniciou sua carreira como psicóloga clínica, mas logo descobriu sua verdadeira paixão: 
                a sexologia e a educação em sexualidade, e realizou especializações internacionais em diversos países.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p>
                Ao longo de sua trajetória, Mônica percebeu a necessidade de criar uma rede de profissionais 
                comprometidos com a educação em sexualidade de qualidade. Em 2017, fundou o GRUPO CRESEX, reunindo 
                especialistas de todo o Brasil em torno de uma missão comum: transformar vidas através do conhecimento.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p>
                Seu trabalho é pautado pela ética, ciência e respeito à diversidade. Mônica acredita que a educação 
                sexual é um direito humano fundamental e dedica-se incansavelmente a torná-la acessível a todas as pessoas, 
                independentemente de classe social, orientação sexual ou identidade de gênero.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p>
                Além de liderar o GRUPO CRESEX, Mônica atua como palestrante, formadora de profissionais, 
                autora de artigos científicos e consultora em políticas públicas de educação em sexualidade. 
                Seu impacto já alcançou milhares de pessoas em todo o país.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Realizações</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
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
                    <achievement.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-black mb-3">{achievement.title}</h3>
                  <p className="text-[#666666]">{achievement.description}</p>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Pensamentos e Citações</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#c71212]">
                  <div className="flex items-start gap-4">
                    <Sparkles className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[#333333] text-lg italic mb-4">
                        "{quote.text}"
                      </p>
                      <p className="text-[#666666]">— {quote.context}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Impacto Nacional</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                O trabalho de Mônica Lima transcende fronteiras geográficas e sociais, 
                alcançando pessoas de todas as idades e realidades
              </p>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollRevealCard delay={0}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="text-[#c71212]" size={40} />
                </div>
                <h2 className="text-black mb-2">1000+</h2>
                <p className="text-[#666666]">Profissionais Capacitados</p>
              </div>
            </ScrollRevealCard>

            <ScrollRevealCard delay={0.2}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-[#c71212]" size={40} />
                </div>
                <h2 className="text-black mb-2">50.000+</h2>
                <p className="text-[#666666]">Vidas Impactadas</p>
              </div>
            </ScrollRevealCard>

            <ScrollRevealCard delay={0.4}>
              <div className="bg-[#fafafa] p-8 rounded-xl shadow-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="text-[#c71212]" size={40} />
                </div>
                <h2 className="text-black mb-2">27 Estados</h2>
                <p className="text-[#666666]">Presença em Todo o Brasil</p>
              </div>
            </ScrollRevealCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealTitle>
            <h2 className="text-black mb-6">Conecte-se com Mônica</h2>
            <p className="text-[#666666] mb-8 text-xl">
              Siga o trabalho da Dra. Mônica Lima nas redes sociais e acompanhe 
              suas palestras, publicações e projetos
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
