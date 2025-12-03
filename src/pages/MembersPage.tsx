import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { MessageCircle, Search, Filter,UserPlus, Heart, Star, Shield, TrendingUp, Award, Users, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MembersPage() {
  const membershipBenefits = [
    {
      icon: UserPlus,
      title: "Faça Parte",
      description: "Integre uma rede exclusiva de profissionais da sexualidade comprometidos com a excelência e a ética."
    },
    {
      icon: Heart,
      title: "Apoio Contínuo",
      description: "Conte com supervisão, mentorias e suporte constante para o desenvolvimento da sua prática profissional."
    },
    {
      icon: Star,
      title: "Destaque-se",
      description: "Ganhe visibilidade através dos nossos canais de comunicação e eventos exclusivos para membros."
    },
    {
      icon: Shield,
      title: "Segurança e Credibilidade",
      description: "Seja reconhecido como membro de um ecossistema que preza pela qualidade e pelos direitos sexuais."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Acesse cursos, workshops e materiais exclusivos para aprimorar suas competências."
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Obtenha certificações reconhecidas pelo GRUPO CRESEX em diversas áreas da sexualidade."
    },
    {
      icon: Users,
      title: "Networking Qualificado",
      description: "Conecte-se com profissionais renomados e amplie sua rede de contatos."
    },
    {
      icon: BookOpen,
      title: "Biblioteca Exclusiva",
      description: "Acesso a acervo digital com artigos, pesquisas e materiais educativos atualizados."
    }
  ];
  const requirements = [
    "Formação em área relacionada à sexualidade ou áreas afins",
    "Compromisso com a ética e os direitos sexuais",
    "Disponibilidade para participar de atividades e eventos",
    "Concordância com o código de conduta do GRUPO CRESEX"
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3MzMwNzQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
            <h1 className="text-[#fafafa] mb-6">Torne-se um Membro</h1>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto">
              Junte-se ao GRUPO CRESEX e faça parte de um ecossistema colaborativo dedicado à educação em sexualidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-black text-center mb-12">Benefícios de Ser Membro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="w-16 h-16 bg-[#c71212] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#fafafa]" size={32} />
                  </div>
                  <h3 className="text-black mb-3">{benefit.title}</h3>
                  <p className="text-[#666666]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-black text-center mb-12">Requisitos para Associação</h2>
          <div className="bg-gradient-to-br from-[#f9f9f9] to-[#fafafa] rounded-2xl p-8 shadow-md">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <CheckCircle className="flex-shrink-0 mt-1 text-[#c71212]" size={24} />
                  <span className="text-[#333333] text-lg">{requirement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section
        className="py-16 text-[#fafafa]"
        style={{ backgroundImage: "linear-gradient(to bottom right, #c71212, #d42727ff 40%, #ff8484ff)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#fafafa] mb-6">Pronto para Fazer Parte?</h2>
            <p className="text-xl mb-8">
              Entre em contato conosco e solicite sua entrada no GRUPO CRESEX. Nossa equipe avaliará sua candidatura e entrará em contato em breve.
            </p>
            <Link to="/contato">
              <motion.button
                className="bg-[#fafafa] text-[#c71212] px-10 py-4 text-lg rounded-lg shadow-lg border-2 border-[#fafafa]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                Solicitar Entrada como Membro
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
