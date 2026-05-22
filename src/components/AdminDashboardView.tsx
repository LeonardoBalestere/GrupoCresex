import { motion } from "framer-motion";
import { Image, Plus, UserCheck, Users } from "lucide-react";
import type { Member } from "./MemberTableRow";
import MemberTableRow from "./MemberTableRow";
import { StatsCard } from "./StatsCard";
import { Container } from "./layout/container";
import Flex from "./ui/Flex";
import Text from "./ui/Text";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type AdminDashboardViewProps = {
  members: Member[];
  isLoading: boolean;
  error: string | null;
  onAddClick: () => void;
  onEditClick: (member: Member) => void;
  onToggleStatus: (id: string, next: boolean) => void;
};

export default function AdminDashboardView({
  members,
  isLoading,
  error,
  onAddClick,
  onEditClick,
  onToggleStatus,
}: AdminDashboardViewProps) {
  const activeMembers = members.filter((member) => Boolean(member.active)).length;
  const membersWithPhotos = members.filter((member) => Boolean(member.image)).length;

  return (
    <Flex direction="col" align="center" justify="start" className="min-h-screen bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] pt-20 px-4 py-10 w-full overflow-hidden">
      <Container className="overflow-hidden w-full">
        <Flex direction="col" gap={6} className="w-full">
          {/* Header Card */}
          <Card className="w-full p-6 md:p-8">
            <Flex direction="col" gap={6} align="start" justify="between" className="w-full md:flex-row md:items-center md:justify-between">
              <Flex direction="col" gap={3} className="w-full">
                <Text variant="label" className="text-[#c71212]">Painel administrativo</Text>
                <Text as="h1" variant="h2" className="text-black">Membros cadastrados</Text>
                <div className="h-1 w-16 rounded-full bg-[#c71212]" />
                <Text variant="body" className="text-sm text-[#666666]">Gerencie os registros protegidos por RLS no Supabase.</Text>
              </Flex>

              <motion.div
                whileHover={{ scale: 1.05, borderColor: "#d4af37", boxShadow: "0 10px 20px rgba(199, 18, 18, 0.3)" }}
                className="w-full md:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onAddClick}
                  className="w-full md:w-auto gap-2"
                >
                  <Plus size={18} />
                  Novo membro
                </Button>
              </motion.div>
            </Flex>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            <StatsCard title="Total de membros" value={members.length} icon={<Users size={22} />} />
            <StatsCard title="Membros ativos" value={activeMembers} icon={<UserCheck size={22} />} />
            <StatsCard title="Com foto" value={membersWithPhotos} icon={<Image size={22} />} />
          </div>

          {/* Error Alert */}
          {error && (
            <div className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3" role="alert">
              <Text variant="body" className="text-sm text-red-700">{error}</Text>
            </div>
          )}

          {/* Members Table Card */}
          <Card className="w-full overflow-hidden">
            {isLoading ? (
              <Flex align="center" justify="center" className="w-full px-6 py-12">
                <Text variant="body" className="text-sm text-gray-500">Carregando membros...</Text>
              </Flex>
            ) : members.length === 0 ? (
              <Flex align="center" justify="center" className="w-full px-6 py-12">
                <Text variant="body" className="text-sm text-gray-500">Nenhum membro encontrado.</Text>
              </Flex>
            ) : (
              <div className="overflow-x-auto w-full">
                <table className="min-w-full divide-y divide-gray-200 w-full">
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
                          onToggle={onToggleStatus}
                      />
                  ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </Flex>
      </Container>
    </Flex>
  );
}