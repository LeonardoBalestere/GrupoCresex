import { type ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Flex from "./ui/Flex";
import Text from "./ui/Text";
import { Card } from "./ui/card";

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
      <Flex align="center" justify="center" className="min-h-[60vh] w-full px-4">
        <Card className="w-full max-w-sm">
          <Text variant="body" className="text-gray-600">
            Verificando autenticação...
          </Text>
        </Card>
      </Flex>
    );
  }

  if (!hasSession) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

