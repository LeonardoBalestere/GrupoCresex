import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Member } from "./MemberTableRow";

export type MemberFormData = {
  id?: string;
  name?: string;
  specialty?: string;
  city?: string;
  bio?: string;
  instagram?: string;
  image?: string;
  photoFile?: File | null;
  [key: string]: unknown;
};

type MemberFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: MemberFormData) => void | Promise<void>;
  initialData?: Member;
};

export default function MemberFormModal({ isOpen, onClose, onSubmit, initialData }: MemberFormModalProps) {
  const [formData, setFormData] = useState<MemberFormData>({
    id: undefined,
    name: "",
    specialty: "",
    city: "",
    bio: "",
    instagram: "",
    image: "",
    photoFile: null,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setFormData({
      id: initialData?.id,
      name: initialData?.name ? String(initialData.name) : "",
      specialty: initialData?.specialty ? String(initialData.specialty) : "",
      city: initialData?.city ? String(initialData.city) : "",
      bio: initialData?.bio ? String(initialData.bio) : "",
      instagram: initialData?.instagram ? String(initialData.instagram) : "",
      image: initialData?.image ? String(initialData.image) : "",
      photoFile: null,
    });
  }, [initialData, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(formData);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      photoFile: event.target.files?.[0] ?? null,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#fafafa] rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 p-6"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-black">{formData.id ? "Editar membro" : "Novo membro"}</h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-[#c71212]" />
                <p className="mt-2 text-sm text-[#666666]">Preencha os campos do perfil e envie a foto do membro.</p>
              </div>
              <button type="button" onClick={onClose} className="text-sm font-medium text-gray-500 transition hover:text-gray-800">
                Fechar
              </button>
            </div>

            <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="member-name" className="text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              id="member-name"
              value={formData.name ?? ""}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="member-specialty" className="text-sm font-medium text-gray-700">
              Especialidade
            </label>
            <input
              id="member-specialty"
              value={formData.specialty ?? ""}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((current) => ({ ...current, specialty: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="member-city" className="text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              id="member-city"
              value={formData.city ?? ""}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((current) => ({ ...current, city: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="member-bio" className="text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="member-bio"
              rows={4}
              value={formData.bio ?? ""}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFormData((current) => ({ ...current, bio: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="member-instagram" className="text-sm font-medium text-gray-700">
              Instagram
            </label>
            <input
              id="member-instagram"
              value={formData.instagram ?? ""}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((current) => ({ ...current, instagram: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
              placeholder="@usuario"
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="member-photo" className="text-sm font-medium text-gray-700">
              Foto
            </label>
            <input
              id="member-photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-red-700"
            />
            {formData.photoFile && (
              <p className="text-xs text-gray-500">Arquivo selecionado: {formData.photoFile.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancelar
            </button>
            <motion.button
              type="submit"
              whileHover={{ borderColor: "#d4af37" }}
              className="rounded-xl bg-[#c71212] px-4 py-3 font-semibold text-white border-2 border-[#c71212] transition"
            >
              Salvar
            </motion.button>
          </div>
        </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}



