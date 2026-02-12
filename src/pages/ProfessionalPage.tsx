import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollRevealTitle } from "../components/ScrollRevealTitle";
import { ScrollRevealCard } from "../components/ScrollRevealCard";
import { motion } from "motion/react";
import { MessageCircle, Search, Filter, Instagram } from "lucide-react";
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
      name: "Mônica Lima",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["monica1.jpg"] || imageMap["monica1.jpeg"] || imageMap["monica1.png"] || "",
      bio: "Psicóloga Clínica (CRP: 04/1500714) na abordagem da TCS  (Terapia Cognitivo-sexual), Neuropsicosexóloga e Palestrante - Diretora Fundadora do Grupo Cresex. Psicoterapeuta Sexual (casal e individual), Coordenadora da Comissão de Orientação em Psicologia - Saúde e Sexualidade do Conselho Regional de Psicologia Subsede Triângulo. Mentora para Profissionais da área da Saúde e Sexualidade, Palestrante e Escritora. Atendimento 100% online nacional e internacional.",
      instagram:"psicologa.dosexo"
    },
    {
      name: "Rayana Oliveira",
      specialty: "Fisioterapeuta Pélvica e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["rayana-oliveira.png"] || imageMap["rayana-oliveira.jpg"] || "",
      bio: "Fisioterapeuta Pélvica, com Foco em Disfunções Sexuais Dolorosas e Reabilitação da Função Sexual. Além disso Atua como Terapeuta Sexual em Atendimentos Individuais e de Casais (LGBTQIAPN+, Liberais e Comunidade BDSM/Fetichistas). Diretora de Comunicação e Eventos do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "terapeutadoprazer"
    },
    {
      name: "Isabela Costa",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["isabela-costa.jpg"] || imageMap["isabela-costa.jpeg"] || imageMap["isabela-costa.png"],
      bio: "Psicóloga (CRP 04/61862), Mestranda em Psicanálise Clínica, Pós Graduada em Psicologia Social, Pós graduada em Psicosexologia; Formação em Educação Sexual e em Sexualidade com Ênfase na Clínica; Palestrante com Foco em Sexualidade; Especialista na Sexualidade de Mulheres Vítimas de Violência; Coordenadora Acadêmica e Administrativa do Centro de Referência em Sexualidade (CRESEX); Vice-presidente do CMDM (Conselho Municipal de Direito das Mulheres); Co-proprietária da Clínica Psiquê.",
      instagram: "isabelacosta.psi"
    },
    {
      name: "Alinne Costa",
      specialty: "Professora Universitária",
      city: "Uberlândia, MG",
      image: imageMap["alinne-costa.jpg"] || imageMap["alinne-costa.jpeg"] || imageMap["alinne-costa.png"],
      bio: "Professora Universitária com Foco em Docência para a Diversidade e Mestre em Educação pela UFU (Universidade Federal de Uberlândia), também Atua como Professora na Educação Básica em História, Projeto de Vida e Filosofia. Membro Associada do Grupo Cresex.",
      instagram: "profealinnecosta"
    },
    {
      name: "Alyne Meirelles",
      specialty: "Pedagoga e Terapeuta Sexual",
      city: "Uberlândia, MG",
      image:imageMap ["alyne-meirelles.jpg"] || imageMap["alyne-meirelles.jpeg"] || imageMap["alyne-meirelles.png"] || "", 
      bio: "Pedagoga, Terapeuta Sexual com Foco em Educação Sexual. Pós-Graduada em Terapia Sexual na Saúde e Educação, Mestre em Educação pela MASTER ESEPAS (Educação Sexual e Prevenção ao Abuso Sexual). Além disso Atua como Professora, Palestrante e Mentora de Oficinas. Membro Associada do Grupo Cresex.",
    },
    {
      name: "Ana Beatriz Dias",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap["ana-beatriz-dias.jpg"] || imageMap["ana-beatriz-dias.jpeg"] || imageMap["ana-beatriz-dias.png"] || "", 
       bio: "Psicóloga Clínica na Abordagem Psicanalítica com Foco em Oferecer um Espaço de Escuta Ética e Qualificada para Adultos e Adolescentes, Orientada pela Singularidade do Sujeito, pelo Manejo Responsável da Clínica e pelo Compromisso com Formação Contínua e Supervisão. Pós-Graduanda em Psicosexologia Clínica pelo Centro de Referência em Sexualidade. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "psi.anadiias"
    },
    {
      name: "Ana Beatriz Romansini",
      specialty: "Médica da Família e Comunidade",
      city: "Santos, SP",
      image:imageMap["ana-beatriz.jpg"] || imageMap["ana-beatriz.jpeg"] || imageMap["ana-beatriz.png"] || "", 
      bio: "Médica da Família e Comunidade (CRM: 206.760 RQE: 115.39). Pós-graduação em Sexualidade Humana pela Faculdade Primum (CBI of Miami) e pós-graduação em Sexologia Clínica. Professora do curso de medicina, atua com enfoque em saúde mental, saúde sexual e cuidados com população LGBTQIAPN+. Membro Associada do Grupo Cresex. Atendimento presencial e por telemedicina.",
      instagram: "anab.romansini"
    },
    {
      name: "Ana Paula Martins",
      specialty: "Professora Universitária",
      city: "Uberlândia, MG",
      image: imageMap["ana-paula-martins.jpg"] || imageMap["ana-paula-martins.jpeg"] || imageMap["ana-paula-martins.png"],
      bio: "Psicóloga Clínica e Sexóloga com Foco em Atendimento para Adultos Visando o Desenvolvimento Emocional e Saúde Mental e Orientação Parental para Famílias, com Foco em Desenvolvimento Infantil e Estratégias de Cuidado. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },
    {
      name: "Andréa Caparelli",
      specialty: "Psicóloga Clínica",
      city: "Criciúma, SC",
      image:imageMap["andrea-caparelli.jpg"] || imageMap["andrea-caparelli.jpeg"] || imageMap["andrea-caparelli.png"] || "", 
      bio:"Psicóloga Clínica na Abordagem da Sistêmica Familiar e analista transacional . Sexologa. Membro A0ssociada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Andréa Hahmeyer Pegorago",
      specialty: "Psicóloga Clínica",
      city: "São Paulo, SP",
      image:imageMap["andrea-hahmeyer-pegorago.jpg"] || imageMap["andrea-hahmeyer-pegorago.jpeg"] || imageMap["andrea-hahmeyer-pegorago.png"] || "", 
      bio:"",
      instagram: "andrea.h.p"
    },
    {
      name: "Andrea Henar Guillen",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["andrea-henar.jpg"] || imageMap["andrea-henar.jpeg"] || imageMap["andrea-henar.png"],
      bio: "Psicóloga Clínica (CRP 04/66444) na Abordagem da TCC (Terapia cognitivo-comportamental) e Terapia do Esquema. Associada do Grupo Cresex. Atendimento presencial e online.",
      instagram: "andreahenar.psi"
    },        
    {
      name: "Beatriz Savazzi",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Santo André, SP",
      image: imageMap["beatriz-savazzi.jpg"] || imageMap["beatriz-savazzi.jpeg"] || imageMap["beatriz-savazzi.png"],
      bio: "Psicóloga Clínica (CRP: 06/211301) na Abordagem da TCC (Terapia Cognitivo-Comportamental). Atua Promovendo uma Sexualidade Saudável e Consciente com Foco em Mulheres. Pós-Graduanda em Psicosexologia Clínica pelo Centro de Referência em Sexualidade. Membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Bianca Gontijo",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["bianca-gontijo.jpg"] || imageMap["bianca-gontijo.jpeg"] || imageMap["bianca-gontijo.png"],
      bio: "Psicóloga Clínica (CRP: CRP-04/81838) na Abordagem Sócio-Histórica com Foco em Adultos e Idosos. Experiência em Condução de Grupos e Atuação pela Psicodinâmica do Trabalho e com Trabalho Institucional Relacionado a Adolescentes Institucionalizados do Sistema Penitenciário de Cuiabá-MT. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    }, 
    {   
      name: "Bruno De Medeiros",
      specialty: "Estudante de Psicologia",
      city: "Uberlândia, MG",
      image:imageMap["bruno-de-medeiros.jpg"] || imageMap["bruno-de-medeiros.jpeg"] || imageMap["bruno-de-medeiros.png"] || "", 
      bio:"Estudante de Psicologia pela UNA Karaíba e pesquisador vinculado à Universidade das Nações. Atua com interesse nas interfaces entre saúde mental, aconselhamento e desenvolvimento humano, buscando integrar pesquisa, prática e reflexão na construção de caminhos terapêuticos mais sensíveis e transformadores. Membro Associado do Grupo Cresex."
    },
    {
      name: "Camila Gabriele Martins",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia - MG",
      image:imageMap["camila-gabriele-martins.jpg"] || imageMap["camila-gabriele-martins.jpg.jpeg"] || imageMap["camila-gabriele-martins.jpg.png"] || "", 
      bio:"",                                           
    },
    {
      name: "Carolina Santos",
      specialty: "Terapeuta Sexual",
      city: "Uberlândia, MG",
      image: imageMap["carolina-santos.jpg"] || imageMap["carolina-santos.jpeg"] || imageMap["carolina-santos.png"],
      bio: "Carolina Santos - Terapeuta Sexual, Escritora, Poeta, Professora de Arte e Doula. Atuo no Campo da Sexualidade Humana a partir de uma Perspectiva Educativa, Terapêutica e Libertadora, Acompanhando Pessoas e Casais em Processos de Autoconhecimento, Reconexão com o Prazer, Comunicação Íntima, Identidade, Autoestima e Cura de Bloqueios Emocionais Ligados ao Corpo e ao Desejo. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },
    {
      name: "Carolina Pires",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Itumbiara, GO",
      image: imageMap["carolina-pires.jpg"] || imageMap["carolina-pires.jpeg"] || imageMap["carolina-pires.png"] || "",
      bio: "Psicóloga Clínica, Sexóloga e Palestrante (CRP 09/010811), com Foco em Sexualidade e Autoestima da Mulher, Promovendo Escuta Acolhedora e Transformação Pessoal. Especialista em Neuropsicologia, Psicologia Sexual, Terapia Cognitivo-Comportamental e Psicologia Forense e Jurídica. Escritora do Livro Deixei de ser Boazinha e Virei Poderosa, onde Inspira Mulheres a se Reconectarem com sua Força Interior e Colunista num Site de Relacionamentos. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "carolinapirespsi"
    },
    {
      name: "Cláudia Guerra",
      specialty: "Historiadora e Palestrante",
      city: "Uberlândia, MG",
      image: imageMap["claudia-guerra.jpg"] || imageMap["claudia-guerra.jpeg"] || imageMap["claudia-guerra.png"] || "",  
      bio: "Dra. em História sobre a violência doméstica. Atua como Profa. em graduação e pós: Sociologia, Filosofia, Antropologia, Ciência Politica, Relações Etnico-Raciais,Sexualidades Afetividades, Violência Doméstica e projetos de Extensão e de pesquisa, TCC (Tabalho de conclusão de curso). Atua como ativista no combate da violência contra a mulher e fundadora dos projetos SOS MULHER e NEGUEM (Núcleo de estudo de gênero). Membro honorária do Grupo Cresex. Atendimento como consultoria presencial e online.",
      instagram: "claudiaguerraudi"
    },
    {
      name: "Cleyciane Faria",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["cleyciane-faria.jpg"] || imageMap["cleyciane-faria.jpeg"] || imageMap["cleyciane-faria.png"],
      bio: "Psicóloga Clínica com Abordagem na TCC (Terapia Cognitivo-Comportamental) e Nutricionista pela UFU, Tem Mestrado em Psicologia da Saúde (UFU) e é Doutoranda em Ciências da Saúde também pela UFU. Tem Forte Interesse por Temáticas Interdisciplinares em Saúde. Professora Universitária há mais de 20 Anos em Instituições Privadas de Uberlândia e Região. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "cleycianefaria"
    },
    {
      name: "Débora Brito",
      specialty: "Advogada",
      city: "Uberlândia, MG",
      image:imageMap["debora-brito.jpg"] || imageMap["debora-brito.jpeg"] || imageMap["debora-brito.png"] || "", 
      bio:"Advogada (OAB - 1185441) Formada em Direito pela Universidade Federal de Uberlândia (UFU), é graduanda em Filosofia e atua como voluntária no atendimento a mulheres vítimas de violência, com foco em acolhimento, orientação e promoção de direitos fundamentais. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },  
    {
      name: "Débora Carvalho",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["debora-carvalho.jpg"] || imageMap["debora-carvalho.jpeg"] || imageMap["debora-carvalho.png"],
      bio: "Psicóloga Clínica (CRP 04/42242) na abordagem TCC (Terapia Cognitivo-Comportamental). Especialista em Sexualidade Humana; Especialista em Educação. Administradora da Insight Clínica Uberlândia e Insight Clínica Terapias Infantis. Atua como professora e Supervisora clínica. Membro Honorário do Grupo Cresex. Atendimento presencial e online.",
      instagram: "deboracarvalhogs"
    }, 
    {
      name: "Élen Jane Santoro",
      specialty: "Psicóloga Clínica",
      city: "Cotia, SP",
      image:imageMap ["elen-jane-santoro.jpg"] || imageMap["elen-jane-santoro.jpeg"] || imageMap["elen-jane-santoro.png"] || "", 
      bio: "Psicóloga Clínica (CRP:06/43947). Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },
    {
      name: "Élloa Castro De Souza Coelho",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap ["elloa-castro-de-souza-coelho.jpg"] || imageMap["elloa-castro-de-souza-coelho.jpeg"] || imageMap["elloa-castro-de-souza-coelho.png"] || "", 
      bio: "Membro Associada do Grupo Cresex."
    },
    {
      name: "Erica Santos",
      specialty: "Publicitária",
      city: "Uberlândia, MG",
      image: imageMap["erica-santos.jpg"] || imageMap["erica-santos.jpeg"] || imageMap["erica-santos.png"],
      bio: "Membro Associada do Grupo Cresex.",
      instagram: "vitrine_uberlandia"
    }, 
    {
      name: "Erika Rodrigues",
      specialty: "Estudante de Psicologia",
      city: "Uberlândia, MG",
      image:imageMap ["erika-rodrigues.jpg"] || imageMap["erika-rodrigues.jpeg"] || imageMap["erika-rodrigues.png"] || "", 
      bio: "Estudante de Psicologia, Décimo Período. O Interesse em Sexologia Surgiu diante da Importância sobre o Debate e o Conhecimento Prévio do Assunto. Pretende Desenvolver a Psicosexologia Usando a Abordagem TCC e Atender Especialmente Mulheres e Crianças, pois Considera a Conversa sobre Sexualidade mais do que Essencial para estes Grupos em Específico. Membro Associada do Grupo Cresex."
    },
    {
      name: "Fernanda Barros",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["fernanda-barros.jpg"] || imageMap["fernanda-barros.jpeg"] || imageMap["fernanda-barros.png"],
      bio:"Psicóloga Clínica (CRP: 04/62009) na Abordagem da TCC (Terapia Cognitivo-Comportamental), Sexóloga e Terapeuta de Casais, Pós-Graduada em Terapia Cognitivo-Comportamental (TCC), Educação Sexual e Sexologia, e Terapias Cognitivas e Contextuais para Casais e com Formação em Terapia Cognitiva Sexual e Terapia de Casal. Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {     
      name: "Fernanda Fraga",
      specialty: "Psicóloga Clínica",
      city: "São Paulo, SP",
      image:imageMap ["fernanda-fraga.jpg"] || imageMap["fernanda-fraga.jpeg"] || imageMap["fernanda-fraga.png"] || "", 
      bio: "Psicóloga Clínica. Também Atua como Palestrante em Eventos Voltados para Mulheres. Graduada em Sexologia Cristã. Pós-Graduanda em Psicosexologia Clínica pelo CRESEX. Membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Fernanda Marqueto",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap ["fernanda-marqueto.jpg"] || imageMap["fernanda-marqueto.jpeg"] || imageMap["fernanda-marqueto.png"] || "", 
      bio: "Psicóloga Clínica na Abordagem da Psicanálise. Mestre em Psicologia pela UFU. Pesquisadora com Foco em Pessoas Idosas LGBTQIAPN+ na Intersecção com um Possível Acolhimento em Instituições de Longa Permanência para Idosos, Estudos de Gênero e Sexualidade Humana. Atua também com Políticas e Uso Problemático de Drogas, Processos do Envelhecimento, Avaliação e Reabilitação Cognitiva de Pessoas Idosas, Grupos de Estabelecimento e Fortalecimento de Vínculo e Grupos de Convivência. Membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Gabe Spec",
      specialty: "Criador de Conteúdo e Educador Pro-Dom",
      city: "São Paulo, SP",
      image:imageMap["gab-spec.jpg"] || imageMap["gab-spec.jpeg"] || imageMap["gab-spec.png"] || "",
      bio: "Gabe Spec Atua no Mercado Adulto há 8 Anos, sendo o Primeiro Garoto de Hétero-Cis, a se Consagrar Atendendo somente o Público Feminino. Começando no Interior de SP e hoje Rodando o Mundo, Gabe Utiliza o Humor nas Redes Sociais para Trazer Tabus a Tona e Quebrar Estigmas tão Intrínsecos da Sexualidade Feminina. Dominador Profissional há 6 Anos se Intitulando como “Sr. Spec”, se Especializou na Realização de Fetiches e Práticas de BDSM, Mostrando que a Sexualidade é um Vasto Universo Repleto de Possibilidades. Membro Associado do Grupo Cresex. Atende Presencial." 
    },   
    {
      name: "Giovani Quadros",
      specialty: "Psicólogo Clínico",
      city: "Porto Alegre, RS",
      image: imageMap["giovani-quadros.jpg"] || imageMap["giovani-quadros.jpeg"] || imageMap["giovani-quadros.png"],
      bio: "Psicólogo Clínico (CRP 07/21784) na Abordagem da TCC (Terapia Cognitiva-Comportamental) Focado em Adolescentes e Adultos. Pós-Graduado em Sexualidade Masculina, Neurociência, Neuropsicologia, Psiquiatria e Saúde Mental. Atua também como Palestrante, Professor Universitário (Anhanguera e INNAP) e Capacitado em Avaliação Psicológica para Vasectomia e Laqueadura. Membro Associado do Grupo Cresex. Atendimento Presencial e Online Nacional e Internacional."
    },    
    {
      name: "Grazielly Baggenstoss",
      specialty: "Pprofessora Universitária e Escritora",
      city: "Santa Catarina, SC",
      image: imageMap["grazielly-baggenstoss.jpg"] || imageMap["grazielly-baggenstoss.jpeg"] || imageMap["grazielly-baggenstoss.png"],
      bio: "Doutora em Direito, Política e Sociedade - UFSC e Doutora  e em Psicologia Social Crítica - UFSC. Professora da Universidade Federal de Santa Catarina, atuante nas disciplinas de Direitos Humanos, Direitos e Feminismos e Pesquisa (Graduação em Direito) e Estudos de Gênero e Psicologia (Pós Graduação em Psicologia). Coordena o Núcleo de Pesquisas em Direito e Gênero (CNPq/UFSC) . Atua em estudos sobre Estudos de Gênero, Feminismos, Direitos Sexuais e Reprodutivos, Práticas Antidiscriminatórias e Crítica ao Direito. Tem formação em Psicanálise e é membra da ABRAPSO e da ABPP. Membro Associada do Grupo Cresex.",
      instagram: "grazybaggenstoss"
    }, 
    {
      name: "Haíza Ferreira",
      specialty: "Psicóloga Clínica  e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["haiza-ferreira.jpg"] || imageMap["haiza-ferreira.jpeg"] || imageMap["haiza-ferreira.png"] || "",
      bio: "Psicóloga Clínica e Sexóloga (CRP: 04/62270) na Abordagem Gestalt-Terapia. Pós-Graduada em Psicosexologia Clínica pelo Grupo Cresex. Atua como Escritora e Realiza Atendimento Social para Mulheres Pretas. Gestora da Equipe Comercial do Grupo Cresex. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "psihaiza"
    },
    {
      name: "Hedith Santos Souza",
      specialty: "Psicóloga Clínica",
      city: "São José Do Rio Preto, SP",
      image: imageMap["hedith-santos-souza.jpg"] || imageMap["hedith-santos-souza.jpeg"] || imageMap["hedith-santos-souza.png"],
      bio: "Psicóloga Clínica (CRP 06/168082) na Abordagem Fenomenologia Existencial e Humanista. Pós-Graduada em Fenomenologia Existencial e Humanista pelo Instituto Suassuna. Pós-Graduada em Educação Sexual. Pós-Graduada em Psicosexologia Clínica pelo Centro de Referência em Sexualidade. Pós-Graduada em Neurociência do Comportamento com Andrei Mayer. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },
    {
      name: "Irene Sousa",
      specialty: "Psicóloga Clínica e Terapeuta Integrativa",
      city: "Rio De Janeiro, RJ",
      image: imageMap["irene-sousa.jpg"] || imageMap["irene-sousa.jpeg"] || imageMap["irene-sousa.png"] || "",
      bio: "Psicóloga Clínica e Terapeuta Integrativa (CRP 05/358427759) com Foco em Conduzir Mulheres a Sentirem o Próprio Corpo, a Recuperarem Desejo, Autoestima e Voz. Une Sexualidade Humana, Psicologia e Rituais Sensoriais para Transformar Culpa em Potência, Solidão em Conexão e Vida sem Sentido em Prazer de Viver. Membro Associada do Grupo Cresex. Atendimento Presencial.",
      instagram: "irenepsiesexualidade"
    },    
    {
      name: "Isabel Paegle",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Guaruja, SP",
      image: imageMap["isabel-paegle.jpg"] || imageMap["isabel-paegle.jpeg"] || imageMap["isabel-paegle.png"],
      bio: "Psicosexóloga Clínica (CRP 06/49276) e Sexóloga com Especialização em Distúrbios Alimentares e Obesidade. Possui Formação Multiprofissional em Sexologia Clínica e Educacional pela FASEX, com 28 Anos de Experiência em Atendimento na Psicologia Clínica, Distúrbios Alimentares, Obesidade, Bariátrica e Sexualidade, em Equipes Multidisciplinares e Consultório. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "sexualidadenabariatrica"
    },    
    {
      name: "Isabella De Moura",
      specialty: "Fisioterapeuta e Psicanalista Clínica",
      city: "Paracatu, MG",
      image: imageMap["isabella-de-moura.jpg"] || imageMap["isabella-de-moura.jpeg"] || imageMap["isabella-de-moura.png"],
      bio: "Fisioterapeuta e Psicanalista. Especializada no método pompoarismo para potencializar o desempenho sexual feminino. Pós graduada em fisioterapia aplicada à saúde da mulher e do homem. Formação internacional em fisioterapia pélvica. Pós graduada em terapia sexual na saúde e educação.Palestrante e apresentadora. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },
    {
      name: "Janaína Delbão",
      specialty: "Psicóloga Jurídica e Forense",
      city: "Campinas, SP",
      image: imageMap["janaina-cintia.jpg"] || imageMap["janaina-cintia.jpeg"] || imageMap["janaina-cintia.png"],
      bio: "Psicóloga Forense e Jurídica (CRP06/190874) Com abordagem Interseccional atuo com promoção a igualdade de gênero e o fortalecimento de práticas transformadoras em defesa dos direitos das mulheres na sociedade brasileira. Realizo atividades de: Avaliação, Entrevista, Perícia, Formulação de quesitos, Elaboração e Análise de Laudo Pericial, Acompanhamento em audiência, Ações preventivas, Análise de processos, Reuniões de apoio. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "psicojanainadelbao"
    },  
    {
      name: "Juliana De Faveri",
      specialty: "Consultora em saúde",
      city: "Uberlândia, MG",
      image:imageMap["juliana-de-faveri.jpg"] || imageMap["juliana-de-faveri.jpeg"] || imageMap["juliana-de-faveri.png"] || "", 
      bio:"Consultora em Saúde e Sexualidade. Graduada em educação física. Atua como especialista em Gênero e Sexualidade. Estuda sobre vivência da sexualidade da mulher e na Educação sexual de crianças e adolescentes. Membro Associada do Grupo Cresex."
    },    
    {
      name: "Juliana Nascimento Graça",
      specialty: "Sexologa",
      city: "Serra - ES",
      image:imageMap["juliana-nascimento.jpg"] || imageMap["juliana-nascimento.jpeg"] || imageMap["juliana-nascimento.png"] || "", 
      bio:"Administradora, Sexóloga Clínica e Educacional; Consultora em Saúde Educação Sexual; Pós Graduanda em Terapia Sexual na Saúde e na Educação; Terapeuta Cognitiva Sexual; Empreendedora da Juliana Graça Butique Intima.Trabalha com palestras; eventos femininos e cursos presenciais e online; Cursos online disponíveis através das minhas redes sociais; Atendimentos para adulto, casais, com foco principalmente no autoconhecimento feminino, como potencializador de prazer e descoberta da sua sexualidade. Ter prazer e depois proporcionar prazer a parceira se assim desejar. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    }, 
    {
      name: "Juliana Scarpinati",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap["juliana-scarpinati.jpg"] || imageMap["juliana-scarpinati.jpeg"] || imageMap["juliana-scarpinati.png"] || "", 
      bio:"Psicóloga Clínica na Abordagem da TCC (Terapia Cognitivo- Comportamental) e na Terapia do Esquema com foco em com intervenções voltadas ao desenvolvimento emocional e à saúde mental. Especialização em Gestão de Pessoas e em Orientação Educacional.Membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Kenya Borges",
      specialty: "Assistente Social",
      city: "Uberlândia, MG",
      image: imageMap["kenya-aparecida.jpg"] || imageMap["kenya-aparecida.jpeg"] || imageMap["kenya-aparecida.png"],
      bio: "Assistente Social (CRESS MG 6997) Especialista em terapia familiar e Membro do centro de referência em sexualidade; Especialista em Administração em Saúde. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "kenyaaborges"
    },    
    {
      name: "Kerley Cristina Machado",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["kerley-cristina-machado.jpg"] || imageMap["kerley-cristina-machado.jpeg"] || imageMap["kerley-cristina-machado.png"],
      bio: "Formada em Pedagogia. Cursando psicólogia com foco futuro em sexologia. Membro Associada do Grupo Cresex.",
      instagram: "kerley.cris"
    },        
    {
      name: "Leo Strack",
      specialty: "Psicólogo Clínica",
      city: "Porto Alegre - RS",
      image:imageMap["leonardo-strack.jpg"] || imageMap["leonardo-strack.jpeg"] || imageMap["leonardo-strack.png"] || "", 
      bio:"Psicólogo Clínico (CRP 07/35481) e Especialista em Sexologia Clínica. Sócio da SPRGS, atuando como membro no Comitê de Sexualidade e coordenador no Comitê de Terapias Contextuais. Membro d. Especializado no atendimento de saúde mental e saúde sexual masculina. Membro Associado do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "psicologiadacoisa"
    },
    {
      name: "Lourdes Rosa",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["lourdes-rosa.jpg"] || imageMap["lourdes-rosa.jpeg"] || imageMap["lourdes-rosa.png"],
      bio: "Psicóloga clínica especializada em sexologia, terapia sexual e de casais. Pós graduada em psicopedagogia pela Universidade Federal de Uberlândia. Especializada em Terapia e Educação sexual pelo Instituto Casal Tessarioli, em São Paulo, (CEFATEF) e especialista em Sexologia pelo mesmo instituto. Membro do grupo de Estudos em Sexualidade, na terapia cognitiva sexual. Atua na avaliação, diagnóstico e tratamento das disfunções sexuais masculinas, femininas, independente do gênero e orientação sexual.Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "terapeutalourdesrosa" 
    },
    {
      name: "Luciana Albuquerque",
      specialty: "Psicóloga Clínica",
      city: "Brasília, DF",
      image: imageMap["luciana-albuquerque.jpg"] || imageMap["luciana-albuquerque.jpeg"] || imageMap["luciana-albuquerque.png"],
      bio: "Psicóloga Clínica (CRP 01/7885) na Abordagem da Gestalt-terapeuta e terapeuta sistêmica familiar, especialista em Gestão estratégica em organizações públicas.Neuropsicologia e Psicologia Perinatal e da Parentalidade.Responsável técnica na área de Saúde Mental: Pró-Mulher Clínica de Ginecologia, Obstetrícia e Psicologia.Atua na área clínica com atendimento em Saúde mental, Psicologia Perinatal e da Parentalidade (gestante, pré-natal, pós-parto, tentantes e família), Sexualidade e também realizando Avaliação psicológica para cirurgia bariátrica e em planejamento familiar (esterilização vasectomia e laqueadura). Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
    },    
    {   
      name: "Márcia Fialho",
      specialty: "Psicóloga Clínica",
      city: "Salvador, BA",
      image:imageMap ["marcia-fialho.jpg"] || imageMap["marcia-fialho.jpeg"] || imageMap["marcia-fialho.png"] || "", 
      bio: "Psicóloga Clínica na Abordagem da TCC (Terapia Cognitiva Comportamental) e Pedagoga. Pós-Graduação em Terapia Cognitiva, Pós-Graduação em Psicologia Organizacional e Formação em Psicologia Financeira. Pós-Graduanda em Psicosexologia Clínica pelo Centro de Referência em Sexualidade. membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Marcilene Silveira",
      specialty: "Artista Plastica",
      city: "Uberlândia, MG",
      image:imageMap["marcilene-silveira.jpg"] || imageMap["marcilene-silveira.jpeg"] || imageMap["marcilene-silveira.png"] || "", 
      bio:"Artista Plástica, Graduada em Artes Plásticas pela Universidade Federal de Uberlândia (UFU). Atua com Pintura, Desenho, Gravura e Arte Digital. Participa de Exposições Coletivas e Individuais, Presenciais e Virtuais, no Brasil e no Exterior. Desenvolve Projetos Artísticos que Exploraram Temáticas Relacionadas à Sexualidade, Gênero e Identidade. Membro Associada do Grupo Cresex.",
      instagram: "marcilene.silveira.77985"
    },
    {
      name: "Marcio Vinícius Garcia",
      specialty: "Psicólogo Clinico e Sexologo",
      city: "Londrina, PR",
      image: imageMap["marcio-vinicius.jpg"] || imageMap["marcio-vinicius.jpeg"] || imageMap["marcio-vinicius.png"],
      bio: "Psicólogo (CRP: 08/19410), Sexólogo, Terapeuta Sexual e Educador em Sexualidade.. Especialização em Terapia Sexual e Educação em sexualidade. Experiência em ações de Educação Sexual e Prevenção às IST/HIV/aids. Ofereço Terapia Sexual com foco no público masculino, Terapia de Casal e Psicoterapia a partir da Teoria da Subjetividade. Experiência no atendimento de pessoas com vivência do meio liberal/swing e relacionamentos Não Monogâmicos. Não atende crianças e adolescentes. Membro Associado do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "marciogarciapsi"
    },    
    {
      name: "Marcos Martinelle",
      specialty: "Psicólogo Clínico e Sexologo",
      city: "Três Lagoas, MS",
      image: imageMap["marcos-martinelle.jpg"] || imageMap["marcos-martinelle.jpeg"] || imageMap["marcos-martinelle.png"],
      instagram: "marcoscmartinelle",
      bio: "Psicólogo e Sexólogo (CRP14/08530-9) Especialista em Sexualidade Humana (UNIARA) e Psicologia Clínica (UNINTER) Graduado em Gestão de Recursos Humanos e docente no curso de Psicologia. Palestrante, criador de conteúdo no Instagram @marcoscmartinelle Atendimento para adultos, casais e grupos com mulheres"
    },    
    {
      name: "Maria Eliza Miranda",
      specialty: "Estudande de Psicologia",
      city: "Uberlândia, MG",
      image:imageMap["maria-eliza-miranda.jpg"] || imageMap["maria-eliza-miranda.jpeg"] || imageMap["maria-eliza-miranda.png"] || "", 
      bio:"Estudante de Psicologia, Oitavo Período. Interesse em Sexologia e Educação. Pretende partir da abordagem psicanalitica para atuar com adultos e adolescentes.Faz parte do Apoio Administrativo do Grupo Cresex.",
      instagram: "flordeliz__________"
    },
    {
      name: "Marília Souza",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["marilia-souza.jpg"] || imageMap["marilia-souza.jpeg"] || imageMap["marilia-souza.png"],
      bio: "Psicóloga clínica, mestra em Ciências da Saúde, pós-graduada em Docência do Ensino Superior e MBA em Gestão de Pessoas Recebeu uma premiação em Bruxelas com a apresentação do trabalho \"Evaluation of Common Mental Disorders in Leprosy through the “Self Reporting Questionnaire\". Trabalhou com jovens ministrando aulas sobre educação sexual, é consultora em saúde e sexualidade e participa das reuniões da Comissão saúde e sexualidade no Conselho Regional de Psicologia.",
      instagram: "mariliapsicologa"
    },
    {
      name: "Marina Remiggi",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Uberaba, MG",
      image:imageMap["marina-remiggi.jpg"] || imageMap["marina-remiggi.jpeg"] || imageMap["marina-remiggi.png"] || "", 
      bio:"Mãe Atípica, Psicóloga Clínica (CRP 04/23471) e especialista em Sexualidade Humana, com atuação em Sexologia desde 2008. Atua com psicoterapia focada em sexualidade com ênfase em traumas, dores, desconfortos e disfunções sexuais e relacionais, supervisão clínica e educacional, orientação parental e escolar em sexualidade infantojuvenil, além de consultoria em saúde, educação e diversidades sexuais, com ênfase na inclusão de pessoas com deficiência, autismo, da comunidade LGBTQIA+ e de mulheres 40+. É docente pelo CRESEX, coordenadora do AdoleSER®: Orientação e Apoio à sexualidade nas escolas, sexóloga do projeto Acertando o Ritmo com jovens autistas, fundadora do NuSex (Núcleo Especializado em Sexologia) e da Clínica Novo Horizonte Saúde Integrada, cofundadora da ONG Laço Azul de Autismo e membro do CRESEX e do Instituto Ibero-Americano de Sexologia do Brasil."
    }, 
    {
      name: "Marinalva Santana",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap["marinalva-santana.jpg"] || imageMap["marinalva-santana.jpeg"] || imageMap["marinalva-santana.png"] || "", 
      bio:"Marinalva Santana Brito de Melo - Psicóloga – CRP 04/43084- Graduada pelo Centro Universitário do Triângulo (UNITRI, 2014); Pós-graduada em Terapia Familiar e Sexologia pela Faculdade Shalom de Ensino Superior (FASES, 2017); Pós Graduada em Psicodrama pela Faculdade do trabalho (FATRA, 2018); Pós-graduada em Terapia Sistêmica Família e Casal pela Faculdade luterana de Teologia (FLT-2021).Faço parte do corpo docente do CRESEX (Centro de Referência em Sexualidade, SEDE em Uberlândia) do Curso de Pós Graduação em Psicosexologia, com a disciplina Técnicas de Terapia Sistêmica Familiar e Sexual. Atuo na clínica com foco em psicoterapia de casal, familiar e individual. Contato: marinalvapsico@gmail.com  / @marinalvamelopsico."
    },
    {
      name: "Maritza Silva",
      specialty: "Psicóloga Clínica",
      city: "Rio De Janeiro, RJ",
      image:imageMap ["maritza-silva.jpg"] || imageMap["maritza-silva.jpeg"] || imageMap["maritza-silva.png"] || "", 
      bio: "terapeuta de relacionamentos e sexualidade, analista comportamental e educadora. Atua no atendimento individual e de casais, auxiliando na construção de relações mais saudáveis, conscientes e prazerosas. Também atua no desenvolvimento pessoal e profissional por meio do mapeamento comportamental, promovendo autoconhecimento, clareza emocional e mudanças consistentes, com base em práticas fundamentadas cientificamente. Membro Associada do Grupo Cresex. Atendimento Presencial e Online."
    },
    {
      name: "Mateus Balduino",
      specialty: "Psicólogo clinico",
      city: "Uberaba, MG",
      image: imageMap["mateus-balduino.jpg"] || imageMap["mateus-balduino.jpeg"] || imageMap["mateus-balduino.png"] || "",
      bio: "Psicólogo e realizo atendimentos online. Graduado em Psicologia pela Uniube, tenho pós-graduação em Sexologia, Psicodrama, Teologia, Filosofia e Antropologia. Desenvolvi um olhar humano e profundo para acolher dores, desafios e espontaneidade. Tenho experiência com disfunções sexuais, com a comunidade LGBTQIAPN+ e também com relacionamentos não monogâmicos. Meu propósito é simples: ajudar você a viver de forma plena, autêntica e com mais sentido.",
      instagram: "metamultiuniversalista"
    }, 
    {
      name: "Mayara Cardoso",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Catalão, GO",
      image:imageMap["mayara-cardoso.jpg"] || imageMap["mayara-cardoso.jpeg"] || imageMap["mayara-cardoso.png"] || "", 
      bio: "Psicóloga Clínica na abordagem TCC (Terapia Cognitivo-Comportamental), especialista em sexologia e educação sexual. Atua com foco especial em mulheres em menopausa ou pós menopausa; buscando qualidade na saúde emocional, autoestima e sexualidade. Membro Associada do Grupo Cresex. Atendimento 100% online.",
      instagram: "caminhoodacura"
    },    
    {
      name: "Maykon Martins Carvalho",
      specialty: "Psicólogo Clínico",
      city: "Uberlândia, MG",
      image:imageMap["maykon-martins-carvalho.jpg"] || imageMap["maykon-martins-carvalho.jpeg"] || imageMap["maykon-martins-carvalho.png"] || "", 
      bio:"Psicologo cliníco CRP (MG 04/64091)"
    },
    {
      name: "Mayran Araújo",
      specialty: "Psicólogo Clínico",
      city: "Uberlândia, MG",
      image: imageMap["mayran-araujo.jpg"] || imageMap["mayran-araujo.jpeg"] || imageMap["mayran-araujo.png"],
      bio: "Psicólogo com experiência clínica voltada ao cuidado de populações diversas, incluindo pessoas LGBTQIAP+, homens em diferentes fases do ciclo de vida e indivíduos neurodivergentes. Atua com enfoque em *Terapia Cognitivo-Comportamental (TCC), trabalhando crenças centrais de desamor, desvalor e desamparo, além de padrões relacionais repetitivos. Possui trajetória marcada pelo acolhimento de pacientes em situações de trauma, dificuldades de socialização e conflitos familiares, promovendo fortalecimento da autoestima, desenvolvimento de recursos internos e construção de relações mais saudáveis. Atualmente, cursa pós-graduação em **Neuropsicologia e Terapia Cognitivo-Comportamental (TCC)*, ampliando sua formação para integrar avaliação neuropsicológica e intervenções baseadas em evidências. Comprometido com práticas inclusivas e éticas, busca oferecer um espaço seguro de escuta e transformação.",
      instagram: "psimayran"
    },    
    {
      name: "Meg Silva Santos",
      specialty: "Psicóloga Clínica",
      city: "Guarulhos, SP",
      image: imageMap["meg-silva.jpg"] || imageMap["meg-silva.jpeg"] || imageMap["meg-silva.png"],
      bio: "Psicóloga e Sexóloga (CRP 06/187947), com atuação na abordagem Fenomenológica Existencial, pós-graduada em Sexologia e Psicologia Organizacional. Atendo crianças, adolescentes, adultos e casais, com foco em saúde mental, sexualidade, questões de gênero e LGBTQIAPN+. Pesquisadora do trabalho sexual desde 2018. Experiência prévia de 18 anos em RH. Escritora e palestrante, promovo autoconhecimento e construção de sentido.",
      instagram: "psi.megsisant"
    },    
    {
      name: "Miriam Vieira",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["mirian-vieira.jpg"] || imageMap["mirian-vieira.jpeg"] || imageMap["mirian-vieira.png"],
      bio: "Psicóloga Clínica terapeuta de casais. Especialista em Educação Sexual.ós graduada em Psicosexologia. Especialista em Psicodrama Clinico e Pedagógico e Dinâmica de Grupo. specialista em Psicodrama Clinico e Pedagógico e Dinâmica de Grupo; Formação em Terapia Sistêmica e Genosistêmica e formanda em TCS- Terapia Cognitivo Sexual da infância e adolescência. Com capacitação em Avaliação Psicológica para Cirurgia de Laqueadura, Vasectomia e Bariátrica. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "miriamvieirapsico_"
    },   
    {
      name: "Monalise Do Carmo",
      specialty: "Psicóloga Clínica",
      city: "São Paulo, SP",
      image:imageMap ["monalise-do-carmo.jpg"] || imageMap["monalise-do-carmo.jpeg"] || imageMap["monalise-do-carmo.png"] || "", 
      bio: "Membro Associada do Grupo Cresex.",
      instagram: "dra_monalise"
    },
    {
      name: "Nilda Alves",
      specialty: "Psicóloga Clínica E Sexologa",
      city: "Catalão, GO",
      image:imageMap["nilda-alves.jpg"] || imageMap["nilda-alves.jpeg"] || imageMap["nilda-alves.png"] || "", 
      bio:"Psicóloga (CRP 09/6795), Sexóloga Clínica e Psicoterapeuta de Casais Especialista em Psicosexologia e Dependência Quimica. Palestrante e estudiosa em temas de Psicologia, Neuropsicológica, Educação Sexual e Terapia de Casais. Membro Associada do Grupo Cresex. Atendimento Presencial e Online.",
      instagram: "sexologanildaalves"
    }, 
    {
      name: "Nubia Carvalho",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap["nubia-carvalho.jpg"] || imageMap["nubia-carvalho.jpeg"] || imageMap["nubia-carvalho.png"] || "", 
      bio:""
    }, 
    {
      name: "Paulo Roberto",
      specialty: "PsicólogO ClínicO",
      city: "Uberlândia, MG",
      image:imageMap ["paulo-roberto.jpg"] || imageMap["paulo-roberto.jpeg"] || imageMap["paulo-roberto.png"] || "", 
      bio: "PAULERA é psicólogo (CRP-04/70114) e artista. Atende online e presencialmente ao ar livre no Parque do Sabiá em Uberlândia-MG. Tem proximidade com demandas de quem tem vivências alternativas e que flerta com a cultura underground. Utiliza a TCC e a ACT como abordagens"
    },
    {
      name: "Pedro Santos Gosler",
      specialty: "Psicólogo Clínico",
      city: "Uberlândia, MG",
      image: imageMap["pedro-santos.jpg"] || imageMap["pedro-santos.jpeg"] || imageMap["pedro-santos.png"],
      bio: "Graduação pela UFU - 2021. Pós graduando em TCC - Previsão 2026 (Fernanda Landeiro). Formação em TCS - 2025 (Aline Sardinha). Formação em TCC para minorias - 2022(FOCO)."
    },    
    {
      name: "Poliana Luisa",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap ["poliana-luisa.jpg"] || imageMap["poliana-luisa.jpeg"] || imageMap["poliana-luisa.png"] || "", 
      bio: "Psicóloga (CRP 04/29899), Especialista em Psicodrama; Especialista em Educação Sexual; Especialista em Psicosexologia; Pós Graduanda em Terapia Familiar Sistêmica e de Casal; Especialista em Relacionamento de Casal; Psicóloga das Noivas e Noivos; Idealizadora do Projeto Amadurecimento Feminino; Membro Honorária do Centro de Referência em Sexualidade (CRESEX). Atendimento em Psicoterapia com ênfase em Casal, Família e Sexualidade; Desenvolve Treinamentos, Palestras, Workshops e Encontros Vivenciais trabalhando temas atuais em nossa sociedade; Docente em Saúde, Educação Sexual e Sistêmica Familiar e Supervisora com ênfase em Casal, Família e Sexualidade."
    },
    {
      name: "Pollyana Borges",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap ["pollyana-borges.jpg"] || imageMap["pollyana-borges.jpeg"] || imageMap["pollyana-borges.png"] || "", 
      bio: "Membro Associada do Grupo Cresex."
    },
    {
      name: "Regina Araújo",
      specialty: "Psicóloga Clínica",
      city: "São Caetano Do Sul, SP",
      image: imageMap["regina-araujo.jpg"] || imageMap["regina-araujo.jpeg"] || imageMap["regina-araujo.png"],
      bio: "Qualificações: Experiência em organização e Produção de eventos femininos, envolvendo ciclo de palestas e dinâmicas; atuação na área da docência ministrando oficinas de prevenção à violência sexual contra crianças e adolescentes."
    },    
    { 
      name: "Renata Monteiro",
      specialty: "Psicóloga Clínica E Sexologa",
      city: "Uberlândia, MG",
      image:imageMap["renata-monteiro.jpg"] || imageMap["renata-monteiro.jpeg"] || imageMap["renata-monteiro.png"] || "", 
      bio:"Psicóloga perinatal (CRP04/41235). Atuação com mães e famílias vivendo a perinatalidade: pré-natal psicológico, desde o planejamento gestacional, gestação,  acompanhamento no período puerperal (desde o nascimento do bebê até aproximandamente três anos de vida), além de acompanhamento em casos de infertilidade do casal e luto perinatal.  Atendimento acolhedor a famílias LGBTQIA+ Palestrante, atuação com grupos terapêuticos para gestantes e puérperas, supervisora de casos em perinatalidade. Atendimento através da terapia cognitivo comportamental.Especialista em saúde mental perinatal. Pós-graduada em psicologia perinatal e da parentalidade. Aperfeiçoando em psicodiagnóstico. Aprimorando em sexualidade - CRESEX. Atendimento presencial em Uberlândia/MG e on-line para brasileiras em todo o mundo. Atendimento apenas para adultos.",
      instagram: "renatamonteiropsico"
    }, 
    {
      name: "Renata Lanza",
      specialty: "Psicóloga Clínica",
      city: "Belo Horizonte, MG",
      image: imageMap["renata-lanza.jpg"] || imageMap["renata-lanza.jpeg"] || imageMap["renata-lanza.png"],
      bio: "Realizo atendimentos em terapia individual ou terapia de casal, atuando principalmente com demandas de relacionamentos, queixas sexuais, e autoestima feminina. Também atuo com questões relacionadas à monogamia/não monogamia e às várias formas de amar. Atendimentos em português ou em inglês.",
      instagram: "renatalanza.psi"
    },    
    {
      name: "Roberta Resende",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["roberta-resende.jpg"] || imageMap["roberta-resende.jpeg"] || imageMap["roberta-resende.png"],
      bio: "Formada pela Universidade Federal de Uberlândia desde 1994. Especialista em Educação Sexual; Pós graduada em Psicosexologia, Capacitada como terapeuta de relacionamento e casais; Capacitação em Avaliação Psicológica para cirurgia Bariátrica. Atuou como Psicóloga no Projeto Federal Sentinela, com sede em Goiania, com adolescentes grávidas vítimas de abuso sexual. Membro do Centro de Referência em Sexualidade (Cresex)."
    },    
    {
      name: "Rodolfo Horbach",
      specialty: "Fisioterapeuta",
      city: "Ubêrlandia - MG",
      image:imageMap["rodolfo-horbach.jpg"] || imageMap["rodolfo-horbach.jpeg"] || imageMap["rodolfo-horbach.png"] || "", 
      bio:"Fisioterapeuta (Crefito4 304558-F). Osteopatia estrutural IDOT. Treinamento Funcional. Formação em tratamentos da coluna vertebral . Formação Internacional Método Stecco de liberação miofascial.Formação internacional kinesiotape.Membro do Centro de Referência em Sexualidade (CRESEX).Formações em Assoalho Pélvico/ Disfunção sexuais masculinas .Fisioterapia pélvica após câncer de próstata"
    },
    {
      name: "Rodrigo Torres",
      specialty: "Pisicólogo Clínico e Sexologo",
      city: "Belo Horizonte, MG",
      image:imageMap["rodrigo-torres.jpg"] || imageMap["rodrigo-torres.jpeg"] || imageMap["rodrigo-torres.png"] || "", 
      bio:"Psicólogo e Sexólogo (CRP:04/26857).Psicólogo e Sexólogo. Máster em Sexologia Clínica e Saúde Sexual pela Universidade de Barcelona, Espanha, Especialista em Terapia Sexual pela SBRASH. Membro do Conselho Deliberativo e do Conselho Fiscal da SBRASH (2025-2026). Coordenador do Instituto Ibero-americano de Sexologia no Brasil. Ex Secretário Geral da SBRASH (2023-2024). Sub-Delegado Estadual da SBRASH em Minas Gerais. Membro da ISSM (International Society for Sexual Medicine). Membro da ABEMSS (Associação Brasileira de Estudos em Medicina e Saúde Sexual). Membro da ABPBE (Associação Brasileira de Psicologia Baseada em Evidências).Formação em TCS. Certificado em Psicologia Positiva. Formação em Terapia Cognitivo Comportamental e Terapia Breve;."
    }, 
    {
      name: "Sandra Vasconcelos",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["sandra-vasconcelos.jpg"] || imageMap["sandra-vasconcelos.jpeg"] || imageMap["sandra-vasconcelos.png"],
      bio: "Profissional da área de Psicologia Clínica, com vasta experiência em atendimentos individuais, casais e em grupo.Graduada em Psicologia por Centro Universitário do Triângulo, Uberlândia, MG, Brasil e Mestre em psicologia pela Universidade do Minho, Braga, Portugal. Data da conclusão: 07/2016 Pós graduada em Terapia Familiar e Sexologia pela Faculdae Shalom de Ensino Superior. Data da conclusão: 06/2019",
      instagram: "sandramarquesvasconcelos"
    },    
    {
      name: "Sandro Prado",
      specialty: "Biologo e Educador",
      city: "Uberlândia, MG",
      image: imageMap["sandro-prado.jpg"] || imageMap["sandro-prado.jpeg"] || imageMap["sandro-prado.png"],
      bio: "Minha formação em Ciências Biológicas e pós-graduação em Educação me levaram a passear por múltiplos caminhos com a Educação em Biologia. Mas na realidade moro nos domínios dos estudos de gêneros e sexualidade com as filosofias da diferença. Assim, em determinado momento, tais estudos se colocaram em pé de igualdade com a Educação em Biologia, evocando-me para que agenciassem juntos experienciando, com eles, as possibilidades de cartografar miudezas com o pulsar da vida. Por meio desse encontro me interesso pelos espaços de criação de possíveis com a Educação em Biologia, gêneros e sexualidades. Atuo como professor no Instituto de Biologia (INBIO) da Universidade Federal de Uberlândia (UFU). Meu interesse está na possibilidade de pensar a educação e a formação de professores em Ciências/Biologia em sua condição menor: ativando outros modos de percepção, exercícios menores e inventando linguagens que falam no interstício de línguas maiores que engajem os corpos, os gêneros e as sexualidades."
    },      
    {
      name: "Schirley Tavares Oliveira",
      specialty: "Psicóloga Clínica",
      city: "Divinópolis, MG",
      image:imageMap ["schirley-tavares-oliveira.jpg"] || imageMap["schirley-tavares-oliveira.jpeg"] || imageMap["schirley-tavares-oliveira.png"] || "", 
      bio: "Membro Associada Grupo Cresex",
      instagram: "schirleytavarespsi"
    },
    {
      name: "Silvia Silva Lima",
      specialty: "Sexóloga e Terapeuta Tântrica",
      city: "Peixoto De Azevedo, MT",
      image: imageMap["silvia-silva-lima.jpg"] || imageMap["silvia-silva-lima.jpeg"] || imageMap["silvia-silva-lima.png"],
      bio: "Meu nome é Silvia Silva Lima, tenho 45 anos, sou casada e mãe de 2 filhos. Sou formada em Administração de Empresas, pós graduada em Gestão de Pessoas",
      instagram: "silviapsicologapxto"
    },    
    {
      name: "Sônia Domingos",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["sonia-domingos.jpg"] || imageMap["sonia-domingos.jpeg"] || imageMap["sonia-domingos.png"],
      bio: "Psicóloga (CRP 04/66185) Especialista em Psicologia Cognitivo Comportamental Formação em Terapia do Esquema  Neurociência Aplicada à Psicologia.",
      instagram: "soniadomingos.psi"
    },
    {    
      name: "Sônia Trindade",
      specialty: "Terapeura Neo Tântrica Sistêmica",
      city: "Uberlândia, MG",
      image: imageMap["sonia-trindade.jpg"] || imageMap["sonia-trindade.jpeg"] || imageMap["sonia-trindade.png"],
      bio: "Terapeuta neo tântrica sistêmica , com foco em  , disfunções sexuais ,meditações ativas , massagem tântrica  , respiração integrada a terapia .Especialista em saúde intima e bem estar do casal .Educadora Palestrante Vice presidente do Rotary Club Uberlândia Cidade Jardim Coordenadora do grupo PLPs (Promotoras Legais Populares)Membra do colegiado mulheres do brasilMembra do conselho municipal do direito das mulheres (CMDM)Membro do grupo cresex.Membra da comissão de enfrentamento a grupo em vulnerabilidade da OAB Uberlândia",
      instagram: "soniac.t._"
    },    
    {
      name: "Tatiele Gonçalves",
      specialty: "Terapeuta Tântrica e Sexóloga",
      city: "Porto Alegre, RS",
      image: imageMap["tatiele-goncalves.jpg"] || imageMap["tatiele-goncalves.jpeg"] || imageMap["tatiele-goncalves.png"],
      bio: "Sexóloga e terapeuta tântrica. Possuo pós-graduação em Sexologia. Atuo há 4 anos na área, utilizando a massagem tântrica e sensual como tratamento alternativo para transtornos sexuais.."
    },   
    {
      name: "Thalita Cesário",
      specialty: "Psicóloga Clínica e Sexóloga",
      city: "João Pessoa, PB",
      image: imageMap["thalita-cesario.jpg"] || imageMap["thalita-cesario.jpeg"] || imageMap["thalita-cesario.png"],
      bio: "Psicoterapeuta e Sexologa, especialista em sexualidade, especialista em terapia cognitiva sexual, terapeuta e educadora em sexualidade, palestrante, co autora do livro: Psicosexologia do CRESEX, membro CRESEX, supervisora em disfunções sexuais e educação sexual e pós graduanda em Psicosexologia.Atendimentos por video chamada individual e casais.",
      instagram: "athalitacesario"
    },    
    {
      name: "Vanda",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image:imageMap ["vanda.jpg"] || imageMap["vanda.jpeg"] || imageMap["vanda.png"] || "", 
      bio: "Membro Associada do Grupo Cresex."
    },
    {
      name: "Vilma Reiter",
      specialty: "Psicóloga",
      city: "Passo Manso, SC",
      image: imageMap["vilma-reiter.jpg"] || imageMap["vilma-reiter.jpeg"] || imageMap["vilma-reiter.png"],
      bio: "Tenho 49 anos, casa, 1 filho de 25 anos. Iniciei minha trajetória profissional com 17 anos, etrabalhando 13 anos em estritórios de contabilidade. Depois, dediquei 7 anos à área financeira e mais 6 anos ao setor de saúde. Percebi minha participação em atender e ouvir pessoas, o que me motivou a trabalhar com grupo de mulheres. Observando a necessidade de uma escuta profissional, optei pela graduação de Psicologia, onde atualmente decidi me profissionalizar.",
      instagram: "psicologavilma_reiterferreira"
    },    
    {
      name: "Yury Nunes Lima",
      specialty: "Psicólogo Clínico",
      city: "Vitoria Da Conquista, BA",
      image: imageMap["yury-nunes-lima.jpg"] || imageMap["yury-nunes-lima.jpeg"] || imageMap["yury-nunes-lima.png"],
      bio: "Membro Associado do Grupo Cresex.",
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
