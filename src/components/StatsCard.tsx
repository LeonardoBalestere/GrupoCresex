import type { ReactNode } from "react";
import { Card } from "./ui/card";
import Flex from "./ui/Flex";
import Text from "./ui/Text";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
};

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
      <Card className="p-6 w-full">
        <Flex justify="between" align="start" className="w-full">
          {/* Lado esquerdo: Título e Número Gigante */}
          <Flex direction="col" gap={2} align="start">
            <Text
                variant="label"
                className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold"
            >
              {title}
            </Text>
            <Text
                as="span"
                className="text-4xl md:text-5xl font-bold text-black leading-none"
            >
              {value}
            </Text>
          </Flex>

          {/* Lado direito: Ícone com Gradiente */}
          <Flex
              align="center"
              justify="center"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37] flex-shrink-0 text-white shadow-md"
          >
            {icon}
          </Flex>
        </Flex>
      </Card>
  );
}