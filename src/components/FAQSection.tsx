import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollReveal } from "./ScrollReveal";

export function FAQSection() {
  const faqs = [
    {
      question: "Como me tornar um membro do GRUPO CRESEX?",
      answer: "Para se tornar um membro, você precisa ser um profissional atuante na área da sexualidade. Entre em contato conosco através do WhatsApp ou email e nossa equipe avaliará sua candidatura. O processo inclui análise de formação e experiência profissional."
    },
    {
      question: "Quais são os requisitos para participar?",
      answer: "É necessário ter formação na área de saúde, educação ou áreas afins, com especialização ou atuação comprovada em sexualidade. Valorizamos profissionais comprometidos com a ética, o respeito à diversidade e os direitos sexuais."
    },
    {
      question: "Quais benefícios estão incluídos na associação?",
      answer: "Os membros têm acesso a cursos exclusivos, supervisões, networking com outros profissionais, divulgação em nossos canais, eventos, mentorias, cartão de descontos em serviços parceiros e muito mais."
    },
    {
      question: "Existe alguma taxa de associação?",
      answer: "Sim, trabalhamos com uma taxa anual de associação que garante acesso a todos os benefícios e eventos do ecossistema. O valor é acessível e pode ser parcelado. Entre em contato para saber mais sobre os valores."
    },
    {
      question: "Como funciona a divulgação dos membros?",
      answer: "Todos os membros ativos têm seu perfil divulgado em nosso site e redes sociais. Além disso, promovemos lives, entrevistas e conteúdos que destacam o trabalho de nossos profissionais, aumentando sua visibilidade e autoridade no mercado."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#fafafa] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c71212] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-[#c71212] mx-auto"></div>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-[#f9f9f9] rounded-lg px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-left text-black hover:text-[#c71212] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#333333]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}