import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Award, BookOpen, Mic, Star, Globe, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Container } from "../components/layout/container";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Flex from "../components/ui/Flex";
import Text from "../components/ui/Text";

const EVEN3_ENASEX_URL = "https://www.even3.com.br/enasex-770734/";

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
      date: "03 de Setembro, 2027",
    },
    {
      day: "Dia 2",
      date: "04 de Setembro, 2027"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYXVkaWVuY2V8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Audiência do ENASEX"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#c71212]/90 via-black/80 to-black/90" />
        
        <Container className="relative z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Flex direction="col" align="center" gap={6} className="w-full max-w-4xl mx-auto text-center">
              <Flex align="center" justify="center" className="px-6 py-2 bg-[#d4af37] rounded-full">
                <Text as="span" variant="label" className="text-black font-bold">
                  6ª Edição
                </Text>
              </Flex>

              <Text as="h1" variant="h1" className="text-[#fafafa]">
                ENASEX 2027
              </Text>

              <Text variant="body" className="text-[#d4af37] text-xl md:text-2xl font-medium">
                Encontro Nacional de Sexualidade
              </Text>

              <Text variant="body" className="text-[#fafafa] text-lg md:text-xl w-full max-w-[768px]">
                O maior e mais importante evento de educação em sexualidade do Brasil
              </Text>
              
              <Flex wrap="wrap" justify="center" gap={6} className="my-2 text-[#fafafa]">
                <Flex align="center" gap={2}>
                  <Calendar className="text-[#d4af37]" size={22} />
                  <Text as="span" variant="body">03/09/2027 – 04/09/2027</Text>
                </Flex>

                <Flex align="center" gap={2}>
                  <MapPin className="text-[#d4af37]" size={22} />
                  <Text as="span" variant="body">Rio de Janeiro - RJ, Brasil</Text>
                </Flex>

                <Flex align="center" gap={2}>
                  <Globe className="text-[#d4af37]" size={22} />
                  <Text as="span" variant="body">Presencial com transmissão online</Text>
                </Flex>

                <Flex align="center" gap={2}>
                  <Users className="text-[#d4af37]" size={22} />
                  <Text as="span" variant="body">Mais de 2.000 participantes</Text>
                </Flex>
              </Flex>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                  <a href={EVEN3_ENASEX_URL} target="_blank" rel="noopener noreferrer">
                    Comprar Ingressos
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </motion.div>
            </Flex>
          </motion.div>
        </Container>
      </section>

      {/* About ENASEX */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] overflow-hidden">
        <Container className="overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
              <Text as="h2" variant="h2" className="text-black">Sobre o ENASEX</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <Flex direction="col" gap={6} className="w-full max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Text variant="body" className="text-gray-600 text-lg">
                O ENASEX é o principal evento nacional dedicado aos profissionais da sexualidade. 
                Realizado bienalmente desde 2017, o encontro reúne sexólogos, terapeutas sexuais, 
                educadores, psicólogos e demais especialistas para dois dias intensos de aprendizado, 
                troca de experiências e networking.
              </Text>
            </ScrollReveal>

            <ScrollReveal>
              <Text variant="body" className="text-gray-600 text-lg">
                Com programação diversificada que inclui palestras magistrais, workshops práticos, 
                apresentação de trabalhos científicos e mesas redondas, o ENASEX é referência em 
                atualização profissional e discussão de tendências na área da sexualidade humana.
              </Text>
            </ScrollReveal>
          </Flex>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
              <Text as="h2" variant="h2" className="text-[#fafafa]">Destaques do Evento</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <ScrollRevealCard key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(199, 18, 18, 0.2)"
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full p-6 text-center">
                    <Flex direction="col" align="center" gap={4}>
                      <Flex align="center" justify="center" className="w-16 h-16 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-full">
                        <highlight.icon className="text-white" size={28} />
                      </Flex>
                      <Text as="h3" variant="h3" className="text-black">{highlight.title}</Text>
                      <Text variant="body" className="text-gray-600">{highlight.description}</Text>
                    </Flex>
                  </Card>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] overflow-hidden">
        <Container className="overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
              <Text as="h2" variant="h2" className="text-black">Programação</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {schedule.map((day, index) => (
              <ScrollRevealCard key={index} delay={index * 0.2}>
                <Card className="overflow-hidden border border-gray-100">
                  <Flex direction="col" align="center" justify="center" gap={2} className="bg-gradient-to-r from-[#c71212] to-[#d4af37] p-8 text-center w-full">
                    <Text as="h3" variant="h3" className="text-[#fafafa]">{day.day}</Text>
                    <Text variant="body" className="text-[#fafafa] font-medium">{day.date}</Text>
                  </Flex>
                </Card>
              </ScrollRevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333] overflow-hidden">
        <Container className="overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
              <Text as="h2" variant="h2" className="text-[#fafafa]">Edições Anteriores</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <Flex align="end" className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <Text variant="body" className="text-[#fafafa] p-4 font-semibold">
                      ENASEX {2024 - index}
                    </Text>
                  </Flex>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] overflow-hidden">
        <Container className="overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
              <Text as="h2" variant="h2" className="text-black">Depoimentos</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollRevealCard key={index} delay={index * 0.2}>
                <Card className="p-6 h-full">
                  <Flex direction="col" justify="between" className="h-full">
                    <Flex direction="col" gap={4}>
                      <Flex className="gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-[#d4af37] fill-current" size={20} />
                        ))}
                      </Flex>
                      <Text variant="body" className="text-gray-600 italic">
                        "{testimonial.text}"
                      </Text>
                    </Flex>
                    <Flex direction="col" gap={2} className="mt-6">
                      <Text as="h3" variant="body" className="font-bold text-black">
                        {testimonial.name}
                      </Text>
                      <Text variant="body" className="text-gray-500 text-sm">
                        {testimonial.role}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              </ScrollRevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#c71212] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 overflow-hidden">
          <ScrollRevealTitle>
            <Flex direction="col" align="center" gap={6} className="max-w-4xl mx-auto text-center">
              <Text as="h2" variant="h2" className="text-[#fafafa]">
                Garanta Sua Vaga!
              </Text>
              <Text variant="body" className="text-[#fafafa] text-lg md:text-xl w-full max-w-[672px]">
                Inscrições abertas e limitadas. Não perca a oportunidade de participar do maior 
                evento de sexualidade do Brasil!
              </Text>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                  <a href={EVEN3_ENASEX_URL} target="_blank" rel="noopener noreferrer">
                    Comprar Ingressos
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </motion.div>
            </Flex>
          </ScrollRevealTitle>
        </Container>
      </section>
    </div>
  );
}
