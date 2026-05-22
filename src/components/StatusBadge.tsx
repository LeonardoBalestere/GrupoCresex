type StatusBadgeProps = {
  isActive: boolean;
};

export default function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        isActive
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {isActive ? "Ativo" : "Inativo"}
    </span>
  );
}

export { StatusBadge };



