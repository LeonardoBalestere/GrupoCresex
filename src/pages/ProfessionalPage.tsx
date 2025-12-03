import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { MessageCircle, Search, Filter } from "lucide-react";
import { useState } from "react";

// Load image assets from src/assets using Vite glob (bundled & fingerprinted)
const _assetModules = import.meta.glob(
  "/src/assets/*.{png,jpg,jpeg,webp}",
  { as: "url", eager: true }
) as Record<string, string>;
const imageMap = Object.fromEntries(
  Object.entries(_assetModules).map(([path, url]) => [path.split("/").pop()!, url])
) as Record<string, string>;
export default function ProfessionalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const members = [
    {
      name: "Monica Lima",
      specialty: "Terapeuta Sexual",
      city: "Uberlândia, MG",
        image: imageMap["monica1.jpg"] || imageMap["monica1.jpeg"] || imageMap["monica1.png"] || "",
      bio: "Neuropsicosexóloga e Palestrante (CRP: 04/1500714) - Diretora Executiva do Grupo Cresex. Psicoterapeuta Sexual (casal e individual), Mentora para Profissionais da área da Saúde e Sexualidade, Palestrante e Escritora. Atendimento 100% online."
    },
    {
      name: "Rayana Oliveira",
      specialty: "Fisioterapeuta Pélvica e Terapeuta Sexual",
      city: "Uberlândia, MG",
      image: imageMap["rayana-oliveira.png"] || imageMap["rayana-oliveira.jpg"] || "",
      bio: "Rayana atende na área da Fisioterapia Pélvica, cuidando de disfunções sexuais dolorosas e reabilitação da função sexual. Além disso atua como terapeuta sexual em atendimentos individuais e de casais (LGBQQIAPN+, liberais e comunidade BDSM/fetichistas). É Diretora de comunicação e eventos do grupo Cresex."
    },
    {
      name: "Ana Beatriz",
      specialty: "Médica Pós-Graduada em Sexologia Clínica",
      city: "Uberlândia, MG",
      image:imageMap["ana-beatriz.jpg"] || imageMap["ana-beatriz.jpeg"] || imageMap["ana-beatriz.png"] || "", 
      bio: "Possui graduação em Medicina pela Pontifícia Universidade Católica do Paraná (PUCPR), residência médica em Medicina de Família e Comunidade (MFC) pelo Município da Estância Balneária de Praia Grande, pós-graduação em Sexualidade Humana pela Faculdade Primum (CBI of Miami) e pós-graduação em Sexologia Clínica pela Universidade São Judas Tadeu (IBCMED)."
    },
    {
      name: "Mayara Cardoso",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image:imageMap["mayara-cardoso.jpg"] || imageMap["mayara-cardoso.jpeg"] || imageMap["mayara-cardoso.png"] || "", 
      bio: "Psicosexóloga e Educadora Sexual, Psicóloga clínica, com atendimento na abordagem TCC, com foco especial em mulheres em menopausa ou pós menopausa; buscando qualidade na saúde emocional, autoestima e sexualidade"
    },
    {
      name: "Haíza Ferreira",
      specialty: "Psicólogo Especialista",
      city: "Uberlândia, MG",
      image: imageMap["haiza-ferreira.jpg"] || imageMap["haiza-ferreira.jpeg"] || imageMap["haiza-ferreira.png"] || "",
      bio: "Responsável pela divulgação de cursos, palestras, eventos, formações, Pós-Graduação na área de Sexualidade em redes sociais, e atividades no geral promovidas pelo Grupo. Contato com cliente, esclarecimentos de dúvidas sobre uma compra, negociação e fechamento de vendas. Gestora da equipe comercial. Realização de atendimento psicoterapêutico."    },
    {
      name: "Cláudia Guerra",
      specialty: "Palestrante e Consultora",
      city: "Uberlândia, MG",
      image: imageMap["claudia-guerra.jpg"] || imageMap["claudia-guerra.jpeg"] || imageMap["claudia-guerra.png"] || "",  
      bio: "Dra. em História sobre a violência doméstica. Profa. em graduação e pós: Sociologia, Filosofia, Antropologia, Ciência Politica, Relações Etnico-Raciais,Sexualidades Afetividades, Viiolência Doméstica, Extensão, Projeto de pesquisa, TCC."
    },
    {
      name: "Carolina Pires",
      specialty: "Terapeuta",
      city: "Uberlândia, MG",
      image: imageMap["carolina-pires.jpg"] || imageMap["carolina-pires.jpeg"] || imageMap["carolina-pires.png"] || "",
      bio: "Psicóloga clínica, sexóloga e palestrante (CRP 09/010811) há 07 anos, com atuação voltada para autoestima e sexualidade de mulheres, promovendo escuta acolhedora e transformação pessoal. Especialista em Neuropsicologia, Psicologia Sexual, Terapia Cognitivo-Comportamental e Psicologia Forense e Jurídica. Autora do livro Deixei de ser boazinha e virei poderosa, onde inspira mulheres a se reconectarem com sua força interior e colunista num site de relacionamentos"
    },
    {
      name: "Mateus Balduino",
      specialty: "Psicólogo",
      city: "Uberlândia, MG",
      image: imageMap["mateus-balduino.jpg"] || imageMap["mateus-balduino.jpeg"] || imageMap["mateus-balduino.png"] || "",
      bio: "Psicólogo e realizo atendimentos online. Graduado em Psicologia pela Uniube, tenho pós-graduação em Sexologia, Psicodrama, Teologia, Filosofia e Antropologia. Desenvolvi um olhar humano e profundo para acolher dores, desafios e espontaneidade. Tenho experiência com disfunções sexuais, com a comunidade LGBTQIAPN+ e também com relacionamentos não monogâmicos. Meu propósito é simples: ajudar você a viver de forma plena, autêntica e com mais sentido."
    },
    {
      name: "Fernando Souza",
      specialty: "Educador Sexual",
      city: "Recife, PE",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Palestras e workshops sobre sexualidade saudável"
    },
    {
      name: "Camila Rodrigues",
      specialty: "Terapeuta Sexual",
      city: "Fortaleza, CE",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      bio: "Terapia sexual individual e de casais"
    },
    {
      name: "Marcos Pereira",
      specialty: "Psicólogo Especialista",
      city: "Porto Alegre, RS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Atendimento psicológico com foco em identidade de gênero"
    },
    {
      name: "Beatriz Alves",
      specialty: "Consultora em Sexualidade",
      city: "Florianópolis, SC",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
      bio: "Consultoria e treinamentos corporativos sobre diversidade"
    },
    {
      name: "Rafael Santos",
      specialty: "Sexólogo Clínico",
      city: "Goiânia, GO",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      bio: "Especialista em saúde sexual e prevenção de ISTs"
    }
  ];

  const specialties = [
    "all",
    "Fisioterapeuta Pélvica",
    "Terapeuta Sexual",
    "Sexólogo Clínico",
    "Educadora Sexual",
    "Psicólogo Especialista",
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" || member.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = encodeURIComponent(
      `Olá, vim através do site GRUPO CRESEX e gostaria de saber mais sobre os serviços de ${name}.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

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
            <h1 className="text-[#fafafa] mb-6">Nossos Profissionais</h1>
            <p className="text-[#fafafa] text-xl max-w-3xl mx-auto">
              Profissionais qualificados e comprometidos com a educação em sexualidade e saúde
              em todo o Brasil
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar por nome ou cidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212]"
              />
            </div>
            <div className="relative">
              <Filter
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="pl-12 pr-8 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c71212] bg-white appearance-none cursor-pointer"
              >
                <option value="all">Todas as Especialidades</option>
                {specialties.slice(1).map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#666666] text-xl">
                Nenhum profissional encontrado com os critérios selecionados.
              </p>
            </div>
          ) : (
            <>
              <ScrollRevealTitle>
                <div className="text-center mb-12">
                  <p className="text-[#666666]">
                    {filteredMembers.length} profissional{filteredMembers.length !== 1 ? "is" : ""} encontrado{filteredMembers.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </ScrollRevealTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMembers.map((member, index) => (
                  <ScrollRevealCard key={index} delay={index * 0.1}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-2 bg-gradient-to-r from-[#c71212] to-[#d4af37]"></div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-col items-center text-center mb-auto">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#c71212]">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-black mb-2">{member.name}</h3>
                          <p className="text-[#c71212] mb-2">{member.specialty}</p>
                          <p className="text-[#666666] mb-4">{member.city}</p>
                          <p className="text-[#666666] text-sm mb-6">{member.bio}</p>
                        </div>
                        <motion.button
                          onClick={() => handleWhatsAppClick(member.phone, member.name)}
                          className="bg-[#c71212] text-[#fafafa] px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-500"
                          whileHover={{
                            scale: 1.05,
                            borderColor: "#d4af37",
                            boxShadow: "0 10px 30px rgba(199, 18, 18, 0.3)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle size={20} />
                          Consultar no WhatsApp
                        </motion.button>
                      </div>
                    </motion.div>
                  </ScrollRevealCard>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Become a Member CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollRevealTitle>
            <h2 className="text-[#fafafa] mb-6">Seja um Membro GRUPO CRESEX</h2>
            <p className="text-[#fafafa] mb-8 text-xl">
              Você é profissional da sexualidade e quer fazer parte do maior grupo do
              Brasil? Entre em contato e conheça os benefícios de ser membro GRUPO CRESEX.
            </p>
            <motion.button
              className="bg-[#d4af37] text-black px-10 py-4 rounded-lg border-2 border-[#d4af37]"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fafafa",
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
              }}
              onClick={() => window.open(
    "https://grupocresex.eadplataforma.app/combo/membrocresex2026",
    "_blank",
    "noopener,noreferrer"
  )}
            >
              Quero Ser Membro
            </motion.button>
          </ScrollRevealTitle>
        </div>
      </section>
    </div>
  );
}
