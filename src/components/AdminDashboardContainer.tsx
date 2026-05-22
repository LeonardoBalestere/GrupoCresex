import { useEffect, useState } from 'react';
import AdminDashboardView from './AdminDashboardView';
import MemberFormModal, { type MemberFormData } from './MemberFormModal';
import type { Member } from './MemberTableRow';
import { createMember, deleteMember, fetchMembers, updateMember } from '../services/memberService';

type FormValues = Omit<MemberFormData, 'photoFile'>;

export default function AdminDashboardContainer() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);

  const loadMembers = async () => {
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchMembers();
      setMembers(data);
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadMembers();
  }, []);

  const handleAddClick = () => {
    setMemberToEdit(null);
    setIsModalOpen(true);
    setError('');
  };

  const handleEditClick = (member: Member) => {
    setMemberToEdit(member);
    setIsModalOpen(true);
    setError('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMemberToEdit(null);
  };

  const handleCreate = async (data: FormValues, file?: File | null) => {
    setError('');

    try {
      await createMember(data, file ?? undefined);
      await loadMembers();
      handleCloseModal();
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  };

  const handleUpdate = async (id: string, data: FormValues, file?: File | null) => {
    setError('');

    try {
      await updateMember(id, data, file ?? undefined);
      await loadMembers();
      handleCloseModal();
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  };

  const handleDelete = async (id: string) => {
    setError('');

    try {
      await deleteMember(id);
      await loadMembers();
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  };

  const handleToggleStatus = async (id: string) => {
    setError('');

    try {
      const currentMember = members.find((member) => member.id === id);
      if (!currentMember) {
        throw new Error('Member not found');
      }

      const nextIsActive = !Boolean(currentMember.active);
      await updateMember(id, { ...currentMember, active: nextIsActive });
      await loadMembers();
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  };

  const handleSubmit = async (payload: MemberFormData) => {
    const { photoFile, id, ...data } = payload;

    if (id) {
      await handleUpdate(id, data, photoFile ?? undefined);
      return;
    }

    await handleCreate(data, photoFile ?? undefined);
  };

  return (
    <>
      <AdminDashboardView
        members={members}
        isLoading={isLoading}
        error={error || null}
        onAddClick={handleAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDelete}
        onToggleStatus={handleToggleStatus}
      />

      <MemberFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={memberToEdit ?? undefined}
      />
    </>
  );
}


