"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProject, getCurrentUser } from "@/src/lib/api";
import type { Project } from "@/src/lib/api";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [p, setP] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!projectId) return;
    getProject(projectId as string).then(d => { setP(d.project); setLoading(false); }).catch(() => setLoading(false));
    getCurrentUser().then(u => setRole(u.user?.role || "")).catch(() => setRole(""));
  }, [projectId]);

  return (
    <main className="shell"><h1>Project Details</h1>
      {loading ? <p>Loading...</p> : !p ? <p>Not found or no access.</p> : (
        <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "0.5rem" }}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <p>Category: {p.category} · Budget: ${p.budgetMin}-${p.budgetMax}</p>
          <p>Status: {p.status} · Client: {p.clientName}</p>
          <p>Deadline: {p.deadline ? new Date(p.deadline).toLocaleString() : "N/A"}</p>
          <p>Proposals: {p.proposalCount}</p>
          {role === "client" && <Link href={`/projects/${projectId}/proposals`}>View Proposals</Link>}
          {role === "freelancer" && <Link href={`/projects/${projectId}/proposal`} style={{ marginLeft: "0.5rem" }}>Submit Proposal</Link>}
        </div>
      )}
    </main>
  );
}
