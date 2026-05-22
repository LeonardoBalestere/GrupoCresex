import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { MessageCircle, Search, Filter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Member } from "../components/MemberTableRow";
import { Container } from "@/components/layout/Container";

export default function ProfessionalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from("members").select("*").eq("isActive", true);

        if (!mounted) return;

        if (error) {
          console.error("Supabase error fetching members:", error);
          setError(error.message);
          setMembers([]);
        } else {
          setMembers(Array.isArray(data) ? (data as Member[]) : []);
          setError(null);
        }
      } catch (err: any) {
        console.error(err);
        setError(err?.message ?? String(err));
        setMembers([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const specialties = [
    "all",
    ...Array.from(new Set(members.map((m) => (m.specialty || "")).filter(Boolean))) as string[],
  ];

  const filteredMembers = members.filter((member) => {
    const name = (member.name || "").toString();
    const city = (member.city || "").toString();
    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || member.specialty === selectedSpecialty;
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

        <Container className="relative z-10">
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
        </Container>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#fafafa] border-b border-gray-200">
        <Container>
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
        </Container>
      </section>

      {/* Professionals Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-64 flex flex-col animate-pulse">
                  <div className="h-2 bg-gradient-to-r from-[#c71212] to-[#d4af37]"></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col items-center text-center mb-auto">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
                      <div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-2/3 bg-gray-200 rounded mb-4"></div>
                    </div>
                    <div className="flex gap-3 w-full mt-4">
                      <div className="h-10 bg-gray-200 rounded flex-1"></div>
                      <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16 text-red-600">{error}</div>
          ) : filteredMembers.length === 0 ? (
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
                              alt={member.name || "Foto do profissional"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-black mb-2">{member.name}</h3>
                          <p className="text-[#c71212] mb-2">{member.specialty}</p>
                          <p className="text-[#666666] mb-4">{member.city}</p>
                          <p className="text-[#666666] text-sm mb-6">{member.bio}</p>
                        </div>
                        <div className="flex gap-3 w-full">
                          <motion.button
                            // onClick={() => handleWhatsAppClick(member.phone, member.name)}
                            onClick={() => handleWhatsAppClick('553491494154', member.name)}
                            className="bg-[#c71212] text-[#fafafa] px-6 py-3 rounded-lg flex-1 flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-500"
                            whileHover={{
                              scale: 1.05,
                              borderColor: "#d4af37",
                              boxShadow: "0 10px 30px rgba(199, 18, 18, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <MessageCircle size={20} />
                            WhatsApp
                          </motion.button>
                          {member.instagram && (
                            <motion.button
                              onClick={() => window.open(`https://instagram.com/${member.instagram}`, "_blank", "noopener,noreferrer")}
                              style={{ backgroundColor: "#C13584" }}
                              className="text-white px-6 py-3 rounded-lg flex-1 flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-500"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "#833AB4",
                                borderColor: "#d4af37",
                                boxShadow: "0 10px 30px rgba(193, 53, 132, 0.4)",
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Instagram size={20} />
                              Instagram
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </ScrollRevealCard>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Become a Member CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333333] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <Container className="text-center relative z-10">
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
        </Container>
      </section>
    </div>
  );
 }
