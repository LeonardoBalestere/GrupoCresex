import { supabase } from "../lib/supabaseClient";
import type { Member } from "../components/MemberTableRow";

export type MemberData = Record<string, unknown> & {
  image?: string;
};

async function ensureNoError<T>(promise: PromiseLike<{ data: T | null; error: { message: string } | null }>) {
  const { data, error } = await promise;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function fetchMembers(): Promise<Member[]> {
  const data = await ensureNoError(
    supabase.from("members").select("*").order("created_at", { ascending: false })
  );

  return Array.isArray(data) ? (data as Member[]) : [];
}

export async function uploadPhoto(file: File): Promise<string> {
  const fileName = `${crypto.randomUUID()}-${file.name}`;
  const { error: uploadError } = await supabase.storage.from("member-photos").upload(fileName, file);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage.from("member-photos").getPublicUrl(fileName);
  return data.publicUrl;
}

export async function createMember(data: MemberData, photoFile?: File): Promise<Member> {
  const payload: MemberData = { ...data };

  if (photoFile) {
    payload.image = await uploadPhoto(photoFile);
  }

  const created = await ensureNoError(
    supabase.from("members").insert([payload]).select("*").single()
  );

  return created as Member;
}

export async function updateMember(id: string, data: MemberData, photoFile?: File): Promise<Member> {
  const payload: MemberData = { ...data };

  if (photoFile) {
    payload.image = await uploadPhoto(photoFile);
  }

  const updated = await ensureNoError(
    supabase.from("members").update(payload).eq("id", id).select("*").single()
  );

  return updated as Member;
}

export async function toggleMemberStatus(id: string, nextIsActive: boolean): Promise<void> {
  // Se for ativado, remove o deleted_at. Se for desativado, preenche com a data atual.
  const payload = {
    active: nextIsActive,
    deleted_at: nextIsActive ? null : new Date().toISOString()
  };

  const { error } = await supabase
      .from("members")
      .update(payload)
      .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

const memberService = {
  fetchMembers,
  uploadPhoto,
  createMember,
  updateMember,
};

export default memberService;

