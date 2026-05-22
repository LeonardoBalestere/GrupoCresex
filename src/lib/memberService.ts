import { supabase } from "./supabaseClient";
import type { Member } from "../components/MemberTableRow";

export type MemberPayload = Partial<Member> & Record<string, unknown>;

async function handleResponse<T>(promise: PromiseLike<{ data: T | null; error: { message: string } | null }>) {
  const { data, error } = await promise;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

const memberService = {
  async fetchMembers(): Promise<Member[]> {
    const data = await handleResponse(
      supabase.from("members").select("*")
    );

    return Array.isArray(data) ? (data as Member[]) : [];
  },

  async createMember(payload: MemberPayload): Promise<Member> {
    const data = await handleResponse(
      supabase.from("members").insert(payload).select("*").single()
    );

    return data as Member;
  },

  async updateMember(id: string, payload: MemberPayload): Promise<Member> {
    const data = await handleResponse(
      supabase.from("members").update(payload).eq("id", id).select("*").single()
    );

    return data as Member;
  },
};

export default memberService;


