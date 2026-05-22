import { Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export type Member = {
  id: string;
  name?: string | null;
  specialty?: string | null;
  city?: string | null;
  image?: string | null;
  active?: boolean | null;
  created_at?: string | null;
  [key: string]: unknown;
};

type MemberTableRowProps = {
  member: Member;
  onEdit: (member: Member) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string, next: boolean) => void;
};

function getInitials(name?: string | null) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function MemberTableRow({ member, onEdit, onDelete, onToggle }: MemberTableRowProps) {
  const isActive = Boolean(member.active);
  const initials = getInitials(member.name);

  return (
    <tr className="border-b border-gray-200 last:border-b-0 bg-white transition hover:bg-gray-50">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-semibold text-gray-500">
            {member.image ? (
              <img src={member.image} alt={member.name || "Foto do membro"} className="h-full w-full object-cover" />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{member.name || "Sem nome"}</p>
            <p className="text-sm text-gray-500">{member.specialty || "Especialidade não informada"}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-600">{member.city || "—"}</td>
      <td className="px-4 py-3">
        <StatusBadge isActive={isActive} />
      </td>
      <td className="px-4 py-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onToggle(member.id, !isActive)}
            aria-label={isActive ? "Desativar membro" : "Ativar membro"}
            title={isActive ? "Desativar" : "Ativar"}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            {isActive ? <ToggleLeft size={16} /> : <ToggleRight size={16} />}
          </button>
          <button
            type="button"
            onClick={() => onEdit(member)}
            aria-label="Editar membro"
            title="Editar"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-gray-700 transition hover:border-red-300 hover:text-red-700"
          >
            <Pencil size={16} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(member.id)}
            aria-label="Excluir membro"
            title="Excluir"
            className="inline-flex items-center justify-center rounded-lg border border-red-200 px-3 py-2 text-red-700 transition hover:bg-red-50"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

