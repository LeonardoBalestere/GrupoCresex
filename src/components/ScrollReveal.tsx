import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const directionConfig = {
    up: { property: 'y', range: [100, -100] },
    down: { property: 'y', range: [-100, 100] },
    left: { property: 'x', range: [100, -100] },
    right: { property: 'x', range: [-100, 100] },
  };

  const config = directionConfig[direction];
  const transform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [config.range[0], 0, 0, config.range[1]]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const animationProps = config.property === 'y' 
    ? { y: transform, opacity } 
    : { x: transform, opacity };

  return (
    <motion.div
      ref={ref}
      style={animationProps}
    >
      {children}
    </motion.div>
  );
}