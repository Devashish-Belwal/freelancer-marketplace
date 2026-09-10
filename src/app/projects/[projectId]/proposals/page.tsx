"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { Contract } from "@/src/lib/api";

type ProjectProposal = {
  proposalId: string;
  freelancerId: string;
  freelancerName: string;
  coverLetter: string;
  proposedPrice: number;
  estimatedDuration: number;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
};

export default function ProjectProposalsPage() {
  const params = useParams();
  const pid = params.projectId as string;
  const router = useRouter();

  const [items, setItems] = useState<ProjectProposal[]>([]);
  const [msg, setMsg] = useState("");
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { credentials: "include" })
      .then(r => r.json())
      .then(d => {
        if (cancelled) return;
        if (d.user?.role !== "client") {
          router.replace("/projects" + (pid ? `/${pid}` : ""));
          return;
        }
        setLoading(true); setError("");
        fetch(`/api/projects/${pid}/proposals`, { credentials: "include" })
          .then(r => { if (!r.ok) throw new Error("Failed"); return r.json(); })
          .then(data => { if (!cancelled) { setItems(data.proposals || []); setLoading(false); } })
          .catch(() => { if (!cancelled) { setError("Failed to load proposals."); setLoading(false); } });
      });
    return () => { cancelled = true; };
  }, [pid, router]);

  async function hire(proposalId: string) {
    const res = await fetch(`/api/proposals/${proposalId}/accept`, { method: "PUT", credentials: "include" });
    const d = await res.json();
    if (!res.ok) { setMsg(d.message || d.error || "Failed to hire freelancer"); return; }
    if (d.contract) {
      setContract({
        ...d.contract,
        projectTitle: d.project?.title || "",
        clientName: "You",
        freelancerName: items.find(p => p.proposalId === proposalId)?.freelancerName || ""
      });
    }
    setItems(prev => prev.map(p => ({ ...p, status: p.proposalId === proposalId ? "accepted" : p.status === "pending" ? "rejected" : p.status })));
    setMsg(d.message || d.error || "Done");
  }

  return (
    <main className="shell"><h1>Proposals for Project</h1>
      {loading ? <p>Loading proposals...</p> : error ? <p style={{ color: "red" }}>{error}</p> : items.length === 0 ? <p>No proposals yet.</p> : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {items.map(p => (
            <div key={p.proposalId} style={{ border: "1px solid #eee", padding: "1rem", borderRadius: "0.5rem" }}>
              <p><strong>{p.freelancerName}</strong> · ${p.proposedPrice}</p>
              <p>Duration: {p.estimatedDuration} days · Status: {p.status}</p>
              <p style={{ fontSize: "0.85rem" }}>Submitted: {p.createdAt ? new Date(p.createdAt).toLocaleString() : "N/A"}</p>
              <p>{p.coverLetter}</p>
              {p.status === "pending" ? <button onClick={() => hire(p.proposalId)}>Hire (Create Contract)</button> : <span>Processed ({p.status})</span>}
            </div>
          ))}
        </div>
      )}
      {contract && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "2px solid green", borderRadius: "0.5rem" }}>
          <h3>Contract Created</h3>
          <p>Project: {contract.projectTitle}</p>
          <p>Freelancer: {contract.freelancerName}</p>
          <p>Client: {contract.clientName}</p>
          <p>Amount: ${contract.amount}</p>
          <p>Status: {contract.status}</p>
        </div>
      )}
      <p>{msg}</p>
    </main>
  );
}
