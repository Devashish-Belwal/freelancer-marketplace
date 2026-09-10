"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Project } from "@/src/lib/api";

export default function DashboardPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loadDashboard = () => {
      setLoading(true);
      fetch("/api/auth/me", { credentials: "include" })
        .then(r => r.json())
        .then(d => {
          const r = d.user?.role || "";
          if (r !== "client") {
            router.replace("/projects");
            setLoading(false);
            return;
          }
          setRole(r);
          return fetch("/api/projects/mine", { credentials: "include" })
            .then(res => { if (!res.ok) throw new Error("Failed"); return res.json(); })
            .then(data => { setItems(data.projects || []); setLoading(false); })
            .catch(() => { setLoading(false); setError("Failed to load projects."); });
        })
        .catch(() => { setLoading(false); setError("Failed to load projects."); });
    }

    loadDashboard()

  }, [router]);

  return (
    <main className="shell"><h1>Client Dashboard — My Projects</h1>
      {role === "client" && <Link href="/create-project"><button>Create New Project</button></Link>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? <p>Loading...</p> : items.length === 0 ? <p>No projects yet.</p> : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {items.map(p => (
            <div key={p.id} style={{ border: "1px solid #ddd", padding: "1rem" }}>
              <h3>{p.title}</h3>
              <p>Status: {p.status} · Proposals: {p.proposalCount}</p>
              <Link href={`/projects/${p.id}/proposals`}><button>View Proposals</button></Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
