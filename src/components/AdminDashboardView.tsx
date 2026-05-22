import { motion } from "framer-motion";
import { Image, Plus, UserCheck, Users } from "lucide-react";
import type { Member } from "./MemberTableRow";
import MemberTableRow from "./MemberTableRow";
import { StatsCard } from "./StatsCard";

type AdminDashboardViewProps = {
  members: Member[];
  isLoading: boolean;
  error: string | null;
  onAddClick: () => void;
  onEditClick: (member: Member) => void;
  onDeleteClick: (id: string) => void;
  onToggleStatus: (id: string, next: boolean) => void;
};

export default function AdminDashboardView({
  members,
  isLoading,
  error,
  onAddClick,
  onEditClick,
  onDeleteClick,
  onToggleStatus,
}: AdminDashboardViewProps) {
  const activeMembers = members.filter((member) => Boolean(member.active)).length;
  const membersWithPhotos = members.filter((member) => Boolean(member.image)).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] pt-20 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c71212]">Painel administrativo</p>
            <h1 className="mt-2 text-3xl font-medium text-black">Membros cadastrados</h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#c71212]" />
            <p className="mt-4 text-sm text-[#666666]">Gerencie os registros protegidos por RLS no Supabase.</p>
          </div>

          <motion.button
            type="button"
            onClick={onAddClick}
            whileHover={{ scale: 1.05, borderColor: "#d4af37", boxShadow: "0 10px 20px rgba(199, 18, 18, 0.3)" }}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#c71212] bg-[#c71212] px-6 py-3 font-semibold text-[#fafafa] transition"
          >
            <Plus size={18} />
            Novo membro
          </motion.button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard title="Total de membros" value={members.length} icon={<Users size={22} />} />
          <StatsCard title="Membros ativos" value={activeMembers} icon={<UserCheck size={22} />} />
          <StatsCard title="Com foto" value={membersWithPhotos} icon={<Image size={22} />} />
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100">
          {isLoading ? (
            <div className="px-6 py-12 text-center text-sm text-gray-500">Carregando membros...</div>
          ) : members.length === 0 ? (
            <div className="px-6 py-12 text-center text-sm text-gray-500">Nenhum membro encontrado.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-[#333333] to-black text-[#fafafa]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#fafafa]">Membro</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#fafafa]">Cidade</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#fafafa]">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#fafafa]">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {members.map((member) => (
                    <MemberTableRow
                      key={member.id}
                      member={member}
                      onEdit={onEditClick}
                      onDelete={onDeleteClick}
                      onToggle={onToggleStatus}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


