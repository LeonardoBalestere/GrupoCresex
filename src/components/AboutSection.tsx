import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-br from-[#f9f9f9] via-[#fafafa] to-[#f9f9f9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1760597371592-09e901b7317d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzYyMjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-black mb-6">Sobre o CRESEX</h2>
              <div className="w-24 h-1 bg-[#c71212] mb-6"></div>
              <p className="text-[#333333] text-lg leading-relaxed mb-6">
                Somos um <strong>ecossistema colaborativo</strong> que conecta profissionais da sexualidade, promovendo a troca de saberes, apoio mútuo e ações integradas voltadas à educação em sexualidade, à promoção dos direitos sexuais, à valorização da diversidade e ao combate às violências.
              </p>
              <p className="text-[#333333] text-lg leading-relaxed mb-6">
                Nossa missão é fortalecer a atuação profissional através de uma rede de apoio qualificada, proporcionando crescimento contínuo e visibilidade para nossos membros.
              </p>
              <div className="flex flex-wrap gap-4">
                <ScrollReveal delay={0.2}>
                  <div className="flex-1 min-w-[150px] bg-[#fafafa] p-4 rounded-lg shadow-sm border-l-4 border-[#c71212]">
                    <div className="text-3xl text-[#c71212] mb-2">500+</div>
                    <div className="text-[#333333]">Profissionais</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <div className="flex-1 min-w-[150px] bg-[#fafafa] p-4 rounded-lg shadow-sm border-l-4 border-[#d4af37]">
                    <div className="text-3xl text-[#d4af37] mb-2">100+</div>
                    <div className="text-[#333333]">Eventos Realizados</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjM2NDYxODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Equipe CRESEX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c71212] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#d4af37] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}