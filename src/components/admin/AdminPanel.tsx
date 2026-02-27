import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMeRequest, logoutRequest, type AdminSession } from "@/services/auth";

export function AdminPanel() {
  const navigate = useNavigate();
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const currentSession = await getMeRequest();
        setSession(currentSession);
      } catch {
        navigate("/admin/login");
      } finally {
        setIsLoading(false);
      }
    }

    void loadSession();
  }, [navigate]);

  async function handleLogout() {
    await logoutRequest();
    navigate("/admin/login");
  }

  if (isLoading) {
    return <main className="flex min-h-screen items-center justify-center bg-background text-foreground">Carregando painel...</main>;
  }

  if (!session) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto max-w-4xl rounded-xl border border-border/60 bg-card p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Painel Administrativo</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sessão autenticada como {session.username}.</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
          >
            Sair
          </button>
        </div>

        <div className="mt-8 rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
          Área preparada para cadastrar e administrar os conteúdos do site.
        </div>
      </section>
    </main>
  );
}
