import { Rocket, Users, Megaphone, CreditCard } from "lucide-react";
import { ScrollRevealTitle } from "./ScrollRevealTitle";
import { ScrollRevealCard } from "./ScrollRevealCard";
import { motion } from "motion/react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "Crescimento Profissional",
      items: [
        "Cursos e formação continuada",
        "Supervisão especializada",
        "Atualizações constantes"
      ]
    },
    {
      icon: Users,
      title: "Conexões Estratégicas",
      items: [
        "Networking qualificado",
        "Eventos exclusivos",
        "Mentorias personalizadas"
      ]
    },
    {
      icon: Megaphone,
      title: "Visibilidade e Autoridade",
      items: [
        "Divulgação profissional",
        "Lives e workshops",
        "Certificados reconhecidos"
      ]
    },
    {
      icon: CreditCard,
      title: "Vantagens Exclusivas",
      items: [
        "Cartão de descontos",
        "Plataformas parceiras",
        "Sorteios e benefícios"
      ]
    }
  ];

  // Função para determinar direção baseado no índice e viewport
  const getDirection = (index: number) => {
    // Mobile: alternado (0=left, 1=right, 2=left, 3=right)
    // Desktop: 0,1=left, 2,3=right
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      // Desktop (lg breakpoint)
      return index < 2 ? "left" : "right";
    } else {
      // Mobile: alternado
      return index % 2 === 0 ? "left" : "right";
    }
  };

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-gray-50 to-[#fafafa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollRevealTitle>
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Por que ser Membro do GRUPO CRESEX?</h2>
            <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
          </div>
        </ScrollRevealTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollRevealCard key={index} direction={getDirection(index)}>
                <motion.div
                  className="bg-[#f5f5f5] rounded-xl p-6 border-2 border-transparent shadow-sm h-full"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#c71212",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-[#c71212] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#fafafa]" size={32} />
                  </div>
                  <h3 className="text-black mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#333333]">
                        <span className="text-[#c71212] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollRevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}