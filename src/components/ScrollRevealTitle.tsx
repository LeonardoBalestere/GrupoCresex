import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollRevealTitleProps {
  children: ReactNode;
}

export function ScrollRevealTitle({ children }: ScrollRevealTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Quando desce: aparece de cima (y: -100 -> 0), desaparece para baixo (0 -> 100)
  // Quando sobe: aparece de baixo (y: 100 -> 0), desaparece para cima (0 -> -100)
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
}
