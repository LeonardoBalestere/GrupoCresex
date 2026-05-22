import type { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
};

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#c71212] to-[#d4af37] text-white">
          {icon}
        </div>
      </div>
    </div>
  );
}

