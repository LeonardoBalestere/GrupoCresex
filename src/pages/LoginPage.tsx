import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkExistingSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (data.session) {
        navigate("/admin", { replace: true });
      }
    };

    checkExistingSession();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSubmitting(false);

    if (error) {
      const isInvalidCredentials =
        error.message.toLowerCase().includes("invalid") ||
        error.message.toLowerCase().includes("credential");

      setErrorMessage(
        isInvalidCredentials
          ? "E-mail ou senha inválidos. Verifique seus dados e tente novamente."
          : error.message,
      );
      return;
    }

    navigate("/admin", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#333333] to-black flex items-center justify-center relative overflow-hidden px-4 py-12">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c71212] blur-3xl opacity-10" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#d4af37] blur-3xl opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#fafafa] p-8 rounded-xl shadow-[0_25px_50px_rgba(199,18,18,0.15)] max-w-md w-full relative z-10"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c71212]">Área restrita</p>
          <h1 className="mt-2 text-3xl font-bold text-black">Entrar no painel</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#c71212]" />
          <p className="mt-4 text-sm text-[#666666]">Use seu e-mail e senha cadastrados no Supabase.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-black">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              autoComplete="email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-[#c71212] focus:ring-2 focus:ring-red-200"
              placeholder="voce@exemplo.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-black">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-[#c71212] focus:ring-2 focus:ring-red-200"
              placeholder="Sua senha"
            />
          </div>

          {errorMessage && (
            <div
              role="alert"
              aria-live="polite"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, borderColor: "#d4af37", boxShadow: "0 10px 30px rgba(199, 18, 18, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#c71212] text-[#fafafa] px-8 py-4 rounded-lg border-2 border-[#c71212] font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Entrando..." : "Acessar painel"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

