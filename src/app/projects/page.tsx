"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProjects, getCurrentUser, Project } from "@/src/lib/api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [role, setRole] = useState("");
  const [filters, setFilters] = useState({ category: "", minBudget: "", maxBudget: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {

      setLoading(true);

      getCurrentUser()
        .then(u => {
          if (!cancelled) {
            setRole(u.user?.role || "");
          }
        })
        .catch(() => {
          if (!cancelled) {
            setRole("");
          }
        });

      getProjects({
        category: filters.category || undefined,
        minBudget: filters.minBudget ? Number(filters.minBudget) : undefined,
        maxBudget: filters.maxBudget ? Number(filters.maxBudget) : undefined,
      })
        .then(p => {
          if (!cancelled) {
            setProjects(p.projects || []);
          }
        })
        .catch((e: unknown) => {
          if (!cancelled) {
            setErr(e instanceof Error ? e.message : "Failed to load");
            setProjects([]);
          }
        })
        .finally(() => {
          if (!cancelled) {
            setLoading(false);
          }
        });
    };

    loadProjects()

    return () => {
      cancelled = true;
    }
  }, [filters.category, filters.minBudget, filters.maxBudget]);

  return (
    <main className="shell">
      <h1>Browse Projects</h1>
      {role === "freelancer" && <Link href="/proposals/mine" style={{ marginBottom: "1rem", display: "inline-block" }}>My Proposals</Link>}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input placeholder="Category" value={filters.category} onChange={e => setFilters({ ...filters, category: e.target.value })} />
        <input placeholder="Min budget" value={filters.minBudget} onChange={e => setFilters({ ...filters, minBudget: e.target.value })} />
        <input placeholder="Max budget" value={filters.maxBudget} onChange={e => setFilters({ ...filters, maxBudget: e.target.value })} />
      </div>
      {loading ? <p>Loading...</p> : err ? <p style={{ color: "red" }}>{err}</p> : projects.length === 0 ? <p>No open projects found.</p> : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {projects.map(p => (
            <div key={p.id} style={{ border: "1px solid #eee", padding: "1rem", borderRadius: "0.5rem" }}>
              <h3>{p.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#666" }}>{p.category} · ${p.budgetMin}-${p.budgetMax}</p>
              <p style={{ fontSize: "0.8rem" }}>{p.description}</p>
              <p style={{ fontSize: "0.75rem", color: "#888" }}>Client: {p.clientName} · Proposals: {p.proposalCount}</p>
              <Link href={`/projects/${p.id}`}>View Project</Link>
              <span> </span>
              {role === "freelancer" && <Link href={`/projects/${p.id}/proposal`}>Submit Proposal</Link>}
            </div>
          ))}
        </div>
      )}
      {msg && <p>{msg}</p>}
    </main>
  );
}
