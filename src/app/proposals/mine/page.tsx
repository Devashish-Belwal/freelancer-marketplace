"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMyProposals, Proposal } from "@/src/lib/api";

export default function MyProposalsPage() {
  const [items, setItems] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then(r => r.json())
      .then(d => {
        if (d.user?.role !== "freelancer") {
          router.replace("/projects");
          return;
        }
        return getMyProposals();
      })
      .then(d => {
        if (!d) return;
        setItems(d.proposals || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load proposals.");
        setLoading(false);
      });
  }, [router]);

  return (
    <main className="shell"><h1>My Proposals</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : loading ? <p>Loading...</p> : items.length === 0 ? <p>No proposals submitted.</p> : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {items.map(p => (
            <div key={p.id} style={{ border: "1px solid #eee", padding: "1rem", borderRadius: "0.5rem" }}>
              <p><strong>Project:</strong> {p.projectTitle || p.projectId}</p>
              <p>Price: ${p.proposedPrice} · Duration: {p.estimatedDuration} days</p>
              <p>Status: {p.status}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
