import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollRevealCardProps {
  children: ReactNode;
  direction: "left" | "right";
}

export function ScrollRevealCard({ children, direction }: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xRange = direction === "left" ? [-100, 100] : [100, -100];
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [xRange[0], 0, 0, xRange[1]]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
    >
      {children}
    </motion.div>
  );
}
