import { type ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (error) {
        setHasSession(false);
        setIsCheckingSession(false);
        return;
      }

      setHasSession(Boolean(data.session));
      setIsCheckingSession(false);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) {
        return;
      }

      const isAuthenticated = Boolean(session);
      setHasSession(isAuthenticated);
      setIsCheckingSession(false);

      if (event === "SIGNED_OUT" || !isAuthenticated) {
        navigate("/login", { replace: true });
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (isCheckingSession) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm text-gray-600 shadow-sm">
          Verificando autenticação...
        </div>
      </div>
    );
  }

  if (!hasSession) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

