import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollRevealTitle } from "./ScrollRevealTitle";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function MembersSection() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const members = [
    {
      name: "Dra. Ana Silva",
      specialty: "Terapeuta Sexual",
      phone: "5511999999999",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Sexólogo Clínico",
      phone: "5511988888888",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Educadora Sexual",
      phone: "5511977777777",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. João Oliveira",
      specialty: "Psicólogo Especialista",
      phone: "5511966666666",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Dra. Patricia Costa",
      specialty: "Consultora em Sexualidade",
      phone: "5511955555555",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Ricardo Lima",
      specialty: "Terapeuta de Casais",
      phone: "5511944444444",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    }
  ];

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = encodeURIComponent(`Olá ${name}, vim através do site CRESEX e gostaria de saber mais sobre seus serviços.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleViewAllMembers = () => {
    navigate('/membros');
  };

  return (
    <section id="membros" className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#fafafa] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjM2MDYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        ></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollRevealTitle>
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Nossos Membros</h2>
            <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
          </div>
        </ScrollRevealTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {members.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="bg-[#fafafa] rounded-xl p-6 shadow-md border border-gray-100"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#c71212]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-black mb-2">{member.name}</h3>
                  <p className="text-[#666666] mb-6">{member.specialty}</p>
                  <motion.button
                    onClick={() => handleWhatsAppClick(member.phone, member.name)}
                    className="bg-[#c71212] text-[#fafafa] px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-500"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#d4af37",
                      boxShadow: "0 10px 30px rgba(199, 18, 18, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                    Consultar no WhatsApp
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ver Todos os Membros Button */}
        <ScrollReveal direction="up">
          <div className="flex justify-center">
            <motion.button
              onClick={handleViewAllMembers}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative bg-[#c71212] text-[#fafafa] px-10 py-4 text-lg rounded-lg shadow-2xl inline-flex items-center justify-center gap-2 border-2 border-[#c71212] overflow-hidden"
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="relative z-10 transition-colors duration-500" style={{ color: isHovered ? '#c71212' : '#fafafa' }}>
                Ver Todos os Membros
              </span>
              <motion.div 
                className="absolute inset-0 bg-[#fafafa]"
                initial={{ x: "100%" }}
                animate={{ x: isHovered ? "0%" : "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}