import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const handleCTA = () => {
    const contato = document.querySelector("#contato");
    if (contato) {
      contato.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="home" className="pt-20 bg-gradient-to-br from-[#c71212] via-[#e84a4a] to-[#f5f5f5] relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fafafa] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        <motion.div 
          className="flex items-center justify-start"
          style={{ y, opacity }}
        >
          {/* Text Content - Left Aligned and Larger */}
          <div className="text-left max-w-5xl">
            <h1 
              className="text-[#fafafa] mb-8 text-6xl md:text-8xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Bem-vindo ao<br />Ecossistema CRESEX
            </h1>
            <p 
              className="text-[#fafafa]/90 text-3xl md:text-4xl mb-12 max-w-3xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Conecte-se com profissionais da sexualidade e transforme sua carreira
            </p>
            <div className="flex justify-start">
              <motion.button
                onClick={handleCTA}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-[#c71212] text-[#fafafa] px-12 py-6 text-xl rounded-lg shadow-2xl inline-flex items-center justify-center gap-2 border-2 border-[#c71212] overflow-hidden"
                animate={{
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="relative z-10 transition-colors duration-500" style={{ color: isHovered ? '#c71212' : '#fafafa' }}>
                  Solicitar Entrada como Membro
                </span>
                <motion.div 
                  className="absolute inset-0 bg-[#fafafa]"
                  initial={{ x: "100%" }}
                  animate={{ x: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}