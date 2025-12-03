import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Award, BookOpen, Mic, Coffee, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function EnasexPage() {
  const highlights = [
    {
      icon: Mic,
      title: "Palestras de Referência",
      description: "Especialistas nacionais e internacionais compartilhando conhecimento de ponta"
    },
    {
      icon: BookOpen,
      title: "Workshops Práticos",
      description: "Atividades hands-on para desenvolvimento de habilidades profissionais"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conecte-se com profissionais de todo o Brasil e amplie sua rede"
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Certificado reconhecido nacionalmente para todos os participantes"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Mendes",
      role: "Sexólogo Clínico",
      text: "O ENASEX transformou minha prática profissional. As conexões que fiz aqui são inestimáveis!",
      rating: 5
    },
    {
      name: "Dra. Ana Paula",
      role: "Terapeuta Sexual",
      text: "Um evento essencial para quem trabalha com sexualidade. Conteúdo de altíssima qualidade!",
      rating: 5
    },
    {
      name: "Prof. Ricardo Lima",
      role: "Educador Sexual",
      text: "Cada edição supera a anterior. O ENASEX é referência nacional na área!",
      rating: 5
    }
  ];

  const schedule = [
    {
      day: "Dia 1",
      date: "3 de Setembro, 2027",
    },
    {
      day: "Dia 2",
      date: "4 de Setembro, 2027"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYXVkaWVuY2V8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#c71212]/90 via-black/80 to-black/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-6 py-3 bg-[#d4af37] rounded-full mb-6">
              <span className="text-black">6ª Edição</span>
            </div>
            <h1 className="text-[#fafafa] mb-6">ENASEX 2025</h1>
            <p className="text-[#d4af37] text-2xl mb-8">
              Encontro Nacional de Profissionais da Sexualidade
            </p>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto mb-12">
              O maior e mais importante evento de educação em sexualidade do Brasil
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-[#fafafa]">
                <Calendar className="text-[#d4af37]" size={24} />
                <span>3 e 4 de Setembro, 2027</span>
              </div>
              <div className="flex items-center gap-3 text-[#fafafa]">
                <MapPin className="text-[#d4af37]" size={24} />
                <span>Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-3 text-[#fafafa]">
                <Users className="text-[#d4af37]" size={24} />
                <span>Mais de 2000 participantes esperados</span>
              </div>
            </div>

            <motion.button
              className="bg-[#d4af37] text-black px-10 py-4 rounded-lg border-2 border-[#d4af37]"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#fafafa",
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Inscreva-se Agora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About ENASEX */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Sobre o ENASEX</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <p className="text-[#666666] text-lg">
                O ENASEX é o principal evento nacional dedicado aos profissionais da sexualidade. 
                Realizado bienualmente desde 2017, o encontro reúne sexólogos, terapeutas sexuais, 
                educadores, psicólogos e demais especialistas para três dias intensos de aprendizado, 
                troca de experiências e networking.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[#666666] text-lg">
                Com programação diversificada que inclui palestras magistrais, workshops práticos, 
                apresentação de trabalhos científicos e mesas redondas, o ENASEX é referência em 
                atualização profissional e discussão de tendências na área da sexualidade humana.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Destaques do Evento</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
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
                    <highlight.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-black mb-3">{highlight.title}</h3>
                  <p className="text-[#666666]">{highlight.description}</p>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Programação</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <ScrollRevealCard key={index} delay={index * 0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-[#c71212] to-[#d4af37] p-6 text-center">
                    <h3 className="text-[#fafafa] mb-2">{day.day}</h3>
                    <p className="text-[#fafafa]">{day.date}</p>
                  </div>
                </div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-[#fafafa] mb-4">Edições Anteriores</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3MzMwNzQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTczMzA3NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            ].map((image, index) => (
              <ScrollRevealCard key={index} delay={index * 0.15}>
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`ENASEX ${2024 - index}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-[#fafafa] p-4">ENASEX {2024 - index}</p>
                  </div>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealTitle>
            <div className="text-center mb-16">
              <h2 className="text-black mb-4">Depoimentos</h2>
              <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
            </div>
          </ScrollRevealTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollRevealCard key={index} delay={index * 0.2}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#d4af37] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-[#666666] italic mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="text-black">{testimonial.name}</p>
                    <p className="text-[#666666]">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#c71212] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollRevealTitle>
            <h2 className="text-[#fafafa] mb-6">Garanta Sua Vaga!</h2>
            <p className="text-[#fafafa] mb-8 text-xl">
              Inscrições limitadas. Não perca a oportunidade de participar do maior 
              evento de sexualidade do Brasil!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-[#d4af37] text-black px-10 py-4 rounded-lg border-2 border-[#d4af37]"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#fafafa",
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)"
                }}
              >
                Incrições em breve
              </motion.button>
              <motion.button
                className="bg-transparent text-[#fafafa] px-10 py-4 rounded-lg border-2 border-[#fafafa]"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#fafafa",
                  color: "#c71212"
                }}
              >
                Baixar Programação Completa
              </motion.button>
            </div>
          </ScrollRevealTitle>
        </div>
      </section>
    </div>
  );
}
