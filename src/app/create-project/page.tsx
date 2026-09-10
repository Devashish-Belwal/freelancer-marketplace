"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
  const [form, setForm] = useState({ title: "", description: "", category: "", budgetMin: 100, budgetMax: 500, deadline: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16) });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then(r => r.json())
      .then(d => {
        if (d.user?.role !== "client") {
          router.replace("/projects");
          return;
        }
      });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = { ...form, budgetMin: Number(form.budgetMin), budgetMax: Number(form.budgetMax), deadline: new Date(form.deadline).toISOString() };
    if (body.budgetMin <= 0 || body.budgetMax < body.budgetMin || !body.deadline || new Date(body.deadline).getTime() <= Date.now()) {
      setMsg("Invalid: budgetMin > 0, budgetMax >= min, deadline in future."); return;
    }
    setLoading(true);
    const res = await fetch("/api/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), credentials: "include" });
    const d = await res.json();
    setLoading(false);
    if (!res.ok) { setMsg(d.message || d.error || "Failed"); return; }
    setMsg("Project created! " + (d.project?.title || ""));
    if (d.project?.id) router.push(`/projects/${d.project.id}`);
  }

  return (
    <main className="shell"><h1>Create Project</h1>
      <form onSubmit={submit} style={{ display: "grid", gap: "0.75rem" }}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
        <input type="number" placeholder="Min Budget" value={form.budgetMin} onChange={e => setForm({ ...form, budgetMin: Number(e.target.value) })} />
        <input type="number" placeholder="Max Budget" value={form.budgetMax} onChange={e => setForm({ ...form, budgetMax: Number(e.target.value) })} />
        <input type="datetime-local" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} />
        <button disabled={loading}>{loading ? "Creating..." : "Create"}</button>
      </form>
      <p>{msg}</p>
    </main>
  );
}
