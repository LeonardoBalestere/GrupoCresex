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
      name: "Mônica Lima",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["monica1.jpg"] || imageMap["monica1.jpeg"] || imageMap["monica1.png"] || "",
      bio: "Psicóloga Clínica (CRP: 04/1500714) na abordagem da TCS  (Terapia Cognitivo-sexual), Neuropsicosexóloga e Palestrante - Diretora Fundadora do Grupo Cresex. Psicoterapeuta Sexual (casal e individual), Coordenadora da Comissão de Orientação em Psicologia - Saúde e Sexualidade do Conselho Regional de Psicologia Subsede Triângulo. Mentora para Profissionais da área da Saúde e Sexualidade, Palestrante e Escritora. Atendimento 100% online nacional e internacional."
    },
    {
      name: "Rayana Oliveira",
      specialty: "Fisioterapeuta Pélvica e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["rayana-oliveira.png"] || imageMap["rayana-oliveira.jpg"] || "",
      bio: "Fisioterapeuta Pélvica, com foco em disfunções sexuais dolorosas e reabilitação da função sexual. Além disso atua como terapeuta sexual em atendimentos individuais e de casais (LGBTQIAPN+, liberais e comunidade BDSM/fetichistas). Diretora de comunicação e eventos do Grupo Cresex. Atendimento presencial e online."
    },
    {
      name: "Ana Beatriz Romansini",
      specialty: "Médica da Família e Comunidade",
      city: "Santos, SP",
      image:imageMap["ana-beatriz.jpg"] || imageMap["ana-beatriz.jpeg"] || imageMap["ana-beatriz.png"] || "", 
      bio: "Médica da Família e Comunidade (CRM: 206.760 RQE: 115.39). Pós-graduação em Sexualidade Humana pela Faculdade Primum (CBI of Miami) e pós-graduação em Sexologia Clínica. Professora do curso de medicina, atua com enfoque em saúde mental, saúde sexual e cuidados com população LGBTQIAPN+. Membro Associada do Grupo Cresex. Atendimento presencial e por telemedicina."
    }, 
    {
      name: "Débora Carvalho",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["debora-carvalho.jpg"] || imageMap["debora-carvalho.jpeg"] || imageMap["debora-carvalho.png"],
      bio: "Psicóloga Clínica (CRP 04/42242) na abordagem TCC (Terapia Cognitivo-Comportamental). Especialista em Sexualidade Humana; Especialista em Educação. Administradora da Insight Clínica Uberlândia e Insight Clínica Terapias Infantis. Atua como professora e Supervisora clínica. Membro Honorário do Grupo Cresex. Atendimento presencial e online."
    },
    {
      name: "Mayara Cardoso",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Catalão, GO",
      image:imageMap["mayara-cardoso.jpg"] || imageMap["mayara-cardoso.jpeg"] || imageMap["mayara-cardoso.png"] || "", 
      bio: "Psicóloga Clínica ( CRP: ) na abordagem TCC (Terapia Cognitivo-Comportamental), especialista em sexologia e educação sexual. Atua com foco especial em mulheres em menopausa ou pós menopausa; buscando qualidade na saúde emocional, autoestima e sexualidade. Membro Associada do Grupo Cresex. Atendimento 100% online."
    },
    {
      name: "Haíza Ferreira",
      specialty: "Psicóloga Clínica  e Sexologa",
      city: "Uberlândia, MG",
      image: imageMap["haiza-ferreira.jpg"] || imageMap["haiza-ferreira.jpeg"] || imageMap["haiza-ferreira.png"] || "",
      bio: "Psicóloga Clínica e sexologa (CRP:04/62270) na abordagem gestalt-terapia. Pós graduada em psicosexologia clínica pelo Grupo Cresex. Atua como escritora e realiza atendimento social para mulheres pretas. Gestora da equipe comercial do Grupo Cresex. Membro Associada do Grupo Cresex. Atendimento presencial e online"    },
    {
      name: "Cláudia Guerra",
      specialty: "Historiadora e Palestrante",
      city: "Uberlândia, MG",
      image: imageMap["claudia-guerra.jpg"] || imageMap["claudia-guerra.jpeg"] || imageMap["claudia-guerra.png"] || "",  
      bio: "Dra. em História sobre a violência doméstica. Atua como Profa. em graduação e pós: Sociologia, Filosofia, Antropologia, Ciência Politica, Relações Etnico-Raciais,Sexualidades Afetividades, Violência Doméstica e projetos de Extensão e de pesquisa, TCC (Tabalho de conclusão de curso). Atua como ativista no combate da violência contra a mulher e fundadora dos projetos SOS MULHER e NEGUEM (Núcleo de estudo de gênero). Membro honorária do Grupo Cresex. Atendimento como consultoria presencial e online."
    },
    {
      name: "Carolina Pires",
      specialty: "Psicósexologa e palestrante",
      city: "Uberlândia, MG",
      image: imageMap["carolina-pires.jpg"] || imageMap["carolina-pires.jpeg"] || imageMap["carolina-pires.png"] || "",
      bio: "Psicóloga clínica, sexóloga e palestrante (CRP 09/010811) há 07 anos, com atuação voltada para autoestima e sexualidade de mulheres, promovendo escuta acolhedora e transformação pessoal. Especialista em Neuropsicologia, Psicologia Sexual, Terapia Cognitivo-Comportamental e Psicologia Forense e Jurídica. Autora do livro Deixei de ser boazinha e virei poderosa, onde inspira mulheres a se reconectarem com sua força interior e colunista num site de relacionamentos"
    },
    {
      name: "Mateus Balduino",
      specialty: "Psicólogo clinico",
      city: "Uberaba, MG",
      image: imageMap["mateus-balduino.jpg"] || imageMap["mateus-balduino.jpeg"] || imageMap["mateus-balduino.png"] || "",
      bio: "Psicólogo e realizo atendimentos online. Graduado em Psicologia pela Uniube, tenho pós-graduação em Sexologia, Psicodrama, Teologia, Filosofia e Antropologia. Desenvolvi um olhar humano e profundo para acolher dores, desafios e espontaneidade. Tenho experiência com disfunções sexuais, com a comunidade LGBTQIAPN+ e também com relacionamentos não monogâmicos. Meu propósito é simples: ajudar você a viver de forma plena, autêntica e com mais sentido."
    },
    {
      name: "Alinne Costa",
      specialty: "Professora Universitária",
      city: "Uberlândia, MG",
      image: imageMap["alinne-costa.jpg"] || imageMap["alinne-costa.jpeg"] || imageMap["alinne-costa.png"],
      bio: "Mestre em Educação pela Universidade Federal de Uberlândia Especialista em Docência para a Diversidade pela UFU Professora de História, Projeto de Vida e Filosofia na Educação Básica."
    },    
    {
      name: "Ana Paula Martins",
      specialty: "Professora Universitária",
      city: "Uberlândia, MG",
      image: imageMap["ana-paula-martins.jpg"] || imageMap["ana-paula-martins.jpeg"] || imageMap["ana-paula-martins.png"],
      bio: "Docente universitária na área de Psicologia, contribuindo para o ensino de qualidade, orientação acadêmica e desenvolvimento de pesquisas e projetos clínicos e educacionais."
    },    
    {
      name: "Andrea Henar Guillen",
      specialty: "Professora Clínica",
      city: "Uberlândia, MG",
      image: imageMap["andrea-henar.jpg"] || imageMap["andrea-henar.jpeg"] || imageMap["andrea-henar.png"],
      bio: "Formação em Terapia Cognitivo Comportamental e Terapia do Esquema."
    },    
    {
      name: "Bianca Gontijo",
      specialty: "Psicóloga Clínica",
      city: "Uberlândia, MG",
      image: imageMap["bianca-gontijo.jpg"] || imageMap["bianca-gontijo.jpeg"] || imageMap["bianca-gontijo.png"],
      bio: "Experiência com condução de grupos e atuação pela psicodinâmica do trabalho; Experiência com adolescentes institucionalizados do sistema penitenciário de Cuiabá-MT"
    },    
    {
      name: "Carolina Santos",
      specialty: "Terapeuta Sexual",
      city: "Uberlândia, MG",
      image: imageMap["carolina-santos.jpg"] || imageMap["carolina-santos.jpeg"] || imageMap["carolina-santos.png"],
      bio: "Carolina Santos- terapeuta sexual, escritora, poeta, professora de Arte e doula. Atuo no campo da sexualidade humana a partir de uma perspectiva educativa, terapêutica e libertadora, acompanhando pessoas e casais em processos de autoconhecimento, reconexão com o prazer, comunicação íntima, identidade, autoestima e cura de bloqueios emocionais ligados ao corpo e ao desejo."
    },    
    {
      name: "Cleyciane Faria",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["cleyciane-faria.jpg"] || imageMap["cleyciane-faria.jpeg"] || imageMap["cleyciane-faria.png"],
      bio: "Psicóloga e Nutricionista pela UFU, tem mestrado em Psicologia da Saúde (UFU) e é doutoranda em Ciências da Saúde também pela UFU. Tem forte interesse por temáticas interdisciplinares em saúde. É Psicóloga clínica que atua em TCC e é professora universitária há mais de 20 anos em instituições privadas de Uberlândia e região."
    },    
    {
      name: "Erica Santos",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["erica-santos.jpg"] || imageMap["erica-santos.jpeg"] || imageMap["erica-santos.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Fernanda Barros",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["fernanda-barros.jpg"] || imageMap["fernanda-barros.jpeg"] || imageMap["fernanda-barros.png"],
      bio: "Psicóloga, Sexóloga e Terapeuta de Casais, pós-graduada em Terapia Cognitivo-Comportamental (TCC), Educação Sexual e Sexologia, e Terapias Cognitivas e Contextuais para Casais e com formação em Terapia Cognitiva Sexual e Terapia de Casal. Membro da Sociedade Brasileira de Estudos em Sexualidade Humana (SBRASH), do Centro de Referência em Sexualidade (CRESEX) e da Federação Brasileira de Terapias Cognitivas (FBTC)."
    },    
    {
      name: "Giovani Quadros",
      specialty: "Psicólogo",
      city: "Uberlândia, MG",
      image: imageMap["giovani-quadros.jpg"] || imageMap["giovani-quadros.jpeg"] || imageMap["giovani-quadros.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Grazielly Baggenstoss",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["grazielly-baggenstoss.jpg"] || imageMap["grazielly-baggenstoss.jpeg"] || imageMap["grazielly-baggenstoss.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Irene Sousa",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["irene-sousa.jpg"] || imageMap["irene-sousa.jpeg"] || imageMap["irene-sousa.png"],
      bio: "Mulher de 43, psicóloga e terapeuta integrativa. Irene Sousa conduz mulheres 35+ a sentirem o próprio corpo, a recuperarem desejo, autoestima e voz. Une sexualidade humana, psicologia e rituais sensoriais para transformar culpa em potência, solidão em conexão e vida sem sentido em prazer de viver.."
    },    
    {
      name: "Isabel Paegle",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["isabel-paegle.jpg"] || imageMap["isabel-paegle.jpeg"] || imageMap["isabel-paegle.png"],
      bio: "Especialização em Distúrbios Alimentares e Obesidade, Formação Multiprofissional em Sexologia Clínica e Educacional pela FASEX com 28 anos de experiência em atendimento na Psicologia Clínica, Distúrbios Alimentares, Obesidade, Bariátrica e Sexualidade, em equipes multidisciplinares e consultório."
    },    
    {
      name: "Isabela Costa",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["isabela-costa.jpg"] || imageMap["isabela-costa.jpeg"] || imageMap["isabela-costa.png"],
      bio: "Psicóloga (CRP 04/61862), Mestranda em Psicanálise Clínica, Pós Graduada em Psicologia Social, Pós graduada em Psicosexologia; Formação em Educação Sexual e em Sexualidade com Ênfase na Clínica; Palestrante com Foco em Sexualidade; Especialista na Sexualidade de Mulheres Vítimas de Violência; Coordenadora Acadêmica e Administrativa do Centro de Referência em Sexualidade (CRESEX); Vice-presidente do CMDM (Conselho Municipal de Direito das Mulheres); Co-proprietária da Clínica Psiquê."
    },    
    {
      name: "Janaína Delbão",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["janaina-cintia.jpg"] || imageMap["janaina-cintia.jpeg"] || imageMap["janaina-cintia.png"],
      bio: "Com abordagem Interseccional atuo com promoção a igualdade de gênero e o fortalecimento de práticas transformadoras em defesa dos direitos das mulheres na sociedade brasileira. Realizo atividades de: Avaliação, Entrevista, Perícia, Formulação de quesitos, Elaboração e Análise de Laudo Pericial, Acompanhamento em audiência, Ações preventivas, Análise de processos, Reuniões de apoio."
    },    
    {
      name: "Kenya Borges",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["kenya-aparecida.jpg"] || imageMap["kenya-aparecida.jpeg"] || imageMap["kenya-aparecida.png"],
      bio: "Especialista em terapia familiar e Membro do centro de referência em sexualidade; Especialista em Administração em Saúde."
    },    
    {
      name: "Kerley Cristina Machado",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["kerley-cristina-machado.jpg"] || imageMap["kerley-cristina-machado.jpeg"] || imageMap["kerley-cristina-machado.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Lourdes Rosa",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["lourdes-rosa.jpg"] || imageMap["lourdes-rosa.jpeg"] || imageMap["lourdes-rosa.png"],
      bio: "Pós graduada em psicopedagogia pela Universidade Federal de Uberlândia. Especializada em Terapia e Educação sexual pelo Instituto Casal Tessarioli, em São Paulo, (CEFATEF) e especialista em Sexologia pelo mesmo instituto. Membro da Sociedade Brasileira de Estudos em Sexualidade Humana ( SBRASH), do Centro de Referência em Sexualidade (CRESEX) e do grupo de Estudos em Sexualidade, na terapia cognitiva sexual. Psicóloga clínica especializada em sexologia, terapia sexual e de casais. Atua na avaliação, diagnóstico e tratamento das disfunções sexuais masculinas, femininas, independente do gênero e orientação sexual."
    },    
    {
      name: "Marcio Vinícius Garcia",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["marcio-vinicius.jpg"] || imageMap["marcio-vinicius.jpeg"] || imageMap["marcio-vinicius.png"],
      bio: "Psicólogo, Sexólogo, Terapeuta Sexual e Educador em Sexualidade. Especialização em Terapia Sexual e Educação em sexualidade. Experiência em ações de Educação Sexual e Prevenção às IST/HIV/aids. Ofereço Terapia Sexual com foco no público masculino, Terapia de Casal e Psicoterapia a partir da Teoria da Subjetividade. Experiência no atendimento de pessoas com vivência do meio liberal/swing e relacionamentos Não Monogâmicos. Não atende crianças e adolescentes."
    },    
    {
      name: "Marcos Martinelle",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["marcos-martinelle.jpg"] || imageMap["marcos-martinelle.jpeg"] || imageMap["marcos-martinelle.png"],
      bio: "Psicólogo e Sexólogo CRP14/08530-9  Especialista em Sexualidade Humana (UNIARA) e Psicologia Clínica (UNINTER) Graduado em Gestão de Recursos Humanos e docente no curso de Psicologia. Palestrante, criador de conteúdo no Instagram @marcoscmartinelle Atendimento para adultos, casais e grupos com mulheres"
    },    
    {
      name: "Marília Souza",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["mirilia-souza.jpg"] || imageMap["mirilia-souza.jpeg"] || imageMap["mirilia-souza.png"],
      bio: "Psicóloga clínica, mestra em Ciências da Saúde, pós-graduada em Docência do Ensino Superior e MBA em Gestão de Pessoas Recebeu uma premiação em Bruxelas com a apresentação do trabalho \"Evaluation of Common Mental Disorders in Leprosy through the “Self Reporting Questionnaire\". Trabalhou com jovens ministrando aulas sobre educação sexual, é consultora em saúde e sexualidade e participa das reuniões da Comissão saúde e sexualidade no Conselho Regional de Psicologia."
    },    
    {
      name: "Mayran Araújo",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["mayran-araujo.jpg"] || imageMap["mayran-araujo.jpeg"] || imageMap["mayran-araujo.png"],
      bio: "Psicólogo com experiência clínica voltada ao cuidado de populações diversas, incluindo pessoas LGBTQIAP+, homens em diferentes fases do ciclo de vida e indivíduos neurodivergentes. Atua com enfoque em *Terapia Cognitivo-Comportamental (TCC), trabalhando crenças centrais de desamor, desvalor e desamparo, além de padrões relacionais repetitivos. Possui trajetória marcada pelo acolhimento de pacientes em situações de trauma, dificuldades de socialização e conflitos familiares, promovendo fortalecimento da autoestima, desenvolvimento de recursos internos e construção de relações mais saudáveis. Atualmente, cursa pós-graduação em **Neuropsicologia e Terapia Cognitivo-Comportamental (TCC)*, ampliando sua formação para integrar avaliação neuropsicológica e intervenções baseadas em evidências. Comprometido com práticas inclusivas e éticas, busca oferecer um espaço seguro de escuta e transformação."
    },    
    {
      name: "Meg Silva Santos",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["meg-silva.jpg"] || imageMap["meg-silva.jpeg"] || imageMap["meg-silva.png"],
      bio: "Psicóloga e Sexóloga (CRP 06/187947), com atuação na abordagem Fenomenológica Existencial, pós-graduada em Sexologia e Psicologia Organizacional. Atendo crianças, adolescentes, adultos e casais, com foco em saúde mental, sexualidade, questões de gênero e LGBTQIAPN+. Pesquisadora do trabalho sexual desde 2018. Experiência prévia de 18 anos em RH. Escritora e palestrante, promovo autoconhecimento e construção de sentido."
    },    
    {
      name: "Miriam Vieira",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["mirian-vieira.jpg"] || imageMap["mirian-vieira.jpeg"] || imageMap["mirian-vieira.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Pedro Santos Gosler",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["pedro-santos.jpg"] || imageMap["pedro-santos.jpeg"] || imageMap["pedro-santos.png"],
      bio: "Graduação pela UFU - 2021. Pós graduando em TCC - Previsão 2026 (Fernanda Landeiro). Formação em TCS - 2025 (Aline Sardinha). Formação em TCC para minorias - 2022(FOCO)."
    },    
    {
      name: "Regina Araújo",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["regina-araujo.jpg"] || imageMap["regina-araujo.jpeg"] || imageMap["regina-araujo.png"],
      bio: "Qualificações: Experiência em organização e Produção de eventos femininos, envolvendo ciclo de palestas e dinâmicas; atuação na área da docência ministrando oficinas de prevenção à violência sexual contra crianças e adolescentes."
    },    
    {
      name: "Renata Lanza",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["renata-lanza.jpg"] || imageMap["renata-lanza.jpeg"] || imageMap["renata-lanza.png"],
      bio: "Realizo atendimentos em terapia individual ou terapia de casal, atuando principalmente com demandas de relacionamentos, queixas sexuais, e autoestima feminina. Também atuo com questões relacionadas à monogamia/não monogamia e às várias formas de amar. Atendimentos em português ou em inglês."
    },    
    {
      name: "Roberta Resende",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["roberta-resende.jpg"] || imageMap["roberta-resende.jpeg"] || imageMap["roberta-resende.png"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },    
    {
      name: "Sandra Vasconcelos",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["sandra-vasconcelos.jpg"] || imageMap["sandra-vasconcelos.jpeg"] || imageMap["sandra-vasconcelos.png"],
      bio: "Profissional da área de Psicologia Clínica, com vasta experiência em atendimentos individuais, casais e em grupo.Graduada em Psicologia por Centro Universitário do Triângulo, Uberlândia, MG, Brasil e Mestre em psicologia pela Universidade do Minho, Braga, Portugal. Data da conclusão: 07/2016 Pós graduada em Terapia Familiar e Sexologia pela Faculdae Shalom de Ensino Superior. Data da conclusão: 06/2019"
    },    
    {
      name: "Sandro Prado",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["sandro-prado.jpg"] || imageMap["sandro-prado.jpeg"] || imageMap["sandro-prado.png"],
      bio: "Minha formação em Ciências Biológicas e pós-graduação em Educação me levaram a passear por múltiplos caminhos com a Educação em Biologia. Mas na realidade moro nos domínios dos estudos de gêneros e sexualidade com as filosofias da diferença. Assim, em determinado momento, tais estudos se colocaram em pé de igualdade com a Educação em Biologia, evocando-me para que agenciassem juntos experienciando, com eles, as possibilidades de cartografar miudezas com o pulsar da vida. Por meio desse encontro me interesso pelos espaços de criação de possíveis com a Educação em Biologia, gêneros e sexualidades. Atuo como professor no Instituto de Biologia (INBIO) da Universidade Federal de Uberlândia (UFU). Meu interesse está na possibilidade de pensar a educação e a formação de professores em Ciências/Biologia em sua condição menor: ativando outros modos de percepção, exercícios menores e inventando linguagens que falam no interstício de línguas maiores que engajem os corpos, os gêneros e as sexualidades."
    },    
    {
      name: "Sônia Domingos",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["sonia-domingos.jpg"] || imageMap["sonia-domingos.jpeg"] || imageMap["sonia-domingos.png"],
      bio: "Psicóloga - CRP 04/66185 Especialista em Psicologia Cognitivo Comportamental Formação em Terapia do Esquema  Neurociência Aplicada à Psicologia."
    },    
    {
      name: "SÔnia Trindade",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["sonia-trindade.jpg"] || imageMap["sonia-trindade.jpeg"] || imageMap["sonia-trindade.png"],
      bio: "Terapeuta neo tântrica sistêmica , com foco em  , disfunções sexuais ,meditações ativas , massagem tântrica  , respiração integrada a terapia .Especialista em saúde intima e bem estar do casal .Educadora Palestrante Vice presidente do Rotary Club Uberlândia Cidade Jardim Coordenadora do grupo PLPs (Promotoras Legais Populares)Membra do colegiado mulheres do brasilMembra do conselho municipal do direito das mulheres (CMDM)Membro do grupo cresex.Membra da comissão de enfrentamento a grupo em vulnerabilidade da OAB Uberlândia"
    },    
    {
      name: "Tatiele Gonçalves",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["tatiele-gonçalves.jpg"] || imageMap["tatiele-goncalves.jpeg"] || imageMap["tatiele-goncalves.png"],
      bio: "Tenho 43 anos e sou sexóloga e terapeuta tântrica. Possuo pós-graduação em Sexologia. Atuo há 4 anos na área, utilizando a massagem tântrica e sensual como tratamento alternativo para transtornos sexuais.."
    },    
    {
      name: "Vilma Reiter",
      specialty: "Psicóloga",
      city: "Uberlândia, MG",
      image: imageMap["vilma-reiter.jpg"] || imageMap["vilma-reiter.jpeg"] || imageMap["vilma-reiter.png"],
      bio: "Tenho 49 anos, casa, 1 filho de 25 anos. Iniciei minha trajetória profissional com 17 anos, etrabalhando 13 anos em estritórios de contabilidade. Depois, dediquei 7 anos à área financeira e mais 6 anos ao setor de saúde. Percebi minha participação em atender e ouvir pessoas, o que me motivou a trabalhar com grupo de mulheres. Observando a necessidade de uma escuta profissional, optei pela graduação de Psicologia, onde atualmente decidi me profissionalizar."
    },    
    {
      name: "Beatriz Savazzi",
      specialty: "Psicóloga Clínica e Sexologa",
      city: "Santo André, SP",
      image: imageMap["beatriz-savazzi.jpg"] || imageMap["beatriz-savazzi.jpeg"] || imageMap["beatriz-savazzi.png"],
      bio: "Psicóloga clínica (CRP: 06/211301) na abordagem da TCC (Terapia Cognitivo-Comportamental). Atua promovendo uma sexualidade saudável e consciente com foco em mulheres. Membro Associada do Grupo Cresex. Atendimento presencial e online."
    },    
    {
      name: "Maria Eliza Miranda",
      specialty: "Estudante de Psicologia",
      city: "Uberlândia, MG",
      image: imageMap["vilma-reiter.jpg"] || imageMap["vilma-reiter.jpeg"] || imageMap["vilma-reiter.png"],
      bio: "Linda e bela"
    },    
    {
      name: "Maria Eliza Miranda",
      specialty: "Estudante de Psicologia",
      city: "Uberlândia, MG",
      image: imageMap["vilma-reiter.jpg"] || imageMap["vilma-reiter.jpeg"] || imageMap["vilma-reiter.png"],
      bio: "Linda e bela"
    },    
    {
      name: "Maria Eliza Miranda",
      specialty: "Estudante de Psicologia",
      city: "Uberlândia, MG",
      image: imageMap["vilma-reiter.jpg"] || imageMap["vilma-reiter.jpeg"] || imageMap["vilma-reiter.png"],
      bio: "Linda e bela"
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
                          // onClick={() => handleWhatsAppClick(member.phone, member.name)}
                          onClick={() => handleWhatsAppClick('553491494154', member.name)}
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
