import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { Heart, Users, BookOpen, Sparkles, Award, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import monicaImage from "../assets/monica2.webp";
import backgroundImage from "../assets/background.webp";
import { Container } from "../components/layout/container";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Flex from "../components/ui/Flex";
import Text from "../components/ui/Text";

export default function HomePage() {
  const navigate = useNavigate();
  const pillars = [
    {
      icon: BookOpen,
      title: "Educação",
      description: "Promovemos educação em sexualidade de qualidade, baseada em ciência e respeito.",
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acolhemos todas as identidades e orientações com respeito e dignidade.",
    },
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Oferecemos espaço seguro para diálogo e apoio profissional.",
    },
    {
      icon: Sparkles,
      title: "Sexualidade Saudável",
      description: "Incentivamos o desenvolvimento de uma sexualidade plena e consciente.",
    },
  ];

  return (
    <div className="pt-20">
       <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
         <div
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url('${backgroundImage}')` }}
         >
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
         </div>

         <Container className="overflow-hidden">
           <Flex direction="col" align="start" gap={6} className="relative z-10 w-full max-w-[640px] text-center md:text-left">
             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
               <Text as="h1" variant="h1" className="text-[#fafafa]" style={{ fontFamily: "Georgia, serif" }}>
                 GRUPO CRESEX
               </Text>
             </motion.div>

             <Text variant="body" className="text-[#fafafa] text-lg w-full max-w-[560px]">
               Conectando profissionais da sexualidade em todo o Brasil
             </Text>

             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
               <Button variant="primary" size="lg" onClick={() => navigate("/contato")} className="w-full md:w-auto">
                 Entre em Contato
               </Button>
             </motion.div>
           </Flex>
         </Container>
       </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
               <Text as="h2" variant="h2">Quem Somos</Text>
               <div className="w-24 h-1 bg-[#c71212]" />
             </Flex>
           </ScrollRevealTitle>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             <ScrollRevealCard direction="left">
               <Card className="h-full p-8">
                 <Flex direction="col" align="start" gap={6}>
                   <Flex align="center" justify="center" className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37]">
                     <Target color="#fff" size={32} />
                   </Flex>
                   <Text as="h3" variant="h3">Nossa Missão</Text>
                   <Text variant="body" className="text-gray-600">
                     Promover a educação em sexualidade de qualidade, conectando profissionais qualificados
                     e oferecendo recursos que transformam vidas através do conhecimento e do acolhimento.
                   </Text>
                 </Flex>
               </Card>
             </ScrollRevealCard>

             <ScrollRevealCard direction="right">
               <Card className="h-full p-8">
                 <Flex direction="col" align="start" gap={6}>
                   <Flex align="center" justify="center" className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37]">
                     <Award color="#fff" size={32} />
                   </Flex>
                   <Text as="h3" variant="h3">Nossa Visão</Text>
                   <Text variant="body" className="text-gray-600">
                     Ser referência nacional em educação em sexualidade, criando uma rede de profissionais
                     comprometidos com a saúde sexual e o bem-estar integral das pessoas.
                   </Text>
                 </Flex>
               </Card>
             </ScrollRevealCard>

             <ScrollRevealCard direction="left">
               <Card className="h-full p-8">
                 <Flex direction="col" align="start" gap={6}>
                   <Flex align="center" justify="center" className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37]">
                     <Heart color="#fff" size={32} />
                   </Flex>
                   <Text as="h3" variant="h3">Nossos Valores</Text>
                   <Text variant="body" className="text-gray-600">
                     Respeito, inclusão, ética profissional, evidência científica e compromisso
                     com a diversidade humana em todas as suas formas.
                   </Text>
                 </Flex>
               </Card>
             </ScrollRevealCard>
           </div>
         </Container>
       </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="mb-16 text-center relative z-10">
               <Text as="h2" variant="h2" className="text-[#fafafa]">Nossos Pilares</Text>
              <div className="w-24 h-1 bg-[#c71212]" />
            </Flex>
          </ScrollRevealTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {pillars.map((pillar, index) => (
              <ScrollRevealCard key={index} direction={index % 2 === 0 ? "left" : "right"}>
                <motion.div whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(199, 18, 18, 0.2)" }} transition={{ duration: 0.5 }}>
                  <Card className="h-full p-6 text-center">
                    <Flex direction="col" align="center" gap={4}>
                      <Flex align="center" justify="center" className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37]">
                        <pillar.icon color="#fff" size={28} />
                      </Flex>
                      <Text as="h3" variant="h3">{pillar.title}</Text>
                      <Text variant="body" className="text-gray-600">{pillar.description}</Text>
                    </Flex>
                  </Card>
                </motion.div>
              </ScrollRevealCard>
            ))}
          </div>
        </Container>
      </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
         <Container className="overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <ScrollReveal direction="left">
               <Flex direction="col" align="start" gap={4} className="text-center md:text-left">
                 <Text as="h2" variant="h2">Nossa História</Text>
                <Text variant="body" className="text-gray-600">
                  O GRUPO CRESEX nasceu da visão de profissionais comprometidos em transformar
                  a realidade da educação em sexualidade no Brasil. Fundado em 2017, o grupo rapidamente
                  se expandiu, conectando especialistas de todo o país.
                </Text>
                <Text variant="body" className="text-gray-600">
                  Com presença nacional, desenvolvemos projetos que vão desde a formação profissional
                  até ações sociais diretas, sempre pautados pela ética, ciência e respeito à diversidade.
                </Text>
                <Text variant="body" className="text-gray-600">
                  Hoje, somos uma referência em educação em sexualidade, eventos científicos e acolhimento
                  de pessoas que buscam saúde sexual e bem-estar integral.
                </Text>
              </Flex>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Flex direction="col" align="center" className="relative w-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3MzMwNzQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Equipe do GRUPO CRESEX"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute hidden md:block -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-lg -z-10" />
              </Flex>
            </ScrollReveal>
          </div>
        </Container>
      </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-black to-[#333333] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
         </div>

         <Container className="overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
             <ScrollReveal direction="left">
               <Flex direction="col" align="center" className="relative w-full order-2 md:order-1">
                 <ImageWithFallback
                   src={monicaImage}
                   alt="Mônica Lima"
                   className="rounded-lg shadow-2xl w-full"
                 />
                 <div className="absolute hidden md:block -left-6 -top-6 w-32 h-32 bg-gradient-to-br from-[#c71212] to-[#d4af37] rounded-lg -z-10" />
               </Flex>
             </ScrollReveal>

             <ScrollReveal direction="right">
               <Flex direction="col" align="start" gap={4} className="text-center md:text-left order-1 md:order-2">
                 <Text as="h2" variant="h2" className="text-[#fafafa]">Mônica Lima</Text>
                 <Text as="h3" variant="h3" className="text-[#d4af37]">Fundadora do GRUPO CRESEX</Text>
                 <div className="border-l-4 border-[#c71212] pl-6 mb-6">
                   <Text variant="body" className="text-[#fafafa] italic">
                     "A educação em sexualidade é um direito humano fundamental. Nosso compromisso
                     é garantir que todas as pessoas tenham acesso a informação de qualidade
                     e profissionais capacitados para orientá-las em sua jornada."
                   </Text>
                 </div>
                 <Text variant="body" className="text-gray-400">
                   Psicóloga Mônica Lima é referência nacional e internacional em educação em sexualidade e terapia sexual.
                   Com mais de 20 anos de experiência, ela fundou o GRUPO CRESEX com a missão
                   de unir profissionais e promover transformação social.
                 </Text>
                 <motion.div whileHover={{ scale: 1.05 }}>
                   <Button variant="primary" size="md" onClick={() => navigate("/contato")} className="w-full md:w-auto">Conheça Mais</Button>
                 </motion.div>
               </Flex>
             </ScrollReveal>
           </div>
         </Container>
       </section>

       <section className="py-16 md:py-24 relative overflow-hidden bg-black">
         <div
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzMzMDc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')` }}
         >
           <div className="absolute inset-0 bg-gradient-to-r from-[#c71212]/90 to-black/80"></div>
         </div>

         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="relative z-10 text-center">
               <Text as="h2" variant="h2" className="text-[#fafafa]">ENASEX 2027</Text>
               <Text variant="body" className="text-[#d4af37] text-lg">
                 Encontro Nacional de Profissionais da Sexualidade
               </Text>
               <Text variant="body" className="text-[#fafafa] w-full max-w-[768px]">
                 O maior evento de educação em sexualidade do Brasil. Palestras, workshops e networking
                 com os principais especialistas do país.
               </Text>
               <motion.div whileHover={{ scale: 1.1 }}>
                 <Button variant="secondary" size="lg" onClick={() => navigate("/enasex")} className="w-full md:w-auto">Saiba Mais sobre o ENASEX</Button>
               </motion.div>
             </Flex>
           </ScrollRevealTitle>
         </Container>
       </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
               <Text as="h2" variant="h2">Nossos Serviços</Text>
               <div className="w-24 h-1 bg-[#c71212]" />
               <Text variant="body" className="text-gray-600 w-full max-w-[672px]">
                 Oferecemos uma gama completa de serviços para profissionais e comunidade
               </Text>
             </Flex>
           </ScrollRevealTitle>

           <Flex direction="col" align="center">
             <motion.div whileHover={{ scale: 1.1 }}>
               <Button variant="primary" size="lg" onClick={() => navigate("/servicos")} className="w-full md:w-auto">Ver Todos os Serviços</Button>
             </motion.div>
           </Flex>
         </Container>
       </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black">
         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
               <Text as="h2" variant="h2" className="text-[#fafafa]">Projetos Sociais</Text>
               <div className="w-24 h-1 bg-[#c71212]" />
               <Text variant="body" className="text-gray-400 w-full max-w-[672px]">
                 Transformamos vidas através de ações sociais voltadas ao acolhimento,
                 educação e inclusão
               </Text>
             </Flex>
           </ScrollRevealTitle>

           <Flex direction="col" align="center">
             <motion.div whileHover={{ scale: 1.1 }}>
               <Button variant="primary" size="lg" onClick={() => navigate("/projetos")} className="w-full md:w-auto">Conheça Nossos Projetos</Button>
             </motion.div>
           </Flex>
         </Container>
       </section>

       <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa]">
         <Container className="overflow-hidden">
           <ScrollRevealTitle>
             <Flex direction="col" align="center" gap={4} className="mb-16 text-center">
               <Text as="h2" variant="h2">Torne-se Membro</Text>
               <div className="w-24 h-1 bg-[#c71212]" />
               <Text variant="body" className="text-gray-600 w-full max-w-[672px]">
                 Garanta todos os benefícios de ser um membro do GRUPO CRESEX
               </Text>
             </Flex>
           </ScrollRevealTitle>

           <Flex direction="col" align="center">
             <motion.div whileHover={{ scale: 1.1 }}>
               <Button variant="primary" size="lg" onClick={() => navigate("/servicos")} className="w-full md:w-auto">Ver Todos os Serviços</Button>
             </motion.div>
           </Flex>
         </Container>
       </section>
    </div>
  );
}
